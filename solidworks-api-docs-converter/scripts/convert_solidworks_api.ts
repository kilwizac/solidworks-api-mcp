#!/usr/bin/env bun
// @ts-nocheck

import fs from "node:fs";
import fsp from "node:fs/promises";
import path from "node:path";

import { load, type CheerioAPI } from "cheerio";
import minimist from "minimist";

const SYSTEM_TYPE_MAP: Record<string, string> = {
  string: "String",
  object: "Object",
  bool: "Boolean",
  boolean: "Boolean",
  int: "Int32",
  int32: "Int32",
  int16: "Int16",
  int64: "Int64",
  short: "Int16",
  long: "Int64",
  double: "Double",
  float: "Single",
  single: "Single",
  decimal: "Decimal",
  void: "Void",
};

const STOPWORDS = new Set([
  "method",
  "property",
  "interface",
  "event",
  "enum",
  "class",
  "and",
  "or",
  "the",
  "of",
  "in",
  "to",
  "for",
  "with",
  "a",
  "an",
  "is",
  "on",
  "by",
  "from",
  "as",
  "this",
  "that",
  "these",
  "those",
  "be",
  "into",
  "at",
  "if",
  "then",
  "else",
  "get",
  "set",
  "gets",
  "sets",
  "system",
]);

const SYSTEM_TYPE_RE = /system\.([a-z0-9_]+)$/i;
const SIGNATURE_RE = /(.+?)\s+([A-Za-z_][A-Za-z0-9_]*)\s*\((.*)\)/;
const RELATED_LINK_RE =
  /SolidWorks\.Interop\.sldworks~SolidWorks\.Interop\.sldworks\.([^.~]+)(?:~([^.~]+))?/;
const SLDWORKS_MEMBER_FILE_RE =
  /SolidWorks\.Interop\.sldworks~SolidWorks\.Interop\.sldworks\.([^.~]+)~([^.~]+)\.html$/;
const SLDWORKS_INTERFACE_FILE_RE =
  /SolidWorks\.Interop\.sldworks~SolidWorks\.Interop\.sldworks\.([^.~]+)\.html$/;
const SWCONST_ENUM_FILE_RE =
  /SolidWorks\.Interop\.swconst~SolidWorks\.Interop\.swconst\.([^.~]+)\.html$/;
const ENUM_ROW_VALUE_RE = /^(-?\d+)\s*(.*)$/;
const HTML_EXTENSIONS = [".html", ".htm"];

interface HtmlEntry {
  name: string;
  lower_name: string;
  path: string;
}

interface HtmlManifest {
  root_dir: string;
  entries: HtmlEntry[];
  file_index: Record<string, string>;
}

function _cache_key(inputPath?: string | null): string {
  if (!inputPath) {
    return "";
  }
  return path.resolve(inputPath).toLowerCase();
}

function safeIsFile(filePath: string): boolean {
  try {
    return fs.statSync(filePath).isFile();
  } catch {
    return false;
  }
}

function scan_html_manifest(root_dir?: string | null): HtmlManifest {
  const entries: HtmlEntry[] = [];
  const file_index: Record<string, string> = {};
  const normalizedRoot = root_dir ?? "";

  if (!normalizedRoot || !fs.existsSync(normalizedRoot)) {
    return { root_dir: normalizedRoot, entries, file_index };
  }

  const stack = [normalizedRoot];
  while (stack.length > 0) {
    const dir = stack.pop()!;
    let children: fs.Dirent[] = [];
    try {
      children = fs.readdirSync(dir, { withFileTypes: true });
    } catch {
      continue;
    }

    for (const child of children) {
      const fullPath = path.join(dir, child.name);
      if (child.isDirectory()) {
        stack.push(fullPath);
        continue;
      }

      const lower_name = child.name.toLowerCase();
      if (!HTML_EXTENSIONS.some((ext) => lower_name.endsWith(ext))) {
        continue;
      }

      entries.push({
        name: child.name,
        lower_name,
        path: fullPath,
      });

      if (!(lower_name in file_index)) {
        file_index[lower_name] = fullPath;
      }
    }
  }

  return { root_dir: normalizedRoot, entries, file_index };
}

class ConversionStage {
  private readonly _manifest_cache = new Map<string, HtmlManifest>();
  private readonly _soup_cache = new Map<string, CheerioAPI>();

  get_manifest(root_dir?: string | null): HtmlManifest {
    const key = _cache_key(root_dir);
    const cached = this._manifest_cache.get(key);
    if (cached) {
      return cached;
    }
    const manifest = scan_html_manifest(root_dir);
    this._manifest_cache.set(key, manifest);
    return manifest;
  }

  get_file_index(root_dir?: string | null): Record<string, string> {
    return { ...this.get_manifest(root_dir).file_index };
  }

  get_soup(filePath: string): CheerioAPI {
    const key = _cache_key(filePath);
    const cached = this._soup_cache.get(key);
    if (cached) {
      return cached;
    }
    const soup = load(read_file(filePath));
    this._soup_cache.set(key, soup);
    return soup;
  }
}

function read_file(filePath: string): string {
  try {
    return fs.readFileSync(filePath, "utf8");
  } catch {
    return "";
  }
}

function load_soup(filePath: string): CheerioAPI {
  return load(read_file(filePath));
}

function load_soup_with_stage(filePath: string, stage?: ConversionStage | null): CheerioAPI {
  if (stage) {
    return stage.get_soup(filePath);
  }
  return load_soup(filePath);
}

function get_html_manifest(root_dir?: string | null, stage?: ConversionStage | null): HtmlManifest {
  if (stage) {
    return stage.get_manifest(root_dir);
  }
  return scan_html_manifest(root_dir);
}

function clean_text(text?: string | null): string {
  if (!text) {
    return "";
  }
  return text.replace(/\u00a0/g, " ").replace(/\s+/g, " ").trim();
}

function normalize_type(type_name?: string | null): string {
  if (!type_name) {
    return type_name ?? "";
  }
  const match = type_name.trim().match(SYSTEM_TYPE_RE);
  if (match) {
    const raw = (match[1] ?? "").toLowerCase();
    const mapped = SYSTEM_TYPE_MAP[raw] ?? `${raw.slice(0, 1).toUpperCase()}${raw.slice(1)}`;
    return `System.${mapped}`;
  }
  return type_name;
}

function normalize_signature(sig_text?: string | null): string {
  if (!sig_text) {
    return sig_text ?? "";
  }
  let normalized = sig_text;
  for (const [raw, mapped] of Object.entries(SYSTEM_TYPE_MAP)) {
    normalized = normalized.replace(new RegExp(`System\\.${raw}\\b`, "gi"), `System.${mapped}`);
  }
  return normalized;
}

function node_text_with_newlines($: CheerioAPI, element: any): string {
  if (!element) {
    return "";
  }
  const clone = $(element).clone();
  clone.find("br").replaceWith("\n");
  return clone.text();
}

function text_block($: CheerioAPI, element: any): string {
  if (!element) {
    return "";
  }
  let text = node_text_with_newlines($, element);
  text = text.replace(/\u00a0/g, " ");
  text = text.replace(/\r/g, "");
  text = text.replace(/\n{3,}/g, "\n\n");
  text = text
    .split("\n")
    .map((line) => line.trim())
    .join("\n")
    .trim();
  return text;
}

