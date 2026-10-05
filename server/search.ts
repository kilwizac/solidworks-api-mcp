import type { SearchDocument, SearchResult } from "./types";
import { LruCache, asStringList, cacheKey, getString } from "./util";

/**
 * Relevance engine for the API corpus: a field-weighted BM25 ranking over
 * identifier-aware terms.
 *
 * - Text is split on camelCase / digit boundaries (`SelectByID2` ->
 *   `select`, `id`, `2`) and every multi-part identifier also keeps a whole
 *   `#selectbyid2` term, so exact API names outrank their fragments.
 * - Plain words are lightly stemmed and stopwords are dropped, so natural
 *   language queries ("how do I create an extrusion feature") don't match on
 *   `i`, `do`, `an`, ...
 * - Query terms also match longer words by prefix and a few domain synonyms,
 *   at reduced weight.
 * - An exact match on a member's name or `Interface.Member` is always on top.
 */

const FIELD_WEIGHTS = {
  title: 6,
  interface: 3,
  summary: 1.5,
  parameters: 1,
  categories: 1,
  keywords: 0.8,
  type: 0.3,
} as const;

const BM25_K1 = 1.2;
const BM25_B = 0.3;
const PREFIX_WEIGHT = 0.35;
const SYNONYM_WEIGHT = 0.6;
const BRIDGE_WEIGHT = 0.9;
const MIN_PREFIX_LENGTH = 4;
const MAX_PREFIX_EXPANSIONS = 30;
const MAX_PREFIX_EXTRA_CHARS = 6;
const EXACT_NAME_BONUS = 10;
const CONCEPT_BONUS = 12;
const MAX_EXACT_NAME_MATCHES = 8;
const EXACT_QUALIFIED_BONUS = 25;
const RESULT_CACHE_SIZE = 256;
const MAX_CACHED_RESULTS = 200;

const STOPWORDS = new Set([
  "a", "an", "and", "are", "as", "at", "be", "by", "can", "could", "do", "does", "for", "from",
  "how", "in", "into", "is", "it", "me", "my", "of", "on", "or", "should", "that", "the", "there",
  "this", "to", "use", "using", "via", "way", "we", "what", "when", "where", "which", "with",
  "would", "you", "your", "about", "also", "any", "been", "between", "but", "each", "has", "have",
  "if", "its", "not", "one", "than", "their", "them", "then", "these", "those", "two", "was",
  "were", "will",
]);

/** Words treated as near-equivalent in SolidWorks API vocabulary (matched at reduced weight). */
const SYNONYM_GROUPS: string[][] = [
  ["extrusion", "extrude", "boss"],
  ["revolve", "revolution"],
  ["create", "insert", "add"],
  ["remove", "delete"],
  ["save", "export"],
  ["rebuild", "regenerate"],
  ["open", "load"],
  ["mate", "constraint"],
  ["dimension", "measure"],
  ["hide", "suppress"],
  ["document", "doc"],
  ["configuration", "config"],
];

const WORD_RE = /[A-Za-z0-9]+/g;
const PART_RE = /[A-Z]+(?![a-z])|[A-Z]?[a-z]+|[0-9]+/g;

/** Conservative suffix stripping: plurals, -ing, -ed and a trailing -e. */
export function stem(word: string): string {
  if (word.length <= 3 || /\d/.test(word)) {
    return word;
  }
  let w = word;
  if (w.endsWith("ies") && w.length > 4) {
    w = `${w.slice(0, -3)}y`;
  } else if (w.endsWith("sses")) {
    w = w.slice(0, -2);
  } else if (/(xes|zes|ches|shes)$/.test(w)) {
    w = w.slice(0, -2);
  } else if (w.endsWith("s") && !/(ss|us|is)$/.test(w)) {
    w = w.slice(0, -1);
  }
  if (w.length > 5 && w.endsWith("ing")) {
    w = w.slice(0, -3);
    if (/([^aeiouls])\1$/.test(w)) {
      w = w.slice(0, -1);
    }
  } else if (w.length > 4 && w.endsWith("ed")) {
    w = w.slice(0, -2);
    if (/([^aeiouls])\1$/.test(w)) {
      w = w.slice(0, -1);
    }
  }
  if (w.length > 4 && w.endsWith("e")) {
    w = w.slice(0, -1);
  }
  return w;
}

