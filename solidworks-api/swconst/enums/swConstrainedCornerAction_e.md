---
type: enum
name: swConstrainedCornerAction_e
description: Actions to take if the corner to be filleted is constrained or has a dimension.
member_count: 4
docset: swconst
categories:
  - constants
used_by: []
---

# swConstrainedCornerAction_e

Actions to take if the corner to be filleted is constrained or has a dimension.

## Values

| Member | Value | Description |
|---|---|---|
| `swConstrainedCornerDeleteGeometry` | 2 | = Delete the constraint or dimension and add the fillet |
| `swConstrainedCornerInteract` | 0 | = Ask the user whether to delete the geometry or stop processing |
| `swConstrainedCornerKeepGeometry` | 1 | = Keep the constraint or dimension by creating a virtual intersection point before adding the fillet |
| `swConstrainedCornerStopProcessing` | 3 | = Do not delete the constraint or dimension and do not create the fillet |