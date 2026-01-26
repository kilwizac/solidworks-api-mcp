---
type: enum
name: swFeatureFillSurfaceOptions_e
description: Feature fill surface options. Bitmask.
member_count: 5
docset: swconst
categories:
  - constants
used_by: []
---

# swFeatureFillSurfaceOptions_e

Feature fill surface options. Bitmask.

## Values

| Member | Value | Description |
|---|---|---|
| `swMergeResult` | 4 | or 0x4; Corresponds to IFillSurfaceFeatureData::Merge |
| `swOptimizeSurface` | 1 | or 0x1; Optimize surface |
| `swReverseDirection` | 8 | or 0x8; Corresponds to IFillSurfaceFeatureData::ReverseDirection |
| `swReverseSurface` | 16 | or 0x10; Corresponds to IFillSurfaceFeatureData::ReverseSurface |
| `swTryToFormSolid` | 2 | or 0x2; Corresponds to IFillSurfaceFeatureData::TryToFormSolid |