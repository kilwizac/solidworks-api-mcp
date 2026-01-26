---
type: enum
name: swUnitsDecimalRounding_e
description: Rounding options for decimal units.
member_count: 4
docset: swconst
categories:
  - constants
used_by: []
---

# swUnitsDecimalRounding_e

Rounding options for decimal units.

## Values

| Member | Value | Description |
|---|---|---|
| `swUnitsDecimalRounding_HalfAway` | 0 | = Round up to the nearest decimal |
| `swUnitsDecimalRounding_HalfToEven` | 2 | = Round up or down to the next even decimal |
| `swUnitsDecimalRounding_HalfTowards` | 1 | = Round down to the nearest decimal |
| `swUnitsDecimalRounding_Truncate` | 3 | = Truncate the decimal without rounding |