function meta_content($: CheerioAPI, name: string): string {
  const content = $(`meta[name="${name}"]`).first().attr("content");
  return content ? content.trim() : "";
}

function meta_keywords($: CheerioAPI): string[] {
  const keywords: string[] = [];
  $("meta[name='Microsoft.Help.Keywords']").each((_, elem) => {
    const content = $(elem).attr("content");
    if (content) {
      keywords.push(content.trim());
    }
  });
  return keywords;
}

function split_identifier(value?: string | null): string[] {
  if (!value) {
    return [];
  }
  let text = value.replace(/_/g, " ");
  text = text.replace(/([a-z0-9])([A-Z])/g, "$1 $2");
  text = text.replace(/([A-Z]+)([A-Z][a-z])/g, "$1 $2");
  return text
    .split(/\s+/)
    .map((token) => token.trim().toLowerCase())
    .filter((token) => token.length > 1);
}

function normalize_keywords(items: Array<unknown>): string[] {
  const results: string[] = [];
  const seen = new Set<string>();

  const add = (token?: string | null): void => {
    if (!token) {
      return;
    }
    const normalized = token.trim().toLowerCase();
    if (normalized.length < 2 || STOPWORDS.has(normalized)) {
      return;
    }
    if (seen.has(normalized)) {
      return;
    }
    seen.add(normalized);
    results.push(normalized);
  };

  for (const item of items) {
    if (!item) {
      continue;
    }
    const text = String(item);
    const parts = text.split(/[;,]/g);
    for (const partRaw of parts) {
      const part = partRaw.trim();
      if (!part) {
        continue;
      }
      const tokens = part.split(/[^A-Za-z0-9_]+/g);
      if (tokens.length > 1) {
        for (const token of tokens) {
          add(token);
        }
      } else {
        add(part);
      }
    }
  }

  return results;
}

function infer_categories(
  interface_name?: string | null,
  member_name?: string | null,
  category_map?: Record<string, string[]>,
): string[] {
  const categories = new Set<string>();
  if (interface_name && category_map && category_map[interface_name]) {
    for (const category of category_map[interface_name]) {
      categories.add(category);
    }
  }

  if (interface_name && (interface_name === "ISldWorks" || interface_name === "IModelDoc2")) {
    categories.add("core");
    categories.add("documents");
  }

  const text = [interface_name, member_name].filter(Boolean).join(" ");
  const rules: Array<[string, string]> = [
    ["Assembly", "assemblies"],
    ["Drawing", "drawings"],
    ["Part", "parts"],
    ["Sketch", "sketches"],
    ["Feature", "features"],
    ["Selection", "selections"],
    ["Select", "selections"],
    ["Dimension", "dimensions"],
    ["Annotation", "dimensions"],
    ["Body", "geometry"],
    ["Face", "geometry"],
    ["Edge", "geometry"],
    ["Vertex", "geometry"],
    ["File", "file-io"],
    ["Save", "file-io"],
    ["Open", "file-io"],
    ["Import", "file-io"],
    ["Export", "file-io"],
    ["View", "ui"],
    ["User", "ui"],
    ["Command", "ui"],
  ];

  for (const [token, category] of rules) {
    if (text.includes(token)) {
      categories.add(category);
    }
  }

  if (categories.size === 0) {
    categories.add("documents");
  }

  return [...categories].sort();
}

function parse_signature(
  sig_text?: string | null,
): [string | null, string | null, Array<{ name: string; type: string }>] {
  const sig = normalize_signature((sig_text ?? "").split(/\s+/).filter(Boolean).join(" "));
  if (!sig) {
    return [null, null, []];
  }

  if (!sig.includes("(") && sig.includes("{")) {
    const before = sig.split("{")[0]?.trim() ?? "";
    const parts = before.split(/\s+/).filter(Boolean);
    if (parts.length >= 2) {
      return [normalize_type(parts[0]), parts[1], []];
    }
    return [null, null, []];
  }

  const match = sig.match(SIGNATURE_RE);
  if (!match) {
    return [null, null, []];
  }

  const return_type = normalize_type((match[1] ?? "").trim());
  const name = (match[2] ?? "").trim();
  const params_raw = (match[3] ?? "").trim();
  const params: Array<{ name: string; type: string }> = [];

  if (params_raw) {
    for (const rawPart of params_raw.split(",")) {
      let raw = rawPart.trim();
      if (!raw) {
        continue;
      }
      raw = raw.replace(/^(ref|out|in)\s+/i, "");
      const parts = raw.split(/\s+/).filter(Boolean);
      let param_name = "";
      let param_type = "unknown";
      if (parts.length >= 2) {
        param_name = parts[parts.length - 1] ?? "";
        param_type = parts.slice(0, -1).join(" ");
      } else {
        param_name = parts[0] ?? "";
      }
      params.push({ name: param_name, type: normalize_type(param_type) });
    }
  }

  return [return_type, name, params];
}

function extract_heading_content($: CheerioAPI, section: any, heading_text: string): string {
  if (!section || section.length === 0) {
    return "";
  }

  const headings = section.find("h4, h3, h2").toArray();
  for (const heading of headings) {
    const headingLabel = clean_text($(heading).text());
    if (headingLabel.toLowerCase() !== heading_text.toLowerCase()) {
      continue;
    }

    const chunks: string[] = [];
    let cursor = $(heading).next();
    while (cursor.length > 0) {
      const tagName = (cursor.get(0) as any)?.tagName?.toLowerCase?.() ?? "";
      if (tagName === "h4" || tagName === "h3" || tagName === "h2") {
        break;
      }
      const chunk = text_block($, cursor.get(0));
      if (chunk) {
        chunks.push(chunk);
      }
      cursor = cursor.next();
    }

    return clean_text(chunks.filter(Boolean).join("\n"));
  }

  return "";
}

function extract_parameters($: CheerioAPI, section: any): Record<string, string> {
  const params: Record<string, string> = {};
  if (!section || section.length === 0) {
    return params;
  }

  const dl = section.find("dl").first();
  if (!dl.length) {
    return params;
  }

  const names = dl.find("dt").toArray().map((elem) => clean_text($(elem).text()));
  const descs = dl.find("dd").toArray().map((elem) => clean_text($(elem).text()));

  const count = Math.min(names.length, descs.length);
  for (let i = 0; i < count; i += 1) {
    const name = names[i] ?? "";
    if (name) {
      params[name] = descs[i] ?? "";
    }
  }

  return params;
}

