---
type: enum
name: swSurfaceCutFeatureError_e
description: Types of surface-cut errors.
member_count: 3
docset: swconst
categories:
  - constants
used_by: []
---

# swSurfaceCutFeatureError_e

Types of surface-cut errors.

## Values

| Member | Value | Description |
|---|---|---|
| `swSurfaceCutFeatureError_BodiesNotSpecified` | 1 | = No bodies specified to cut |
| `swSurfaceCutFeatureError_InvalidVariant` | 2 | = Array passed to IFeatureManager::InsertCutSurface must contain only body objects |
| `swSurfaceCutFeatureError_NoError` | 0 | = No error |