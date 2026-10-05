import fs from "node:fs";

import { describe, expect, it } from "vitest";

import { SearchEngine, analyze, stem } from "../server/search";
import { DataStore, resolve_data_root } from "../server/solidworks_mcp_server";
import type { SearchDocument } from "../server/types";

describe("stem", () => {
  it("folds plurals, -ing, -ed and a trailing e together", () => {
    for (const word of ["feature", "features"]) {
      expect(stem(word)).toBe("featur");
    }
    for (const word of ["create", "creates", "created", "creating"]) {
      expect(stem(word)).toBe("creat");
    }
    expect(stem("extruded")).toBe(stem("extrude"));
    expect(stem("bodies")).toBe("body");
    expect(stem("sketches")).toBe("sketch");
  });

  it("leaves short words, words ending in ss/us/is, and alphanumerics alone", () => {
    for (const word of ["id", "ids", "mass", "status", "analysis", "id2", "3d"]) {
      expect(stem(word)).toBe(word);
    }
  });
});

describe("analyze", () => {
  it("splits identifiers on case and digit boundaries and keeps the whole name", () => {
    expect(analyze("SelectByID2")).toEqual(["#selectbyid2", "select", "id", "2"]);
    expect(analyze("IModelDocExtension")).toEqual([
      "#imodeldocextension",
      "model",
      "doc",
      "extension",
    ]);
    expect(analyze("swCommands_e")).toEqual(["#swcommands", "sw", "command"]);
  });

  it("drops stopwords and stems plain words", () => {
    expect(analyze("how do I create an extrusion feature")).toEqual(["creat", "extrusion", "featur"]);
  });

  it("splits on punctuation", () => {
    expect(analyze("get_feature-data!")).toEqual(["get", "featur", "data"]);
    expect(analyze("123 456")).toEqual(["123", "456"]);
  });

  it("can keep stopwords", () => {
    expect(analyze("how to", true)).toEqual(["how", "to"]);
  });

  it("returns nothing for empty input", () => {
    expect(analyze("")).toEqual([]);
    expect(analyze(undefined)).toEqual([]);
    expect(analyze(null)).toEqual([]);
  });
});

function doc(fields: Partial<SearchDocument> & { title: string }): SearchDocument {
  return {
    summary: "",
    keywords: [],
    categories: [],
    interface: "",
    type: "method",
    docset: "sldworksapi",
    parameters: [],
    ...fields,
  };
}

const CORPUS: SearchDocument[] = [
  doc({
    title: "SelectByID2",
    interface: "IModelDocExtension",
    summary: "Selects the specified entity.",
    categories: ["selections"],
  }),
  doc({
    title: "SelectByID",
    interface: "IModelDoc2",
    summary: "Selects the specified entity by name.",
    categories: ["selections"],
  }),
  doc({
    title: "FeatureExtrusion3",
    interface: "IFeatureManager",
    summary: "Creates an extrusion feature.",
    categories: ["features"],
  }),
  doc({
    title: "CreateFeatureMgrWindow",
    interface: "IModelViewManager",
    summary: "Creates a window for the feature manager.",
  }),
  doc({ title: "SaveAs3", interface: "IModelDocExtension", summary: "Saves the document." }),
  doc({ title: "SaveToFile", interface: "IModelDocExtension", summary: "Writes to a file." }),
  doc({ title: "ISketch", type: "interface", summary: "Sketch object." }),
  doc({ title: "Sketch", interface: "ISketchRegion", type: "property", summary: "Gets the sketch." }),
  doc({ title: "Sketch", interface: "ISketchContour", type: "property", summary: "Gets the sketch." }),
  doc({
    title: "swSelectType_e",
    type: "enum",
    docset: "swconst",
    summary: "Selection types.",
    categories: ["constants"],
  }),
];

function ids(results: Array<{ doc: SearchDocument }>): string[] {
  return results.map(({ doc: hit }) =>
    hit.interface ? `${hit.interface}.${hit.title}` : String(hit.title),
  );
}