function extract_related($: CheerioAPI): string[] {
  const section = $("#i-seealso-section-content").first();
  if (!section.length) {
    return [];
  }

  const related: string[] = [];
  section.find("a").each((_, link) => {
    const href = $(link).attr("href") ?? "";
    const text = clean_text($(link).text());

    if (href.includes("ms-xhelp://") && href.includes("id=")) {
      const target = href.split("id=").at(-1) ?? "";
      const match = target.match(RELATED_LINK_RE);
      if (match) {
        const iface = match[1] ?? "";
        const member = match[2] ?? "";
        if (member) {
          related.push(`${iface}.${member}`);
        } else if (iface) {
          related.push(iface);
        }
        return;
      }
    }

    if (text) {
      related.push(text);
    }
  });

  const filtered = related.filter((item) => {
    const lowered = item.toLowerCase();
    return ![
      "_members",
      "_methods",
      "_properties",
      "_events",
    ].some((suffix) => lowered.endsWith(suffix));
  });

  return [...new Set(filtered)].sort();
}

function build_file_index(root_dir?: string | null, stage?: ConversionStage | null): Record<string, string> {
  return { ...get_html_manifest(root_dir, stage).file_index };
}

function detect_language_from_text(text?: string | null): string {
  if (!text) {
    return "";
  }
  const lowered = text.toLowerCase();
  if (lowered.includes("c#") || lowered.includes("csharp") || lowered.includes("c sharp")) {
    return "csharp";
  }
  if (
    lowered.includes("vb.net") ||
    lowered.includes("vbnet") ||
    lowered.includes("vba") ||
    lowered.includes("visual basic")
  ) {
    return "vb";
  }
  if (lowered.includes("c++") || lowered.includes("cplus") || lowered.includes("cpp")) {
    return "cpp";
  }
  return "";
}

function detect_language_from_name(name?: string | null): string {
  if (!name) {
    return "";
  }
  const lowered = name.toLowerCase();
  if (lowered.includes("csharp") || lowered.includes("c#") || /(^|[^a-z])cs([^a-z]|$)/.test(lowered)) {
    return "csharp";
  }
  if (
    lowered.includes("vbnet") ||
    lowered.includes("vb.net") ||
    lowered.includes("vba") ||
    /(^|[^a-z])vb([^a-z]|$)/.test(lowered)
  ) {
    return "vb";
  }
  if (lowered.includes("cplus") || lowered.includes("c++") || lowered.includes("cpp")) {
    return "cpp";
  }
  return detect_language_from_text(name);
}

function detect_language($: CheerioAPI, elem: any, fallback_name = "", fallback_text = ""): string {
  const hints: string[] = [];
  const chain = [elem, ...$(elem).parents().toArray()];
  for (const node of chain) {
    if (!node) {
      continue;
    }
    hints.push($(node).attr("id") ?? "");
    const classAttr = $(node).attr("class");
    hints.push(classAttr ? String(classAttr) : "");
  }
  const hint_text = hints.join(" ").toLowerCase();

  if (/\b(cs|csharp)\b/.test(hint_text)) {
    return "csharp";
  }
  if (/\b(vb|vbnet|vba)\b/.test(hint_text)) {
    return "vb";
  }
  if (/\b(cpp|c\+\+|cpp2005)\b/.test(hint_text)) {
    return "cpp";
  }

  return detect_language_from_name(fallback_name) || detect_language_from_text(fallback_text);
}

function extract_code_blocks($: CheerioAPI, filename = ""): Array<{ language: string; code: string }> {
  const blocks: Array<{ language: string; code: string }> = [];
  const title_text = clean_text($("title").first().text());
  const header_text = clean_text($("h1").first().text());
  const fallback_text = [title_text, header_text].filter(Boolean).join(" ");

  $("pre").each((_, pre) => {
    const code = $(pre).text().replace(/\r/g, "").trim();
    if (!code) {
      return;
    }
    const language = detect_language($, pre, filename, fallback_text);
    blocks.push({ language, code });
  });

  if (blocks.length > 0) {
    return blocks;
  }

  const code_lines: string[] = [];
  $("p").each((_, para) => {
    const classAttr = String($(para).attr("class") ?? "").toLowerCase();
    if (!/apicode/i.test(classAttr)) {
      return;
    }
    const raw = $(para)
      .text()
      .replace(/\u00a0/g, " ")
      .replace(/\r/g, "")
      .replace(/\n/g, " ");
    const leading = raw.length - raw.trimStart().length;
    const body = raw.trimStart().replace(/\s+/g, " ").trimEnd();
    code_lines.push(`${" ".repeat(leading)}${body}`);
  });

  if (code_lines.length > 0) {
    const language = detect_language_from_name(filename) || detect_language_from_text(fallback_text);
    blocks.push({
      language,
      code: code_lines.join("\n").trim(),
    });
  }

  return blocks;
}

function resolve_example_path(
  href: string | undefined,
  file_index: Record<string, string>,
  docset_root: string,
  examples_index?: Record<string, string>,
  examples_root?: string,
): string | null {
  if (!href) {
    return null;
  }

  const normalized = href.split("#")[0]?.split("?")[0] ?? "";
  if (normalized.startsWith("ms-")) {
    return null;
  }

  let candidate = path.join(docset_root, normalized);
  if (safeIsFile(candidate)) {
    return candidate;
  }

  const key = path.basename(normalized).toLowerCase();
  if (key in file_index) {
    return file_index[key] ?? null;
  }

  if (examples_index && key in examples_index) {
    return examples_index[key] ?? null;
  }

  if (examples_root) {
    candidate = path.join(examples_root, normalized);
    if (safeIsFile(candidate)) {
      return candidate;
    }
  }

  return null;
}

function extract_examples(
  $: CheerioAPI,
  file_index: Record<string, string>,
  docset_root: string,
  examples_index?: Record<string, string>,
  examples_root?: string,
  stage?: ConversionStage,
): Array<{ title: string; href?: string; code_blocks: Array<{ language: string; code: string }> }> {
  const section = $("#i-example-section-content").first();
  if (!section.length) {
    return [];
  }

  const examples: Array<{ title: string; href?: string; code_blocks: Array<{ language: string; code: string }> }> = [];

  section.find("a").each((_, link) => {
    const text = clean_text($(link).text());
    const href = $(link).attr("href");
    let code_blocks: Array<{ language: string; code: string }> = [];

    const example_path = resolve_example_path(href, file_index, docset_root, examples_index, examples_root);
    if (example_path && safeIsFile(example_path)) {
      const exampleSoup = load_soup_with_stage(example_path, stage);
      code_blocks = extract_code_blocks(exampleSoup, path.basename(example_path));
    }

    if (text) {
      examples.push({
        title: text,
        href,
        code_blocks,
      });
    }
  });

  return examples;
}

