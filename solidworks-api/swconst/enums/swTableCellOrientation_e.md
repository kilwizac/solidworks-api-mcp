---
type: enum
name: swTableCellOrientation_e
description: Orientations of text in table cells.
member_count: 7
docset: swconst
categories:
  - constants
used_by: []
---

# swTableCellOrientation_e

Orientations of text in table cells.

## Values

| Member | Value | Description |
|---|---|---|
| `swTableCellOrientation_Down` | 3 |  |
| `swTableCellOrientation_Left` | 1 |  |
| `swTableCellOrientation_Right` | 0 |  |
| `swTableCellOrientation_Rotate90CCW` | 6 | = Rotate text 90 degrees counter clockwise from the current orientation |
| `swTableCellOrientation_Rotate90CW` | 5 | = Rotate text 90 degrees clockwise from the current orientation |
| `swTableCellOrientation_Up` | 2 |  |
| `swTableCellOrientation_Varies` | 4 | = Orientation varies in several table cells; not valid when calling ITableAnnotation::SetCellTextOrientation |