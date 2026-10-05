import { catalogFor, type Catalog } from "./catalog";
import type { DataStoreLike } from "./store";
import { suggestNames } from "./suggest";
import type { DocFormat, SearchResult, ToolDefinition } from "./types";
import { asRecord, load_json, parse_limit, read_text } from "./util";

export type ToolArguments = Record<string, unknown>;
/** A tool's payload. Expected failures are reported as `{ error: string, ... }`. */
export type ToolResult = Record<string, unknown>;

const DEFAULT_SEARCH_LIMIT = 10;
const DEFAULT_RELATED_LIMIT = 20;
const DEFAULT_EXAMPLES_LIMIT = 10;
const DEFAULT_LIST_LIMIT = 100;
const MAX_SUGGESTIONS = 5;

const DOCSET_DESCRIPTIONS: Record<string, string> = {
  sldworksapi: "SOLIDWORKS API reference: interfaces with their methods, properties and events.",
  swconst: "SOLIDWORKS API constants: enumerations (sw*_e) with their values.",
  progguide: "Programming guide: worked example code.",
};

const READ_ONLY = {
  readOnlyHint: true,
  destructiveHint: false,
  idempotentHint: true,
  openWorldHint: false,
} as const;

const FORMAT_PROPERTY = {
  type: "string",
  enum: ["markdown", "json"],
  description: "Document format: 'markdown' (readable) or 'json' (structured).",
} as const;

const DOCSET_PROPERTY = {
  type: "string",
  description:
    "Documentation set: 'sldworksapi' (API reference), 'swconst' (enum constants) or 'progguide' (examples). See solidworks_list_docsets.",
} as const;

const INTERFACE_PROPERTY = {
  type: "string",
  description: "Interface name, e.g. 'IModelDocExtension'. Case-insensitive.",
} as const;

const MEMBER_PROPERTY = {
  type: "string",
  description: "Method, property or event name, e.g. 'SelectByID2'. Case-insensitive.",
} as const;