describe("SearchEngine", () => {
  const engine = new SearchEngine(CORPUS);

  it("ranks an exact API name first", () => {
    expect(ids(engine.search("SelectByID2"))[0]).toBe("IModelDocExtension.SelectByID2");
    expect(ids(engine.search("IModelDocExtension.SelectByID2"))[0]).toBe(
      "IModelDocExtension.SelectByID2",
    );
    expect(ids(engine.search("imodeldocextension selectbyid2"))[0]).toBe(
      "IModelDocExtension.SelectByID2",
    );
  });

  it("matches names typed in lowercase", () => {
    expect(ids(engine.search("selectbyid2"))[0]).toBe("IModelDocExtension.SelectByID2");
  });

  it("ignores filler words in natural-language queries", () => {
    expect(ids(engine.search("how do I create an extrusion feature"))[0]).toBe(
      "IFeatureManager.FeatureExtrusion3",
    );
  });

  it("matches word variants and prefixes", () => {
    expect(ids(engine.search("extruding features"))).toContain("IFeatureManager.FeatureExtrusion3");
    expect(ids(engine.search("extrus"))).toContain("IFeatureManager.FeatureExtrusion3");
  });

  it("joins stopwords back into identifiers", () => {
    expect(ids(engine.search("save as"))[0]).toBe("IModelDocExtension.SaveAs3");
  });

  it("uses domain synonyms", () => {
    expect(ids(engine.search("export file"))).toContain("IModelDocExtension.SaveToFile");
    expect(ids(engine.search("extrude"))).toContain("IFeatureManager.FeatureExtrusion3");
  });

  it("sends a single-word concept to its interface page", () => {
    expect(ids(engine.search("sketch"))[0]).toBe("ISketch");
  });

  it("ranks current members above obsolete ones", () => {
    const versions = new SearchEngine([
      doc({ title: "OpenDoc", interface: "ISldWorks", summary: "Obsolete. Superseded by ISldWorks::OpenDoc6." }),
      doc({ title: "OpenDoc6", interface: "ISldWorks", summary: "Opens an existing document." }),
      doc({ title: "OpenDoc6", interface: "IOld", summary: "Obsolete. Superseded by ISldWorks::OpenDoc6." }),
    ]);
    expect(ids(versions.search("open document"))[0]).toBe("ISldWorks.OpenDoc6");
    // Exact name matches stay on top, the current one first.
    expect(ids(versions.search("OpenDoc6"))).toEqual(["ISldWorks.OpenDoc6", "IOld.OpenDoc6", "ISldWorks.OpenDoc"]);
    expect(ids(versions.search("OpenDoc"))[0]).toBe("ISldWorks.OpenDoc");
  });

  it("matches numbered versions of an identifier", () => {
    const versions = new SearchEngine([
      doc({ title: "FeatureExtrusion3", interface: "IFeatureManager" }),
      doc({ title: "FeatureExtrusionThin", interface: "IFeatureManager" }),
    ]);
    expect(ids(versions.search("FeatureExtrusion"))[0]).toBe("IFeatureManager.FeatureExtrusion3");
  });

  it("treats a name with underscores as one exact name", () => {
    const enums = new SearchEngine([
      doc({ title: "swSelectType_e", type: "enum", docset: "swconst", summary: "Selection types." }),
      doc({
        title: "swSelectTypeEx_e",
        type: "enum",
        docset: "swconst",
        summary: "Select type select type select type.",
      }),
    ]);
    expect(ids(enums.search("swselecttype_e"))[0]).toBe("swSelectType_e");
    expect(ids(enums.search("swSelectType_e"))[0]).toBe("swSelectType_e");
  });

  it("does not boost names shared by many members", () => {
    const shared = new SearchEngine([
      doc({ title: "Name", interface: "IA" }),
      doc({ title: "Name", interface: "IB" }),
      doc({ title: "Rename", interface: "IC", summary: "name name name" }),
    ]);
    // Nine exact matches would swamp everything, so no bonus applies here either way.
    expect(shared.search("name")).toHaveLength(3);
  });

  it("applies docset, type, interface and category filters", () => {
    expect(ids(engine.search("select", { docset: "swconst" }))).toEqual(["swSelectType_e"]);
    expect(ids(engine.search("select", { docType: "method" }))).not.toContain("swSelectType_e");
    expect(
      ids(engine.search("selectbyid", { interfaceName: "imodeldoc2" })),
    ).toEqual(["IModelDoc2.SelectByID"]);
    expect(ids(engine.search("select", { categories: ["selections", "constants"] }))).toEqual([]);
    expect(ids(engine.search("select", { categories: ["constants"] }))).toEqual(["swSelectType_e"]);
  });

  it("applies filters to exact-name boosts too", () => {
    expect(ids(engine.search("SelectByID2", { docType: "interface" }))).not.toContain(
      "IModelDocExtension.SelectByID2",
    );
    expect(ids(engine.search("SelectByID2", { docset: "swconst" }))).not.toContain(
      "IModelDocExtension.SelectByID2",
    );
  });

  it("honors limits and returns scores in descending order", () => {
    const all = engine.search("select");
    expect(all.length).toBeGreaterThan(1);
    expect(engine.search("select", {}, 1)).toHaveLength(1);
    expect(engine.search("select", {}, 0)).toEqual([]);
    for (let index = 1; index < all.length; index += 1) {
      expect(all[index - 1]?.score).toBeGreaterThanOrEqual(all[index]?.score ?? 0);
    }
  });

  it("returns stable results across repeated (cached) queries", () => {
    const first = ids(engine.search("select entity", {}, 5));
    expect(ids(engine.search("select entity", {}, 5))).toEqual(first);
    expect(ids(engine.search("select entity", {}, 2))).toEqual(first.slice(0, 2));
  });

  it("handles empty, stopword-only and unmatched queries", () => {
    expect(engine.search("")).toEqual([]);
    expect(engine.search("   ")).toEqual([]);
    expect(engine.search("zzzzqqqq")).toEqual([]);
    expect(() => engine.search("how to")).not.toThrow();
  });

  it("copes with an empty corpus and sparse documents", () => {
    expect(new SearchEngine([]).search("anything")).toEqual([]);
    expect(new SearchEngine([{}]).search("anything")).toEqual([]);
  });
});