/**
 * Breaks text into index/query terms. Multi-part identifiers contribute a
 * `#whole` term plus their stemmed parts; ordinary words contribute their stem.
 */
export function analyze(text: string | null | undefined, keepStopwords = false): string[] {
  if (!text) {
    return [];
  }
  const terms: string[] = [];
  for (const raw of text.match(WORD_RE) ?? []) {
    const parts = raw.match(PART_RE) ?? [];
    if (parts.length > 1) {
      terms.push(`#${raw.toLowerCase()}`);
    }
    for (const part of parts) {
      const lower = part.toLowerCase();
      if (!keepStopwords && (STOPWORDS.has(lower) || /^[a-z]$/.test(lower))) {
        continue;
      }
      terms.push(stem(lower));
    }
  }
  return terms;
}

/** Lowercase letters and digits only: `IModelDoc2.Select` -> `imodeldoc2select`. */
function normalizeName(text: string): string {
  return text.toLowerCase().replace(/[^a-z0-9]/g, "");
}

const SYNONYMS: ReadonlyMap<string, readonly string[]> = (() => {
  const map = new Map<string, string[]>();
  for (const group of SYNONYM_GROUPS) {
    const stems = group.map((word) => stem(word));
    for (const term of stems) {
      const others = stems.filter((other) => other !== term);
      map.set(term, [...(map.get(term) ?? []), ...others]);
    }
  }
  return map;
})();

export interface SearchFilters {
  docset?: string | undefined;
  docType?: string | undefined;
  interfaceName?: string | undefined;
  categories?: Iterable<string> | undefined;
}

interface Posting {
  docs: number[];
  weights: number[];
}

interface QueryVariant {
  term: string;
  weight: number;
}

/** One distinct query term plus identifier forms it may be part of (`#saveas` for "save as"). */
interface QueryTermGroup {
  term: string;
  bridges: string[];
}

/**
 * Turns a query into its distinct terms. Dropped stopwords are not lost: they
 * are glued to their neighbouring word as an alternative identifier form.
 */
function queryTermGroups(query: string): QueryTermGroup[] {
  const words = query.match(WORD_RE) ?? [];
  const groups = new Map<string, QueryTermGroup>();
  const add = (term: string, bridges: string[]): QueryTermGroup => {
    const group = groups.get(term) ?? { term, bridges: [] };
    group.bridges.push(...bridges);
    groups.set(term, group);
    return group;
  };

  let pendingBridges: string[] = [];
  let previous: { lower: string; group: QueryTermGroup } | null = null;
  words.forEach((raw, index) => {
    const lower = raw.toLowerCase();
    const terms = analyze(raw);
    const first = terms[0];
    if (first === undefined) {
      const next = words[index + 1];
      if (previous) {
        previous.group.bridges.push(`#${previous.lower}${lower}`);
      }
      if (next) {
        pendingBridges.push(`#${lower}${next.toLowerCase()}`);
      }
      return;
    }
    const group = add(first, pendingBridges);
    pendingBridges = [];
    for (const term of terms.slice(1)) {
      add(term, []);
    }
    previous = { lower, group };
  });

  if (groups.size === 0) {
    // Nothing but stopwords ("how to"): fall back to matching them literally.
    for (const term of analyze(query, true)) {
      add(term, []);
    }
  }
  return Array.from(groups.values());
}

function pushIndexed<T>(map: Map<string, T[]>, key: string, value: T): void {
  const existing = map.get(key);
  if (existing) {
    existing.push(value);
  } else {
    map.set(key, [value]);
  }
}

