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
import { asRecord, asStringList, getString, load_json, parse_limit, resolve_within_root } from "./util";

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
  search_api_scored(query: string, options?: SearchOptions): SearchResult[];
  /** Optional: pre-build lazy structures so the first query is fast. */
  warmup?(): void;
}

export class DataStore implements DataStoreLike {
  readonly root: string;

  private _index: RootIndex | null = null;
  private _search: SearchIndex | null = null;
  private _json_index: RootIndex | null = null;
  private _json_search: SearchIndex | null = null;
  private _examples_map: Record<string, string[]> | null = null;
  private _progguide_titles: Record<string, SearchDocument> | null = null;
  private readonly _engines = new Map<DocFormat, SearchEngine>();

  constructor(root: string) {
    this.root = root;
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

    const mapping = new Map<string, string[]>();
    let currentTitle: string | null = null;
    for (const line of asStringList(asRecord(load_json(mappingPath)).body)) {
      if (line.startsWith("## ")) {
        currentTitle = line.slice(3).trim();
        continue;
      }
      const member = _EXAMPLE_MEMBER_RE.exec(line)?.[1];
      if (member && currentTitle) {
        const titles = mapping.get(member);
        if (titles) {
          titles.push(currentTitle);
        } else {
          mapping.set(member, [currentTitle]);
        }
      }
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
    this._progguide_titles = Object.fromEntries(titles);
    return this._progguide_titles;
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
      return resolve_within_root(this.root, relativePath);
    }
    return resolve_within_root(this.root, docset, relativePath);
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
