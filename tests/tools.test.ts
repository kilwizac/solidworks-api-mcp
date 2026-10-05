import fs from "node:fs";

import { describe, expect, it } from "vitest";

import { DataStore, MCPServer, resolve_data_root } from "../server/solidworks_mcp_server";

const dataRoot = resolve_data_root(undefined);

type Hit = { id: string; keywords?: unknown; title: string; summary: string };

describe.skipIf(!fs.existsSync(dataRoot))("tools on the real corpus", () => {
  const tools = new MCPServer(new DataStore(dataRoot)).tools;

  describe("solidworks_lookup_method", () => {
    it("resolves names case-insensitively and reports the canonical spelling", () => {
      const result = tools.lookup_method({
        interface: "imodeldocextension",
        member: "selectbyid2",
      });
      expect(result.interface).toBe("IModelDocExtension");
      expect(result.member).toBe("SelectByID2");
      expect(String(result.content)).toContain("SelectByID2");
      expect(result.path).toBe("sldworksapi/interfaces/IModelDocExtension/SelectByID2.md");
    });

    it("returns structured data for the json format", () => {
      const result = tools.lookup_method({
        interface: "IModelDocExtension",
        member: "SelectByID2",
        format: "json",
      });
      expect(result.data).toBeTypeOf("object");
      expect(result.error).toBeUndefined();
      expect(result.path).toBe("json/sldworksapi/interfaces/IModelDocExtension/SelectByID2.json");
    });

    it("suggests close interface names", () => {
      const result = tools.lookup_method({ interface: "IModelDoc3", member: "Rebuild" });
      expect(result.error).toBe("Not found");
      expect(result.suggestions).toContain("IModelDoc2");
    });

    it("suggests close member names", () => {
      const result = tools.lookup_method({ interface: "IModelDocExtension", member: "SelectByIDs" });
      expect(result.error).toBe("Not found");
      expect(result.suggestions).toEqual(expect.arrayContaining(["SelectByID", "SelectByID2"]));
    });

    it("points to the interfaces that do declare the member", () => {
      const result = tools.lookup_method({ interface: "ISldWorks", member: "SelectByID2" });
      expect(result.error).toBe("Not found");
      expect(result.declared_on).toContain("IModelDocExtension");
    });

    it("rejects unknown docsets and lists the valid ones", () => {
      const result = tools.lookup_method({
        interface: "IModelDocExtension",
        member: "SelectByID2",
        docset: "nope",
      });
      expect(result.error).toBe("Unknown docset");
      expect(result.available).toEqual(expect.arrayContaining(["sldworksapi", "swconst"]));
    });
  });

  describe("solidworks_get_enum_values", () => {
    it("resolves enum names case-insensitively", () => {
      const result = tools.get_enum_values({ enum: "swselecttype_e" });
      expect(result.enum).toBe("swSelectType_e");
      expect((result.values as unknown[]).length).toBeGreaterThan(10);
    });

    it("suggests close enum names", () => {
      const result = tools.get_enum_values({ enum: "swSelctType_e" });
      expect(result.error).toBe("Not found");
      expect(result.suggestions).toContain("swSelectType_e");
    });
  });

  describe("solidworks_search_api", () => {
    it("returns compact hits by default and full keyword lists when verbose", () => {
      const compact = tools.search_api({ query: "SelectByID2", limit: 2 }).results as Array<{
        doc: Hit;
      }>;
      expect(compact).toHaveLength(2);
      expect(compact[0]?.doc.id).toBe("IModelDocExtension.SelectByID2");
      for (const { doc } of compact) {
        expect(doc.keywords).toBeUndefined();
        expect(doc.title).toBeTruthy();
        expect(doc.summary).toBeTruthy();
      }

      const verbose = tools.search_api({ query: "SelectByID2", limit: 1, verbose: true })
        .results as Array<{ doc: Hit }>;
      expect(Array.isArray(verbose[0]?.doc.keywords)).toBe(true);
    });

    it("keeps default responses small", () => {
      const result = tools.search_api({ query: "create an extrusion feature" });
      expect((result.results as unknown[]).length).toBe(10);
      expect(JSON.stringify(result).length).toBeLessThan(8_000);
    });

    it("explains an empty result caused by an unknown docset", () => {
      const result = tools.search_api({ query: "select", docset: "nope" });
      expect(result.results).toEqual([]);
      expect(String(result.note)).toContain("nope");
    });

    it("caps the number of hits", () => {
      expect((tools.search_api({ query: "feature", limit: 100_000 }).results as unknown[]).length).toBe(50);
    });
  });

  describe("solidworks_get_examples and solidworks_find_related", () => {
    it("limits primary and related examples and honors the docset", () => {
      const result = tools.get_examples({
        interface: "imodeldocextension",
        member: "selectbyid2",
        limit: 1,
      });
      expect(result.member).toBe("IModelDocExtension.SelectByID2");
      expect((result.examples as unknown[]).length).toBe(1);
      expect((result.related_examples as unknown[]).length).toBeLessThanOrEqual(1);

      expect(
        tools.get_examples({ interface: "IModelDocExtension", member: "SelectByID2", docset: "nope" })
          .error,
      ).toBe("Unknown docset");
    });

    it("searches programming-guide examples by query", () => {
      const result = tools.get_examples({ query: "message pump", limit: 3 });
      const hits = result.results as Array<{ doc: Hit & { docset: string } }>;
      expect(hits.length).toBeGreaterThan(0);
      expect(hits.every((hit) => hit.doc.docset === "progguide")).toBe(true);
      expect(hits[0]?.doc.keywords).toBeUndefined();
    });

    it("asks for input when neither a member nor a query is given", () => {
      expect(tools.get_examples({}).error).toBe("No query or member provided");
    });

    it("asks for the missing half of an interface + member pair", () => {
      const noMember = tools.get_examples({ interface: "IModelDoc2" });
      expect(noMember.error).toBe("Missing argument");
      expect(String(noMember.message)).toContain("member");
      expect(tools.get_examples({ member: "SaveAs3" }).error).toBe("Missing argument");
    });

    it("explains an empty example search caused by an unknown docset", () => {
      const result = tools.get_examples({ query: "message pump", docset: "nope" });
      expect(result.results).toEqual([]);
      expect(String(result.note)).toContain("nope");
    });

    it("echoes canonical names for related members", () => {
      const result = tools.find_related({
        interface: "imodeldocextension",
        member: "selectbyid2",
        limit: 3,
      });
      expect(result.interface).toBe("IModelDocExtension");
      expect(result.member).toBe("SelectByID2");
      expect((result.related as unknown[]).length).toBeLessThanOrEqual(3);
    });
  });

  describe("discovery tools", () => {
    it("lists the docsets with counts", () => {
      const docsets = tools.list_docsets({}).docsets as Array<{
        docset: string;
        interfaces: number;
        enums: number;
      }>;
      const byName = new Map(docsets.map((entry) => [entry.docset, entry]));
      expect(byName.get("sldworksapi")?.interfaces).toBeGreaterThan(100);
      expect(byName.get("swconst")?.enums).toBeGreaterThan(100);
      expect(byName.has("progguide")).toBe(true);
    });

    it("lists interface names with a filter and a limit", () => {
      const result = tools.list_names({ filter: "FEATURE", limit: 3 });
      const names = result.names as string[];
      expect(result.kind).toBe("interface");
      expect(names).toHaveLength(3);
      expect(names.every((name) => name.toLowerCase().includes("feature"))).toBe(true);
      expect(result.total).toBeGreaterThan(3);
      expect(result.truncated).toBe(true);
    });

    it("defaults to enums for the constants docset", () => {
      const result = tools.list_names({ docset: "swconst", filter: "selecttype" });
      expect(result.kind).toBe("enum");
      expect(result.names).toContain("swSelectType_e");
    });

    it("rejects unknown docsets", () => {
      expect(tools.list_names({ docset: "nope" }).error).toBe("Unknown docset");
    });

    it("lists the members of an interface and suggests names for typos", () => {
      const members = tools.get_interface_members({ interface: "imodeldocextension" });
      expect(members.interface).toBe("IModelDocExtension");
      expect(members.members).toContain("SelectByID2");

      const typo = tools.get_interface_members({ interface: "IModelDocExtensio" });
      expect(typo.error).toBe("Not found");
      expect(typo.suggestions).toContain("IModelDocExtension");
    });
  });
});
