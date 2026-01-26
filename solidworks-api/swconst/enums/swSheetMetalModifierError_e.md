---
type: enum
name: swSheetMetalModifierError_e
description: Sheet metal feature data errors.
member_count: 6
docset: swconst
categories:
  - constants
used_by: []
---

# swSheetMetalModifierError_e

Sheet metal feature data errors.

## Values

| Member | Value | Description |
|---|---|---|
| `swSheetMetalModifierError_GaugeTablePathNotEmpty` | 5 | = ISheetMetalFeatureData::SetUseGaugeTable's GaugeTableFile parameter must be an empty string for derived sheet-metal features |
| `swSheetMetalModifierError_InvalidProperty` | 3 |  |
| `swSheetMetalModifierError_NoError` | 0 |  |
| `swSheetMetalModifierError_NotEnabledOnTemplate` | 2 |  |
| `swSheetMetalModifierError_OldArchitecture` | 1 |  |
| `swSheetMetalModifierError_UnspecifiedError` | 4 |  |