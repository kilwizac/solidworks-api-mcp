# MCP Tool Notes

## solidworks_lookup_method
- Use `_index.json` for fast lookup by interface and member.
- Return full Markdown or parsed sections.
- If multiple docsets exist, require or infer a `docset` filter to avoid collisions.

## solidworks_search_api
- Use `_search_index.json` for keyword and category filtering.
- Support type, category, and interface filters.
- Consider embedding search when available, but keep keyword search as baseline.
- Include `docset` as an optional filter when multiple docsets are present.

## solidworks_get_interface_members
- Use `interfaces/<Interface>/_interface.md` and `_index.json`.
- Return a list of member names and signatures when possible.

## solidworks_get_enum_values
- Parse enum Markdown tables into structured JSON.
- Preserve numeric values and descriptions.

## solidworks_find_related
- Use `related` arrays in frontmatter.
- Expand relationships by following See Also references.

## solidworks_get_examples
- Extract code blocks from member documents.
- Prefer C# examples and include short context labels if present.
