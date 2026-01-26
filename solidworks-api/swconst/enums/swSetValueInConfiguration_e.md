---
type: enum
name: swSetValueInConfiguration_e
description: Values for indicating in which configurations the value should be set.
member_count: 5
docset: swconst
categories:
  - constants
used_by: []
---

# swSetValueInConfiguration_e

Values for indicating in which configurations the value should be set.

## Values

| Member | Value | Description |
|---|---|---|
| `swSetValue_InAllConfigurations` | 2 | = Set the value in all configurations |
| `swSetValue_InSpecificConfigurations` | 3 | = Set the value in the specific configuration |
| `swSetValue_InThisConfiguration` | 1 | = Set the value in the current configuration only |
| `swSetValue_NoConfiguration` | -1 | = Ignore configurations in drawing sketches |
| `swSetValue_UseCurrentSetting` | 0 | = Use whatever setting this parameter currently has |