function load_functional_categories(
  docset_root: string,
  stage?: ConversionStage,
): [Record<string, string[]>, Record<string, string[]>] {
  const filePath = path.join(docset_root, "FunctionalCategories-sldworksapi.html");
  if (!safeIsFile(filePath)) {
    return [{}, {}];
  }

  const category_map: Record<string, string[]> = {};
  const heading_map: Record<string, string[]> = {};
  const $ = load_soup_with_stage(filePath, stage);

  $("h4").each((_, heading) => {
    const heading_text = clean_text($(heading).text());
    const label = heading_text.toLowerCase().replace("interfaces", "").trim();

    let categories = ["documents"];
    if (label.includes("application")) {
      categories = ["core", "ui"];
    } else if (label.includes("annotation")) {
      categories = ["dimensions"];
    } else if (label.includes("assembly")) {
      categories = ["assemblies"];
    } else if (label.includes("drawing")) {
      categories = ["drawings"];
    } else if (label.includes("configuration")) {
      categories = ["documents"];
    } else if (label.includes("enumeration")) {
      categories = ["core"];
    } else if (label.includes("feature")) {
      categories = ["features"];
    } else if (label.includes("model")) {
      categories = ["documents"];
    } else if (label.includes("motion")) {
      categories = ["documents"];
    } else if (label.includes("sketch")) {
      categories = ["sketches"];
    } else if (label.includes("utility")) {
      categories = ["documents"];
    } else if (label.includes("user-interface") || label.includes("user interface")) {
      categories = ["ui"];
    } else if (label.includes("custom")) {
      categories = ["documents"];
    }

    let cursor = $(heading).next();
    while (cursor.length > 0) {
      const tagName = (cursor.get(0) as any)?.tagName?.toLowerCase?.() ?? "";
      if (tagName === "h4") {
        break;
      }
      if (tagName === "ul") {
        cursor.find("a").each((__, link) => {
          const interface_name = clean_text($(link).text());
          if (!interface_name.startsWith("I")) {
            return;
          }
          category_map[interface_name] = [...categories];
          if (!heading_map[heading_text]) {
            heading_map[heading_text] = [];
          }
          heading_map[heading_text].push(interface_name);
        });
      }
      cursor = cursor.next();
    }
  });

  return [category_map, heading_map];
}

function build_keywords(
  interface_name: string | null,
  member_name: string | null,
  meta_kw: string[],
  params: Array<{ name?: string; type?: string }>,
  returns_text: string,
  example_titles?: string[],
): string[] {
  const keywords: Array<string> = [];
  keywords.push(...meta_kw);

  if (interface_name) {
    keywords.push(interface_name);
    keywords.push(...split_identifier(interface_name));
  }

  if (member_name) {
    keywords.push(member_name);
    keywords.push(...split_identifier(member_name));
  }

  for (const param of params) {
    keywords.push(...split_identifier(param.name));
    keywords.push(...split_identifier(param.type));
  }

  keywords.push(...split_identifier(returns_text));
  if (example_titles) {
    keywords.push(...example_titles);
  }

  return normalize_keywords(keywords);
}

async function write_markdown(filePath: string, content: string): Promise<void> {
  await fsp.mkdir(path.dirname(filePath), { recursive: true });
  await fsp.writeFile(filePath, content, "utf8");
}

async function write_json(filePath: string, data: unknown): Promise<void> {
  await fsp.mkdir(path.dirname(filePath), { recursive: true });
  await fsp.writeFile(filePath, `${JSON.stringify(data, null, 2)}\n`, "utf8");
}

async function write_pattern(
  filePath: string,
  title: string,
  body_lines: string[],
  keywords: string[],
  categories: string[],
  json_path?: string,
): Promise<void> {
  const frontmatter = {
    type: "pattern",
    title,
    keywords,
    categories,
    related: [],
  };

  const sections = [format_frontmatter(frontmatter), "", `# ${title}`, "", ...body_lines];
  await write_markdown(filePath, sections.join("\n"));

  if (json_path) {
    await write_json(json_path, {
      frontmatter,
      title,
      body: body_lines,
    });
  }
}

function format_value(value: unknown): string {
  if (value === null || value === undefined) {
    return "null";
  }
  if (typeof value === "boolean") {
    return value ? "true" : "false";
  }
  return String(value);
}

function format_frontmatter(data: Record<string, unknown>): string {
  const lines: string[] = ["---"];
  for (const [key, value] of Object.entries(data)) {
    if (Array.isArray(value)) {
      if (value.length === 0) {
        lines.push(`${key}: []`);
        continue;
      }
      lines.push(`${key}:`);
      for (const item of value) {
        if (item && typeof item === "object" && !Array.isArray(item)) {
          lines.push("  -");
          for (const [sub_key, sub_value] of Object.entries(item as Record<string, unknown>)) {
            lines.push(`    ${sub_key}: ${format_value(sub_value)}`);
          }
        } else {
          lines.push(`  - ${format_value(item)}`);
        }
      }
      continue;
    }

    lines.push(`${key}: ${format_value(value)}`);
  }
  lines.push("---");
  return lines.join("\n");
}

