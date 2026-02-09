#!/usr/bin/env bun
// @ts-nocheck

import fs from "node:fs";
import fsp from "node:fs/promises";
import path from "node:path";

import minimist from "minimist";

type SearchDoc = {
  id?: string;
  type?: string;
  interface?: string;
  path?: string;
  docset?: string;
  title?: string;
  summary?: string;
  returns?: string;
  keywords?: string[];
  parameters?: string[];
};

const ENGLISH_STOPWORDS = new Set([
  "a",
  "an",
  "and",
  "are",
  "as",
  "at",
  "be",
  "by",
  "for",
  "from",
  "has",
  "he",
  "in",
  "is",
  "it",
  "its",
  "of",
  "on",
  "that",
  "the",
  "to",
  "was",
  "were",
  "will",
  "with",
  "or",
  "if",
  "this",
  "these",
  "those",
  "into",
  "their",
  "then",
  "than",
  "such",
  "not",
  "can",
  "may",
  "you",
  "your",
  "they",
  "them",
  "we",
  "our",
  "which",
  "who",
  "whom",
  "what",
  "when",
  "where",
  "why",
  "how",
]);

function doc_text(doc: SearchDoc): string {
  const parts = [
    doc.title ?? "",
    doc.summary ?? "",
    doc.type ?? "",
    doc.interface ?? "",
    doc.returns ?? "",
    (doc.keywords ?? []).join(" "),
    (doc.parameters ?? []).join(" "),
  ];
  return parts.filter(Boolean).join(" ");
}

function tokenize(text: string): string[] {
  return text
    .toLowerCase()
    .split(/[^a-z0-9_]+/g)
    .map((token) => token.trim())
    .filter((token) => token.length > 1 && !ENGLISH_STOPWORDS.has(token));
}

function build_terms(tokens: string[]): string[] {
  if (tokens.length === 0) {
    return [];
  }
  const terms = [...tokens];
  for (let i = 0; i < tokens.length - 1; i += 1) {
    const left = tokens[i];
    const right = tokens[i + 1];
    if (left && right) {
      terms.push(`${left} ${right}`);
    }
  }
  return terms;
}

function hash32(input: string): number {
  let hash = 0x811c9dc5;
  for (let i = 0; i < input.length; i += 1) {
    hash ^= input.charCodeAt(i);
    hash = Math.imul(hash, 0x01000193);
  }
  return hash >>> 0;
}

function projection_weight(term: string, dim: number): number {
  const hash = hash32(`${term}|${dim}|w`);
  const ratio = hash / 0xffffffff;
  return ratio * 2 - 1;
}

function parse_required_arg(args: minimist.ParsedArgs, key: string): string {
  const value = args[key];
  if (typeof value !== "string" || !value.trim()) {
    throw new Error(`Missing required argument --${key}`);
  }
  return value;
}

function parse_positive_int(value: unknown, defaultValue: number): number {
  if (typeof value === "number" && Number.isInteger(value) && value > 0) {
    return value;
  }
  if (typeof value === "string") {
    const parsed = Number(value);
    if (Number.isInteger(parsed) && parsed > 0) {
      return parsed;
    }
  }
  return defaultValue;
}

async function main(): Promise<void> {
  const args = minimist(process.argv.slice(2), {
    string: ["search", "output", "meta", "dims", "max-features"],
  });

  const searchPath = parse_required_arg(args, "search");
  const outputPath = parse_required_arg(args, "output");
  const metaPath = parse_required_arg(args, "meta");
  const requestedDims = parse_positive_int(args.dims, 256);
  const maxFeatures = parse_positive_int(args["max-features"], 50000);

  const raw = JSON.parse(await fsp.readFile(searchPath, "utf8")) as { documents?: SearchDoc[] };
  const docs = Array.isArray(raw.documents) ? raw.documents : [];

  const termCountsPerDoc: Array<Map<string, number>> = [];
  const docFrequency = new Map<string, number>();
  const corpusFrequency = new Map<string, number>();

  for (const doc of docs) {
    const text = doc_text(doc);
    const terms = build_terms(tokenize(text));
    const termCounts = new Map<string, number>();
    for (const term of terms) {
      termCounts.set(term, (termCounts.get(term) ?? 0) + 1);
      corpusFrequency.set(term, (corpusFrequency.get(term) ?? 0) + 1);
    }
    termCountsPerDoc.push(termCounts);

    const uniqueTerms = new Set(termCounts.keys());
    for (const term of uniqueTerms) {
      docFrequency.set(term, (docFrequency.get(term) ?? 0) + 1);
    }
  }

  const vocab = [...corpusFrequency.entries()]
    .sort((left, right) => {
      if (right[1] !== left[1]) {
        return right[1] - left[1];
      }
      return left[0].localeCompare(right[0]);
    })
    .slice(0, maxFeatures)
    .map(([term]) => term);

  const vocabSet = new Set(vocab);
  const dims = vocab.length > 1 ? Math.min(requestedDims, vocab.length - 1) : 1;
  const projectionScale = 1 / Math.sqrt(dims);
  const docCount = docs.length;

  const idf = new Map<string, number>();
  for (const term of vocab) {
    const df = docFrequency.get(term) ?? 0;
    const idfValue = Math.log((1 + docCount) / (1 + df)) + 1;
    idf.set(term, idfValue);
  }

  await fsp.mkdir(path.dirname(outputPath), { recursive: true });
  const outputHandle = fs.createWriteStream(outputPath, { encoding: "utf8" });

  for (let index = 0; index < docs.length; index += 1) {
    const doc = docs[index];
    const counts = termCountsPerDoc[index] ?? new Map<string, number>();
    const weighted = new Map<string, number>();
    let normSq = 0;

    for (const [term, tf] of counts.entries()) {
      if (!vocabSet.has(term)) {
        continue;
      }
      const value = tf * (idf.get(term) ?? 0);
      weighted.set(term, value);
      normSq += value * value;
    }

    const norm = normSq > 0 ? Math.sqrt(normSq) : 1;
    const vector = new Array<number>(dims).fill(0);

    for (const [term, value] of weighted.entries()) {
      const normalized = value / norm;
      for (let dim = 0; dim < dims; dim += 1) {
        vector[dim] += normalized * projection_weight(term, dim) * projectionScale;
      }
    }

    const rounded = vector.map((entry) => Number(entry.toFixed(6)));
    const row = {
      id: doc.id,
      type: doc.type,
      interface: doc.interface,
      path: doc.path,
      docset: doc.docset,
      vector: rounded,
    };
    outputHandle.write(`${JSON.stringify(row)}\n`);
  }

  await new Promise<void>((resolve, reject) => {
    outputHandle.end(() => resolve());
    outputHandle.on("error", reject);
  });

  // Random projection does not expose the same explained-variance metric as TruncatedSVD.
  const meta = {
    count: docs.length,
    dimensions: dims,
    max_features: maxFeatures,
    explained_variance: 0.0,
    method: "tfidf-random-projection",
  };
  await fsp.mkdir(path.dirname(metaPath), { recursive: true });
  await fsp.writeFile(metaPath, `${JSON.stringify(meta, null, 2)}\n`, "utf8");
}

if (import.meta.main) {
  main().catch((error) => {
    process.stderr.write(`${error instanceof Error ? error.stack ?? error.message : String(error)}\n`);
    process.exit(1);
  });
}
