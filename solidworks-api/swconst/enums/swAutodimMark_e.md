---
type: enum
name: swAutodimMark_e
description: Selection mark values. Bitmask.
member_count: 4
docset: swconst
categories:
  - constants
used_by: []
---

# swAutodimMark_e

Selection mark values. Bitmask.

## Values

| Member | Value | Description |
|---|---|---|
| `swAutodimMarkEntities` | 1 | or 0x1; Sketch entities to autodimension when swAutodimEntitiesSelected is passed as the entitiesToDimension argument to ISketch::AutoDimension2 |
| `swAutodimMarkHorizontalDatum` | 2 | or 0x2; Sketch entities to autodimension when swAutodimEntitiesSelected is passed as the entitiesToDimension argument to ISketch::AutoDimension2 |
| `swAutodimMarkOriginDatum` | 8 | or 0x8; Unique datum for the origin dimension scheme. Datum must be either a sketch point or a vertical sketch line. |
| `swAutodimMarkVerticalDatum` | 4 | or 0x4; Unique datum for the horizontal dimension scheme; datum must be either a sketch point or a vertical sketch line |