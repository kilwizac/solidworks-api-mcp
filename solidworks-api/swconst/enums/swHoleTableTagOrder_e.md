---
type: enum
name: swHoleTableTagOrder_e
description: Method by which to assign tag numbers to holes of the same size.
member_count: 3
docset: swconst
categories:
  - constants
used_by: []
---

# swHoleTableTagOrder_e

Method by which to assign tag numbers to holes of the same size.

## Values

| Member | Value | Description |
|---|---|---|
| `swHoleTableTagOrder_Radial` | 3 | = Number holes in order of increasing radial angle from the table view origin, starting at -180 degrees in a counterclockwise direction |
| `swHoleTableTagOrder_ReduceToolPath` | 2 | = Number holes in next nearest order, starting at the table view origin |
| `swHoleTableTagOrder_XY` | 1 | = Number holes in order of their XLoc and YLoc |