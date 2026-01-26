---
type: enum
name: swPropMgrPageOptionStyle_e
description: PropertyManage page group option styles. Bitmask.
member_count: 1
docset: swconst
categories:
  - constants
used_by: []
---

# swPropMgrPageOptionStyle_e

PropertyManage page group option styles. Bitmask.

## Values

| Member | Value | Description |
|---|---|---|
| `swPropMgrPageOptionStyle_FirstInGroup` | 1 | or 0x1; This is the beginning of a group of option items; any following option items without this value set are considered part of the group; the next option with this value set indicates the start of a new option group |