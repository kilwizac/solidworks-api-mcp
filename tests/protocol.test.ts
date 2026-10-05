import { spawn, spawnSync } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { afterEach, describe, expect, it, vi } from "vitest";

import { Outbox, type WritableLike } from "../server/outbox";
import { MCPServer, SolidWorksTools, type DataStoreLike } from "../server/solidworks_mcp_server";

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const serverEntry = path.join(repoRoot, "server", "solidworks_mcp_server.ts");
const manifest = JSON.parse(fs.readFileSync(path.join(repoRoot, "package.json"), "utf8")) as {
  version: string;
};

function emptyStore(overrides: Partial<DataStoreLike> = {}): DataStoreLike {
  return {
    root: "",
    index: () => ({ docsets: { sldworksapi: { interfaces: {}, enums: {} } } }),
    json_index: () => ({ docsets: { sldworksapi: { interfaces: {}, enums: {} } } }),
    examples_map: () => ({}),
    progguide_titles: () => ({}),
    resolve_member_path: () => null,
    resolve_interface_path: () => null,
    resolve_enum_path: () => null,
    search_api_scored: () => [],
    ...overrides,
  };
}

type Message = Record<string, unknown>;

function harness(store: DataStoreLike = emptyStore()) {
  const chunks: string[] = [];
  const stream: WritableLike = {
    write: (chunk) => {
      chunks.push(chunk);
      return true;
    },
    once: () => undefined,
  };
  const server = new MCPServer(store, new Outbox(() => stream));
  const sendRaw = (line: string): unknown[] => {
    chunks.length = 0;
    server.handle_raw_line(line);
    return chunks.join("").split("\n").filter(Boolean).map((output) => JSON.parse(output) as unknown);
  };
  const send = (message: Message): Message[] => sendRaw(JSON.stringify(message)) as Message[];
  return { server, send, sendRaw };
}

afterEach(() => {
  vi.restoreAllMocks();
});

describe("initialize", () => {
  it("echoes a supported protocol version and describes the server", () => {
    const { send } = harness();
    for (const version of ["2024-11-05", "2025-03-26", "2025-06-18"]) {
      const [response] = send({
        jsonrpc: "2.0",
        id: 1,
        method: "initialize",
        params: { protocolVersion: version },
      });
      const result = response?.result as Record<string, unknown>;
      expect(result.protocolVersion).toBe(version);
      expect(result.capabilities).toEqual({ tools: { listChanged: false } });
      expect(result.serverInfo).toMatchObject({ name: "solidworks-mcp", version: manifest.version });
      expect(String(result.instructions)).toContain("solidworks_search_api");
    }
  });

  it("answers with its newest version when the client's is unknown or missing", () => {
    const { send } = harness();
    for (const params of [{ protocolVersion: "1999-01-01" }, {}, undefined]) {
      const [response] = send({ jsonrpc: "2.0", id: 1, method: "initialize", params });
      expect((response?.result as Record<string, unknown>).protocolVersion).toBe("2025-06-18");
    }
  });
});

describe("tools/list", () => {
  const { send } = harness();
  const [response] = send({ jsonrpc: "2.0", id: 1, method: "tools/list" });
  const tools = (response?.result as { tools: Array<Record<string, unknown>> }).tools;

  it("describes every tool completely", () => {
    expect(tools.length).toBeGreaterThanOrEqual(8);
    expect(new Set(tools.map((tool) => tool.name)).size).toBe(tools.length);
    for (const tool of tools) {
      expect(String(tool.name)).toMatch(/^solidworks_[a-z_]+$/);
      expect(String(tool.title).length).toBeGreaterThan(0);
      expect(String(tool.description).length).toBeGreaterThan(20);
      expect(tool.annotations).toMatchObject({ readOnlyHint: true, destructiveHint: false });

      const schema = tool.inputSchema as {
        type: string;
        properties: Record<string, { type?: string; description?: string }>;
        required?: string[];
      };
      expect(schema.type).toBe("object");
      for (const required of schema.required ?? []) {
        expect(schema.properties).toHaveProperty(required);
      }
      for (const [name, property] of Object.entries(schema.properties)) {
        expect(property.description, `${tool.name}.${name}`).toBeTruthy();
      }
    }
  });

  it("matches the handler registry", () => {
    expect(new Set(tools.map((tool) => tool.name))).toEqual(
      new Set(Object.keys(SolidWorksTools.methods)),
    );
    for (const method of Object.values(SolidWorksTools.methods)) {
      expect(typeof SolidWorksTools.prototype[method]).toBe("function");
    }
  });
});