async function convert_sldworks(
  docset_root: string,
  output_root: string,
  docset_name: string,
  examples_root?: string,
  json_root?: string,
  stage?: ConversionStage,
): Promise<[Record<string, any>, Array<Record<string, any>>]> {
  const member_files: Array<[string, string, string]> = [];
  const interface_files: Array<[string, string]> = [];
  const example_index: Record<string, string[]> = {};

  const [category_map, heading_map] = load_functional_categories(docset_root, stage);
  const file_index = build_file_index(docset_root, stage);
  const examples_index = examples_root ? build_file_index(examples_root, stage) : {};
  const manifest = get_html_manifest(docset_root, stage);

  for (const entry of manifest.entries) {
    const name = entry.name;
    const lower_name = entry.lower_name;

    if (
      name.endsWith("_members.html") ||
      name.endsWith("_methods.html") ||
      name.endsWith("_properties.html")
    ) {
      continue;
    }
    if (lower_name.includes("namespace")) {
      continue;
    }

    const match_member = name.match(SLDWORKS_MEMBER_FILE_RE);
    if (match_member) {
      member_files.push([entry.path, match_member[1] ?? "", match_member[2] ?? ""]);
      continue;
    }

    const match_interface = name.match(SLDWORKS_INTERFACE_FILE_RE);
    if (match_interface) {
      interface_files.push([entry.path, match_interface[1] ?? ""]);
    }
  }

  const index_interfaces: Record<string, any> = {};
  const search_documents: Array<Record<string, any>> = [];
  const json_base = json_root ? path.join(json_root, docset_name) : path.join(output_root, "json");

  member_files.sort((left, right) => left[0].localeCompare(right[0]));
  for (const [memberPath, interface_name, member_name] of member_files) {
    const $ = load_soup_with_stage(memberPath, stage);
    const title_text = clean_text($("title").first().text()).toLowerCase();

    let member_type = "method";
    if (title_text.includes("event")) {
      member_type = "event";
    } else if (title_text.includes("property")) {
      member_type = "property";
    }

    const description = meta_content($, "Description");
    const meta_kw = meta_keywords($);
    const syntax_section = $("#i-syntax-section-content").first();
    const cs_pre = $("#i-syntax-CS pre").first();
    const vb_pre = $("#i-syntax-VB pre").first();
    const sig_text = normalize_signature(
      text_block($, cs_pre.get(0)) || text_block($, vb_pre.get(0)),
    );
    const [return_type, _sig_name, parsed_params] = parse_signature(sig_text);

    const param_descs = extract_parameters($, syntax_section);
    const parameters = parsed_params.map((param) => ({
      name: param.name,
      type: param.type,
      description: param_descs[param.name] ?? "",
    }));

    let returns_text = extract_heading_content($, syntax_section, "Return Value");
    if (!returns_text && member_type === "property") {
      returns_text = extract_heading_content($, syntax_section, "Property Value");
    }

    const remarks = text_block($, $("#i-remarks-section-content").first().get(0));
    const examples = extract_examples($, file_index, docset_root, examples_index, examples_root, stage);
    let related = extract_related($);
    related = related.filter((item) => item !== interface_name && item !== `${interface_name}.${member_name}`);

    let readonly: boolean | null = null;
    if (member_type === "property" && vb_pre.length) {
      const vb_text = text_block($, vb_pre.get(0)).toLowerCase();
      if (vb_text.includes("readonly")) {
        readonly = true;
      } else if (vb_text.includes("writeonly")) {
        readonly = false;
      }
    }

    const categories = infer_categories(interface_name, member_name, category_map);
    const example_titles = examples.map((example) => example.title);
    const keywords = build_keywords(interface_name, member_name, meta_kw, parameters, return_type ?? "", example_titles);

    const frontmatter: Record<string, unknown> = {
      type: member_type,
      interface: interface_name,
      member: member_name,
      returns: return_type || "unknown",
      parameters,
      docset: docset_name,
      deprecated:
        description.toLowerCase().includes("obsolete") || description.toLowerCase().includes("deprecated"),
      since_version: "unknown",
      categories,
      related,
      keywords,
    };
    if (member_type === "property") {
      frontmatter.readonly = readonly;
    }

    const member_title = `${interface_name}.${member_name}`;
    const sections: string[] = [
      format_frontmatter(frontmatter),
      "",
      `# ${member_title}`,
      "",
      description || "",
      "",
      "## Signature",
      "",
      "```csharp",
      sig_text || "",
      "```",
      "## Parameters",
      "",
    ];

    if (parameters.length > 0) {
      for (const param of parameters) {
        sections.push(`- \`${param.name}\` (${param.type}): ${param.description}`);
      }
    } else {
      sections.push("None.");
    }

    sections.push("", "## Return Value", "", returns_text || "Unknown.");

    if (remarks) {
      sections.push("", "## Remarks", "", remarks);
    }

    if (examples.length > 0) {
      sections.push("", "## Examples", "");
      for (const example of examples) {
        const label = example.title;
        const href = example.href ?? "";
        const code_blocks = example.code_blocks ?? [];

        if (code_blocks.length > 0) {
          sections.push(`### ${label}`, "");
          for (const block of code_blocks) {
            sections.push(`\`\`\`${block.language ?? ""}`);
            sections.push(block.code ?? "");
            sections.push("```", "");
          }
        } else if (href) {
          sections.push(`- ${label} (${href})`);
        } else {
          sections.push(`- ${label}`);
        }

        if (label) {
          if (!example_index[label]) {
            example_index[label] = [];
          }
          example_index[label].push(`${interface_name}.${member_name}`);
        }
      }
    }

    if (related.length > 0) {
      sections.push("", "## See Also", "");
      for (const item of related) {
        sections.push(`- \`${item}\``);
      }
    }

    const out_path = path.join(output_root, "interfaces", interface_name, `${member_name}.md`);
    await write_markdown(out_path, sections.filter((item) => item !== undefined && item !== null).join("\n"));
    const json_path = path.join(json_base, "interfaces", interface_name, `${member_name}.json`);
    await write_json(json_path, {
      frontmatter,
      title: member_title,
      description,
      signature: sig_text || "",
      parameters,
      returns: returns_text || "",
      remarks,
      examples,
      related,
    });

    if (!index_interfaces[interface_name]) {
      index_interfaces[interface_name] = {
        file: `interfaces/${interface_name}/_interface.md`,
        member_count: 0,
        members: {},
      };
    }
    index_interfaces[interface_name].member_count += 1;
    index_interfaces[interface_name].members[member_name] = `interfaces/${interface_name}/${member_name}.md`;

    search_documents.push({
      id: `${interface_name}.${member_name}`,
      path: `interfaces/${interface_name}/${member_name}.md`,
      type: member_type,
      interface: interface_name,
      title: member_name,
      summary: description,
      docset: docset_name,
      keywords,
      categories,
      parameters: parameters.map((param) => param.name),
      returns: return_type || "unknown",
    });
  }

  interface_files.sort((left, right) => left[0].localeCompare(right[0]));
  for (const [interfacePath, interface_name] of interface_files) {
    const $ = load_soup_with_stage(interfacePath, stage);
    const description =
      text_block($, $(".i-description-content").first().get(0)) || meta_content($, "Description");
    const categories = infer_categories(interface_name, null, category_map);
    const members = Object.keys(index_interfaces[interface_name]?.members ?? {}).sort();
    const common_members = members.slice(0, 8);

    const frontmatter = {
      type: "interface",
      interface: interface_name,
      inherits: null,
      description: description || "",
      member_count: members.length,
      docset: docset_name,
      categories,
      common_members,
    };

    const sections: string[] = [
      format_frontmatter(frontmatter),
      "",
      `# ${interface_name}`,
      "",
      description || "",
    ];

    if (common_members.length > 0) {
      sections.push("", "## Common Members", "");
      for (const item of common_members) {
        sections.push(`- \`${item}\``);
      }
    }

    const out_path = path.join(output_root, "interfaces", interface_name, "_interface.md");
    await write_markdown(out_path, sections.join("\n"));
    const json_path = path.join(json_base, "interfaces", interface_name, "_interface.json");
    await write_json(json_path, {
      frontmatter,
      title: interface_name,
      description,
      common_members,
    });

    search_documents.push({
      id: interface_name,
      path: `interfaces/${interface_name}/_interface.md`,
      type: "interface",
      interface: interface_name,
      title: interface_name,
      summary: description,
      docset: docset_name,
      keywords: build_keywords(interface_name, null, meta_keywords($), [], ""),
      categories,
      parameters: [],
      returns: "",
    });
  }

  if (Object.keys(heading_map).length > 0) {
    const lines: string[] = [];
    const sortedHeadings = Object.keys(heading_map).sort();
    for (const heading of sortedHeadings) {
      lines.push(`## ${heading}`, "");
      const interfaces = [...new Set(heading_map[heading] ?? [])].sort();
      for (const iface of interfaces) {
        lines.push(`- \`${iface}\``);
      }
      lines.push("");
    }
    const pattern_path = path.join(output_root, "patterns", "functional-categories.md");
    const pattern_json = path.join(json_base, "patterns", "functional-categories.json");
    await write_pattern(
      pattern_path,
      "Functional Categories",
      lines,
      ["functional", "categories", "interfaces", "grouping"],
      ["documents"],
      pattern_json,
    );
    search_documents.push({
      id: "Functional Categories",
      path: "patterns/functional-categories.md",
      type: "pattern",
      interface: "",
      title: "Functional Categories",
      summary: "SOLIDWORKS interfaces grouped by functional category.",
      docset: docset_name,
      keywords: ["functional", "categories", "interfaces", "grouping"],
      categories: ["documents"],
      parameters: [],
      returns: "",
    });
  }

  if (Object.keys(example_index).length > 0) {
    const lines: string[] = [];
    const sortedTitles = Object.keys(example_index).sort();
    for (const title of sortedTitles) {
      const members = [...new Set(example_index[title] ?? [])].sort();
      lines.push(`## ${title}`, "");
      for (const member of members) {
        lines.push(`- \`${member}\``);
      }
      lines.push("");
    }
    const pattern_path = path.join(output_root, "patterns", "examples-index.md");
    const pattern_json = path.join(json_base, "patterns", "examples-index.json");
    await write_pattern(
      pattern_path,
      "Examples Index",
      lines,
      ["examples", "code", "macro", "addin", "sample"],
      ["documents"],
      pattern_json,
    );
    search_documents.push({
      id: "Examples Index",
      path: "patterns/examples-index.md",
      type: "pattern",
      interface: "",
      title: "Examples Index",
      summary: "Index of example topics referenced by API members.",
      docset: docset_name,
      keywords: ["examples", "code", "macro", "addin", "sample"],
      categories: ["documents"],
      parameters: [],
      returns: "",
    });
  }

  return [index_interfaces, search_documents];
}

