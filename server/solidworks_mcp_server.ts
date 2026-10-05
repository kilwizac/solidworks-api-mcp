import fs from "node:fs";
import path from "node:path";
import readline from "node:readline";
import { fileURLToPath } from "node:url";

import { Outbox } from "./outbox";
import { validateArguments } from "./schema";
import { _EXAMPLE_MEMBER_RE, DataStore, type DataStoreLike } from "./store";
import { SolidWorksTools, type ToolResult } from "./tools";
import type { JsonRpcId, JsonRpcRequest } from "./types";
import { asRecord, parse_limit, resolve_data_root } from "./util";

export { _EXAMPLE_MEMBER_RE, DataStore, parse_limit, resolve_data_root, SolidWorksTools };
export type { DataStoreLike };

/** Newest first. The client's requested version is echoed back when we support it. */
const SUPPORTED_PROTOCOL_VERSIONS = ["2025-06-18", "2025-03-26", "2024-11-05"] as const;
const SERVER_NAME = "solidworks-mcp";
const SERVER_TITLE = "SolidWorks API Documentation";

const INSTRUCTIONS =
  "Documentation server for the SolidWorks API. Typical flow: solidworks_search_api to find a member by " +
  "keywords, a description or a (partial) API name; solidworks_lookup_method for its full page; " +
  "solidworks_find_related and solidworks_get_examples for related members and example code. " +
  "Use solidworks_get_enum_values for sw*_e constants and solidworks_get_interface_members to see what an " +
  "interface offers. Names are case-insensitive; solidworks_list_docsets and solidworks_list_names show what " +
  "exists. A failed lookup returns a tool error with suggestions.";

const JSON_RPC_INVALID_REQUEST = -32600;
const JSON_RPC_METHOD_NOT_FOUND = -32601;
const JSON_RPC_INVALID_PARAMS = -32602;
const JSON_RPC_INTERNAL_ERROR = -32603;
const JSON_RPC_PARSE_ERROR = -32700;

const TOOL_SCHEMAS = new Map(
  SolidWorksTools.definitions.map((tool) => [tool.name, tool.inputSchema] as const),
);

function readServerVersion(): string {
  try {
    const manifest = asRecord(
      JSON.parse(fs.readFileSync(new URL("../package.json", import.meta.url), "utf8")),
    );
    return typeof manifest.version === "string" ? manifest.version : "0.0.0";
  } catch {
    return "0.0.0";
  }
}

const SERVER_VERSION = readServerVersion();

function getErrorMessage(error: unknown): string {
  return error instanceof Error && error.message ? error.message : "Unexpected tool failure";
}

function isRequestId(value: unknown): value is JsonRpcId {
  return value === null || typeof value === "string" || typeof value === "number";
}

export class MCPServer {
  readonly tools: SolidWorksTools;
  private readonly store: DataStoreLike;
  private readonly outbox: Outbox;
  /** Collects responses while a JSON-RPC batch is being handled. */
  private batchResponses: unknown[] | null = null;

  constructor(store: DataStoreLike, outbox: Outbox = new Outbox()) {
    this.store = store;
    this.tools = new SolidWorksTools(store);
    this.outbox = outbox;
  }

  send(payload: unknown): void {
    if (this.batchResponses) {
      this.batchResponses.push(payload);
      return;
    }
    this.outbox.write(`${JSON.stringify(payload)}\n`);
  }

  error(requestId: JsonRpcId | undefined, code: number, message: string): void {
    if (requestId === undefined) {
      return;
    }
    this.send({ jsonrpc: "2.0", id: requestId, error: { code, message } });
  }

  result(requestId: JsonRpcId | undefined, result: unknown): void {
    if (requestId === undefined) {
      return;
    }
    this.send({ jsonrpc: "2.0", id: requestId, result });
  }

  handle_initialize(requestId: JsonRpcId | undefined, params: Record<string, unknown>): void {
    const requested = params.protocolVersion;
    const protocolVersion =
      SUPPORTED_PROTOCOL_VERSIONS.find((version) => version === requested) ??
      SUPPORTED_PROTOCOL_VERSIONS[0];
    this.result(requestId, {
      protocolVersion,
      capabilities: { tools: { listChanged: false } },
      serverInfo: { name: SERVER_NAME, title: SERVER_TITLE, version: SERVER_VERSION },
      instructions: INSTRUCTIONS,
    });
  }

  handle_tools_list(requestId: JsonRpcId | undefined): void {
    this.result(requestId, { tools: SolidWorksTools.definitions });
  }

  private tool_result(requestId: JsonRpcId | undefined, payload: unknown, isError: boolean): void {
    const content = [{ type: "text", text: JSON.stringify(payload) }];
    this.result(requestId, isError ? { content, isError: true } : { content });
  }

