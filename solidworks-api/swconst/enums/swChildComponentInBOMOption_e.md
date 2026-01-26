---
type: enum
name: swChildComponentInBOMOption_e
description: Child component display options in Bills of Materials (BOM) for assemblies and for parts that have weldment/sheet metal cut lists.
member_count: 3
docset: swconst
categories:
  - constants
used_by: []
---

# swChildComponentInBOMOption_e

Child component display options in Bills of Materials (BOM) for assemblies and for parts that have weldment/sheet metal cut lists.

## Values

| Member | Value | Description |
|---|---|---|
| `swChildComponent_Hide` | 1 | = Child components might be listed individually, depending on the properties that you selected when you created the BOM |
| `swChildComponent_Promote` | 3 | = The model's configuration dissolves when it appears in a BOM; all of its child components are promoted one level |
| `swChildComponent_Show` | 2 | = Child components appear as single items in the BOM |