describe("JSON-RPC handling", () => {
  it("answers ping and unknown methods", () => {
    const { send } = harness();
    expect(send({ jsonrpc: "2.0", id: 1, method: "ping" })).toEqual([
      { jsonrpc: "2.0", id: 1, result: {} },
    ]);
    expect(send({ jsonrpc: "2.0", id: 2, method: "resources/list" })).toEqual([
      { jsonrpc: "2.0", id: 2, error: { code: -32601, message: "Method not found" } },
    ]);
    expect(send({ jsonrpc: "2.0", method: "resources/list" })).toEqual([]);
  });

  it("never replies to notifications, even with an id", () => {
    const { send } = harness();
    for (const method of ["notifications/initialized", "notifications/cancelled", "initialized"]) {
      expect(send({ jsonrpc: "2.0", id: 5, method })).toEqual([]);
      expect(send({ jsonrpc: "2.0", method })).toEqual([]);
    }
  });

  it("rejects malformed requests", () => {
    const { send } = harness();
    expect(send({ jsonrpc: "2.0", id: 1 })).toEqual([
      { jsonrpc: "2.0", id: 1, error: { code: -32600, message: "Invalid Request" } },
    ]);
    expect(send({ jsonrpc: "2.0", id: 1, method: 7 })).toEqual([
      { jsonrpc: "2.0", id: 1, error: { code: -32600, message: "Invalid Request" } },
    ]);
    expect(send({ jsonrpc: "2.0", id: { nested: true }, method: "ping" })).toEqual([
      { jsonrpc: "2.0", id: null, error: { code: -32600, message: "Invalid Request" } },
    ]);
  });

  it("reports unexpected failures as internal errors, not parse errors", () => {
    const { server, send } = harness();
    const stderr = vi.spyOn(process.stderr, "write").mockImplementation(() => true);
    vi.spyOn(server, "handle_initialize").mockImplementation(() => {
      throw new Error("kaput");
    });

    expect(send({ jsonrpc: "2.0", id: 9, method: "initialize" })).toEqual([
      { jsonrpc: "2.0", id: 9, error: { code: -32603, message: "Internal error" } },
    ]);
    expect(stderr).toHaveBeenCalledWith(expect.stringContaining("kaput"));

    // Even a failing notification gets no reply.
    expect(send({ jsonrpc: "2.0", method: "initialize" })).toEqual([]);
  });

  it("ignores responses sent by the client", () => {
    const { send } = harness();
    expect(send({ jsonrpc: "2.0", id: 4, result: {} })).toEqual([]);
    expect(send({ jsonrpc: "2.0", id: 4, error: { code: -1, message: "no" } })).toEqual([]);
  });

  it("answers a batch with one array, skipping notifications", () => {
    const { sendRaw } = harness();
    const replies = sendRaw(
      JSON.stringify([
        { jsonrpc: "2.0", id: 1, method: "ping" },
        { jsonrpc: "2.0", method: "notifications/initialized" },
        7,
        { jsonrpc: "2.0", id: 2, method: "nope" },
      ]),
    );
    expect(replies).toEqual([
      [
        { jsonrpc: "2.0", id: 1, result: {} },
        { jsonrpc: "2.0", id: null, error: { code: -32600, message: "Invalid Request" } },
        { jsonrpc: "2.0", id: 2, error: { code: -32601, message: "Method not found" } },
      ],
    ]);

    // A batch of notifications gets no reply at all; an empty batch is invalid.
    expect(sendRaw(JSON.stringify([{ jsonrpc: "2.0", method: "notifications/initialized" }]))).toEqual(
      [],
    );
    expect(sendRaw("[]")).toEqual([
      { jsonrpc: "2.0", id: null, error: { code: -32600, message: "Invalid Request" } },
    ]);
  });
});

