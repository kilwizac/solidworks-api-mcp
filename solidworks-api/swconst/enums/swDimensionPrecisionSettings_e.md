---
type: enum
name: swDimensionPrecisionSettings_e
description: Precision settings for dimensions.
member_count: 3
docset: swconst
categories:
  - constants
used_by: []
---

# swDimensionPrecisionSettings_e

Precision settings for dimensions.

## Values

| Member | Value | Description |
|---|---|---|
| `swDoNotChangePrecisionSetting` | -1 | = Used by IDisplayDimension::SetPrecision2 only |
| `swPrecisionFollowsDocumentSetting` | -2 | = Precision equals the document default precision value |
| `swTolerancePrecisionFollowsNominal` | -3 | = Tolerance precision equals the dimension precision value |