const TOOL_DEFINITIONS: readonly ToolDefinition[] = [
  {
    name: "solidworks_search_api",
    title: "Search SolidWorks API",
    description:
      "Search the SolidWorks API docs by keywords, a natural-language description, or part of an API name " +
      "('SelectByID2', 'IModelDocExtension.SelectByID2', 'create extrusion feature'). Returns ranked hits " +
      "(id, type, interface, title, summary, path). Start here when you don't know the exact interface or member, " +
      "then call solidworks_lookup_method for the full page.",
    inputSchema: {
      type: "object",
      properties: {
        query: { type: "string", description: "Keywords, a description, or an API name." },
        docset: DOCSET_PROPERTY,
        type: {
          type: "string",
          description: "Restrict to one kind: 'method', 'property', 'interface', 'enum' or 'pattern'.",
        },
        interface: { ...INTERFACE_PROPERTY, description: "Restrict to members of this interface." },
        categories: {
          type: "array",
          items: { type: "string" },
          description: "Only docs tagged with all of these categories (e.g. 'selections').",
        },
        limit: {
          type: "integer",
          description: `Maximum number of hits (default ${DEFAULT_SEARCH_LIMIT}).`,
        },
        format: FORMAT_PROPERTY,
        verbose: {
          type: "boolean",
          description: "Include each hit's full keyword list (larger output).",
        },
      },
      required: ["query"],
    },
    annotations: { title: "Search SolidWorks API", ...READ_ONLY },
  },
  {
    name: "solidworks_lookup_method",
    title: "Look up API member",
    description:
      "Get the full documentation page (signature, parameters, return value, remarks, examples) for one " +
      "interface member, e.g. interface 'IModelDocExtension', member 'SelectByID2'. If the member isn't found, " +
      "the error lists close matches and the interfaces that do declare it.",
    inputSchema: {
      type: "object",
      properties: {
        interface: INTERFACE_PROPERTY,
        member: MEMBER_PROPERTY,
        docset: DOCSET_PROPERTY,
        format: FORMAT_PROPERTY,
      },
      required: ["interface", "member"],
    },
    annotations: { title: "Look up API member", ...READ_ONLY },
  },
  {
    name: "solidworks_get_interface_members",
    title: "List interface members",
    description: "List the names of every member (method, property, event) of an interface.",
    inputSchema: {
      type: "object",
      properties: {
        interface: INTERFACE_PROPERTY,
        docset: DOCSET_PROPERTY,
        format: FORMAT_PROPERTY,
      },
      required: ["interface"],
    },
    annotations: { title: "List interface members", ...READ_ONLY },
  },
  {
    name: "solidworks_get_enum_values",
    title: "Get enum values",
    description: "Get the members, numeric values and descriptions of a SolidWorks enum, e.g. 'swSelectType_e'.",
    inputSchema: {
      type: "object",
      properties: {
        enum: { type: "string", description: "Enum name, e.g. 'swSelectType_e'. Case-insensitive." },
        docset: DOCSET_PROPERTY,
        format: FORMAT_PROPERTY,
      },
      required: ["enum"],
    },
    annotations: { title: "Get enum values", ...READ_ONLY },
  },
  {
    name: "solidworks_find_related",
    title: "Find related members",
    description: "Members related to an interface member (the 'See also' links of its documentation page).",
    inputSchema: {
      type: "object",
      properties: {
        interface: INTERFACE_PROPERTY,
        member: MEMBER_PROPERTY,
        docset: DOCSET_PROPERTY,
        limit: {
          type: "integer",
          description: `Maximum number of related members (default ${DEFAULT_RELATED_LIMIT}).`,
        },
      },
      required: ["interface", "member"],
    },
    annotations: { title: "Find related members", ...READ_ONLY },
  },
  {
    name: "solidworks_get_examples",
    title: "Find example code",
    description:
      "Find example code. With interface + member: that member's own examples plus programming-guide examples " +
      "that use it. With query: search the programming-guide examples by keywords.",
    inputSchema: {
      type: "object",
      properties: {
        interface: INTERFACE_PROPERTY,
        member: MEMBER_PROPERTY,
        query: { type: "string", description: "Keywords to search the programming-guide examples." },
        limit: {
          type: "integer",
          description: `Maximum number of examples of each kind (default ${DEFAULT_EXAMPLES_LIMIT}).`,
        },
        docset: {
          ...DOCSET_PROPERTY,
          description: "Defaults to 'sldworksapi' for interface + member, 'progguide' for query.",
        },
        verbose: {
          type: "boolean",
          description: "Include each search hit's full keyword list (larger output).",
        },
      },
    },
    annotations: { title: "Find example code", ...READ_ONLY },
  },
  {
    name: "solidworks_list_docsets",
    title: "List documentation sets",
    description:
      "List the available docsets (valid values for the 'docset' argument) with how many interfaces and enums each holds.",
    inputSchema: { type: "object", properties: {} },
    annotations: { title: "List documentation sets", ...READ_ONLY },
  },
  {
    name: "solidworks_list_names",
    title: "List interface or enum names",
    description:
      "List interface names (sldworksapi) or enum names (swconst), optionally filtered by a substring. " +
      "Use it to discover valid names for the other tools.",
    inputSchema: {
      type: "object",
      properties: {
        docset: DOCSET_PROPERTY,
        kind: {
          type: "string",
          enum: ["interface", "enum"],
          description: "What to list. Defaults to whatever the docset contains.",
        },
        filter: { type: "string", description: "Only names containing this text (case-insensitive)." },
        limit: {
          type: "integer",
          description: `Maximum number of names (default ${DEFAULT_LIST_LIMIT}).`,
        },
      },
    },
    annotations: { title: "List interface or enum names", ...READ_ONLY },
  },
];

const TOOL_METHODS = {
  solidworks_search_api: "search_api",
  solidworks_lookup_method: "lookup_method",
  solidworks_get_interface_members: "get_interface_members",
  solidworks_get_enum_values: "get_enum_values",
  solidworks_find_related: "find_related",
  solidworks_get_examples: "get_examples",
  solidworks_list_docsets: "list_docsets",
  solidworks_list_names: "list_names",
} as const;

function str(value: unknown): string | undefined {
  return typeof value === "string" && value.trim() !== "" ? value : undefined;
}

function asDocFormat(value: unknown, fallback: DocFormat): DocFormat {
  return value === "json" || value === "markdown" ? value : fallback;
}

function strings(value: unknown): string[] {
  return Array.isArray(value)
    ? value.filter((entry): entry is string => typeof entry === "string")
    : [];
}

