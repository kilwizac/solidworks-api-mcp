import type { InterfaceIndexEntry, RootIndex } from "./types";
import { asRecord, buildNameLookup, cacheKey, getString, hasOwn } from "./util";

type NameLookup = Map<string, string>;

/**
 * Read-only view over a docs `_index.json`: docsets, interfaces, members and
 * enums, with case-insensitive name resolution to canonical spelling.
 */
export class Catalog {
  private readonly interfaceLookups = new Map<string, NameLookup>();
  private readonly memberLookups = new Map<string, NameLookup>();
  private readonly enumLookups = new Map<string, NameLookup>();

  constructor(private readonly index: RootIndex) {}

  docsets(): string[] {
    return Object.keys(asRecord(this.index.docsets));
  }

  hasDocset(docset: string): boolean {
    return hasOwn(asRecord(this.index.docsets), docset);
  }

  private interfaceMap(docset: string): Record<string, InterfaceIndexEntry> {
    const docsets = asRecord(this.index.docsets);
    const entry = hasOwn(docsets, docset) ? asRecord(docsets[docset]) : {};
    return asRecord(entry.interfaces) as Record<string, InterfaceIndexEntry>;
  }

  private enumMap(docset: string): Record<string, unknown> {
    const docsets = asRecord(this.index.docsets);
    const entry = hasOwn(docsets, docset) ? asRecord(docsets[docset]) : {};
    return asRecord(entry.enums);
  }

  interfaceNames(docset: string): string[] {
    return Object.keys(this.interfaceMap(docset));
  }

  enumNames(docset: string): string[] {
    return Object.keys(this.enumMap(docset));
  }

  findInterface(
    docset: string,
    name: string | undefined,
  ): { name: string; entry: InterfaceIndexEntry } | null {
    if (!name) {
      return null;
    }
    const interfaces = this.interfaceMap(docset);
    let resolved: string | undefined;
    if (hasOwn(interfaces, name) && interfaces[name]) {
      resolved = name;
    } else {
      resolved = this.lookup(this.interfaceLookups, docset, () => Object.keys(interfaces)).get(
        name.toLowerCase(),
      );
    }
    const entry = resolved !== undefined ? interfaces[resolved] : undefined;
    return resolved !== undefined && entry ? { name: resolved, entry } : null;
  }

  memberNames(docset: string, interfaceName: string | undefined): string[] {
    const found = this.findInterface(docset, interfaceName);
    return found ? Object.keys(asRecord(found.entry.members)) : [];
  }

  findMember(
    docset: string,
    interfaceName: string | undefined,
    memberName: string | undefined,
  ): { interface: string; member: string; file: string } | null {
    const found = this.findInterface(docset, interfaceName);
    if (!found || !memberName) {
      return null;
    }
    const members = asRecord(found.entry.members);
    let resolved: string | undefined;
    if (hasOwn(members, memberName) && members[memberName]) {
      resolved = memberName;
    } else {
      resolved = this.lookup(
        this.memberLookups,
        cacheKey(docset, found.name),
        () => Object.keys(members),
      ).get(memberName.toLowerCase());
    }
    const file = resolved !== undefined ? getString(members[resolved]) : "";
    return resolved !== undefined && file
      ? { interface: found.name, member: resolved, file }
      : null;
  }

  /** Interfaces in `docset` that declare a member named `memberName` (any capitalization). */
  interfacesWithMember(docset: string, memberName: string): string[] {
    const lowered = memberName.toLowerCase();
    const matches: string[] = [];
    for (const [name, entry] of Object.entries(this.interfaceMap(docset))) {
      const members = asRecord(entry.members);
      const lookup = this.lookup(
        this.memberLookups,
        cacheKey(docset, name),
        () => Object.keys(members),
      );
      if (lookup.has(lowered)) {
        matches.push(name);
      }
    }
    return matches;
  }

  findEnum(docset: string, name: string | undefined): { name: string; file: string } | null {
    if (!name) {
      return null;
    }
    const enums = this.enumMap(docset);
    let resolved: string | undefined;
    if (hasOwn(enums, name) && getString(enums[name])) {
      resolved = name;
    } else {
      resolved = this.lookup(this.enumLookups, docset, () => Object.keys(enums)).get(
        name.toLowerCase(),
      );
    }
    const file = resolved !== undefined ? getString(enums[resolved]) : "";
    return resolved !== undefined && file ? { name: resolved, file } : null;
  }

  private lookup(
    cache: Map<string, NameLookup>,
    key: string,
    names: () => Iterable<string>,
  ): NameLookup {
    let lookup = cache.get(key);
    if (!lookup) {
      lookup = buildNameLookup(names());
      cache.set(key, lookup);
    }
    return lookup;
  }
}

const catalogs = new WeakMap<object, Catalog>();

/** Shared Catalog per index object, so name lookups are built once. */
export function catalogFor(index: RootIndex): Catalog {
  let catalog = catalogs.get(index);
  if (!catalog) {
    catalog = new Catalog(index);
    catalogs.set(index, catalog);
  }
  return catalog;
}
