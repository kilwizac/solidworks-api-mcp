---
type: enum
name: swTableRowColSizeChangeBehavior_e
description: Values indicate how the size of the rest of the table should behave when a height of a row or width of a column changes.
member_count: 3
docset: swconst
categories:
  - constants
used_by: []
---

# swTableRowColSizeChangeBehavior_e

Values indicate how the size of the rest of the table should behave when a height of a row or width of a column changes.

## Values

| Member | Value | Description |
|---|---|---|
| `swTableRowColChange_AbsorbedByNext` | 1 | = The next row or column must absorb the change in size so that the entire table size remains the same |
| `swTableRowColChange_AbsorbedByPrevious` | 2 | = The next row or column must absorb the change in size so that the entire table size remains the same |
| `swTableRowColChange_TableSizeCanChange` | 0 | = The remaining rows or columns can shift, so that the entire table width or height changes |