function isMarkdownTableSeparator(cols: string[]): boolean {
  return cols.every((col) => /^:?-{3,}:?$/.test(col));
}

/** Drops the (large, noisy) keyword list unless the caller asked for everything. */
function slimDoc(doc: Record<string, unknown>, verbose: boolean): Record<string, unknown> {
  if (verbose) {
    return doc;
  }
  const { keywords: _keywords, ...rest } = doc;
  return rest;
}

function slimResults(results: SearchResult[], verbose: boolean): SearchResult[] {
  return verbose ? results : results.map((hit) => ({ ...hit, doc: slimDoc(hit.doc, false) }));
}

const _lowercasedExampleMaps = new WeakMap<object, Map<string, string[]>>();

/**
 * Titles of programming-guide examples mapped to `Interface.Member`. Tries the
 * exact key first, then falls back to a case-insensitive match so documents
 * that spell the name differently from the index still link up.
 */
function exampleTitles(
  mapping: Record<string, string[]>,
  interfaceName: string,
  memberName: string,
): string[] {
  const key = `${interfaceName}.${memberName}`;
  if (Object.prototype.hasOwnProperty.call(mapping, key)) {
    return mapping[key] ?? [];
  }

  let lowered = _lowercasedExampleMaps.get(mapping);
  if (!lowered) {
    lowered = new Map();
    for (const [name, titles] of Object.entries(mapping)) {
      const loweredName = name.toLowerCase();
      lowered.set(loweredName, [...new Set([...(lowered.get(loweredName) ?? []), ...titles])]);
    }
    _lowercasedExampleMaps.set(mapping, lowered);
  }
  return lowered.get(key.toLowerCase()) ?? [];
}

export class SolidWorksTools {
  static readonly definitions: readonly ToolDefinition[] = TOOL_DEFINITIONS;
  static readonly methods = TOOL_METHODS;

  private readonly handlers = new Map<string, (args: ToolArguments) => ToolResult>();

  constructor(private readonly store: DataStoreLike) {
    for (const [toolName, method] of Object.entries(TOOL_METHODS)) {
      this.handlers.set(toolName, (args) => this[method](args));
    }
  }

  has(toolName: string): boolean {
    return this.handlers.has(toolName);
  }

  call(toolName: string, args: ToolArguments): ToolResult {
    const handler = this.handlers.get(toolName);
    if (!handler) {
      throw new Error(`Unknown tool: ${toolName}`);
    }
    return handler(args);
  }

  private catalog(format: DocFormat): Catalog {
    return catalogFor(format === "json" ? this.store.json_index() : this.store.index());
  }

  private unknownDocset(docset: string, catalog: Catalog): ToolResult | null {
    if (catalog.hasDocset(docset)) {
      return null;
    }
    const available = catalog.docsets();
    return {
      error: "Unknown docset",
      message: `Docset '${docset}' does not exist. Available: ${available.join(", ") || "(none)"}.`,
      available,
    };
  }

  private memberNotFound(
    catalog: Catalog,
    docset: string,
    interfaceName: string | undefined,
    memberName: string | undefined,
  ): ToolResult {
    const found = catalog.findInterface(docset, interfaceName);
    if (!found) {
      return {
        error: "Not found",
        message: `Interface '${interfaceName ?? ""}' not found in docset '${docset}'.`,
        suggestions: suggestNames(interfaceName, catalog.interfaceNames(docset), MAX_SUGGESTIONS),
      };
    }
    const declaredOn = memberName
      ? catalog.interfacesWithMember(docset, memberName).slice(0, MAX_SUGGESTIONS)
      : [];
    return {
      error: "Not found",
      message: `Member '${memberName ?? ""}' not found on ${found.name}.`,
      suggestions: suggestNames(memberName, catalog.memberNames(docset, found.name), MAX_SUGGESTIONS),
      ...(declaredOn.length > 0 ? { declared_on: declaredOn } : {}),
    };
  }

