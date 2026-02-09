import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

import type {
  DocFormat,
  DocsetIndex,
  InterfaceIndexEntry,
  RootIndex,
  SearchDocument,
  SearchIndex,
  SearchResult,
} from "./types";

export const _TOKEN_RE = /[a-z0-9]+/g;
export const _EXAMPLE_MEMBER_RE = /^- `([^`]+)`/;

const _JSON_CACHE_SIZE = 256;
const _TEXT_CACHE_SIZE = 256;
const _QUERY_CACHE_SIZE = 256;
const _FILTER_CACHE_SIZE = 1024;
const _PATH_CACHE_SIZE = 4096;
const _PREPARED_SEARCH_CACHE_SIZE = 4;

type PreparedDoc = {
  doc: SearchDocument;
  docset: string;
  type: string;
  interfaceName: string;
  categories: ReadonlySet<string>;
  hayTitle: string;
  haySummary: string;
  hayKeywords: string;
  hayCategories: string;
  hayInterface: string;
  hayType: string;
};

type BaseScoredDoc = {
  score: number;
  doc: SearchDocument;
  type: string;
  interfaceName: string;
  categories: ReadonlySet<string>;
};

class LruCache<K, V> {
  private readonly maxSize: number;
  private readonly entries = new Map<K, V>();

  constructor(maxSize: number) {
    this.maxSize = maxSize;
  }

  has(key: K): boolean {
    return this.entries.has(key);
  }

  get(key: K): V | undefined {
    const value = this.entries.get(key);
    if (value === undefined) {
      return undefined;
    }
    this.entries.delete(key);
    this.entries.set(key, value);
    return value;
  }

  set(key: K, value: V): void {
    if (this.entries.has(key)) {
      this.entries.delete(key);
    }
    this.entries.set(key, value);
    if (this.entries.size > this.maxSize) {
      const oldest = this.entries.keys().next().value;
      if (oldest !== undefined) {
        this.entries.delete(oldest);
      }
    }
  }
}

const jsonCache = new LruCache<string, unknown>(_JSON_CACHE_SIZE);
const textCache = new LruCache<string, string>(_TEXT_CACHE_SIZE);

function cacheSet<K, V>(cache: Map<K, V>, key: K, value: V, maxSize: number): void {
  if (cache.has(key)) {
    cache.delete(key);
  }
  cache.set(key, value);
  if (cache.size > maxSize) {
    const oldest = cache.keys().next().value;
    if (oldest !== undefined) {
      cache.delete(oldest);
    }
  }
}

function asRecord(value: unknown): Record<string, unknown> {
  if (value && typeof value === "object" && !Array.isArray(value)) {
    return value as Record<string, unknown>;
  }
  return {};
}

function asDocsetIndex(value: unknown): DocsetIndex {
  const record = asRecord(value);
  return {
    interfaces: asRecord(record.interfaces) as Record<string, InterfaceIndexEntry>,
    enums: asRecord(record.enums) as Record<string, string>,
  };
}

function asStringList(value: unknown): string[] {
  if (!Array.isArray(value)) {
    return [];
  }
  return value.filter((entry): entry is string => typeof entry === "string");
}

function getString(value: unknown): string {
  return typeof value === "string" ? value : "";
}

export function load_json(filePath: string): unknown {
  const normalizedPath = path.resolve(filePath);
  if (jsonCache.has(normalizedPath)) {
    return jsonCache.get(normalizedPath);
  }
  const data = JSON.parse(fs.readFileSync(normalizedPath, "utf8"));
  jsonCache.set(normalizedPath, data);
  return data;
}

export function loadJson(filePath: string): unknown {
  return load_json(filePath);
}

export function read_text(filePath: string): string {
  const normalizedPath = path.resolve(filePath);
  if (textCache.has(normalizedPath)) {
    return textCache.get(normalizedPath) ?? "";
  }
  const content = fs.readFileSync(normalizedPath, "utf8");
  textCache.set(normalizedPath, content);
  return content;
}

export function readText(filePath: string): string {
  return read_text(filePath);
}

export function tokenize(text: string | null | undefined): string[] {
  if (!text) {
    return [];
  }
  return text.toLowerCase().match(_TOKEN_RE) ?? [];
}

export function score_doc(doc: SearchDocument, tokens: Iterable<string>): number {
  const hayTitle = getString(doc.title).toLowerCase();
  const haySummary = getString(doc.summary).toLowerCase();
  const hayKeywords = asStringList(doc.keywords).join(" ").toLowerCase();
  const hayCategories = asStringList(doc.categories).join(" ").toLowerCase();
  const hayInterface = getString(doc.interface).toLowerCase();
  const hayType = getString(doc.type).toLowerCase();

  let score = 0;
  for (const token of tokens) {
    if (hayTitle.includes(token)) {
      score += 4;
    }
    if (hayKeywords.includes(token)) {
      score += 3;
    }
    if (hayInterface.includes(token)) {
      score += 2;
    }
    if (haySummary.includes(token)) {
      score += 1;
    }
    if (hayCategories.includes(token)) {
      score += 1;
    }
    if (hayType.includes(token)) {
      score += 1;
    }
  }
  return score;
}

export function scoreDoc(doc: SearchDocument, tokens: Iterable<string>): number {
  return score_doc(doc, tokens);
}

export function parse_limit(value: unknown, defaultValue: number | null): number | null {
  if (value === null || value === undefined) {
    return defaultValue;
  }

  let parsed: number;
  if (typeof value === "number") {
    parsed = value;
  } else if (typeof value === "string" && value.trim() !== "") {
    parsed = Number(value);
  } else {
    return defaultValue;
  }

  if (!Number.isInteger(parsed)) {
    return defaultValue;
  }
  if (parsed < 0) {
    return 0;
  }
  return parsed;
}

export function parseLimit(value: unknown, defaultValue: number | null): number | null {
  return parse_limit(value, defaultValue);
}

export function resolve_data_root(envValue?: string | null): string {
  if (envValue) {
    return path.resolve(envValue);
  }
  const currentFile = fileURLToPath(import.meta.url);
  return path.resolve(path.dirname(currentFile), "..", "solidworks-api");
}

export function resolveDataRoot(envValue?: string | null): string {
  return resolve_data_root(envValue);
}

export class DataStore {
  readonly root: string;

  private _index: RootIndex | null = null;
  private _search: SearchIndex | null = null;
  private _json_index: RootIndex | null = null;
  private _json_search: SearchIndex | null = null;
  private _examples_map: Record<string, string[]> | null = null;
  private _progguide_titles: Record<string, SearchDocument> | null = null;
  private _interface_name_lookup = new Map<string, Record<string, string>>();
  private _member_name_lookup = new Map<string, Record<string, string>>();

  private _member_path_cache = new Map<string, string | null>();
  private _interface_path_cache = new Map<string, string | null>();
  private _enum_path_cache = new Map<string, string | null>();
  private _prepared_search_cache = new Map<DocFormat, readonly PreparedDoc[]>();
  private _search_base_cache = new Map<string, readonly BaseScoredDoc[]>();
  private _search_filtered_cache = new Map<string, readonly SearchResult[]>();

  constructor(root: string) {
    this.root = root;
  }

  index(): RootIndex {
    if (this._index === null) {
      this._index = asRecord(load_json(path.join(this.root, "_index.json"))) as RootIndex;
    }
    return this._index;
  }

  search(): SearchIndex {
    if (this._search === null) {
      this._search = asRecord(load_json(path.join(this.root, "_search_index.json"))) as SearchIndex;
    }
    return this._search;
  }

  json_index(): RootIndex {
    if (this._json_index === null) {
      this._json_index = asRecord(
        load_json(path.join(this.root, "json", "_index.json")),
      ) as RootIndex;
    }
    return this._json_index;
  }

  json_search(): SearchIndex {
    if (this._json_search === null) {
      this._json_search = asRecord(
        load_json(path.join(this.root, "json", "_search_index.json")),
      ) as SearchIndex;
    }
    return this._json_search;
  }

  examples_map(): Record<string, string[]> {
    if (this._examples_map !== null) {
      return this._examples_map;
    }

    const mappingPath = path.join(
      this.root,
      "json",
      "sldworksapi",
      "patterns",
      "examples-to-members.json",
    );
    if (!fs.existsSync(mappingPath)) {
      this._examples_map = {};
      return this._examples_map;
    }

    const raw = asRecord(load_json(mappingPath));
    const body = asStringList(raw.body);
    const mapping: Record<string, string[]> = {};

    let currentTitle: string | null = null;
    for (const line of body) {
      if (line.startsWith("## ")) {
        currentTitle = line.slice(3).trim();
        continue;
      }
      const match = _EXAMPLE_MEMBER_RE.exec(line);
      if (match && currentTitle) {
        const member = match[1];
        if (!member) {
          continue;
        }
        if (!mapping[member]) {
          mapping[member] = [];
        }
        mapping[member].push(currentTitle);
      }
    }

    this._examples_map = mapping;
    return this._examples_map;
  }

  progguide_titles(): Record<string, SearchDocument> {
    if (this._progguide_titles !== null) {
      return this._progguide_titles;
    }
    const titles: Record<string, SearchDocument> = {};
    for (const doc of this._search_docs("markdown")) {
      if (doc.docset !== "progguide") {
        continue;
      }
      const title = getString(doc.title);
      if (title) {
        titles[title] = doc;
      }
    }
    this._progguide_titles = titles;
    return this._progguide_titles;
  }

  private _docset_index(docset: string, format: DocFormat): DocsetIndex {
    const source = format === "json" ? this.json_index() : this.index();
    const docsets = asRecord(source.docsets);
    return asDocsetIndex(docsets[docset]);
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
      return path.join(this.root, relativePath);
    }
    return path.join(this.root, docset, relativePath);
  }

  resolve_member_path(
    interfaceName: string | undefined,
    memberName: string | undefined,
    docset: string,
    format: DocFormat,
  ): string | null {
    const key = `${docset}|${format}|${interfaceName ?? ""}|${memberName ?? ""}`;
    if (this._member_path_cache.has(key)) {
      return this._member_path_cache.get(key) ?? null;
    }

    const docsetIndex = this._docset_index(docset, format);
    const interfaces = asRecord(docsetIndex.interfaces);
    const iface = asRecord(interfaces[interfaceName ?? ""]);
    const members = asRecord(iface.members);
    const relativePath = getString(members[memberName ?? ""]) || undefined;
    const fullPath = this._full_doc_path(relativePath, docset, format);
    cacheSet(this._member_path_cache, key, fullPath, _PATH_CACHE_SIZE);
    return fullPath;
  }

  resolve_interface_path(
    interfaceName: string | undefined,
    docset: string,
    format: DocFormat,
  ): string | null {
    const key = `${docset}|${format}|${interfaceName ?? ""}`;
    if (this._interface_path_cache.has(key)) {
      return this._interface_path_cache.get(key) ?? null;
    }

    const docsetIndex = this._docset_index(docset, format);
    const interfaces = asRecord(docsetIndex.interfaces);
    const iface = asRecord(interfaces[interfaceName ?? ""]);
    const relativePath = getString(iface.file) || undefined;
    const fullPath = this._full_doc_path(relativePath, docset, format);
    cacheSet(this._interface_path_cache, key, fullPath, _PATH_CACHE_SIZE);
    return fullPath;
  }

  resolve_enum_path(enumName: string | undefined, docset: string, format: DocFormat): string | null {
    const key = `${docset}|${format}|${enumName ?? ""}`;
    if (this._enum_path_cache.has(key)) {
      return this._enum_path_cache.get(key) ?? null;
    }

    const docsetIndex = this._docset_index(docset, format);
    const enums = asRecord(docsetIndex.enums);
    const relativePath = getString(enums[enumName ?? ""]) || undefined;
    const fullPath = this._full_doc_path(relativePath, docset, format);
    cacheSet(this._enum_path_cache, key, fullPath, _PATH_CACHE_SIZE);
    return fullPath;
  }

  private _search_docs(format: DocFormat): SearchDocument[] {
    const source = format === "json" ? this.json_search() : this.search();
    const documents = source.documents;
    if (!Array.isArray(documents)) {
      return [];
    }
    return documents.filter(
      (entry): entry is SearchDocument =>
        !!entry && typeof entry === "object" && !Array.isArray(entry),
    );
  }

  private _prepared_search_docs(format: DocFormat): readonly PreparedDoc[] {
    const cached = this._prepared_search_cache.get(format);
    if (cached) {
      return cached;
    }

    const prepared: PreparedDoc[] = [];
    for (const doc of this._search_docs(format)) {
      const categories = asStringList(doc.categories);
      prepared.push({
        doc,
        docset: getString(doc.docset),
        type: getString(doc.type),
        interfaceName: getString(doc.interface),
        categories: new Set(categories),
        hayTitle: getString(doc.title).toLowerCase(),
        haySummary: getString(doc.summary).toLowerCase(),
        hayKeywords: asStringList(doc.keywords).join(" ").toLowerCase(),
        hayCategories: categories.join(" ").toLowerCase(),
        hayInterface: getString(doc.interface).toLowerCase(),
        hayType: getString(doc.type).toLowerCase(),
      });
    }

    cacheSet(this._prepared_search_cache, format, prepared, _PREPARED_SEARCH_CACHE_SIZE);
    return prepared;
  }

  private _normalize_query(query: string | null | undefined): string {
    return getString(query).toLowerCase().trim().split(/\s+/).filter(Boolean).join(" ");
  }

  private _search_api_scored_base_cached(
    format: DocFormat,
    queryKey: string,
    docset?: string,
  ): readonly BaseScoredDoc[] {
    const cacheKey = `${format}|${docset ?? ""}|${queryKey}`;
    const cached = this._search_base_cache.get(cacheKey);
    if (cached) {
      return cached;
    }

    const tokens = tokenize(queryKey);
    if (tokens.length === 0) {
      cacheSet(this._search_base_cache, cacheKey, [], _QUERY_CACHE_SIZE);
      return [];
    }

    const scored: BaseScoredDoc[] = [];
    for (const item of this._prepared_search_docs(format)) {
      if (docset && item.docset !== docset) {
        continue;
      }

      let score = 0;
      for (const token of tokens) {
        if (item.hayTitle.includes(token)) {
          score += 4;
        }
        if (item.hayKeywords.includes(token)) {
          score += 3;
        }
        if (item.hayInterface.includes(token)) {
          score += 2;
        }
        if (item.haySummary.includes(token)) {
          score += 1;
        }
        if (item.hayCategories.includes(token)) {
          score += 1;
        }
        if (item.hayType.includes(token)) {
          score += 1;
        }
      }

      if (score > 0) {
        scored.push({
          score,
          doc: item.doc,
          type: item.type,
          interfaceName: item.interfaceName,
          categories: item.categories,
        });
      }
    }
    scored.sort((left, right) => right.score - left.score);
    cacheSet(this._search_base_cache, cacheKey, scored, _QUERY_CACHE_SIZE);
    return scored;
  }

  private _search_api_scored_filtered_cached(
    format: DocFormat,
    queryKey: string,
    docset: string | undefined,
    docType: string | undefined,
    interfaceName: string | undefined,
    categoriesKey: ReadonlySet<string>,
  ): readonly SearchResult[] {
    const categoryToken = Array.from(categoriesKey).sort().join(",");
    const cacheKey = `${format}|${docset ?? ""}|${docType ?? ""}|${interfaceName ?? ""}|${categoryToken}|${queryKey}`;
    const cached = this._search_filtered_cache.get(cacheKey);
    if (cached) {
      return cached;
    }

    const base = this._search_api_scored_base_cached(format, queryKey, docset);
    if (base.length === 0) {
      cacheSet(this._search_filtered_cache, cacheKey, [], _FILTER_CACHE_SIZE);
      return [];
    }

    const filtered: SearchResult[] = [];
    for (const item of base) {
      if (docType && item.type !== docType) {
        continue;
      }
      if (interfaceName && item.interfaceName !== interfaceName) {
        continue;
      }
      if (categoriesKey.size > 0) {
        let containsAll = true;
        for (const category of categoriesKey) {
          if (!item.categories.has(category)) {
            containsAll = false;
            break;
          }
        }
        if (!containsAll) {
          continue;
        }
      }

      filtered.push({ score: item.score, doc: item.doc });
    }

    cacheSet(this._search_filtered_cache, cacheKey, filtered, _FILTER_CACHE_SIZE);
    return filtered;
  }

  search_api_scored(
    query: string,
    options: {
      docset?: string | undefined;
      fmt?: DocFormat | undefined;
      doc_type?: string | undefined;
      interface?: string | undefined;
      categories?: Iterable<string> | undefined;
      limit?: unknown;
    } = {},
  ): SearchResult[] {
    const format = options.fmt ?? "markdown";
    const queryKey = this._normalize_query(query);
    const categoriesKey = new Set(Array.from(options.categories ?? []));
    const scored = this._search_api_scored_filtered_cached(
      format,
      queryKey,
      options.docset,
      options.doc_type,
      options.interface,
      categoriesKey,
    );

    const parsedLimit = parse_limit(options.limit, null);
    if (parsedLimit === 0) {
      return [];
    }
    if (parsedLimit === null) {
      return [...scored];
    }
    return scored.slice(0, parsedLimit);
  }

  search_api_scored_limited(
    query: string,
    options: {
      limit?: unknown;
      docset?: string | undefined;
      fmt?: DocFormat | undefined;
      doc_type?: string | undefined;
      interface?: string | undefined;
      categories?: Iterable<string> | undefined;
    } = {},
  ): SearchResult[] {
    return this.search_api_scored(query, options);
  }

  search_api(
    query: string,
    options: { limit?: number | null; docset?: string; fmt?: DocFormat } = {},
  ): SearchDocument[] {
    const queryKey = this._normalize_query(query);
    const format = options.fmt ?? "markdown";
    const scored = this._search_api_scored_base_cached(format, queryKey, options.docset);
    if (options.limit === null || options.limit === undefined) {
      return scored.map((item) => item.doc);
    }
    return scored.slice(0, options.limit).map((item) => item.doc);
  }

  private _get_interface_entry(
    interfaceName: string | undefined,
    docset: string,
  ): [string | null, InterfaceIndexEntry | null] {
    if (!interfaceName) {
      return [null, null];
    }

    const docsetIndex = this._docset_index(docset, "json");
    const interfaces = asRecord(docsetIndex.interfaces) as Record<string, InterfaceIndexEntry>;
    if (interfaces[interfaceName]) {
      return [interfaceName, interfaces[interfaceName]];
    }

    let lookup = this._interface_name_lookup.get(docset);
    if (!lookup) {
      lookup = {};
      for (const name of Object.keys(interfaces)) {
        const lowered = name.toLowerCase();
        if (!(lowered in lookup)) {
          lookup[lowered] = name;
        }
      }
      this._interface_name_lookup.set(docset, lookup);
    }

    const resolved = lookup[interfaceName.toLowerCase()];
    if (!resolved) {
      return [null, null];
    }
    return [resolved, interfaces[resolved] ?? null];
  }

  private _get_member_entry(
    interfaceName: string | undefined,
    memberName: string | undefined,
    docset: string,
  ): [string | null, string | null, string | null] {
    const [resolvedInterface, iface] = this._get_interface_entry(interfaceName, docset);
    if (!iface || !memberName || !resolvedInterface) {
      return [resolvedInterface, null, null];
    }

    const members = asRecord(iface.members) as Record<string, string>;
    if (members[memberName]) {
      return [resolvedInterface, memberName, members[memberName] ?? null];
    }

    const lookupKey = `${docset}|${resolvedInterface}`;
    let lookup = this._member_name_lookup.get(lookupKey);
    if (!lookup) {
      lookup = {};
      for (const name of Object.keys(members)) {
        const lowered = name.toLowerCase();
        if (!(lowered in lookup)) {
          lookup[lowered] = name;
        }
      }
      this._member_name_lookup.set(lookupKey, lookup);
    }

    const resolvedMember = lookup[memberName.toLowerCase()];
    if (!resolvedMember) {
      return [resolvedInterface, null, null];
    }
    return [resolvedInterface, resolvedMember, members[resolvedMember] ?? null];
  }

  get_interface_info(
    interfaceName: string | undefined,
    docset = "sldworksapi",
  ): Record<string, unknown> | null {
    const [resolvedInterface, iface] = this._get_interface_entry(interfaceName, docset);
    if (!iface || !resolvedInterface) {
      return null;
    }

    const interfaceFile = getString(iface.file);
    if (!interfaceFile) {
      return null;
    }

    const fullPath = path.join(this.root, interfaceFile);
    const data = load_json(fullPath);
    const members = Object.keys(asRecord(iface.members)).sort();

    return {
      interface: resolvedInterface,
      docset,
      path: fullPath,
      member_count: typeof iface.member_count === "number" ? iface.member_count : members.length,
      members,
      data,
    };
  }

  get_method_info(
    interfaceName: string | undefined,
    methodName: string | undefined,
    docset = "sldworksapi",
  ): Record<string, unknown> | null {
    const [resolvedInterface, resolvedMember, relativePath] = this._get_member_entry(
      interfaceName,
      methodName,
      docset,
    );
    if (!resolvedInterface || !resolvedMember || !relativePath) {
      return null;
    }
    const fullPath = path.join(this.root, relativePath);
    const data = load_json(fullPath);
    return {
      interface: resolvedInterface,
      member: resolvedMember,
      docset,
      path: fullPath,
      data,
    };
  }
}