export class SearchEngine {
  private readonly docs: readonly SearchDocument[];
  private readonly postings = new Map<string, Posting>();
  private readonly stemVocabulary: string[] = [];
  private readonly identifierVocabulary: string[] = [];
  private readonly lengthNorm: Float64Array;
  private readonly docsets: string[];
  private readonly types: string[];
  private readonly interfacesLower: string[];
  private readonly categorySets: Array<ReadonlySet<string>>;
  private readonly byName = new Map<string, number[]>();
  private readonly byQualifiedName = new Map<string, number[]>();
  private readonly byConcept = new Map<string, number[]>();
  private readonly cache = new LruCache<string, readonly SearchResult[]>(RESULT_CACHE_SIZE);

  constructor(documents: readonly SearchDocument[]) {
    this.docs = documents;
    const count = documents.length;
    this.lengthNorm = new Float64Array(count);
    this.docsets = new Array<string>(count);
    this.types = new Array<string>(count);
    this.interfacesLower = new Array<string>(count);
    this.categorySets = new Array<ReadonlySet<string>>(count);

    const contentLengths = new Float64Array(count);
    let totalLength = 0;

    documents.forEach((doc, index) => {
      const title = getString(doc.title);
      const interfaceName = getString(doc.interface);
      const categories = asStringList(doc.categories);

      this.docsets[index] = getString(doc.docset);
      this.types[index] = getString(doc.type);
      this.interfacesLower[index] = interfaceName.toLowerCase();
      this.categorySets[index] = new Set(categories);

      const titleTerms = analyze(title);
      const summaryTerms = analyze(getString(doc.summary));
      const weighted = new Map<string, number>();
      const add = (terms: readonly string[], weight: number): void => {
        for (const term of terms) {
          weighted.set(term, (weighted.get(term) ?? 0) + weight);
        }
      };
      add(titleTerms, FIELD_WEIGHTS.title);
      add(analyze(interfaceName), FIELD_WEIGHTS.interface);
      add(summaryTerms, FIELD_WEIGHTS.summary);
      add(analyze(asStringList(doc.parameters).join(" ")), FIELD_WEIGHTS.parameters);
      add(analyze(categories.join(" ")), FIELD_WEIGHTS.categories);
      add(analyze(asStringList(doc.keywords).join(" ")), FIELD_WEIGHTS.keywords);
      add(analyze(getString(doc.type)), FIELD_WEIGHTS.type);

      for (const [term, weight] of weighted) {
        let posting = this.postings.get(term);
        if (!posting) {
          posting = { docs: [], weights: [] };
          this.postings.set(term, posting);
        }
        posting.docs.push(index);
        posting.weights.push(weight);
      }

      const length = titleTerms.length + summaryTerms.length + 1;
      contentLengths[index] = length;
      totalLength += length;

      const nameKey = normalizeName(title);
      if (nameKey) {
        pushIndexed(this.byName, nameKey, index);
        if (interfaceName) {
          pushIndexed(this.byQualifiedName, normalizeName(interfaceName) + nameKey, index);
        }
        // `ISketchManager` / `IBody2` are the pages for the concepts "sketch manager" / "body".
        if (this.types[index] === "interface" && /^I[A-Z]/.test(title)) {
          pushIndexed(this.byConcept, nameKey.slice(1).replace(/\d+$/, ""), index);
        }
      }
    });

    const averageLength = count > 0 ? totalLength / count : 1;
    for (let index = 0; index < count; index += 1) {
      this.lengthNorm[index] =
        1 - BM25_B + (BM25_B * (contentLengths[index] ?? 1)) / averageLength;
    }

    for (const term of this.postings.keys()) {
      (term.startsWith("#") ? this.identifierVocabulary : this.stemVocabulary).push(term);
    }
    this.stemVocabulary.sort();
    this.identifierVocabulary.sort();
  }

  get size(): number {
    return this.docs.length;
  }