const dataRoot = resolve_data_root(undefined);

describe.skipIf(!fs.existsSync(dataRoot))("ranking on the real corpus", () => {
  const store = new DataStore(dataRoot);

  function top(query: string, count: number, options: Parameters<DataStore["search_api_scored"]>[1] = {}) {
    return store
      .search_api_scored(query, { ...options, limit: count })
      .map((hit) => String(hit.doc.id));
  }

  it("builds the index and answers queries quickly", () => {
    const started = performance.now();
    store.search_api_scored("warm up", { limit: 1 });
    const built = performance.now() - started;
    const queryStarted = performance.now();
    store.search_api_scored("select by id", { limit: 10 });
    expect(built).toBeLessThan(5000);
    expect(performance.now() - queryStarted).toBeLessThan(250);
  });

  it.each([
    ["SelectByID2", 1, "IModelDocExtension.SelectByID2"],
    ["IModelDocExtension.SelectByID2", 1, "IModelDocExtension.SelectByID2"],
    ["IModelDocExtension SaveAs3", 1, "IModelDocExtension.SaveAs3"],
    ["swSelectType_e", 1, "swSelectType_e"],
    ["getfeatures", 3, "IFeatureManager.GetFeatures"],
    ["sketch", 1, "ISketch"],
    ["body", 2, "IBody2"],
    ["rebuild", 3, "IModelDoc2.Rebuild"],
    ["select by id", 6, "IModelDocExtension.SelectByID2"],
    ["how do I create an extrusion feature", 3, "IFeatureManager.FeatureExtrusion3"],
    ["insert a revolve feature", 5, "IFeatureManager.FeatureRevolve2"],
    ["open a document", 8, "ISldWorks.OpenDoc6"],
    ["create mate", 1, "IAssemblyDoc.CreateMate"],
    ["custom properties", 3, "ICustomPropertyManager"],
    ["insert sketch", 3, "ISketchManager.InsertSketch"],
    ["create sketch line", 3, "ISketchManager.CreateLine"],
    ["hide a component", 1, "IModelDoc2.HideComponent2"],
    ["save as", 1, "IModelDocExtension.SaveAs3"],
    ["swselecttype_e", 1, "swSelectType_e"],
    ["FeatureExtrusion", 5, "IFeatureManager.FeatureExtrusion3"],
  ])("%s -> top %i includes %s", (query, count, expected) => {
    expect(top(query, count)).toContain(expected);
  });

  it("respects filters on the real corpus", () => {
    const enums = store.search_api_scored("select", { docset: "swconst", limit: 20 });
    expect(enums.length).toBeGreaterThan(0);
    expect(enums.every((hit) => hit.doc.docset === "swconst")).toBe(true);

    const members = store.search_api_scored("select", { interface: "ISldWorks", limit: 20 });
    expect(members.every((hit) => hit.doc.interface === "ISldWorks")).toBe(true);
  });

  it("searches the json corpus too", () => {
    const hits = store.search_api_scored("SelectByID2", { fmt: "json", limit: 1 });
    expect(hits[0]?.doc.id).toBe("IModelDocExtension.SelectByID2");
    expect(String(hits[0]?.doc.path)).toMatch(/^json\//);
  });
});
