---
type: enum
name: swCustomInfoAddResult_e
description: Result codes when adding custom properties.
member_count: 5
docset: swconst
categories:
  - constants
used_by: []
---

# swCustomInfoAddResult_e

Result codes when adding custom properties.

## Values

| Member | Value | Description |
|---|---|---|
| `swCustomInfoAddResult_AddedOrChanged` | 0 | = Success |
| `swCustomInfoAddResult_GenericFail` | 1 | = Failed to add the custom property |
| `swCustomInfoAddResult_MismatchAgainstExistingType` | 2 | = Existing custom property with the same name has a different type |
| `swCustomInfoAddResult_MismatchAgainstLegacyTypes` | 4 | = Cannot add the specified custom property to legacy architecture |
| `swCustomInfoAddResult_MismatchAgainstSpecifiedType` | 3 | = Specified value of the custom property does not match the specified type |