describe("tools/call", () => {
  const call = (send: ReturnType<typeof harness>["send"], name: string, args?: unknown) => {
    const [response] = send({
      jsonrpc: "2.0",
      id: 1,
      method: "tools/call",
      params: { name, arguments: args },
    });
    return response as Message;
  };

  it("runs tools that take no arguments", () => {
    const { send } = harness();
    for (const args of [undefined, null, {}]) {
      const result = call(send, "solidworks_list_docsets", args).result as {
        content: Array<{ type: string; text: string }>;
        isError?: boolean;
      };
      expect(result.isError).toBeUndefined();
      expect(JSON.parse(result.content[0]?.text ?? "{}")).toHaveProperty("docsets");
    }
  });

  it("reports bad arguments as tool errors the model can act on", () => {
    const { send } = harness();
    const result = call(send, "solidworks_get_enum_values", {}).result as {
      content: Array<{ text: string }>;
      isError: boolean;
    };
    expect(result.isError).toBe(true);
    expect(JSON.parse(result.content[0]?.text ?? "{}")).toEqual({
      error: "Invalid arguments",
      message: "enum is required",
    });
  });

  it("rejects unknown tools as invalid params", () => {
    const { send } = harness();
    expect(call(send, "solidworks_nope").error).toEqual({
      code: -32602,
      message: "Unknown tool: solidworks_nope",
    });
    expect(call(send, "").error).toMatchObject({ code: -32602 });
  });
});

describe("warmup", () => {
  it("builds lazy structures after the handshake, not before", async () => {
    const warmup = vi.fn();
    const { send } = harness(emptyStore({ warmup }));
    send({ jsonrpc: "2.0", method: "initialize", id: 1 });
    expect(warmup).not.toHaveBeenCalled();

    send({ jsonrpc: "2.0", method: "notifications/initialized" });
    expect(warmup).not.toHaveBeenCalled();
    await new Promise((resolve) => setImmediate(resolve));
    expect(warmup).toHaveBeenCalledTimes(1);
  });

  it("survives a failing warmup", async () => {
    const stderr = vi.spyOn(process.stderr, "write").mockImplementation(() => true);
    const { send } = harness(
      emptyStore({
        warmup: () => {
          throw new Error("disk on fire");
        },
      }),
    );
    send({ jsonrpc: "2.0", method: "notifications/initialized" });
    await new Promise((resolve) => setImmediate(resolve));
    expect(stderr).toHaveBeenCalledWith(expect.stringContaining("disk on fire"));
  });
});

describe("Outbox", () => {
  function fakeStream(rejections: number[]) {
    const written: string[] = [];
    const listeners: Array<() => void> = [];
    let call = 0;
    const stream: WritableLike = {
      write: (chunk) => {
        written.push(chunk);
        return !rejections.includes(call++);
      },
      once: (_event, listener) => {
        listeners.push(listener);
      },
    };
    return { stream, written, listeners };
  }

  it("keeps order across repeated backpressure", () => {
    // The 1st, 2nd and 4th writes each report a full buffer.
    const { stream, written, listeners } = fakeStream([0, 1, 3]);
    const outbox = new Outbox(() => stream);
    for (const text of ["a", "b", "c", "d", "e", "f"]) {
      outbox.write(text);
    }
    expect(written).toEqual(["a"]);

    let guard = 0;
    while (listeners.length > 0 && guard++ < 20) {
      listeners.shift()?.();
    }
    expect(written).toEqual(["a", "b", "c", "d", "e", "f"]);
  });

  it("registers a single drain listener per stall", () => {
    const { stream, listeners } = fakeStream([0]);
    const outbox = new Outbox(() => stream);
    outbox.write("a");
    outbox.write("b");
    outbox.write("c");
    expect(listeners).toHaveLength(1);
  });
});