  search(query: string, filters: SearchFilters = {}, limit: number | null = null): SearchResult[] {
    if (limit === 0) {
      return [];
    }

    const categories = Array.from(filters.categories ?? []).sort();
    const key = cacheKey(
      query,
      filters.docset,
      filters.docType,
      filters.interfaceName?.toLowerCase(),
      JSON.stringify(categories),
    );
    const cacheable = limit !== null && limit <= MAX_CACHED_RESULTS;
    const cached = cacheable ? this.cache.get(key) : undefined;
    if (cached) {
      return cached.slice(0, limit ?? undefined);
    }

    const ranked = this.rank(query, filters, categories);
    if (cacheable) {
      this.cache.set(key, ranked.slice(0, MAX_CACHED_RESULTS));
    }
    return limit === null ? ranked : ranked.slice(0, limit);
  }

  private rank(query: string, filters: SearchFilters, categories: string[]): SearchResult[] {
    const queryGroups = queryTermGroups(query);
    if (queryGroups.length === 0) {
      return [];
    }

    const allowed = this.buildFilter(filters, categories);
    const groups = queryGroups.map((group) => this.variantsFor(group));

    const scores = new Float64Array(this.docs.length);
    const matched = new Uint16Array(this.docs.length);
    const touched: number[] = [];
    const best = new Float64Array(this.docs.length);
    const bestTouched: number[] = [];

    for (const variants of groups) {
      for (const { term, weight } of variants) {
        const posting = this.postings.get(term);
        if (!posting) {
          continue;
        }
        const df = posting.docs.length;
        const idf = Math.log(1 + (this.docs.length - df + 0.5) / (df + 0.5));
        for (let i = 0; i < df; i += 1) {
          const doc = posting.docs[i] as number;
          if (allowed && allowed[doc] === 0) {
            continue;
          }
          const tf = posting.weights[i] as number;
          const contribution =
            weight *
            idf *
            ((tf * (BM25_K1 + 1)) / (tf + BM25_K1 * (this.lengthNorm[doc] as number)));
          if (best[doc] === 0) {
            bestTouched.push(doc);
          }
          if (contribution > (best[doc] as number)) {
            best[doc] = contribution;
          }
        }
      }

      for (const doc of bestTouched) {
        if (scores[doc] === 0 && matched[doc] === 0) {
          touched.push(doc);
        }
        scores[doc] = (scores[doc] as number) + (best[doc] as number);
        matched[doc] = (matched[doc] as number) + 1;
        best[doc] = 0;
      }
      bestTouched.length = 0;
    }

    // Reward documents that cover more of the query.
    const groupCount = groups.length;
    const finalScores = new Map<number, number>();
    for (const doc of touched) {
      const coverage = (matched[doc] as number) / groupCount;
      finalScores.set(doc, (scores[doc] as number) * (0.5 + 0.5 * coverage));
    }

    this.applyExactMatches(query, finalScores, allowed);

    return Array.from(finalScores.entries())
      .sort((left, right) => right[1] - left[1] || left[0] - right[0])
      .map(([doc, score]) => ({
        score: Math.round(score * 100) / 100,
        doc: this.docs[doc] as SearchDocument,
      }));
  }

  /** Lifts documents whose name (or `Interface.Member`) is exactly what was asked for. */
  private applyExactMatches(
    query: string,
    scores: Map<number, number>,
    allowed: Uint8Array | null,
  ): void {
    const words = query.match(WORD_RE) ?? [];
    if (words.length === 0) {
      return;
    }
    let top = 0;
    for (const score of scores.values()) {
      top = Math.max(top, score);
    }

    const boost = (docs: number[] | undefined, bonus: number): void => {
      for (const doc of docs ?? []) {
        if (allowed && allowed[doc] === 0) {
          continue;
        }
        scores.set(doc, Math.max(scores.get(doc) ?? 0, top) + bonus);
      }
    };

    // A lone word is a name lookup (`SelectByID2`, `getfeatures`) or a concept
    // ("sketch" -> ISketch). Multi-word queries are descriptions and rank on
    // their terms instead ("custom properties" should surface
    // ICustomPropertyManager, not every member named CustomProperties).
    if (words.length === 1) {
      const word = words[0] as string;
      const key = normalizeName(word);
      const exact = this.byName.get(key);
      // A name shared by many members ("Name", "Sketch") isn't a meaningful lookup.
      if (exact && exact.length <= MAX_EXACT_NAME_MATCHES) {
        boost(exact, EXACT_NAME_BONUS);
      }
      if ((word.match(PART_RE)?.length ?? 0) <= 1) {
        boost(this.byConcept.get(key), CONCEPT_BONUS);
      }
    }
    if (words.length === 2) {
      boost(this.byQualifiedName.get(normalizeName(words.join(""))), EXACT_QUALIFIED_BONUS);
    }
    // Interface-qualified member names such as `IModelDocExtension.SelectByID2`.
    const dotted = query.trim().match(/^([A-Za-z0-9_]+)\s*(?:\.|::)\s*([A-Za-z0-9_]+)$/);
    if (dotted) {
      boost(this.byQualifiedName.get(normalizeName(`${dotted[1]}${dotted[2]}`)), EXACT_QUALIFIED_BONUS);
    }
  }

