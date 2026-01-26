---
type: enum
name: swSMBendState_e
description: Bend state values for a sheet metal part.
member_count: 4
docset: swconst
categories:
  - constants
used_by: []
---

# swSMBendState_e

Bend state values for a sheet metal part.

## Values

| Member | Value | Description |
|---|---|---|
| `swSMBendStateFlattened` | 2 | = The bends are flattened; the model is rolled back to just after a FlattenBends feature, but just before the corresponding ProcessBends feature |
| `swSMBendStateFolded` | 3 | = The bends are folded; the model is rolled back to just after a FlattenBends ProcessBends feature pair |
| `swSMBendStateNone` | 0 | = Not a sheet metal part; no SheetMetal features present |
| `swSMBendStateSharps` | 1 | = The bends are in their sharp state; the part is rolled back to just before the first FlattenBends feature |