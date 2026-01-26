---
type: enum
name: swLoftedBendFacetOptions_e
description: Faceting options for lofted bend facet features.
member_count: 4
docset: swconst
categories:
  - constants
used_by: []
---

# swLoftedBendFacetOptions_e

Faceting options for lofted bend facet features.

## Values

| Member | Value | Description |
|---|---|---|
| `swAngleBetweenSegments` | 3 | = Facet by maximum angle between adjacent linear segments |
| `swBendsPerTransitionSegment` | 1 | = Facet by maximum number of bends per transition segment |
| `swChordTolerance` | 0 | = Facet by maximum distance between the arc and linear segment of a chord on the lofted bend |
| `swMaxSegmentLength` | 2 | = Facet by maximum length of a linear segment |