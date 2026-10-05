# SolidWorks API MCP Server

TypeScript [MCP](https://modelcontextprotocol.io) server that gives an AI assistant search and lookup access to the SolidWorks API documentation corpus in this repository: about 14,000 documented interfaces, methods, properties, enums and programming-guide examples.

## Features

- **Relevance-ranked search** over the whole corpus. Understands API names (`SelectByID2`, `IModelDocExtension.SelectByID2`), descriptions (`how do I create an extrusion feature`) and word variants. See [Search](#search).
- **Exact lookup** of interface members, enum values, related members and examples, with case-insensitive names.
- **Helpful failures**: a miss returns "did you mean" suggestions and, for members, the interfaces that actually declare them.
- **Discovery** tools to list docsets and interface/enum names.
- **Compact responses**: search hits omit noisy keyword lists unless asked (`verbose`).
- Stdio transport (`stdin`/`stdout`), MCP protocol versions `2025-06-18`, `2025-03-26` and `2024-11-05` negotiated automatically.

## Runtime and Tooling

- Runtime: Bun + TypeScript
- Tests: Vitest; type checking: `tsc`
- Bun-only JavaScript tooling: `bun install`, `bun run <script>`, `bunx <tool>`

## Quick Start

```bash
bun install
bun run start
```

## Data Root

By default the server reads from `<repo>/solidworks-api`. Override with `SW_API_DATA_ROOT`:

```powershell
$env:SW_API_DATA_ROOT = "C:\path\to\solidworks-api"
bun run start
```

The server exits with an error if the data root does not exist.

## Client Configuration

Claude Desktop (`claude_desktop_config.json`), Windows example:

```json
{
  "mcpServers": {
    "solidworks-api": {
      "command": "bun",
      "args": ["run", "C:\\path\\to\\solidworks-api-mcp\\server\\solidworks_mcp_server.ts"]
    }
  }
}
```

Claude Code:

```bash
claude mcp add solidworks-api -- bun run C:\path\to\solidworks-api-mcp\server\solidworks_mcp_server.ts
```

Restart the client after changing its configuration.

## Tools

All tools are read-only. Names are case-insensitive. Bad arguments are reported as tool errors (`isError`) that name the offending field.

| Tool | Purpose |
| --- | --- |
| `solidworks_search_api` | Ranked search by keywords, description or API name. Filters: `docset`, `type`, `interface`, `categories`; `limit` (default 10); `verbose`. |
| `solidworks_lookup_method` | Full documentation page for `interface` + `member` (markdown or JSON). |
| `solidworks_get_interface_members` | Names of all members of an interface. |
| `solidworks_get_enum_values` | Members, values and descriptions of an enum such as `swSelectType_e`. |
| `solidworks_find_related` | "See also" members for an interface member. |
| `solidworks_get_examples` | Example code for a member, or a search of the programming-guide examples. |
| `solidworks_list_docsets` | Available docsets (`sldworksapi`, `swconst`, `progguide`) with interface and enum counts. |
| `solidworks_list_names` | Interface or enum names in a docset, with an optional substring filter. |

Failed lookups return `{ "error": "Not found", "message": ..., "suggestions": [...] }`, plus `declared_on` when the member exists on other interfaces. Unknown docsets return `{ "error": "Unknown docset", "available": [...] }`.

## Search

Ranking is a field-weighted BM25 over identifier-aware terms (`server/search.ts`):

- Identifiers are split on case and digit boundaries (`SelectByID2` becomes `select`, `id`, `2`) and also kept whole, so exact API names outrank their fragments.
- Filler words are ignored, words are lightly stemmed, and longer words and a few domain synonyms (`extrusion`/`extrude`, `document`/`doc`, `save`/`export`, ...) match at reduced weight.
- Stopwords next to a word are tried as part of an identifier, so `save as` finds `SaveAs3`.
- A one-word query that is a member name ranks exact matches first; one that names a concept (`sketch`) ranks its interface (`ISketch`) first.

The index is built in memory from `_search_index.json` right after the client's `initialized` notification, so the first query does not pay for it.

## Development

```bash
bun run test        # vitest
bun run typecheck   # tsc --noEmit
```

Ranking is regression-tested against the real corpus in `tests/search.test.ts`; `tests/protocol.test.ts` also drives the server over stdio.

## Project Structure

```text
solidworks-api-mcp/
|- server/
|  |- solidworks_mcp_server.ts   JSON-RPC/MCP protocol, entry point
|  |- tools.ts                   tool definitions and handlers
|  |- schema.ts                  tool argument validation
|  |- search.ts                  ranking engine
|  |- store.ts                   data store (indexes, paths, search)
|  |- catalog.ts                 docset/interface/member/enum name resolution
|  |- suggest.ts                 "did you mean" suggestions
|  |- outbox.ts                  ordered, backpressure-safe stdout writer
|  |- util.ts                    shared helpers
|  `- types.ts
|- solidworks-api/               documentation corpus (markdown + JSON)
|- tests/
|- bin/solidworks-mcp
`- package.json
```
