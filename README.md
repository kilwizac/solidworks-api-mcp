# SolidWorks API MCP Server

TypeScript MCP server that provides search and lookup access to the SolidWorks API documentation corpus in this repository.

## Features

- Full-text and keyword search over SolidWorks API docs.
- Interface/member lookup for methods, properties, and events.
- Enum value lookup from JSON or markdown sources.
- Related member and example discovery helpers.
- Stdio MCP JSON-RPC transport for local and Claude Desktop usage.

## Runtime and Tooling

- Runtime: Bun + TypeScript
- MCP transport: stdio (`stdin`/`stdout`)
- Test framework: Vitest
- Type checking: TypeScript compiler (`tsc`)

This repository uses Bun-only JavaScript tooling:

- Install dependencies: `bun install`
- Run package scripts: `bun run <script>`
- Run one-off CLIs: `bunx <tool>`

## Quick Start

1. Install dependencies:

```bash
bun install
```

2. Start the MCP server:

```bash
bun run start
```

## Data Root Configuration

By default the server reads from:

`<repo>/solidworks-api`

You can override this with `SW_API_DATA_ROOT`.

PowerShell:

```powershell
$env:SW_API_DATA_ROOT = "C:\path\to\solidworks-api"
bun run start
```

## Claude Desktop Configuration

Add an MCP server entry to `claude_desktop_config.json`.

Windows example:

```json
{
  "mcpServers": {
    "solidworks-api": {
      "command": "bun",
      "args": [
        "run",
        "C:\\path\\to\\solidworks-api-mcp\\server\\solidworks_mcp_server.ts"
      ]
    }
  }
}
```

Restart Claude Desktop after updating the config.

## Available Tools

The stdio MCP server exposes these tool names:

- `solidworks_lookup_method`
- `solidworks_search_api`
- `solidworks_get_interface_members`
- `solidworks_get_enum_values`
- `solidworks_find_related`
- `solidworks_get_examples`

## Development

Run tests:

```bash
bun run test
```

Run type checking:

```bash
bun run typecheck
```

## Project Structure

```text
solidworks-api-mcp/
|- server/
|  |- solidworks_mcp_server.ts
|  |- solidworks_server_shared.ts
|  `- types.ts
|- solidworks-api/
|  |- _index.json
|  |- _search_index.json
|  `- json/
|- tests/
|  |- performance.test.ts
|  `- regression-contracts.test.ts
|- package.json
|- tsconfig.json
`- README.md
```
