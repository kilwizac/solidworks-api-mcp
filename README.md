# SolidWorks API MCP Server (Rust-only)

High-performance Rust MCP server for search and lookup access to the SolidWorks API documentation corpus.

## Status

This repository is now **100% switched to Rust runtime/tooling** for the MCP server:

- Runtime and server implementation: Rust (`src/main.rs`)
- Build/test toolchain: Cargo
- Launcher: `bin/solidworks-mcp` -> Rust release binary / `cargo run --release`
- Legacy TypeScript MCP server/tooling removed

## Performance architecture

- Startup-prepared search corpora for markdown and JSON docs.
- Inverted index (`token -> [(doc_index, weight)]`) for postings-based scoring.
- Query-time score accumulation only across matched postings (avoids full corpus scans).
- Top-K heap selection when `limit` is set (avoids sorting all hits).
- Case-insensitive interface/member resolution maps precomputed at startup.
- Release profile tuning: `lto=fat`, `codegen-units=1`, `panic=abort`, `strip=true`.

## Build and run

```bash
cargo build --release
./target/release/solidworks-mcp-rs
```

Or with the launcher:

```bash
./bin/solidworks-mcp
```

## Data root

Default data root: `<repo>/solidworks-api`

Override with:

```bash
SW_API_DATA_ROOT=/path/to/solidworks-api ./bin/solidworks-mcp
```

## MCP tools

- `solidworks_lookup_method`
- `solidworks_search_api`
- `solidworks_get_interface_members`
- `solidworks_get_enum_values`
- `solidworks_find_related`
- `solidworks_get_examples`