  search_api(args: ToolArguments): ToolResult {
    const query = str(args.query) ?? "";
    const docset = str(args.docset);
    const format = asDocFormat(args.format, "markdown");
    const limit = parse_limit(args.limit, DEFAULT_SEARCH_LIMIT);

    const results = this.store.search_api_scored(query, {
      docset,
      fmt: format,
      doc_type: str(args.type),
      interface: str(args.interface),
      categories: new Set(strings(args.categories)),
      limit,
    });

    const payload: ToolResult = { results: slimResults(results, args.verbose === true) };
    if (results.length === 0 && docset) {
      const unknown = this.unknownDocset(docset, this.catalog(format));
      if (unknown) {
        payload.note = unknown.message;
      }
    }
    return payload;
  }

  lookup_method(args: ToolArguments): ToolResult {
    const interfaceName = str(args.interface);
    const memberName = str(args.member);
    const docset = str(args.docset) ?? "sldworksapi";
    const format = asDocFormat(args.format, "markdown");
    const catalog = this.catalog(format);

    const unknown = this.unknownDocset(docset, catalog);
    if (unknown) {
      return unknown;
    }
    const resolvedPath = this.store.resolve_member_path(interfaceName, memberName, docset, format);
    if (!resolvedPath) {
      return this.memberNotFound(catalog, docset, interfaceName, memberName);
    }

    const canonical = catalog.findMember(docset, interfaceName, memberName);
    const names = {
      interface: canonical?.interface ?? interfaceName,
      member: canonical?.member ?? memberName,
    };
    if (format === "json") {
      return { ...names, path: resolvedPath, data: load_json(resolvedPath) };
    }
    return { ...names, path: resolvedPath, content: read_text(resolvedPath) };
  }

  get_interface_members(args: ToolArguments): ToolResult {
    const docset = str(args.docset) ?? "sldworksapi";
    const catalog = this.catalog(asDocFormat(args.format, "markdown"));

    const unknown = this.unknownDocset(docset, catalog);
    if (unknown) {
      return unknown;
    }
    const interfaceName = str(args.interface);
    const found = catalog.findInterface(docset, interfaceName);
    if (!found) {
      return this.memberNotFound(catalog, docset, interfaceName, undefined);
    }

    const members = Object.keys(asRecord(found.entry.members)).sort();
    const memberCount =
      typeof found.entry.member_count === "number" ? found.entry.member_count : members.length;
    return { interface: found.name, member_count: memberCount, members };
  }

  get_enum_values(args: ToolArguments): ToolResult {
    const enumName = str(args.enum);
    const docset = str(args.docset) ?? "swconst";
    const format = asDocFormat(args.format, "json");
    const catalog = this.catalog(format);

    const unknown = this.unknownDocset(docset, catalog);
    if (unknown) {
      return unknown;
    }
    const resolvedPath = this.store.resolve_enum_path(enumName, docset, format);
    if (!resolvedPath) {
      return {
        error: "Not found",
        message: `Enum '${enumName ?? ""}' not found in docset '${docset}'.`,
        suggestions: suggestNames(enumName, catalog.enumNames(docset), MAX_SUGGESTIONS),
      };
    }
    const name = catalog.findEnum(docset, enumName)?.name ?? enumName;

    if (format === "json") {
      const data = asRecord(load_json(resolvedPath));
      const values = Array.isArray(data.values) ? data.values : [];
      return { enum: name, values, path: resolvedPath };
    }

    const values: Array<Record<string, string>> = [];
    let inTable = false;
    for (const line of read_text(resolvedPath).split(/\r?\n/)) {
      if (line.trim().startsWith("| Member")) {
        inTable = true;
        continue;
      }
      if (!inTable) {
        continue;
      }
      if (!line.trim().startsWith("|")) {
        break;
      }
      const cols = line
        .trim()
        .replace(/^\|/, "")
        .replace(/\|$/, "")
        .split("|")
        .map((value) => value.trim());
      if (cols.length >= 3 && !isMarkdownTableSeparator(cols)) {
        values.push({
          member: (cols[0] ?? "").replace(/^`+|`+$/g, ""),
          value: cols[1] ?? "",
          description: cols[2] ?? "",
        });
      }
    }
    return { enum: name, values, path: resolvedPath };
  }