async function convert_swconst(
  docset_root: string,
  output_root: string,
  docset_name: string,
  json_root?: string,
  stage?: ConversionStage,
): Promise<[Record<string, string>, Array<Record<string, any>>]> {
  const enums_index: Record<string, string> = {};
  const search_documents: Array<Record<string, any>> = [];
  const json_base = json_root ? path.join(json_root, docset_name) : path.join(output_root, "json");

  const manifest = get_html_manifest(docset_root, stage);
  for (const entry of manifest.entries) {
    const name = entry.name;
    if (entry.lower_name.includes("namespace")) {
      continue;
    }
    const match = name.match(SWCONST_ENUM_FILE_RE);
    if (!match) {
      continue;
    }
    const enum_name = match[1] ?? "";
    const enumPath = entry.path;
    const $ = load_soup_with_stage(enumPath, stage);
    const title = clean_text($("title").first().text()).toLowerCase();
    if (!title.includes("enumeration")) {
      continue;
    }

    const description = meta_content($, "Description");
    const table = $("table.FilteredItemListTable").first();
    const rows: Array<{ member: string; value: string; description: string }> = [];
    if (table.length) {
      const tableRows = table.find("tr").toArray().slice(1);
      for (const row of tableRows) {
        const cells = $(row).find("td").toArray();
        if (cells.length < 2) {
          continue;
        }
        const name_cell = clean_text($(cells[0]).text());
        const desc_cell = clean_text($(cells[1]).text());
        let value = "";
        let desc = desc_cell;
        const matchValue = desc_cell.match(ENUM_ROW_VALUE_RE);
        if (matchValue) {
          value = matchValue[1] ?? "";
          desc = (matchValue[2] ?? "").trim();
        }
        rows.push({ member: name_cell, value, description: desc });
      }
    }

    const categories = ["constants"];
    const keywords = build_keywords(enum_name, null, meta_keywords($), [], "");
    const frontmatter = {
      type: "enum",
      name: enum_name,
      description: description || "",
      member_count: rows.length,
      docset: docset_name,
      categories,
      used_by: [],
    };

    const sections = [
      format_frontmatter(frontmatter),
      "",
      `# ${enum_name}`,
      "",
      description || "",
      "",
      "## Values",
      "",
      "| Member | Value | Description |",
      "|---|---|---|",
    ];
    for (const row of rows) {
      sections.push(`| \`${row.member}\` | ${row.value} | ${row.description} |`);
    }

    const out_path = path.join(output_root, "enums", `${enum_name}.md`);
    await write_markdown(out_path, sections.join("\n"));
    const json_path = path.join(json_base, "enums", `${enum_name}.json`);
    await write_json(json_path, {
      frontmatter,
      title: enum_name,
      description,
      values: rows,
    });

    enums_index[enum_name] = `enums/${enum_name}.md`;
    search_documents.push({
      id: enum_name,
      path: `enums/${enum_name}.md`,
      type: "enum",
      interface: "",
      title: enum_name,
      summary: description,
      docset: docset_name,
      keywords,
      categories,
      parameters: [],
      returns: "",
    });
  }

  return [enums_index, search_documents];
}

async function convert_examples(
  docset_root: string,
  output_root: string,
  docset_name: string,
  json_root?: string,
  stage?: ConversionStage,
): Promise<Array<Record<string, any>>> {
  if (!docset_root) {
    return [];
  }

  const search_documents: Array<Record<string, any>> = [];
  const patterns_out = path.join(output_root, "patterns");
  const json_base = json_root ? path.join(json_root, docset_name) : path.join(output_root, "json");
  const json_patterns_out = path.join(json_base, "patterns");
  await fsp.mkdir(patterns_out, { recursive: true });

  const file_index = build_file_index(docset_root, stage);
  const entries = Object.entries(file_index).sort(([left], [right]) => left.localeCompare(right));
  for (const [filename, examplePath] of entries) {
    const lowered = filename.toLowerCase();
    if (!(lowered.endsWith(".htm") || lowered.endsWith(".html"))) {
      continue;
    }
    if (!lowered.includes("example")) {
      continue;
    }
    const $ = load_soup_with_stage(examplePath, stage);
    let title = "";
    const headings = $("h1")
      .toArray()
      .map((elem) => clean_text($(elem).text()))
      .filter(Boolean);
    if (headings.length > 0) {
      for (let i = headings.length - 1; i >= 0; i -= 1) {
        const candidate = headings[i] ?? "";
        if (candidate.toLowerCase() !== "solidworks api help") {
          title = candidate;
          break;
        }
      }
      if (!title) {
        title = headings[headings.length - 1] ?? "";
      }
    }
    if (!title) {
      title = clean_text($("title").first().text());
    }
    if (!title) {
      title = path.basename(examplePath, path.extname(examplePath));
    }

    let description = "";
    $("p").each((_, para) => {
      if (description) {
        return;
      }
      const classes = String($(para).attr("class") ?? "").toLowerCase();
      if (classes.includes("apicode")) {
        return;
      }
      const text = clean_text($(para).text());
      if (text) {
        description = text;
      }
    });

    const code_blocks = extract_code_blocks($, path.basename(examplePath));
    if (code_blocks.length === 0) {
      continue;
    }

    const body_lines: string[] = [];
    if (description) {
      body_lines.push(description, "");
    }
    body_lines.push("## Code", "");
    for (const block of code_blocks) {
      body_lines.push(`\`\`\`${block.language ?? ""}`);
      body_lines.push(block.code ?? "");
      body_lines.push("```", "");
    }

    const slug = path.basename(examplePath, path.extname(examplePath));
    const md_path = path.join(patterns_out, `${slug}.md`);
    const json_path = path.join(json_patterns_out, `${slug}.json`);
    const keywords = normalize_keywords([title]);
    await write_pattern(md_path, title, body_lines, keywords, ["documents"], json_path);

    search_documents.push({
      id: title,
      path: `patterns/${slug}.md`,
      type: "pattern",
      interface: "",
      title,
      summary: description,
      docset: docset_name,
      keywords,
      categories: ["documents"],
      parameters: [],
      returns: "",
    });
  }

  return search_documents;
}

