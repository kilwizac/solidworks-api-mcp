---
type: enum
name: swMassPropertiesStatus_e
description: Mass property result codes.
member_count: 3
docset: swconst
categories:
  - constants
used_by: []
---

# swMassPropertiesStatus_e

Mass property result codes.

## Values

| Member | Value | Description |
|---|---|---|
| `swMassPropertiesStatus_NoBody` | 2 | = Mass properties calculation failed because there is no body in the model |
| `swMassPropertiesStatus_OK` | 0 | = Mass properties calculation successful |
| `swMassPropertiesStatus_UnknownError` | 1 | = Mass properties calculation failed for an unknown reason |