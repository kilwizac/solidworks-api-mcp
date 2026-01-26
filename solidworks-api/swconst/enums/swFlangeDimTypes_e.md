---
type: enum
name: swFlangeDimTypes_e
description: Origins for dimensioning Blind or Up To Edge And Merge flange length end conditions in edge flanges.
member_count: 3
docset: swconst
categories:
  - constants
used_by: []
---

# swFlangeDimTypes_e

Origins for dimensioning Blind or Up To Edge And Merge flange length end conditions in edge flanges.

## Values

| Member | Value | Description |
|---|---|---|
| `swFlangeDimTypeBendTangentArc` | 3 | = Flange length is measured from the edge flange face to a line that is tangent to the bend; not valid for the Up To Edge And Merge length end condition |
| `swFlangeDimTypeInnerVirtualSharp` | 2 | = Flange length is measured from the edge flange face to an inner virtual sharp (sketch point at the virtual intersection point of two sketch entities) |
| `swFlangeDimTypeOuterVirtualSharp` | 1 | = Flange length is measured from the edge flange face to an outer virtual sharp (sketch point at the virtual intersection point of two sketch entities) |