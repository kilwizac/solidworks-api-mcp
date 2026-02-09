import fs from "node:fs";
import path from "node:path";
import readline from "node:readline";
import { fileURLToPath } from "node:url";

import {
  _EXAMPLE_MEMBER_RE,
  _TOKEN_RE,
  DataStore,
  load_json,
  parse_limit,
  read_text,
  resolve_data_root,
  score_doc,
  tokenize,
} from "./solidworks_server_shared";
import type {
  DocFormat,
  JsonRpcId,
  JsonRpcRequest,
  RootIndex,
  SearchResult,
  ToolDefinition,
} from "./types";

export {
  _EXAMPLE_MEMBER_RE,
  _TOKEN_RE,
  DataStore,
  parse_limit,
  resolve_data_root,
  score_doc,
  tokenize,
};

const PROTOCOL_VERSION = "2024-11-05";
const SERVER_NAME = "solidworks-mcp";
const SERVER_VERSION = "0.1.0";

function asRecord(value: unknown): Record<string, unknown> {
  if (value && typeof value === "object" && !Array.isArray(value)) {
    return value as Record<string, unknown>;
  }
  return {};
}

function getString(value: unknown): string | undefined {
  return typeof value === "string" ? value : undefined;
}

function asDocFormat(value: unknown, fallback: DocFormat): DocFormat {
  return value === "json" ? "json" : fallback;
}

function asStringArray(value: unknown): string[] {
  if (!Array.isArray(value)) {
    return [];
  }
  return value.filter((entry): entry is string => typeof entry === "string");
}

function _dumps_json(payload: unknown): string {
  return JSON.stringify(payload);
}

const _INITIALIZE_RESULT = {
  protocolVersion: PROTOCOL_VERSION,
  capabilities: {
    tools: { listChanged: false },
  },
  serverInfo: { name: SERVER_NAME, version: SERVER_VERSION },
};

const _TOOLS_LIST_RESULT: { tools: ToolDefinition[] } = {
  tools: [
    {
      name: "solidworks_lookup_method",
      description: "Lookup a method/property/event by interface + member.",
      inputSchema: {
        type: "object",
        properties: {
          interface: { type: "string" },
          member: { type: "string" },
          docset: { type: "string" },
          format: { type: "string", enum: ["markdown", "json"] },
        },
        required: ["interface", "member"],
      },
    },
    {
      name: "solidworks_search_api",
      description: "Search the SolidWorks API corpus by keywords or concepts.",
      inputSchema: {
        type: "object",
        properties: {
          query: { type: "string" },
          docset: { type: "string" },
          type: { type: "string" },
          interface: { type: "string" },
          categories: { type: "array", items: { type: "string" } },
          limit: { type: "integer" },
          format: { type: "string", enum: ["markdown", "json"] },
        },
        required: ["query"],
      },
    },
    {
      name: "solidworks_get_interface_members",
      description: "List all members of an interface.",
      inputSchema: {
        type: "object",
        properties: {
          interface: { type: "string" },
          docset: { type: "string" },
          format: { type: "string", enum: ["markdown", "json"] },
        },
        required: ["interface"],
      },
    },
    {
      name: "solidworks_get_enum_values",
      description: "Get enum member values and descriptions.",
      inputSchema: {
        type: "object",
        properties: {
          enum: { type: "string" },
          docset: { type: "string" },
          format: { type: "string", enum: ["markdown", "json"] },
        },
        required: ["enum"],
      },
    },
    {
      name: "solidworks_find_related",
      description: "Find related members for a given interface/member.",
      inputSchema: {
        type: "object",
        properties: {
          interface: { type: "string" },
          member: { type: "string" },
          docset: { type: "string" },
          limit: { type: "integer" },
        },
        required: ["interface", "member"],
      },
    },
    {
      name: "solidworks_get_examples",
      description: "Find example code by member or free-text query.",
      inputSchema: {
        type: "object",
        properties: {
          interface: { type: "string" },
          member: { type: "string" },
          query: { type: "string" },
          limit: { type: "integer" },
          docset: { type: "string" },
        },
      },
    },
  ],
};

export interface DataStoreLike {
  index(): RootIndex;
  search(): { documents?: unknown[] };
  json_index(): RootIndex;
  json_search(): { documents?: unknown[] };
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
  resolve_enum_path(
    enumName: string | undefined,
    docset: string,
    format: DocFormat,
  ): string | null;
  search_api_scored(
    query: string,
    options?: {
      docset?: string | undefined;
      fmt?: DocFormat | undefined;
      doc_type?: string | undefined;
      interface?: string | undefined;
      categories?: Iterable<string> | undefined;
      limit?: unknown;
    },
  ): SearchResult[];
  search_api_scored_limited?: (
    query: string,
    options?: {
      limit?: unknown;
      docset?: string | undefined;
      fmt?: DocFormat | undefined;
      doc_type?: string | undefined;
      interface?: string | undefined;
      categories?: Iterable<string> | undefined;
    },
  ) => SearchResult[];
}

type ToolArguments = Record<string, unknown>;
type ToolResult = Record<string, unknown>;
type ToolHandler = (args: ToolArguments) => ToolResult;

