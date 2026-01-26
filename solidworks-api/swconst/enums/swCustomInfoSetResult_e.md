---
type: enum
name: swCustomInfoSetResult_e
description: Result codes when setting custom properties.
member_count: 4
docset: swconst
categories:
  - constants
used_by: []
---

# swCustomInfoSetResult_e

Result codes when setting custom properties.

## Values

| Member | Value | Description |
|---|---|---|
| `swCustomInfoSetResult_LinkedProp` | 3 |  |
| `swCustomInfoSetResult_NotPresent` | 1 | = Custom property does not exist |
| `swCustomInfoSetResult_OK` | 0 | = Success |
| `swCustomInfoSetResult_TypeMismatch` | 2 | = Specified value has an incorrect type |