const bunAvailable = spawnSync("bun", ["--version"], { encoding: "utf8" }).status === 0;

describe.skipIf(!bunAvailable)("stdio transport", () => {
  function makeDataRoot(): string {
    const root = fs.mkdtempSync(path.join(os.tmpdir(), "sw-mcp-e2e-"));
    const doc = {
      id: "IFoo.Bar",
      path: "interfaces/IFoo/Bar.md",
      type: "method",
      interface: "IFoo",
      title: "Bar",
      summary: "Does the bar thing.",
      docset: "sldworksapi",
      keywords: ["bar"],
      categories: [],
      parameters: [],
    };
    const index = {
      docsets: { sldworksapi: { interfaces: { IFoo: { members: { Bar: doc.path } } }, enums: {} } },
    };
    fs.writeFileSync(path.join(root, "_index.json"), JSON.stringify(index));
    fs.writeFileSync(path.join(root, "_search_index.json"), JSON.stringify({ documents: [doc] }));
    return root;
  }

  it("serves a full session and exits cleanly when stdin closes", async () => {
    const root = makeDataRoot();
    try {
      const child = spawn("bun", [serverEntry], {
        env: { ...process.env, SW_API_DATA_ROOT: root },
        stdio: ["pipe", "pipe", "pipe"],
      });
      let stdout = "";
      let stderr = "";
      child.stdout.on("data", (data) => (stdout += String(data)));
      child.stderr.on("data", (data) => (stderr += String(data)));
      const exited = new Promise<number | null>((resolve) => child.on("close", resolve));

      const requests = [
        { jsonrpc: "2.0", id: 1, method: "initialize", params: { protocolVersion: "2025-06-18" } },
        { jsonrpc: "2.0", method: "notifications/initialized" },
        { jsonrpc: "2.0", id: 2, method: "ping" },
        { jsonrpc: "2.0", id: 3, method: "tools/list" },
        {
          jsonrpc: "2.0",
          id: 4,
          method: "tools/call",
          params: { name: "solidworks_search_api", arguments: { query: "bar" } },
        },
      ];
      child.stdin.end(`${requests.map((request) => JSON.stringify(request)).join("\n")}\n`);

      expect(await exited).toBe(0);
      expect(stderr).toBe("");
      const responses = stdout
        .split("\n")
        .filter(Boolean)
        .map((line) => JSON.parse(line) as { id: number; result: Record<string, unknown> });
      expect(responses.map((response) => response.id)).toEqual([1, 2, 3, 4]);
      expect(responses[0]?.result.protocolVersion).toBe("2025-06-18");
      expect(responses[1]?.result).toEqual({});

      const content = responses[3]?.result.content as Array<{ text: string }>;
      const hits = (JSON.parse(content[0]?.text ?? "{}") as { results: Array<{ doc: { id: string } }> })
        .results;
      expect(hits.map((hit) => hit.doc.id)).toEqual(["IFoo.Bar"]);
    } finally {
      fs.rmSync(root, { recursive: true, force: true });
    }
  }, 30_000);

  it("exits with an error when the data root is missing", () => {
    const result = spawnSync("bun", [serverEntry], {
      env: { ...process.env, SW_API_DATA_ROOT: path.join(os.tmpdir(), "sw-mcp-does-not-exist") },
      encoding: "utf8",
      input: "",
    });
    expect(result.status).toBe(1);
    expect(result.stderr).toContain("Data root not found");
  }, 30_000);
});