  private variantsFor({ term, bridges }: QueryTermGroup): QueryVariant[] {
    const variants: QueryVariant[] = [{ term, weight: 1 }];
    if (!term.startsWith("#")) {
      for (const synonym of SYNONYMS.get(term) ?? []) {
        variants.push({ term: synonym, weight: SYNONYM_WEIGHT });
      }
      if (term.length >= MIN_PREFIX_LENGTH && !/^\d+$/.test(term)) {
        variants.push(...this.prefixExpansions(term, this.stemVocabulary, PREFIX_WEIGHT));
      }
    }
    // Stopwords next to a word usually belong to an identifier ("save as" ->
    // SaveAs3): look the joined form up, including longer names that extend it.
    for (const bridge of bridges) {
      variants.push({ term: bridge, weight: 1 });
      variants.push(...this.prefixExpansions(bridge, this.identifierVocabulary, BRIDGE_WEIGHT));
    }
    return variants;
  }

  private prefixExpansions(
    prefix: string,
    vocabulary: readonly string[],
    weight: number,
  ): QueryVariant[] {
    let low = 0;
    let high = vocabulary.length;
    while (low < high) {
      const mid = (low + high) >>> 1;
      if ((vocabulary[mid] as string) < prefix) {
        low = mid + 1;
      } else {
        high = mid;
      }
    }

    const expansions: string[] = [];
    for (let i = low; i < vocabulary.length; i += 1) {
      const candidate = vocabulary[i] as string;
      if (!candidate.startsWith(prefix)) {
        break;
      }
      if (candidate !== prefix && candidate.length - prefix.length <= MAX_PREFIX_EXTRA_CHARS) {
        expansions.push(candidate);
      }
    }
    // Prefer the most common continuations when a prefix is very broad.
    expansions.sort(
      (left, right) =>
        (this.postings.get(right)?.docs.length ?? 0) - (this.postings.get(left)?.docs.length ?? 0),
    );
    return expansions.slice(0, MAX_PREFIX_EXPANSIONS).map((term) => ({ term, weight }));
  }

  private buildFilter(filters: SearchFilters, categories: string[]): Uint8Array | null {
    const docset = filters.docset || undefined;
    const docType = filters.docType || undefined;
    const interfaceName = filters.interfaceName?.toLowerCase() || undefined;
    if (!docset && !docType && !interfaceName && categories.length === 0) {
      return null;
    }
    const allowed = new Uint8Array(this.docs.length);
    for (let index = 0; index < this.docs.length; index += 1) {
      if (docset && this.docsets[index] !== docset) {
        continue;
      }
      if (docType && this.types[index] !== docType) {
        continue;
      }
      if (interfaceName && this.interfacesLower[index] !== interfaceName) {
        continue;
      }
      const docCategories = this.categorySets[index] as ReadonlySet<string>;
      if (categories.some((category) => !docCategories.has(category))) {
        continue;
      }
      allowed[index] = 1;
    }
    return allowed;
  }
}
