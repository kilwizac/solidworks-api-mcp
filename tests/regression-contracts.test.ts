import fs from "node:fs";
import os from "node:os";
import path from "node:path";

import { describe, expect, it } from "vitest";

import {
  DataStore,
  MCPServer,
  score_doc,
  tokenize,
} from "../server/solidworks_mcp_server";
import type { DocFormat, RootIndex, SearchResult } from "../server/types";

type SearchDoc = {
  title?: string;
  summary?: string;
  keywords?: string[] | null;
  categories?: string[] | null;
  interface?: string | null;
  type?: string | null;
  docset?: string | null;
  [key: string]: unknown;
};

function asRecord(value: unknown): Record<string, unknown> {
  if (value && typeof value === "object" && !Array.isArray(value)) {
    return value as Record<string, unknown>;
  }
  return {};
}

function asStringArray(value: unknown): string[] {
  if (!Array.isArray(value)) {
    return [];
  }
  return value.filter((entry): entry is string => typeof entry === "string");
}

function writeJson(filePath: string, data: unknown): void {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, JSON.stringify(data), "utf8");
}

class FakeStore {
  readonly root: string;
  private readonly _searchData: { documents: SearchDoc[] };
  private readonly _jsonSearchData: { documents: SearchDoc[] };
  private readonly _indexData: RootIndex;
  private readonly _jsonIndexData: RootIndex;
  private readonly _examplesMapData: Record<string, string[]>;
  private readonly _progguideTitlesData: Record<string, Record<string, unknown>>;

  constructor(options: {
    root?: string;
    searchDocs?: SearchDoc[];
    jsonSearchDocs?: SearchDoc[];
    indexData?: RootIndex;
    jsonIndexData?: RootIndex;
    examplesMapData?: Record<string, string[]>;
    progguideTitlesData?: Record<string, Record<string, unknown>>;
  } = {}) {
    this.root = options.root ?? "";
    this._searchData = { documents: [...(options.searchDocs ?? [])] };
    this._jsonSearchData = {
      documents: [...(options.jsonSearchDocs ?? options.searchDocs ?? [])],
    };
    this._indexData = options.indexData ?? { docsets: {} };
    this._jsonIndexData = options.jsonIndexData ?? { docsets: {} };
    this._examplesMapData = options.examplesMapData ?? {};
    this._progguideTitlesData = options.progguideTitlesData ?? {};
  }

  index(): RootIndex {
    return this._indexData;
  }

  search(): { documents: SearchDoc[] } {
    return this._searchData;
  }

  json_index(): RootIndex {
    return this._jsonIndexData;
  }

  json_search(): { documents: SearchDoc[] } {
    return this._jsonSearchData;
  }

  examples_map(): Record<string, string[]> {
    return this._examplesMapData;
  }

  progguide_titles(): Record<string, Record<string, unknown>> {
    return this._progguideTitlesData;
  }

  private _docset_index(docset: string, format: DocFormat): Record<string, unknown> {
    const source = format === "json" ? this._jsonIndexData : this._indexData;
    const docsets = asRecord(source.docsets);
    return asRecord(docsets[docset]);
  }

  private _full_doc_path(relativePath: string | undefined, docset: string, format: DocFormat): string | null {
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
    const index = this._docset_index(docset, format);
    const interfaces = asRecord(index.interfaces);
    const iface = asRecord(interfaces[interfaceName ?? ""]);
    const members = asRecord(iface.members);
    const relativePath = members[memberName ?? ""];
    return this._full_doc_path(
      typeof relativePath === "string" ? relativePath : undefined,
      docset,
      format,
    );
  }

  resolve_interface_path(
    interfaceName: string | undefined,
    docset: string,
    format: DocFormat,
  ): string | null {
    const index = this._docset_index(docset, format);
    const interfaces = asRecord(index.interfaces);
    const iface = asRecord(interfaces[interfaceName ?? ""]);
    const relativePath = iface.file;
    return this._full_doc_path(
      typeof relativePath === "string" ? relativePath : undefined,
      docset,
      format,
    );
  }

  resolve_enum_path(enumName: string | undefined, docset: string, format: DocFormat): string | null {
    const index = this._docset_index(docset, format);
    const enums = asRecord(index.enums);
    const relativePath = enums[enumName ?? ""];
    return this._full_doc_path(
      typeof relativePath === "string" ? relativePath : undefined,
      docset,
      format,
    );
  }

