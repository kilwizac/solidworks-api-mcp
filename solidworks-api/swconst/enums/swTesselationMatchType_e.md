---
type: enum
name: swTesselationMatchType_e
description: Tessellation match types.
member_count: 3
docset: swconst
categories:
  - constants
used_by: []
---

# swTesselationMatchType_e

Tessellation match types.

## Values

| Member | Value | Description |
|---|---|---|
| `swTesselationMatchEdgeCurve` | 2 | = Clipping facet boundaries to model edge curves |
| `swTesselationMatchFacetGeometry` | 1 | = Clipping facet boundaries to a common edge |
| `swTesselationMatchFacetTopology` | 0 | = Matching facet vertices across a common edge |