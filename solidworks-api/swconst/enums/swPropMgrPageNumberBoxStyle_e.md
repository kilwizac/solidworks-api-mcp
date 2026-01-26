---
type: enum
name: swPropMgrPageNumberBoxStyle_e
description: PropertyManager page number box styles. Bitmask.
member_count: 7
docset: swconst
categories:
  - constants
used_by: []
---

# swPropMgrPageNumberBoxStyle_e

PropertyManager page number box styles. Bitmask.

## Values

| Member | Value | Description |
|---|---|---|
| `swPropMgrPageNumberBoxStyle_AvoidSelectionText` | 4 | or 0x4; The item the user selects in the attached drop-down list does not appear in the number box. Instead, the user's selection causes the add-in to get a callback via IPropertyManagerPage2Handler9::OnComboboxSelectionChanged ; the Id argument will be the number box; the add-in is expected to respond by setting the value for the number box using IPropertyManagerPageNumberbox::Value . |
| `swPropMgrPageNumberBoxStyle_ComboEditBox` | 1 | or 0x1; Enables the attached drop-down list for the number box; user can type a value or select a value from the attached drop-down list for the number box |
| `swPropMgrPageNumberBoxStyle_EditBoxReadOnly` | 2 | or 0x2; User can only select a value from the attached drop-down list for the number box NOTE: You can set swPropMgrPageNumberBoxStyle_EditBoxReadOnly either before or after the PropertyManager page is displayed. If set after the PropertyManager page is displayed and the number box contains editable text, then that text cannot be edited by the user |
| `swPropMgrPageNumberBoxStyle_NoScrollArrows` | 8 | or 0x8; Do not show the up and down arrows in the number box, thus, disallowing incrementing or decrementing the value in the number box |
| `swPropMgrPageNumberBoxStyle_Slider` | 16 | or 0x10; Slider |
| `swPropMgrPageNumberBoxStyle_SuppressNotifyWhileTracking` | 64 | or 0x40; Suppress sending multiple notifications when a user is dragging or spinning the slider of a number box on a PropertyManager page; instead, send only one notification; see IPropertyManagerPage2Handler9::OnNumberboxChanged for details |
| `swPropMgrPageNumberBoxStyle_Thumbwheel` | 32 | or 0x20; Thumbwheel |