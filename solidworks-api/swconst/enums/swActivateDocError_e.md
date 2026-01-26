---
type: enum
name: swActivateDocError_e
description: Document activation errors. Bitmask.
member_count: 2
docset: swconst
categories:
  - constants
used_by: []
---

# swActivateDocError_e

Document activation errors. Bitmask.

## Values

| Member | Value | Description |
|---|---|---|
| `swDocNeedsRebuildWarning` | 2 | or 0x2; The document that was activated needs to be rebuilt (your application can use EditRebuild on the PartDoc, AssemblyDoc, or DrawingDoc to perform the rebuild). |
| `swGenericActivateError` | 1 | or 0x1; An unspecified error was encountered, and the document was not activated. |