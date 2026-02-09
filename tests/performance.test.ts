import { describe, expect, it } from "vitest";

import {
  _EXAMPLE_MEMBER_RE,
  _TOKEN_RE,
  MCPServer,
  score_doc,
  tokenize,
} from "../server/solidworks_mcp_server";

describe("tokenize", () => {
  it("returns basic words", () => {
    expect(tokenize("Hello World")).toEqual(["hello", "world"]);
  });

  it("handles mixed case", () => {
    expect(tokenize("ISldWorks")).toEqual(["isldworks"]);
  });

  it("handles alphanumeric text", () => {
    expect(tokenize("Part2Doc")).toEqual(["part2doc"]);
  });

  it("splits special characters", () => {
    expect(tokenize("get_feature-data!")).toEqual(["get", "feature", "data"]);
  });

  it("returns empty array for empty string", () => {
    expect(tokenize("")).toEqual([]);
  });

  it("returns empty array for nullish value", () => {
    expect(tokenize(undefined)).toEqual([]);
    expect(tokenize(null)).toEqual([]);
  });

  it("handles numbers only", () => {
    expect(tokenize("123 456")).toEqual(["123", "456"]);
  });

  it("keeps camel case as one token", () => {
    expect(tokenize("GetFeatureData")).toEqual(["getfeaturedata"]);
  });
});

describe("Token regex", () => {
  it("is compiled", () => {
    expect(_TOKEN_RE).toBeInstanceOf(RegExp);
  });

  it("matches lowercase words", () => {
    expect("hello world".match(_TOKEN_RE)).toEqual(["hello", "world"]);
  });

  it("matches words with digits", () => {
    expect("abc123".match(_TOKEN_RE)).toEqual(["abc123"]);
  });
});

describe("Example member regex", () => {
  it("is compiled", () => {
    expect(_EXAMPLE_MEMBER_RE).toBeInstanceOf(RegExp);
  });

  it("matches member lines", () => {
    const match = _EXAMPLE_MEMBER_RE.exec("- `ISldWorks.OpenDoc`");
    expect(match?.[1]).toBe("ISldWorks.OpenDoc");
  });

  it("does not match plain text", () => {
    expect(_EXAMPLE_MEMBER_RE.exec("Some plain text")).toBeNull();
  });
});

describe("score_doc", () => {
  it("scores title matches", () => {
    const score = score_doc(
      { title: "GetFeature", summary: "", keywords: [], categories: [], interface: "", type: "" },
      ["getfeature"],
    );
    expect(score).toBe(4);
  });

  it("scores keyword matches", () => {
    const score = score_doc(
      { title: "", summary: "", keywords: ["feature"], categories: [], interface: "", type: "" },
      ["feature"],
    );
    expect(score).toBe(3);
  });

  it("sums matches across fields", () => {
    const score = score_doc(
      {
        title: "feature",
        summary: "feature info",
        keywords: ["feature"],
        categories: [],
        interface: "",
        type: "",
      },
      ["feature"],
    );
    expect(score).toBe(8);
  });

  it("returns zero for no match", () => {
    const score = score_doc(
      { title: "Something", summary: "else", keywords: [], categories: [], interface: "", type: "" },
      ["nonexistent"],
    );
    expect(score).toBe(0);
  });

  it("returns zero for empty tokens", () => {
    const score = score_doc(
      { title: "Feature", summary: "Data", keywords: [], categories: [], interface: "", type: "" },
      [],
    );
    expect(score).toBe(0);
  });

  it("returns zero for missing fields", () => {
    expect(score_doc({}, ["test"])).toBe(0);
  });
});

describe("Tool dispatch", () => {
  it("contains all tool names", () => {
    const expected = new Set([
      "solidworks_lookup_method",
      "solidworks_search_api",
      "solidworks_get_interface_members",
      "solidworks_get_enum_values",
      "solidworks_find_related",
      "solidworks_get_examples",
    ]);
    expect(new Set(Object.keys(MCPServer._TOOL_DISPATCH))).toEqual(expected);
  });

  it("maps to valid methods", () => {
    for (const methodName of Object.values(MCPServer._TOOL_DISPATCH)) {
      const prototype = MCPServer.prototype as unknown as Record<string, unknown>;
      expect(typeof prototype[methodName]).toBe("function");
    }
  });
});

describe("subset behavior parity", () => {
  function isSubset<T>(subset: Set<T>, values: Iterable<T>): boolean {
    const valueSet = new Set(values);
    for (const entry of subset) {
      if (!valueSet.has(entry)) {
        return false;
      }
    }
    return true;
  }

  it("subset works with list values", () => {
    expect(isSubset(new Set(["api", "feature"]), ["api", "feature", "design"])).toBe(true);
  });

  it("subset fails with empty list", () => {
    expect(isSubset(new Set(["api"]), [])).toBe(false);
  });

  it("empty set is subset of any list", () => {
    expect(isSubset(new Set<string>(), ["anything"])).toBe(true);
  });
});
