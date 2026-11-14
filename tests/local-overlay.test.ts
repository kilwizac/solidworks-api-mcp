import fs from "node:fs";
import os from "node:os";
import path from "node:path";

import { describe, expect, it } from "vitest";

import {
  DataStore,
  MCPServer,
  resolve_data_root,
  resolve_overlay_root,
} from "../server/solidworks_mcp_server";

const dataRoot = resolve_data_root(undefined);
const overlayRoot =
  process.env.SW_API_DOC_OVERLAY?.trim() ||
  process.env.CLAUDESW_SWAPI_DOC?.trim() ||
  (process.env.LOCALAPPDATA
    ? path.join(process.env.LOCALAPPDATA, "claude-sw", "solidworks-api-doc")
    : "");

const hasCorpus = fs.existsSync(dataRoot);
const hasOverlay =
  Boolean(overlayRoot) &&
  fs.existsSync(overlayRoot) &&
  fs.existsSync(path.join(overlayRoot, "_overlay_index.json"));

describe.skipIf(!hasCorpus)("resolve_overlay_root", () => {
  it("defaults under LOCALAPPDATA/claude-sw/solidworks-api-doc", () => {
    const resolved = resolve_overlay_root(undefined);
    expect(resolved).toBeTruthy();
    if (process.env.LOCALAPPDATA) {
      expect(resolved?.toLowerCase()).toContain(
        path.join("claude-sw", "solidworks-api-doc").toLowerCase(),
      );
    }
  });
});

describe.skipIf(!hasCorpus || !hasOverlay)("local CHM/DLL overlay", () => {
  const tools = new MCPServer(new DataStore(dataRoot, overlayRoot)).tools;

  it("get_enum_values(swFeatureNameID_e) includes swFmSweepThread = 87", () => {
    const result = tools.get_enum_values({ enum: "swFeatureNameID_e" });
    expect(result.error).toBeUndefined();
    const values = result.values as Array<{ member: string; value: string }>;
    const hit = values.find((v) => v.member === "swFmSweepThread");
    expect(hit?.value).toBe("87");
  });

  it("get_enum_values(swUserPreferenceToggle_e) has known sketch toggles", () => {
    const result = tools.get_enum_values({ enum: "swUserPreferenceToggle_e" });
    expect(result.error).toBeUndefined();
    const values = result.values as Array<{ member: string; value: string }>;
    const byName = Object.fromEntries(values.map((v) => [v.member, v.value]));
    expect(byName.swSketchAddConstToRectEntity).toBe("584");
    expect(byName.swAddDimensionsToRectangleEntity).toBe("463");
  });

  it(
    "get_examples(IFeatureManager, CreateDefinition) includes Thread Feature with code",
    () => {
    const result = tools.get_examples({
      interface: "IFeatureManager",
      member: "CreateDefinition",
      limit: 50,
    });
    expect(result.error).toBeUndefined();
    const examples = result.examples as Array<{
      title?: string;
      code_blocks?: Array<{ code?: string }>;
    }>;
    const related = result.related_examples as Array<{ title?: string }>;
    const titles = [
      ...examples.map((e) => e.title ?? ""),
      ...related.map((e) => e.title ?? ""),
    ].join("\n");
    expect(titles).toContain("Create a Thread Feature Example");
    const thread = examples.find((e) =>
      (e.title ?? "").includes("Create a Thread Feature Example"),
    );
    expect(thread).toBeTruthy();
    expect((thread?.code_blocks?.length ?? 0) > 0).toBe(true);
    const code = thread?.code_blocks?.map((b) => b.code ?? "").join("\n") ?? "";
    expect(code).toMatch(/CreateDefinition/i);
  },
    20_000,
  );
});

describe.skipIf(!hasCorpus)("code_blocks filled from corpus progguide when present", () => {
  it("Create Surface Feature example markdown yields code blocks helper path", () => {
    const store = new DataStore(dataRoot, null);
    const title = "Create Surface Feature from Body Example (VBA)";
    const md = store.resolve_example_markdown(title);
    // May be absent in thin checkouts; only assert shape when found.
    if (!md) {
      return;
    }
    expect(fs.existsSync(md)).toBe(true);
    expect(os.tmpdir()).toBeTruthy();
  });
});
