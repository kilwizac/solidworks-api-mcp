export type DocFormat = "markdown" | "json";

export interface SearchDocument {
  title?: string;
  summary?: string;
  keywords?: string[] | null;
  categories?: string[] | null;
  interface?: string | null;
  type?: string | null;
  docset?: string | null;
  href?: string | null;
  [key: string]: unknown;
}

export interface SearchIndex {
  documents?: SearchDocument[];
}

export interface InterfaceIndexEntry {
  file?: string;
  members?: Record<string, string>;
  member_count?: number;
}

export interface DocsetIndex {
  interfaces?: Record<string, InterfaceIndexEntry>;
  enums?: Record<string, string>;
}

export interface RootIndex {
  docsets?: Record<string, DocsetIndex>;
}

export interface SearchResult {
  score: number;
  doc: SearchDocument;
}

export interface ToolDefinition {
  name: string;
  description: string;
  inputSchema: {
    type: "object";
    properties: Record<string, unknown>;
    required?: string[];
  };
}

export type JsonRpcId = number | string | null;

export interface JsonRpcRequest {
  jsonrpc?: "2.0";
  id?: JsonRpcId;
  method?: string;
  params?: Record<string, unknown> | null;
}
