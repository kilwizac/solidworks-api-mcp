# Frontmatter Schema

## Common Fields

All documents must include these fields unless noted otherwise:

- `type`: method | property | event | interface | enum | pattern | error
- `categories`: array of category ids from `references/category-taxonomy.md`
- `keywords`: array of search terms and common synonyms
- `deprecated`: true or false
- `since_version`: SolidWorks version string (use "unknown" if not found)
- `docset`: optional source label (use when multiple CHM or HelpViewer sets are ingested)

## Member Documents (method, property, event)

Required fields:
- `interface`: parent interface name
- `member`: member name
- `parameters`: array (empty array if none)
- `related`: array of related members (empty array if none)

Additional fields by type:
- method: `returns`
- property: `returns`, `readonly`
- event: `returns` (event handler or delegate type)

Example:

```yaml
---
type: method
interface: IModelDoc2
member: GetTitle
returns: string
parameters: []
docset: sldworksapi
readonly: true
deprecated: false
since_version: "2015"
categories:
  - core
  - documents
keywords:
  - title
related:
  - IModelDoc2.GetPathName
---
```

## Interface Documents

Required fields:
- `interface`: interface name
- `inherits`: base interface or null
- `description`: short description
- `member_count`: number
- `categories`: array
- `common_members`: list of representative member names

Example:

```yaml
---
type: interface
interface: IModelDoc2
inherits: null
description: Base interface for all SOLIDWORKS document types
member_count: 847
docset: sldworksapi
categories:
  - core
  - documents
common_members:
  - GetTitle
  - GetPathName
---
```

## Enum Documents

Required fields:
- `name`: enum name
- `description`: short description
- `member_count`: number of enum values
- `categories`: array
- `used_by`: array of members that consume the enum

Example:

```yaml
---
type: enum
name: swDocumentTypes_e
description: Document type identifiers
member_count: 7
docset: swconst
categories:
  - documents
  - constants
used_by:
  - ISldWorks.NewDocument
  - IModelDoc2.GetType
---
```

## Pattern and Error Documents

Use these when creating `patterns/` or `errors/` pages.

Required fields:
- `type`: pattern or error
- `title`: short title
- `keywords`: array
- `categories`: array
- `related`: array of related members or patterns

Example:

```yaml
---
type: pattern
title: Traversing Features
keywords:
  - feature tree
  - traversal
categories:
  - features
related:
  - IModelDoc2.FirstFeature
---
```