export class MCPServer {
  private readonly store: DataStoreLike;
  private readonly _write: (text: string) => boolean;
  private readonly _flush: () => void;
  private readonly _tool_handlers: Record<string, ToolHandler>;

  static readonly _TOOL_DISPATCH = {
    solidworks_lookup_method: "tool_lookup_method",
    solidworks_search_api: "tool_search_api",
    solidworks_get_interface_members: "tool_get_interface_members",
    solidworks_get_enum_values: "tool_get_enum_values",
    solidworks_find_related: "tool_find_related",
    solidworks_get_examples: "tool_get_examples",
  } as const;

  constructor(store: DataStoreLike) {
    this.store = store;
    this._write = (text) => process.stdout.write(text);
    this._flush = () => {
      process.stdout.write("");
    };
    this._tool_handlers = {};

    for (const [toolName, handlerName] of Object.entries(MCPServer._TOOL_DISPATCH)) {
      const handler = (this as unknown as Record<string, unknown>)[handlerName];
      if (typeof handler === "function") {
        this._tool_handlers[toolName] = (handler as ToolHandler).bind(this);
      }
    }
  }

  send(payload: unknown): void {
    this._write(_dumps_json(payload));
    this._write("\n");
    this._flush();
  }

  error(requestId: JsonRpcId | undefined, code: number, message: string): void {
    this.send({ jsonrpc: "2.0", id: requestId, error: { code, message } });
  }

  result(requestId: JsonRpcId | undefined, result: unknown): void {
    this.send({ jsonrpc: "2.0", id: requestId, result });
  }

  handle_initialize(requestId: JsonRpcId | undefined): void {
    this.result(requestId, _INITIALIZE_RESULT);
  }

  handle_tools_list(requestId: JsonRpcId | undefined): void {
    this.result(requestId, _TOOLS_LIST_RESULT);
  }

  resolve_member_path(
    interfaceName: string | undefined,
    memberName: string | undefined,
    docset: string,
    format: DocFormat,
  ): string | null {
    return this.store.resolve_member_path(interfaceName, memberName, docset, format);
  }

  resolve_interface_path(
    interfaceName: string | undefined,
    docset: string,
    format: DocFormat,
  ): string | null {
    return this.store.resolve_interface_path(interfaceName, docset, format);
  }

  resolve_enum_path(enumName: string | undefined, docset: string, format: DocFormat): string | null {
    return this.store.resolve_enum_path(enumName, docset, format);
  }

  private _search_api_scored(
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
    if (typeof this.store.search_api_scored_limited === "function") {
      return this.store.search_api_scored_limited(query, options);
    }

    const results = this.store.search_api_scored(query, {
      docset: options.docset,
      fmt: options.fmt,
      doc_type: options.doc_type,
      interface: options.interface,
      categories: options.categories,
    });

    if (options.limit === undefined || options.limit === null) {
      return results;
    }
    const parsedLimit = parse_limit(options.limit, null);
    if (parsedLimit === null) {
      return results;
    }
    return results.slice(0, parsedLimit);
  }

  tool_lookup_method(args: ToolArguments): ToolResult {
    const interfaceName = getString(args.interface);
    const memberName = getString(args.member);
    const docset = getString(args.docset) ?? "sldworksapi";
    const format = asDocFormat(args.format, "markdown");

    const resolvedPath = this.resolve_member_path(interfaceName, memberName, docset, format);
    if (!resolvedPath) {
      return { error: "Not found" };
    }

    if (format === "json") {
      return { path: resolvedPath, data: load_json(resolvedPath) as unknown };
    }
    return { path: resolvedPath, content: read_text(resolvedPath) };
  }

  tool_search_api(args: ToolArguments): ToolResult {
    const query = getString(args.query) ?? "";
    const docset = getString(args.docset);
    const docType = getString(args.type);
    const interfaceName = getString(args.interface);
    const categories = new Set(asStringArray(args.categories));
    const limit = parse_limit(args.limit, 20);
    const format = asDocFormat(args.format, "markdown");

    const results = this._search_api_scored(query, {
      docset,
      fmt: format,
      doc_type: docType,
      interface: interfaceName,
      categories,
      limit,
    });

    return { results };
  }

  tool_get_interface_members(args: ToolArguments): ToolResult {
    const interfaceName = getString(args.interface);
    const docset = getString(args.docset) ?? "sldworksapi";
    const format = asDocFormat(args.format, "markdown");

    const rootIndex = format === "json" ? this.store.json_index() : this.store.index();
    const docsets = asRecord(rootIndex.docsets);
    const docsetEntry = asRecord(docsets[docset]);
    const interfaces = asRecord(docsetEntry.interfaces);
    const iface = asRecord(interfaces[interfaceName ?? ""]);
    if (Object.keys(iface).length === 0) {
      return { error: "Not found" };
    }

    const members = Object.keys(asRecord(iface.members)).sort();
    const memberCountValue = iface.member_count;
    const memberCount = typeof memberCountValue === "number" ? memberCountValue : members.length;

    return {
      interface: interfaceName,
      member_count: memberCount,
      members,
    };
  }

