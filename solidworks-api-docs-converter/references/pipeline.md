# Processing Pipeline

1. Extract sources
   - Decompile CHM or Help Viewer sources into HTML per docset.
2. Parse HTML
   - Extract title, signature, parameters, return values, remarks, examples, and See Also.
3. Classify
   - Determine type: method, property, event, interface, enum.
4. Enrich
   - Generate keywords.
   - Detect related members.
   - Assign categories.
   - Extract version info.
5. Validate
   - Ensure required frontmatter is present.
   - Ensure signature matches documented parameters.
   - Syntax-check examples when possible.
   - Ensure related links resolve.
6. Generate Indexes
   - `_index.json` for lookups.
   - `_search_index.json` for search and filtering.
7. Output
   - Write Markdown files with frontmatter into the final tree.