  handle_tools_call(requestId: JsonRpcId | undefined, params: Record<string, unknown>): void {
    const toolName = typeof params.name === "string" ? params.name : "";
    const schema = TOOL_SCHEMAS.get(toolName);
    if (!schema || !this.tools.has(toolName)) {
      this.error(requestId, JSON_RPC_INVALID_PARAMS, `Unknown tool: ${toolName}`);
      return;
    }

    const rawArgs = params.arguments;
    const problems =
      rawArgs !== undefined && rawArgs !== null && (typeof rawArgs !== "object" || Array.isArray(rawArgs))
        ? ["arguments must be an object"]
        : validateArguments(schema, asRecord(rawArgs));
    if (problems.length > 0) {
      this.tool_result(requestId, { error: "Invalid arguments", message: problems.join("; ") }, true);
      return;
    }

    let result: ToolResult;
    try {
      result = this.tools.call(toolName, asRecord(rawArgs));
    } catch (error) {
      this.tool_result(
        requestId,
        { error: "Internal error", message: getErrorMessage(error) },
        true,
      );
      return;
    }
    // Tools report expected failures (not found, unknown docset, ...) as `{ error }`.
    this.tool_result(requestId, result, typeof result.error === "string");
  }

  handle(message: JsonRpcRequest): void {
    const method: unknown = message.method;
    const requestId: unknown = message.id;
    if (requestId !== undefined && !isRequestId(requestId)) {
      this.error(null, JSON_RPC_INVALID_REQUEST, "Invalid Request");
      return;
    }
    // A response from the client: this server never sends requests, so there is nothing to match.
    if (method === undefined && ("result" in message || "error" in message)) {
      return;
    }
    if (typeof method !== "string") {
      this.error(requestId, JSON_RPC_INVALID_REQUEST, "Invalid Request");
      return;
    }
    const params = asRecord(message.params);

    // Notifications never get a reply, even if a non-compliant client attaches an id.
    if (method === "initialized" || method === "notifications/initialized") {
      this.scheduleWarmup();
      return;
    }
    if (method.startsWith("notifications/")) {
      return;
    }

    switch (method) {
      case "initialize":
        this.handle_initialize(requestId, params);
        return;
      case "ping":
        this.result(requestId, {});
        return;
      case "tools/list":
        this.handle_tools_list(requestId);
        return;
      case "tools/call":
        this.handle_tools_call(requestId, params);
        return;
      default:
        this.error(requestId, JSON_RPC_METHOD_NOT_FOUND, "Method not found");
    }
  }

  handle_raw_line(rawLine: string): void {
    const line = rawLine.trim();
    if (!line) {
      return;
    }

    let parsed: unknown;
    try {
      parsed = JSON.parse(line);
    } catch {
      this.error(null, JSON_RPC_PARSE_ERROR, "Parse error");
      return;
    }
    if (Array.isArray(parsed) && parsed.length > 0) {
      this.handle_batch(parsed);
      return;
    }
    this.dispatch(parsed);
  }

  /** JSON-RPC batch (allowed up to protocol 2025-03-26): one array holding every reply. */
  private handle_batch(entries: unknown[]): void {
    const responses: unknown[] = [];
    this.batchResponses = responses;
    try {
      for (const entry of entries) {
        this.dispatch(entry);
      }
    } finally {
      this.batchResponses = null;
    }
    if (responses.length > 0) {
      this.send(responses);
    }
  }

  private dispatch(parsed: unknown): void {
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) {
      this.error(null, JSON_RPC_INVALID_REQUEST, "Invalid Request");
      return;
    }

    const message = parsed as JsonRpcRequest;
    try {
      this.handle(message);
    } catch (error) {
      process.stderr.write(`Unhandled error: ${getErrorMessage(error)}\n`);
      // Notifications (no id) never get a reply, not even an error.
      const replyId = message.id === undefined ? undefined : isRequestId(message.id) ? message.id : null;
      this.error(replyId, JSON_RPC_INTERNAL_ERROR, "Internal error");
    }
  }

  /** Builds the search index right after the handshake so the first query isn't slow. */
  private scheduleWarmup(): void {
    const warmup = this.store.warmup;
    if (typeof warmup !== "function") {
      return;
    }
    setImmediate(() => {
      try {
        warmup.call(this.store);
      } catch (error) {
        process.stderr.write(`Warmup failed: ${getErrorMessage(error)}\n`);
      }
    });
  }
}

export async function main(): Promise<void> {
  const root = resolve_data_root(process.env.SW_API_DATA_ROOT);
  if (!fs.existsSync(root) || !fs.statSync(root).isDirectory()) {
    process.stderr.write(`Data root not found: ${root}\n`);
    process.exit(1);
  }

  // A client that goes away mid-write is a normal shutdown, not a crash.
  process.stdout.on("error", (error: NodeJS.ErrnoException) => {
    if (error.code === "EPIPE") {
      process.exit(0);
    }
    throw error;
  });

  const server = new MCPServer(new DataStore(root));
  const input = readline.createInterface({
    input: process.stdin,
    crlfDelay: Infinity,
  });

  for await (const rawLine of input) {
    server.handle_raw_line(rawLine);
  }
}

const isMainModule = process.argv[1]
  ? path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)
  : false;

if (isMainModule) {
  void main();
}
