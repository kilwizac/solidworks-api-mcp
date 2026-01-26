---
type: enum
name: swCustomLinkSetResult_e
description: Error codes when linking and unlinking custom properties.
member_count: 4
docset: swconst
categories:
  - constants
used_by: []
---

# swCustomLinkSetResult_e

Error codes when linking and unlinking custom properties.

## Values

| Member | Value | Description |
|---|---|---|
| `swCustomLinkSetResult_Legacy` | 2 | = Legacy custom properties cannot be linked or unlinked |
| `swCustomLinkSetResult_NotPresent` | 1 | = Custom property does not exist |
| `swCustomLinkSetResult_OK` | 0 | = Success |
| `swCustomLinkSetResult_UserProp` | 3 | = User-defined custom properties cannot be linked or unlinked |