import fs from "node:fs";
import path from "node:path";

import { catalogFor } from "./catalog";
import { SearchEngine } from "./search";
import type {
  DocFormat,
  RootIndex,
  SearchDocument,
  SearchIndex,
  SearchResult,
} from "./types";
import {
  asRecord,
  asStringList,
  getString,
  load_json,
  parse_limit,
  read_text,
  resolve_within_root,
} from "./util";

export const _EXAMPLE_MEMBER_RE = /^- `([^`]+)`/;

export interface SearchOptions {
  docset?: string | undefined;
  fmt?: DocFormat | undefined;
  doc_type?: string | undefined;
  interface?: string | undefined;
  categories?: Iterable<string> | undefined;
  limit?: unknown;
}

/** What the tool layer needs from a docs store (implemented by DataStore and by test fakes). */
export interface DataStoreLike {
  /** Data root; resolved doc paths are reported relative to it. */
  readonly root: string;
  readonly overlay?: string | null;
  index(): RootIndex;
  json_index(): RootIndex;
  examples_map(): Record<string, string[]>;
  progguide_titles(): Record<string, Record<string, unknown>>;
  resolve_member_path(
    interfaceName: string | undefined,
    memberName: string | undefined,
    docset: string,
    format: DocFormat,
  ): string | null;
  resolve_interface_path(
    interfaceName: string | undefined,
    docset: string,
    format: DocFormat,
  ): string | null;
  resolve_enum_path(enumName: string | undefined, docset: string, format: DocFormat): string | null;
  resolve_example_markdown?(title: string): string | null;
  search_api_scored(query: string, options?: SearchOptions): SearchResult[];
  /** Optional: pre-build lazy structures so the first query is fast. */
  warmup?(): void;
}

/** Title from YAML frontmatter `title:` or first `# ` heading. */
export function titleFromMarkdown(filePath: string): string | null {
  try {
    const text = read_text(filePath);
    const fm = /^---\r?\n([\s\S]*?)\r?\n---/.exec(text);
    if (fm) {
      const titleLine = /^title:\s*(.+)$/m.exec(fm[1] ?? "");
      if (titleLine?.[1]) {
        return titleLine[1].trim().replace(/^["']|["']$/g, "");
      }
    }
    const heading = /^#\s+(.+)$/m.exec(text);
    return heading?.[1]?.trim() ?? null;
  } catch {
    return null;
  }
}

/** Fenced code blocks from a markdown example page. */
export function codeBlocksFromMarkdown(
  filePath: string,
): Array<{ language: string; code: string }> {
  try {
    const text = read_text(filePath);
    const blocks: Array<{ language: string; code: string }> = [];
    const re = /```([^\n`]*)\r?\n([\s\S]*?)```/g;
    let match: RegExpExecArray | null;
    while ((match = re.exec(text)) !== null) {
      blocks.push({
        language: (match[1] ?? "").trim(),
        code: (match[2] ?? "").replace(/\s+$/, "\n"),
      });
    }
    return blocks;
  } catch {
    return [];
  }
}

export class DataStore implements DataStoreLike {
  readonly root: string;
  /** Optional local import overlay (CHM examples + DLL enum values). Missing files fall back to `root`. */
  readonly overlay: string | null;

  private _index: RootIndex | null = null;
  private _search: SearchIndex | null = null;
  private _json_index: RootIndex | null = null;
  private _json_search: SearchIndex | null = null;
  private _examples_map: Record<string, string[]> | null = null;
  private _progguide_titles: Record<string, SearchDocument> | null = null;
  private _overlay_title_paths: Map<string, string> | null = null;
  private readonly _engines = new Map<DocFormat, SearchEngine>();

  constructor(root: string, overlay: string | null = null) {
    this.root = root;
    this.overlay =
      overlay && fs.existsSync(overlay) && fs.statSync(overlay).isDirectory()
        ? overlay
        : null;
  }

  /** Prefer a file under the overlay when present; otherwise the corpus path. */
  resolve_overlay_or_root(...segments: string[]): string | null {
    if (this.overlay) {
      const over = resolve_within_root(this.overlay, ...segments);
      if (over && fs.existsSync(over)) {
        return over;
      }
    }
    return resolve_within_root(this.root, ...segments);
  }

  index(): RootIndex {
    this._index ??= asRecord(load_json(path.join(this.root, "_index.json"))) as RootIndex;
    return this._index;
  }

  search(): SearchIndex {
    this._search ??= asRecord(
      load_json(path.join(this.root, "_search_index.json")),
    ) as SearchIndex;
    return this._search;
  }

  json_index(): RootIndex {
    this._json_index ??= asRecord(
      load_json(path.join(this.root, "json", "_index.json")),
    ) as RootIndex;
    return this._json_index;
  }

  json_search(): SearchIndex {
    this._json_search ??= asRecord(
      load_json(path.join(this.root, "json", "_search_index.json")),
    ) as SearchIndex;
    return this._json_search;
  }

  /** Maps `Interface.Member` to the titles of programming-guide examples that use it. */
  examples_map(): Record<string, string[]> {
    if (this._examples_map !== null) {
      return this._examples_map;
    }

    const mapping = new Map<string, string[]>();
    const absorb = (mappingPath: string | null) => {
      if (!mappingPath || !fs.existsSync(mappingPath)) {
        return;
      }
      let currentTitle: string | null = null;
      for (const line of asStringList(asRecord(load_json(mappingPath)).body)) {
        if (line.startsWith("## ")) {
          currentTitle = line.slice(3).trim();
          continue;
        }
        const member = _EXAMPLE_MEMBER_RE.exec(line)?.[1];
        if (member && currentTitle) {
          const titles = mapping.get(member) ?? [];
          if (!titles.includes(currentTitle)) {
            titles.push(currentTitle);
          }
          mapping.set(member, titles);
        }
      }
    };

    absorb(
      path.join(this.root, "json", "sldworksapi", "patterns", "examples-to-members.json"),
    );
    if (this.overlay) {
      absorb(
        path.join(
          this.overlay,
          "json",
          "sldworksapi",
          "patterns",
          "examples-to-members.json",
        ),
      );
    }

    this._examples_map = Object.fromEntries(mapping);
    return this._examples_map;
  }

  progguide_titles(): Record<string, SearchDocument> {
    if (this._progguide_titles !== null) {
      return this._progguide_titles;
    }
    const titles = new Map<string, SearchDocument>();
    for (const doc of this._search_docs("markdown")) {
      const title = getString(doc.title);
      if (doc.docset === "progguide" && title) {
        titles.set(title, doc);
      }
    }
    // Overlay examples (from CHM) are not in _search_index; index them by title.
    if (this.overlay) {
      const patternsDir = path.join(this.overlay, "progguide", "patterns");
      if (fs.existsSync(patternsDir)) {
        for (const name of fs.readdirSync(patternsDir)) {
          if (!name.endsWith(".md")) {
            continue;
          }
          const full = path.join(patternsDir, name);
          const title = titleFromMarkdown(full) ?? name.replace(/\.md$/i, "");
          if (!titles.has(title)) {
            titles.set(title, {
              id: `overlay:progguide/patterns/${name}`,
              title,
              summary: "Local SolidWorks API Help example (CHM import).",
              docset: "progguide",
              type: "pattern",
              path: `progguide/patterns/${name}`,
            } as SearchDocument);
          }
        }
      }
    }
    this._progguide_titles = Object.fromEntries(titles);
    return this._progguide_titles;
  }

  private overlayTitlePaths(): Map<string, string> {
    if (this._overlay_title_paths) {
      return this._overlay_title_paths;
    }
    const map = new Map<string, string>();
    if (this.overlay) {
      const patternsDir = path.join(this.overlay, "progguide", "patterns");
      if (fs.existsSync(patternsDir)) {
        for (const name of fs.readdirSync(patternsDir)) {
          if (!name.endsWith(".md")) {
            continue;
          }
          const full = path.join(patternsDir, name);
          const title = titleFromMarkdown(full) ?? name.replace(/\.md$/i, "");
          if (!map.has(title)) {
            map.set(title, full);
          }
        }
      }
    }
    this._overlay_title_paths = map;
    return map;
  }

  /** Absolute path of a progguide example markdown (overlay preferred). */
  resolve_example_markdown(title: string): string | null {
    const overHit = this.overlayTitlePaths().get(title);
    if (overHit) {
      return overHit;
    }
    const docs = this.progguide_titles();
    const doc = docs[title];
    const rel = getString(doc?.path);
    if (rel) {
      const over = this.overlay
        ? resolve_within_root(this.overlay, rel)
        : null;
      if (over && fs.existsSync(over)) {
        return over;
      }
      const rooted = resolve_within_root(this.root, rel);
      if (rooted && fs.existsSync(rooted)) {
        return rooted;
      }
    }
    return null;
  }

  private _full_doc_path(
    relativePath: string | undefined,
    docset: string,
    format: DocFormat,
  ): string | null {
    if (!relativePath) {
      return null;
    }
    if (format === "json") {
      return this.resolve_overlay_or_root(relativePath);
    }
    return this.resolve_overlay_or_root(docset, relativePath);
  }

  private _catalog(format: DocFormat) {
    return catalogFor(format === "json" ? this.json_index() : this.index());
  }

  resolve_member_path(
    interfaceName: string | undefined,
    memberName: string | undefined,
    docset: string,
    format: DocFormat,
  ): string | null {
    const member = this._catalog(format).findMember(docset, interfaceName, memberName);
    return this._full_doc_path(member?.file, docset, format);
  }

  resolve_interface_path(
    interfaceName: string | undefined,
    docset: string,
    format: DocFormat,
  ): string | null {
    const found = this._catalog(format).findInterface(docset, interfaceName);
    return this._full_doc_path(getString(found?.entry.file) || undefined, docset, format);
  }

  resolve_enum_path(enumName: string | undefined, docset: string, format: DocFormat): string | null {
    const found = this._catalog(format).findEnum(docset, enumName);
    return this._full_doc_path(found?.file, docset, format);
  }

  private _search_docs(format: DocFormat): SearchDocument[] {
    const documents = (format === "json" ? this.json_search() : this.search()).documents;
    if (!Array.isArray(documents)) {
      return [];
    }
    return documents.filter(
      (entry): entry is SearchDocument => Boolean(entry) && typeof entry === "object",
    );
  }

  private _engine(format: DocFormat): SearchEngine {
    let engine = this._engines.get(format);
    if (!engine) {
      engine = new SearchEngine(this._search_docs(format));
      this._engines.set(format, engine);
    }
    return engine;
  }

  warmup(): void {
    this.index();
    this._engine("markdown");
  }

  search_api_scored(query: string, options: SearchOptions = {}): SearchResult[] {
    return this._engine(options.fmt ?? "markdown").search(
      query,
      {
        docset: options.docset,
        docType: options.doc_type,
        interfaceName: options.interface,
        categories: options.categories,
      },
      parse_limit(options.limit, null),
    );
  }
}
