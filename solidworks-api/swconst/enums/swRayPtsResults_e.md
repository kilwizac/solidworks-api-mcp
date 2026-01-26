---
type: enum
name: swRayPtsResults_e
description: Types of intersections and whether the rays are entering or exiting the body when they hit. Bitmask.
member_count: 7
docset: swconst
categories:
  - constants
used_by: []
---

# swRayPtsResults_e

Types of intersections and whether the rays are entering or exiting the body when they hit. Bitmask.

## Values

| Member | Value | Description |
|---|---|---|
| `swRayPtsResultsEDGE` | 4 | or 0x4; Edge hit |
| `swRayPtsResultsENTER` | 16 | or 0x10; Ray was entering body when it hit (optionally appears when swRayPtsOptsENTRY_EXIT is specified in the options argument to IModelDoc2::RayIntersections ) |
| `swRayPtsResultsEXIT` | 32 | or 0x20; Ray was exiting body when it hit (optionally appears when swRayPtsOptsENTRY_EXIT is specified in the options argument to IModelDoc2::RayIntersections ) |
| `swRayPtsResultsFACE` | 1 | or 0x1; Simple face hit |
| `swRayPtsResultsSILHOUETTE` | 2 | or 0x2; Grazing face hit |
| `swRayPtsResultsUnknown` | 0 | or 0x0; Unknown |
| `swRayPtsResultsVERTEX` | 8 | or 0x8; Vertex hit |