  find_related(args: ToolArguments): ToolResult {
    const interfaceName = str(args.interface);
    const memberName = str(args.member);
    const docset = str(args.docset) ?? "sldworksapi";
    const limit = parse_limit(args.limit, DEFAULT_RELATED_LIMIT) ?? DEFAULT_RELATED_LIMIT;
    const catalog = this.catalog("json");

    const unknown = this.unknownDocset(docset, catalog);
    if (unknown) {
      return unknown;
    }
    const resolvedPath = this.store.resolve_member_path(interfaceName, memberName, docset, "json");
    if (!resolvedPath) {
      return this.memberNotFound(catalog, docset, interfaceName, memberName);
    }

    const canonical = catalog.findMember(docset, interfaceName, memberName);
    const data = asRecord(load_json(resolvedPath));
    const related = Array.isArray(data.related) ? data.related : [];
    return {
      interface: canonical?.interface ?? interfaceName,
      member: canonical?.member ?? memberName,
      related: related.slice(0, limit),
    };
  }

  get_examples(args: ToolArguments): ToolResult {
    const interfaceName = str(args.interface);
    const memberName = str(args.member);
    const query = str(args.query);
    const docset = str(args.docset);
    const limit = parse_limit(args.limit, DEFAULT_EXAMPLES_LIMIT) ?? DEFAULT_EXAMPLES_LIMIT;
    const verbose = args.verbose === true;

    if (interfaceName && memberName) {
      const memberDocset = docset ?? "sldworksapi";
      const catalog = this.catalog("json");
      const unknown = this.unknownDocset(memberDocset, catalog);
      if (unknown) {
        return unknown;
      }
      const resolvedPath = this.store.resolve_member_path(
        interfaceName,
        memberName,
        memberDocset,
        "json",
      );
      if (!resolvedPath) {
        return this.memberNotFound(catalog, memberDocset, interfaceName, memberName);
      }

      const canonical = catalog.findMember(memberDocset, interfaceName, memberName);
      const names = {
        interface: canonical?.interface ?? interfaceName,
        member: canonical?.member ?? memberName,
      };
      const data = asRecord(load_json(resolvedPath));
      const examples = Array.isArray(data.examples) ? data.examples : [];

      const docsByTitle = this.store.progguide_titles();
      const related: Array<Record<string, unknown>> = [];
      for (const title of exampleTitles(this.store.examples_map(), names.interface, names.member)) {
        const doc = Object.prototype.hasOwnProperty.call(docsByTitle, title)
          ? docsByTitle[title]
          : undefined;
        if (doc) {
          related.push(slimDoc(doc, verbose));
        }
      }

      return {
        member: `${names.interface}.${names.member}`,
        examples: examples.slice(0, limit),
        related_examples: related.slice(0, limit),
      };
    }

    if (query) {
      const results = this.store.search_api_scored(query, {
        docset: docset ?? "progguide",
        limit,
      });
      return { results: slimResults(results, verbose) };
    }

    return {
      error: "No query or member provided",
      message: "Pass interface and member, or a query to search the programming-guide examples.",
    };
  }

  list_docsets(_args: ToolArguments): ToolResult {
    const catalog = this.catalog("markdown");
    return {
      docsets: catalog.docsets().map((name) => ({
        docset: name,
        interfaces: catalog.interfaceNames(name).length,
        enums: catalog.enumNames(name).length,
        ...(DOCSET_DESCRIPTIONS[name] ? { description: DOCSET_DESCRIPTIONS[name] } : {}),
      })),
    };
  }

  list_names(args: ToolArguments): ToolResult {
    const docset = str(args.docset) ?? "sldworksapi";
    const catalog = this.catalog("markdown");
    const unknown = this.unknownDocset(docset, catalog);
    if (unknown) {
      return unknown;
    }

    const interfaces = catalog.interfaceNames(docset);
    const enums = catalog.enumNames(docset);
    const kind =
      args.kind === "interface" || args.kind === "enum"
        ? args.kind
        : interfaces.length > 0 || enums.length === 0
          ? "interface"
          : "enum";
    const filter = str(args.filter)?.toLowerCase();
    const limit = parse_limit(args.limit, DEFAULT_LIST_LIMIT) ?? DEFAULT_LIST_LIMIT;

    const matching = (kind === "interface" ? interfaces : enums)
      .filter((name) => !filter || name.toLowerCase().includes(filter))
      .sort((left, right) => left.localeCompare(right, "en", { sensitivity: "base" }));
    return {
      docset,
      kind,
      total: matching.length,
      names: matching.slice(0, limit),
      truncated: matching.length > limit,
    };
  }
}
