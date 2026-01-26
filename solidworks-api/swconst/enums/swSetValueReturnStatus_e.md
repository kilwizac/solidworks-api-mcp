---
type: enum
name: swSetValueReturnStatus_e
description: Return values for attempting to set the value of a parameter.
member_count: 6
docset: swconst
categories:
  - constants
used_by: []
---

# swSetValueReturnStatus_e

Return values for attempting to set the value of a parameter.

## Values

| Member | Value | Description |
|---|---|---|
| `swSetValue_DrivenDimension` | 3 | = Cannot be done on a dimension driven by geometry |
| `swSetValue_Failure` | 1 | = Failed for an unknown reason |
| `swSetValue_FrozenFeatureOwner` | 5 | = Owner of the dimension is frozen |
| `swSetValue_InvalidValue` | 2 | = Not a valid value for change parameter |
| `swSetValue_ModelNotLoaded` | 4 | = Model must be loaded in order to set this value |
| `swSetValue_Successful` | 0 | = Successful |