  tool_get_enum_values(args: ToolArguments): ToolResult {
    const enumName = getString(args.enum);
    const docset = getString(args.docset) ?? "swconst";
    const format = asDocFormat(args.format, "json");
    const resolvedPath = this.resolve_enum_path(enumName, docset, format);

    if (!resolvedPath) {
      return { error: "Not found" };
    }

    if (format === "json") {
      const data = asRecord(load_json(resolvedPath));
      const values = Array.isArray(data.values) ? data.values : [];
      return { enum: enumName, values, path: resolvedPath };
    }

    const text = read_text(resolvedPath);
    const values: Array<Record<string, string>> = [];
    let inTable = false;
    for (const line of text.split(/\r?\n/)) {
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
      if (cols.length >= 3) {
        const member = cols[0] ?? "";
        const enumValue = cols[1] ?? "";
        const description = cols[2] ?? "";
        values.push({
          member: member.replace(/^`+|`+$/g, ""),
          value: enumValue,
          description,
        });
      }
    }
    return { enum: enumName, values, path: resolvedPath };
  }

  tool_find_related(args: ToolArguments): ToolResult {
    const interfaceName = getString(args.interface);
    const memberName = getString(args.member);
    const docset = getString(args.docset) ?? "sldworksapi";
    const limit = parse_limit(args.limit, 20);
    const resolvedPath = this.resolve_member_path(interfaceName, memberName, docset, "json");

    if (!resolvedPath) {
      return { error: "Not found" };
    }

    const data = asRecord(load_json(resolvedPath));
    const related = Array.isArray(data.related) ? data.related : [];
    const parsedLimit = limit ?? related.length;
    return {
      interface: interfaceName,
      member: memberName,
      related: related.slice(0, parsedLimit),
    };
  }

  tool_get_examples(args: ToolArguments): ToolResult {
    const interfaceName = getString(args.interface);
    const memberName = getString(args.member);
    const query = getString(args.query);
    const limit = parse_limit(args.limit, 10);

    if (interfaceName && memberName) {
      const resolvedPath = this.resolve_member_path(interfaceName, memberName, "sldworksapi", "json");
      if (!resolvedPath) {
        return { error: "Not found" };
      }

      const data = asRecord(load_json(resolvedPath));
      const examples = Array.isArray(data.examples) ? data.examples : [];

      const mapping = this.store.examples_map();
      const titles = mapping[`${interfaceName}.${memberName}`] ?? [];
      const docsByTitle = this.store.progguide_titles();
      const extra: Array<Record<string, unknown>> = [];
      for (const title of titles) {
        const doc = docsByTitle[title];
        if (doc) {
          extra.push(doc);
        }
      }

      const parsedLimit = limit ?? extra.length;
      return {
        member: `${interfaceName}.${memberName}`,
        examples,
        related_examples: extra.slice(0, parsedLimit),
      };
    }

    if (query) {
      const results = this._search_api_scored(query, { docset: "progguide", limit });
      return { results };
    }

    return { error: "No query or member provided" };
  }

  handle_tools_call(requestId: JsonRpcId | undefined, params: Record<string, unknown>): void {
    const toolName = getString(params.name);
    const toolArgs = asRecord(params.arguments);
    if (!toolName) {
      this.error(requestId, -32601, "Unknown tool");
      return;
    }

    const handler = this._tool_handlers[toolName];
    if (!handler) {
      this.error(requestId, -32601, "Unknown tool");
      return;
    }

    const result = handler(toolArgs);
    const serialized = _dumps_json(result);
    this.result(requestId, { content: [{ type: "text", text: serialized }] });
  }

  handle(message: JsonRpcRequest): void {
    const method = getString(message.method);
    const requestId = message.id;
    const params = asRecord(message.params);

    if (method === "initialize") {
      this.handle_initialize(requestId);
      return;
    }
    if (method === "tools/list") {
      this.handle_tools_list(requestId);
      return;
    }
    if (method === "tools/call") {
      this.handle_tools_call(requestId, params);
      return;
    }
    if (method === "initialized") {
      return;
    }

    if (requestId !== null && requestId !== undefined) {
      this.error(requestId, -32601, "Method not found");
    }
  }
}

export async function main(): Promise<void> {
  const root = resolve_data_root(process.env.SW_API_DATA_ROOT);
  if (!fs.existsSync(root) || !fs.statSync(root).isDirectory()) {
    process.stderr.write(`Data root not found: ${root}\n`);
    process.exit(1);
  }

  const store = new DataStore(root);
  const server = new MCPServer(store);
  const input = readline.createInterface({
    input: process.stdin,
    crlfDelay: Infinity,
  });

  for await (const rawLine of input) {
    const line = rawLine.trim();
    if (!line) {
      continue;
    }

    try {
      const parsed = JSON.parse(line) as JsonRpcRequest;
      server.handle(parsed);
    } catch {
      continue;
    }
  }
}

const isMainModule = process.argv[1]
  ? path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)
  : false;

if (isMainModule) {
  void main();
}
