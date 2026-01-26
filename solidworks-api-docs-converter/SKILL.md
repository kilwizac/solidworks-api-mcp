---
name: solidworks-api-docs-converter
description: Convert the core SolidWorks API help files (`sldworksapi.chm` and `swconst.chm`) from `C:\Program Files\SOLIDWORKS Corp\SOLIDWORKS\api` into MCP-optimized Markdown and indexes. Use when decompiling the main SolidWorks API help content and producing structured Markdown with YAML frontmatter plus `_index.json` and `_search_index.json` for MCP tools (lookup, search, interface members, enums, examples, related).
---

# SolidWorks API Documentation Converter (MCP Optimized)

## Overview
Convert SolidWorks API HTML documentation into normalized Markdown files and indexes that power MCP tools. Preserve API meaning, surface search-friendly metadata, and keep output consistent across interfaces, members, and enums.

## Inputs
- Core SolidWorks API help sources from `C:\Program Files\SOLIDWORKS Corp\SOLIDWORKS\api`:
  - `sldworksapi.chm` (core API)
  - `swconst.chm` (constants and enums)
  Extract to HTML using `references/source-extraction.md`.
- Optional: target SolidWorks version for `since_version` and output metadata.

## Outputs
- `solidworks-api/` tree with interface/member files, enum files, and optional `patterns/` and `errors/` docs.
- `_index.json` and `_search_index.json` for retrieval.
- Pattern summaries such as `patterns/functional-categories.md` and `patterns/examples-index.md`.
- Parallel JSON corpus in `solidworks-api/json/` for strict programmatic access.
- Optional embeddings index for semantic search.

## Workflow
1. Extract and stage HTML sources per docset (see `references/source-extraction.md`).
2. Extract the programming guide (`sldworksapiprogguide.chm`) if you want example code pages available.
3. Run `scripts/convert_solidworks_api.py` to generate MCP-ready Markdown and indexes (and JSON corpus).
3. Spot-check output formatting for a few interfaces and members.
4. Validate output with `references/quality-checklist.md`.
5. Optionally run `scripts/build_embeddings.py` to generate semantic search vectors.

Notes:
- Example pages are linked from member docs; if example HTML exists in the source, the script embeds code blocks.

### Script Usage

```powershell
python scripts/convert_solidworks_api.py `
  --sldworks "F:\solidworks api mcp\source\helpviewer\sldworksapi\mshc" `
  --swconst "F:\solidworks api mcp\source\helpviewer\swconst\mshc" `
  --examples "F:\solidworks api mcp\source\progguide" `
  --output "F:\solidworks api mcp\solidworks-api"
```

Generate embeddings:

```powershell
python scripts/build_embeddings.py `
  --search "F:\solidworks api mcp\solidworks-api\_search_index.json" `
  --output "F:\solidworks api mcp\solidworks-api\_embeddings.jsonl" `
  --meta "F:\solidworks api mcp\solidworks-api\_embeddings.meta.json"
```

## Conventions
- File naming: `interfaces/<InterfaceName>/_interface.md` for interface overview and `interfaces/<InterfaceName>/<MemberName>.md` for members. Enums in `enums/<EnumName>.md`.
- Prefer C# examples over VBA; normalize formatting and add language tags.
- Use only categories from `references/category-taxonomy.md`.
- Make related links bidirectional when possible.
- Do not write into `Program Files`; always extract sources into a working directory.
- If multiple docsets are ingested, keep outputs separate per docset or include `docset` in frontmatter and indexes to avoid collisions.
- Exclude additional module CHMs and `*vb6.chm` unless explicitly requested.

## References
- Output templates and file layout: `references/output-structure.md`
- Frontmatter schema: `references/frontmatter-schema.md`
- Category taxonomy: `references/category-taxonomy.md`
- Conversion rules and heuristics: `references/conversion-rules.md`
- Source extraction: `references/source-extraction.md`
- Processing pipeline: `references/pipeline.md`
- Index schemas: `references/index-files.md`
- MCP tool behaviors: `references/mcp-tool-notes.md`
- Quality checklist: `references/quality-checklist.md`
