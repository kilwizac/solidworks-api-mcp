---
type: enum
name: swSMCommandStatus_e
description: Return conditions for various sheet metal APIs that attempt to do set operations.
member_count: 5
docset: swconst
categories:
  - constants
used_by: []
---

# swSMCommandStatus_e

Return conditions for various sheet metal APIs that attempt to do set operations.

## Values

| Member | Value | Description |
|---|---|---|
| `swSMErrorInvalidBendState` | 4 | = Failed, an invalid bend state was specified |
| `swSMErrorNone` | 0 | = Successful, operation completed |
| `swSMErrorNotAPart` | 2 | = Failed, sheet metal commands only apply to SOLIDWORKS parts |
| `swSMErrorNotASheetMetalPart` | 3 | = Failed, the part contains no sheet metal features |
| `swSMErrorUnknown` | 1 | = Failed, for an unknown reason |