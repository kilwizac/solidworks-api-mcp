---
type: enum
name: swFlangePositionTypes_e
description: Position types for sheet metal edge flanges.
member_count: 6
docset: swconst
categories:
  - constants
used_by: []
---

# swFlangePositionTypes_e

Position types for sheet metal edge flanges.

## Values

| Member | Value | Description |
|---|---|---|
| `swFlangePositionTypeBendCenterLine` | 4 |  |
| `swFlangePositionTypeBendOutside` | 3 |  |
| `swFlangePositionTypeBendSharp` | 5 | = Bend from virtual sharp |
| `swFlangePositionTypeBendTangent` | 6 | = The flange position will always be tangent to the side face attached to the selected edge, and the flange length will always maintain the exact length; not valid for the Up To Edge And Merge length end condition |
| `swFlangePositionTypeMaterialInside` | 1 |  |
| `swFlangePositionTypeMaterialOutside` | 2 |  |