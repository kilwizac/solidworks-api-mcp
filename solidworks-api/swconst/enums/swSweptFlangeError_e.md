---
type: enum
name: swSweptFlangeError_e
description: Swept flange creation errors. Bitmask.
member_count: 5
docset: swconst
categories:
  - constants
used_by: []
---

# swSweptFlangeError_e

Swept flange creation errors. Bitmask.

## Values

| Member | Value | Description |
|---|---|---|
| `swSweptFlangeError_InvalidPath` | 2 |  |
| `swSweptFlangeError_InvalidProfile` | 1 |  |
| `swSweptFlangeError_InvalidSheetMetalParameters` | 8 | = ISweptFlangeFeatureData::UseMaterialSheetMetalParameters and ISweptFlangeFeatuareData::UseGaugeTable cannot both be set to true |
| `swSweptFlangeError_None` | 0 |  |
| `swSweptFlangeError_SelfIntersectingGeometry` | 4 |  |