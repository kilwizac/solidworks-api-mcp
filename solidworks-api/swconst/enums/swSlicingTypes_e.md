---
type: enum
name: swSlicingTypes_e
description: Types of slicing. Bitmask.
member_count: 5
docset: swconst
categories:
  - constants
used_by: []
---

# swSlicingTypes_e

Types of slicing. Bitmask.

## Values

| Member | Value | Description |
|---|---|---|
| `swSlicingTypes_Circle` | 4 | = Creates a circle whose diameter equals the average of the length and width of the rectangle that encloses all the sketch entities; circle is located at the intersection of the source geometry and the slicing plane |
| `swSlicingTypes_Exact` | 2 | = Creates an exact intersection of the mesh BREP body and graphics body resulting in a polyline; set only if swSlicingTypes_Intersection is also set; not valid with swSlicingTypes_Circle and swSlicingTypes_Rectangle |
| `swSlicingTypes_Intersection` | 1 | = For SOLIDWORKS BREP geometry, the slicing is identical to what is generated using the Intersection Curve tool; for mesh BREP and graphics bodies, sketches generated cannot be modified |
| `swSlicingTypes_None` | 0 |  |
| `swSlicingTypes_Rectangle` | 8 | = Creates a rectangle that encloses all the sketch entities and is located at the intersection of the source geometry and the slicing plane |