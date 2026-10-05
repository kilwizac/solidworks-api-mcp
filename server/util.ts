import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

export function asRecord(value: unknown): Record<string, unknown> {
  if (value && typeof value === "object" && !Array.isArray(value)) {
    return value as Record<string, unknown>;
  }
  return {};
}

export function getString(value: unknown): string {
  return typeof value === "string" ? value : "";
}

export function asStringList(value: unknown): string[] {
  if (!Array.isArray(value)) {
    return [];
  }
  return value.filter((entry): entry is string => typeof entry === "string");
}

export function hasOwn(record: object, key: string): boolean {
  return Object.prototype.hasOwnProperty.call(record, key);
}

/** Delimiter-safe cache key: JSON-encoding keeps `["a","b"]` distinct from `["a,b"]`. */
export function cacheKey(...parts: Array<string | undefined>): string {
  return JSON.stringify(parts.map((part) => part ?? ""));
}

/** Lowercased name -> canonical name, first spelling wins. */
export function buildNameLookup(names: Iterable<string>): Map<string, string> {
  const lookup = new Map<string, string>();
  for (const name of names) {
    const lowered = name.toLowerCase();
    if (!lookup.has(lowered)) {
      lookup.set(lowered, name);
    }
  }
  return lookup;
}

export class LruCache<K, V> {
  private readonly entries = new Map<K, V>();

  constructor(private readonly maxSize: number) {}

  get(key: K): V | undefined {
    const value = this.entries.get(key);
    if (value === undefined) {
      return undefined;
    }
    this.entries.delete(key);
    this.entries.set(key, value);
    return value;
  }

  set(key: K, value: V): void {
    this.entries.delete(key);
    this.entries.set(key, value);
    if (this.entries.size > this.maxSize) {
      const oldest = this.entries.keys().next().value;
      if (oldest !== undefined) {
        this.entries.delete(oldest);
      }
    }
  }
}

const JSON_CACHE_SIZE = 256;
const TEXT_CACHE_SIZE = 256;
const jsonCache = new LruCache<string, unknown>(JSON_CACHE_SIZE);
const textCache = new LruCache<string, string>(TEXT_CACHE_SIZE);

export function load_json(filePath: string): unknown {
  const normalizedPath = path.resolve(filePath);
  const cached = jsonCache.get(normalizedPath);
  if (cached !== undefined) {
    return cached;
  }
  const data: unknown = JSON.parse(fs.readFileSync(normalizedPath, "utf8"));
  jsonCache.set(normalizedPath, data);
  return data;
}

export function read_text(filePath: string): string {
  const normalizedPath = path.resolve(filePath);
  const cached = textCache.get(normalizedPath);
  if (cached !== undefined) {
    return cached;
  }
  const content = fs.readFileSync(normalizedPath, "utf8");
  textCache.set(normalizedPath, content);
  return content;
}

/** Parses a user-supplied limit: numbers and numeric strings are truncated, negatives clamp to 0. */
export function parse_limit(value: unknown, defaultValue: number | null): number | null {
  if (value === null || value === undefined) {
    return defaultValue;
  }

  let parsed: number;
  if (typeof value === "number") {
    parsed = value;
  } else if (typeof value === "string" && value.trim() !== "") {
    parsed = Number(value);
  } else {
    return defaultValue;
  }

  if (!Number.isFinite(parsed)) {
    return defaultValue;
  }
  const truncated = Math.trunc(parsed);
  return truncated < 0 ? 0 : truncated;
}

/** Resolves `segments` under `root`, or returns null if the result would escape it. */
export function resolve_within_root(root: string, ...segments: string[]): string | null {
  const fullPath = path.resolve(root, ...segments);
  const relative = path.relative(root, fullPath);
  if (relative === ".." || relative.startsWith(`..${path.sep}`) || path.isAbsolute(relative)) {
    return null;
  }
  return fullPath;
}

export function resolve_data_root(envValue?: string | null): string {
  if (envValue) {
    return path.resolve(envValue);
  }
  const currentFile = fileURLToPath(import.meta.url);
  return path.resolve(path.dirname(currentFile), "..", "solidworks-api");
}