  search_api_scored(
    query: string,
    options: {
      docset?: string;
      fmt?: DocFormat;
      doc_type?: string;
      interface?: string;
      categories?: Iterable<string>;
    } = {},
  ): SearchResult[] {
    const docs = (options.fmt ?? "markdown") === "json"
      ? this._jsonSearchData.documents
      : this._searchData.documents;
    const tokens = tokenize(query);
    const categoryFilter = new Set(Array.from(options.categories ?? []));
    const scored: SearchResult[] = [];

    for (const doc of docs) {
      if (options.docset && doc.docset !== options.docset) {
        continue;
      }
      if (options.doc_type && doc.type !== options.doc_type) {
        continue;
      }
      if (options.interface && doc.interface !== options.interface) {
        continue;
      }
      if (categoryFilter.size > 0) {
        const docCategories = new Set(asStringArray(doc.categories));
        let containsAll = true;
        for (const category of categoryFilter) {
          if (!docCategories.has(category)) {
            containsAll = false;
            break;
          }
        }
        if (!containsAll) {
          continue;
        }
      }
      const score = score_doc(doc, tokens);
      if (score > 0) {
        scored.push({ score, doc });
      }
    }

    scored.sort((left, right) => right.score - left.score);
    return scored;
  }
}

describe("Search filtering contracts", () => {
  it("search combines all filters", () => {
    const docs: SearchDoc[] = [
      {
        title: "Target Match",
        summary: "Feature creation details",
        keywords: ["feature", "create"],
        categories: ["api", "automation"],
        interface: "IFeatureManager",
        type: "method",
        docset: "sldworksapi",
      },
      {
        title: "Wrong Docset",
        summary: "Feature creation details",
        keywords: ["feature", "create"],
        categories: ["api", "automation"],
        interface: "IFeatureManager",
        type: "method",
        docset: "progguide",
      },
      {
        title: "Wrong Type",
        summary: "Feature creation details",
        keywords: ["feature", "create"],
        categories: ["api", "automation"],
        interface: "IFeatureManager",
        type: "property",
        docset: "sldworksapi",
      },
      {
        title: "Wrong Interface",
        summary: "Feature creation details",
        keywords: ["feature", "create"],
        categories: ["api", "automation"],
        interface: "ISldWorks",
        type: "method",
        docset: "sldworksapi",
      },
      {
        title: "Missing Category",
        summary: "Feature creation details",
        keywords: ["feature", "create"],
        categories: ["api"],
        interface: "IFeatureManager",
        type: "method",
        docset: "sldworksapi",
      },
    ];

    const server = new MCPServer(new FakeStore({ searchDocs: docs }));
    const result = server.tool_search_api({
      query: "create feature",
      docset: "sldworksapi",
      type: "method",
      interface: "IFeatureManager",
      categories: ["api", "automation"],
      limit: "10",
    });

    const results = result.results as SearchResult[];
    expect(results).toHaveLength(1);
    expect(results[0]?.doc.title).toBe("Target Match");
  });

  it("search categories filter is safe when doc categories are missing", () => {
    const docs: SearchDoc[] = [
      {
        title: "Has Categories",
        summary: "Feature info",
        keywords: ["feature"],
        categories: ["api"],
        interface: "IFeatureManager",
        type: "method",
        docset: "sldworksapi",
      },
      {
        title: "No Categories",
        summary: "Feature info",
        keywords: ["feature"],
        categories: null,
        interface: "IFeatureManager",
        type: "method",
        docset: "sldworksapi",
      },
    ];

    const server = new MCPServer(new FakeStore({ searchDocs: docs }));
    const result = server.tool_search_api({
      query: "feature",
      categories: ["api"],
      docset: "sldworksapi",
    });

    const titles = (result.results as SearchResult[]).map((item) => item.doc.title);
    expect(titles).toEqual(["Has Categories"]);
  });
});