async function write_index(filePath: string, data: unknown): Promise<void> {
  await fsp.mkdir(path.dirname(filePath), { recursive: true });
  await fsp.writeFile(filePath, `${JSON.stringify(data, null, 2)}\n`, "utf8");
}

async function build_example_member_map(
  member_docs: Array<Record<string, any>>,
  example_docs: Array<Record<string, any>>,
  output_root: string,
  json_root: string,
  docset_name: string,
): Promise<Record<string, any> | null> {
  const keyword_to_members: Record<string, Set<string>> = {};
  const member_keywords: Record<string, Set<string>> = {};

  for (const doc of member_docs) {
    if (!(doc.type === "method" || doc.type === "property" || doc.type === "event")) {
      continue;
    }
    const member_id = String(doc.id ?? "");
    if (!member_id) {
      continue;
    }
    const keywords = Array.isArray(doc.keywords) ? doc.keywords.map(String) : [];
    member_keywords[member_id] = new Set(keywords);
    for (const keyword of keywords) {
      if (!keyword_to_members[keyword]) {
        keyword_to_members[keyword] = new Set<string>();
      }
      keyword_to_members[keyword].add(member_id);
    }
  }

  if (Object.keys(member_keywords).length === 0 || example_docs.length === 0) {
    return null;
  }

  const mapping: Record<string, Array<{ member: string; score: number }>> = {};
  const lines: string[] = [];
  for (const example of example_docs) {
    const title = String(example.title ?? example.id ?? "");
    const example_keywords = Array.isArray(example.keywords) ? example.keywords.map(String) : [];
    const scores = new Map<string, number>();

    for (const keyword of example_keywords) {
      for (const member_id of keyword_to_members[keyword] ?? []) {
        scores.set(member_id, (scores.get(member_id) ?? 0) + 1);
      }
    }

    const ranked = [...scores.entries()]
      .sort((left, right) => right[1] - left[1])
      .filter(([, score]) => score >= 2)
      .slice(0, 10);
    if (ranked.length === 0) {
      continue;
    }

    mapping[title] = ranked.map(([member_id, score]) => ({ member: member_id, score }));
    lines.push(`## ${title}`, "");
    for (const [member_id, score] of ranked) {
      lines.push(`- \`${member_id}\` (score: ${score})`);
    }
    lines.push("");
  }

  if (Object.keys(mapping).length === 0) {
    return null;
  }

  const md_path = path.join(output_root, "patterns", "examples-to-members.md");
  const json_path = path.join(json_root, docset_name, "patterns", "examples-to-members.json");
  await write_pattern(
    md_path,
    "Examples to Members",
    lines,
    ["examples", "mapping", "members", "lookup"],
    ["documents"],
    json_path,
  );

  return {
    id: "Examples to Members",
    path: "patterns/examples-to-members.md",
    type: "pattern",
    interface: "",
    title: "Examples to Members",
    summary: "Keyword-based mapping from programming guide examples to API members.",
    docset: docset_name,
    keywords: ["examples", "mapping", "members", "lookup"],
    categories: ["documents"],
    parameters: [],
    returns: "",
  };
}

function extract_guide_sections(
  docset_root: string,
  filenames: string[],
  stage?: ConversionStage,
): Array<{ title: string; paragraphs: string[]; code: Array<{ language: string; code: string }> }> {
  const sections: Array<{ title: string; paragraphs: string[]; code: Array<{ language: string; code: string }> }> = [];

  for (const name of filenames) {
    const filePath = path.join(docset_root, name);
    if (!safeIsFile(filePath)) {
      continue;
    }
    const $ = load_soup_with_stage(filePath, stage);

    let title = "";
    const headings = $("h1")
      .toArray()
      .map((elem) => clean_text($(elem).text()))
      .filter(Boolean);
    if (headings.length > 0) {
      for (let i = headings.length - 1; i >= 0; i -= 1) {
        const candidate = headings[i] ?? "";
        if (candidate.toLowerCase() !== "solidworks api help") {
          title = candidate;
          break;
        }
      }
      if (!title) {
        title = headings[headings.length - 1] ?? "";
      }
    }
    if (!title) {
      title = clean_text($("title").first().text());
    }
    if (!title) {
      title = path.basename(name, path.extname(name));
    }

    const paragraphs: string[] = [];
    $("p").each((_, para) => {
      const classes = String($(para).attr("class") ?? "").toLowerCase();
      if (classes.includes("apicode")) {
        return;
      }
      const text = clean_text($(para).text());
      if (text) {
        paragraphs.push(text);
      }
    });

    sections.push({
      title,
      paragraphs: paragraphs.slice(0, 8),
      code: extract_code_blocks($, name),
    });
  }

  return sections;
}

async function convert_guides(
  docset_root: string,
  output_root: string,
  docset_name: string,
  json_root?: string,
  stage?: ConversionStage,
): Promise<Array<Record<string, any>>> {
  if (!docset_root) {
    return [];
  }

  const json_base = json_root ? path.join(json_root, docset_name) : path.join(output_root, "json");
  const patterns_out = path.join(output_root, "patterns");
  await fsp.mkdir(patterns_out, { recursive: true });

  const guides = [
    {
      slug: "macro-best-practices",
      title: "Macro Best Practices",
      keywords: ["macro", "vba", "record", "run", "debug"],
      sources: [
        path.join("GettingStarted", "SolidWorks_Macros.htm"),
        path.join("GettingStarted", "Record_Solidworks_Macro.htm"),
        path.join("GettingStarted", "Run_SolidWorks_Macro.htm"),
        path.join("GettingStarted", "Edit_or_Debug_SolidWorks_Macro.htm"),
        path.join("GettingStarted", "Assign_SolidWorks_Macro_to_Button.htm"),
        path.join("GettingStarted", "Option_Explicit_Statement.htm"),
      ],
    },
    {
      slug: "addin-best-practices",
      title: "Add-in Best Practices",
      keywords: ["addin", "add-in", "standalone", "application", "c#"],
      sources: [
        path.join("GettingStarted", "SolidWorks_API_Standalone_and_Add-in_Applications_Overview.htm"),
        path.join("GettingStarted", "Types_of_SolidWorks_API_Applications_Overview.htm"),
        path.join("GettingStarted", "Visual_C__Standalone_and_Add-in_Applications.htm"),
        path.join("GettingStarted", "Visual_Basic_.NET_Standalone_and_Add-in_Applications.htm"),
        path.join("GettingStarted", "CPP_.NET_Standalone_and_Add-in_Applications.htm"),
      ],
    },
    {
      slug: "api-getting-started",
      title: "API Getting Started",
      keywords: ["getting", "started", "object", "model", "hierarchy"],
      sources: [
        path.join("GettingStarted", "SolidWorks_API_Getting_Started_Overview.htm"),
        path.join("GettingStarted", "SolidWorks_API_Object_Model_Overview.htm"),
        path.join("GettingStarted", "Understanding_the_SolidWorks_API_Class_Hierarchy.htm"),
      ],
    },
  ];

  const search_docs: Array<Record<string, any>> = [];
  for (const guide of guides) {
    const sections = extract_guide_sections(docset_root, guide.sources, stage);
    if (sections.length === 0) {
      continue;
    }

    const body_lines: string[] = [];
    for (const section of sections) {
      body_lines.push(`## ${section.title}`, "");
      for (const paragraph of section.paragraphs) {
        body_lines.push(`- ${paragraph}`);
      }
      body_lines.push("");
      if (section.code.length > 0) {
        body_lines.push("### Code", "");
        for (const block of section.code) {
          body_lines.push(`\`\`\`${block.language ?? ""}`);
          body_lines.push(block.code ?? "");
          body_lines.push("```", "");
        }
      }
    }

    const md_path = path.join(patterns_out, `${guide.slug}.md`);
    const json_path = path.join(json_base, "patterns", `${guide.slug}.json`);
    const normalizedGuideKeywords = normalize_keywords(guide.keywords);
    await write_pattern(
      md_path,
      guide.title,
      body_lines,
      normalizedGuideKeywords,
      ["documents"],
      json_path,
    );

    search_docs.push({
      id: guide.title,
      path: `patterns/${guide.slug}.md`,
      type: "pattern",
      interface: "",
      title: guide.title,
      summary: `${guide.title} from the SolidWorks API programming guide.`,
      docset: docset_name,
      keywords: normalizedGuideKeywords,
      categories: ["documents"],
      parameters: [],
      returns: "",
    });
  }

  return search_docs;
}

