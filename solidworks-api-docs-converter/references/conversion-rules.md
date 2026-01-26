# Conversion Rules and Heuristics

## Frontmatter Generation
- Include all required fields from `references/frontmatter-schema.md`.
- Always include `categories`, `keywords`, `related`, `deprecated`, and `since_version`.
- Use `since_version: "unknown"` if the version is not documented.
- Set `docset` from the source CHM or Help Viewer filename (for example `sldworksapi`, `swconst`).

## Keyword Extraction
Generate keywords from:
- Member or interface name (split camelCase and acronyms)
- Parameter names and types
- Return type
- Description text and summary sentence
- Common use cases in Remarks or Examples
- Error messages that reference the member

Include common misspellings and synonyms when they are known from the documentation.

## Related Member Detection
Link related members when any of the following are true:
- Mentioned in a See Also section
- Share parameters or return types
- Used together in a common example
- Method returns a type that exposes the related member

Make related links bidirectional when both documents exist.

## Example Prioritization
- Prefer C# examples over VBA when both exist.
- Keep at least one simple example and one realistic example when available.
- Normalize indentation and add a language tag to code blocks.
- Trim irrelevant boilerplate but keep necessary context such as interface casting.

## Error Documentation
For members that can fail:
- Document HRESULT codes when provided.
- Document null or empty return conditions.
- Document common misuse patterns.
- Link to any relevant `errors/` pages.

## Version Information
- Use the SolidWorks version shown in the documentation.
- If a member is missing version info, set `since_version` to "unknown" and include a note in Remarks if helpful.

## Docset and Duplicate Handling
- Ingest only `sldworksapi` and `swconst` unless explicitly requested.
- Avoid mixing VB6 docsets (`*vb6.chm`) with .NET/C# docsets unless explicitly required.
- If ingesting `obsoleteapi.chm`, set `deprecated: true` and add a short deprecation note in Remarks.
- When multiple docsets are merged, ensure `_index.json` and `_search_index.json` include `docset` to prevent collisions.