describe("Limit parsing contracts", () => {
  const docs: SearchDoc[] = [
    {
      title: "Feature A",
      summary: "feature docs",
      keywords: ["feature"],
      categories: ["api"],
      interface: "IFoo",
      type: "method",
      docset: "sldworksapi",
    },
    {
      title: "Feature B",
      summary: "feature docs",
      keywords: ["feature"],
      categories: ["api"],
      interface: "IFoo",
      type: "method",
      docset: "sldworksapi",
    },
    {
      title: "Feature C",
      summary: "feature docs",
      keywords: ["feature"],
      categories: ["api"],
      interface: "IFoo",
      type: "method",
      docset: "sldworksapi",
    },
  ];

  it("search limit parses numeric string", () => {
    const server = new MCPServer(new FakeStore({ searchDocs: docs }));
    const result = server.tool_search_api({ query: "feature", limit: "2" });
    expect((result.results as SearchResult[])).toHaveLength(2);
  });

  it("search negative limit is clamped to zero", () => {
    const server = new MCPServer(new FakeStore({ searchDocs: docs }));
    const result = server.tool_search_api({ query: "feature", limit: -1 });
    expect(result.results).toEqual([]);
  });

  it("member tool limits parse strings and clamp negatives", () => {
    const tempRoot = fs.mkdtempSync(path.join(os.tmpdir(), "sw-mcp-"));
    try {
      const relativePath = "json/sldworksapi/interfaces/IFoo/members/Bar.json";
      const memberFile = path.join(
        tempRoot,
        "json",
        "sldworksapi",
        "interfaces",
        "IFoo",
        "members",
        "Bar.json",
      );
      writeJson(memberFile, { related: ["A", "B", "C"], examples: [{ title: "Primary" }] });

      const searchDocs: SearchDoc[] = [
        {
          title: "Macro Guide A",
          summary: "macro feature walkthrough",
          keywords: ["macro"],
          categories: ["guide"],
          interface: "",
          type: "guide",
          docset: "progguide",
        },
        {
          title: "Macro Guide B",
          summary: "macro setup",
          keywords: ["macro"],
          categories: ["guide"],
          interface: "",
          type: "guide",
          docset: "progguide",
        },
      ];

      const store = new FakeStore({
        root: tempRoot,
        searchDocs,
        jsonIndexData: {
          docsets: {
            sldworksapi: {
              interfaces: {
                IFoo: {
                  members: {
                    Bar: relativePath,
                  },
                },
              },
            },
          },
        },
        examplesMapData: { "IFoo.Bar": ["Guide 1", "Guide 2"] },
        progguideTitlesData: {
          "Guide 1": { title: "Guide 1" },
          "Guide 2": { title: "Guide 2" },
        },
      });
      const server = new MCPServer(store);

      const related = server.tool_find_related({ interface: "IFoo", member: "Bar", limit: "2" });
      expect(related.related).toEqual(["A", "B"]);

      const queryExamples = server.tool_get_examples({ query: "macro", limit: "1" });
      expect((queryExamples.results as SearchResult[])).toHaveLength(1);

      const negativeRelated = server.tool_find_related({ interface: "IFoo", member: "Bar", limit: -1 });
      expect(negativeRelated.related).toEqual([]);

      const negativeQuery = server.tool_get_examples({ query: "macro", limit: -1 });
      expect(negativeQuery.results).toEqual([]);

      const negativeMemberExamples = server.tool_get_examples({
        interface: "IFoo",
        member: "Bar",
        limit: -1,
      });
      expect(negativeMemberExamples.related_examples).toEqual([]);
    } finally {
      fs.rmSync(tempRoot, { recursive: true, force: true });
    }
  });
});

describe("Missing docs and error safety", () => {
  it("lookup method returns not found for missing member", () => {
    const store = new FakeStore({
      root: "C:/tmp/unused",
      indexData: { docsets: { sldworksapi: { interfaces: {} } } },
      jsonIndexData: { docsets: { sldworksapi: { interfaces: {} } } },
    });
    const server = new MCPServer(store);
    expect(server.tool_lookup_method({ interface: "IFoo", member: "Bar" })).toEqual({
      error: "Not found",
    });
  });

  it("get examples returns not found for missing member", () => {
    const store = new FakeStore({
      root: "C:/tmp/unused",
      jsonIndexData: { docsets: { sldworksapi: { interfaces: {} } } },
    });
    const server = new MCPServer(store);
    expect(server.tool_get_examples({ interface: "IFoo", member: "Bar" })).toEqual({
      error: "Not found",
    });
  });

  it("get examples ignores missing related titles", () => {
    const tempRoot = fs.mkdtempSync(path.join(os.tmpdir(), "sw-mcp-"));
    try {
      const relativePath = "json/sldworksapi/interfaces/IFoo/members/Bar.json";
      const memberFile = path.join(
        tempRoot,
        "json",
        "sldworksapi",
        "interfaces",
        "IFoo",
        "members",
        "Bar.json",
      );
      writeJson(memberFile, { examples: [{ title: "Primary" }] });

      const store = new FakeStore({
        root: tempRoot,
        jsonIndexData: {
          docsets: {
            sldworksapi: {
              interfaces: {
                IFoo: {
                  members: { Bar: relativePath },
                },
              },
            },
          },
        },
        examplesMapData: { "IFoo.Bar": ["Known Guide", "Unknown Guide"] },
        progguideTitlesData: { "Known Guide": { title: "Known Guide", docset: "progguide" } },
      });
      const server = new MCPServer(store);

      const result = server.tool_get_examples({
        interface: "IFoo",
        member: "Bar",
        limit: 10,
      });

      const related = result.related_examples as Array<Record<string, unknown>>;
      expect(related.map((item) => item.title)).toEqual(["Known Guide"]);
    } finally {
      fs.rmSync(tempRoot, { recursive: true, force: true });
    }
  });

  it("examples map is empty when mapping file is missing", () => {
    const tempRoot = fs.mkdtempSync(path.join(os.tmpdir(), "sw-mcp-"));
    try {
      const store = new DataStore(tempRoot);
      expect(store.examples_map()).toEqual({});
      expect(store.examples_map()).toEqual({});
    } finally {
      fs.rmSync(tempRoot, { recursive: true, force: true });
    }
  });
});