function build_json_index(index_data: Record<string, any>, docset_name: string): Record<string, any> {
  const prefix = `json/${docset_name}`;
  const interfaces: Record<string, any> = {};
  const enums: Record<string, string> = {};
  for (const [iface, iface_data] of Object.entries(index_data.interfaces ?? {})) {
    interfaces[iface] = {
      file: `${prefix}/interfaces/${iface}/_interface.json`,
      member_count: (iface_data as any).member_count ?? 0,
      members: Object.fromEntries(
        Object.keys((iface_data as any).members ?? {}).map((name) => [
          name,
          `${prefix}/interfaces/${iface}/${name}.json`,
        ]),
      ),
    };
  }
  for (const enum_name of Object.keys(index_data.enums ?? {})) {
    enums[enum_name] = `${prefix}/enums/${enum_name}.json`;
  }
  return { interfaces, enums };
}

function json_path_from_doc(docPath: string, docset: string): string {
  const base = `json/${docset}`;
  if (docPath.startsWith("interfaces/")) {
    return `${base}/${docPath.replace(/\.md$/i, ".json")}`;
  }
  if (docPath.startsWith("enums/")) {
    return `${base}/${docPath.replace(/\.md$/i, ".json")}`;
  }
  if (docPath.startsWith("patterns/")) {
    return `${base}/${docPath.replace(/\.md$/i, ".json")}`;
  }
  return `${base}/${docPath.replace(/\.md$/i, ".json")}`;
}

function parse_required_arg(args: minimist.ParsedArgs, key: string): string {
  const value = args[key];
  if (typeof value !== "string" || !value.trim()) {
    throw new Error(`Missing required argument --${key}`);
  }
  return value;
}

async function main(): Promise<void> {
  const args = minimist(process.argv.slice(2), {
    string: ["sldworks", "swconst", "examples", "output"],
  });

  const sldworks = parse_required_arg(args, "sldworks");
  const swconst = parse_required_arg(args, "swconst");
  const output = parse_required_arg(args, "output");
  const examples = typeof args.examples === "string" ? args.examples : "";

  await fsp.mkdir(output, { recursive: true });
  const json_root = path.join(output, "json");
  const stage = new ConversionStage();

  const sldworks_out = path.join(output, "sldworksapi");
  const swconst_out = path.join(output, "swconst");
  const progguide_out = path.join(output, "progguide");

  const [interfaces_index, sldworks_search] = await convert_sldworks(
    sldworks,
    sldworks_out,
    "sldworksapi",
    examples || undefined,
    json_root,
    stage,
  );
  const [enums_index, swconst_search] = await convert_swconst(swconst, swconst_out, "swconst", json_root, stage);
  let progguide_search: Array<Record<string, any>> = [];
  if (examples) {
    const example_search = await convert_examples(examples, progguide_out, "progguide", json_root, stage);
    const guide_search = await convert_guides(examples, progguide_out, "progguide", json_root, stage);
    progguide_search = [...example_search, ...guide_search];
  }

  await write_index(path.join(sldworks_out, "_index.json"), {
    generated: "",
    solidworks_version: "",
    interfaces: interfaces_index,
    enums: {},
  });
  await write_index(path.join(swconst_out, "_index.json"), {
    generated: "",
    solidworks_version: "",
    interfaces: {},
    enums: enums_index,
  });

  if (examples) {
    await write_index(path.join(progguide_out, "_index.json"), {
      generated: "",
      solidworks_version: "",
      interfaces: {},
      enums: {},
    });
  }

  await write_index(path.join(sldworks_out, "_search_index.json"), {
    documents: sldworks_search,
  });
  await write_index(path.join(swconst_out, "_search_index.json"), {
    documents: swconst_search,
  });
  if (examples) {
    await write_index(path.join(progguide_out, "_search_index.json"), {
      documents: progguide_search,
    });
  }

  const mapping_doc = await build_example_member_map(
    sldworks_search,
    progguide_search,
    sldworks_out,
    json_root,
    "sldworksapi",
  );
  if (mapping_doc) {
    sldworks_search.push(mapping_doc);
  }

  const merged_search = [...sldworks_search, ...swconst_search, ...progguide_search];
  await write_index(path.join(output, "_search_index.json"), {
    documents: merged_search,
  });

  const index_docsets: Record<string, any> = {
    sldworksapi: {
      interfaces: interfaces_index,
      enums: {},
    },
    swconst: {
      interfaces: {},
      enums: enums_index,
    },
  };
  if (examples) {
    index_docsets.progguide = {
      interfaces: {},
      enums: {},
    };
  }

  await write_index(path.join(output, "_index.json"), {
    generated: "",
    solidworks_version: "",
    docsets: index_docsets,
  });

  const json_index_docsets: Record<string, any> = {
    sldworksapi: build_json_index({ interfaces: interfaces_index, enums: {} }, "sldworksapi"),
    swconst: build_json_index({ interfaces: {}, enums: enums_index }, "swconst"),
  };
  if (examples) {
    json_index_docsets.progguide = build_json_index({ interfaces: {}, enums: {} }, "progguide");
  }

  await write_index(path.join(output, "json", "_index.json"), {
    generated: "",
    solidworks_version: "",
    docsets: json_index_docsets,
  });

  const json_search = merged_search.map((doc) => {
    const clone = { ...doc };
    clone.path = json_path_from_doc(String(doc.path ?? ""), String(doc.docset ?? "sldworksapi"));
    return clone;
  });
  await write_index(path.join(output, "json", "_search_index.json"), {
    documents: json_search,
  });
}

if (import.meta.main) {
  main().catch((error) => {
    process.stderr.write(`${error instanceof Error ? error.stack ?? error.message : String(error)}\n`);
    process.exit(1);
  });
}
