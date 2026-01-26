---
type: enum
name: swFlangeOffsetTypes_e
description: End conditions for both flange length and flange position offset for sheet metal edge and base flanges.
member_count: 6
docset: swconst
categories:
  - constants
used_by: []
---

# swFlangeOffsetTypes_e

End conditions for both flange length and flange position offset for sheet metal edge and base flanges.

## Values

| Member | Value | Description |
|---|---|---|
| `swFlangeOffsetBlind` | 1 | = Positions the edge flange based on the length and direction you specify |
| `swFlangeOffsetFromSurface` | 4 |  |
| `swFlangeOffsetMidPlane` | 5 |  |
| `swFlangeOffsetUptoEdgeAndMerge` | 6 | = Creates the edge flange in a multibody part by merging a selected edge on one body with an Up To reference edge on the second body |
| `swFlangeOffsetUpToSurface` | 3 |  |
| `swFlangeOffsetUpToVertex` | 2 | = Positions the edge flange up to a specified vertex; for flange length, the selected vertex may be either on a plane that is normal to the end face of the edge flange or on a plane that is parallel to the face of the base flange |