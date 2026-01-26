---
type: enum
name: swPropMgrPageTextBoxStyle_e
description: PropertyManager page textbox styles. Bitmask.
member_count: 4
docset: swconst
categories:
  - constants
used_by: []
---

# swPropMgrPageTextBoxStyle_e

PropertyManager page textbox styles. Bitmask.

## Values

| Member | Value | Description |
|---|---|---|
| `swPropMgrPageTextBoxStyle_Multiline` | 8 | or 0x8 |
| `swPropMgrPageTextBoxStyle_NoBorder` | 4 | or 0x4 |
| `swPropMgrPageTextBoxStyle_NotifyOnlyWhenFocusLost` | 1 | or 0x1; Do not send notification every time a character in the text box changes; instead, only send notification when text box loses focus after the user has made all changes |
| `swPropMgrPageTextBoxStyle_ReadOnly` | 2 | or 0x2 |