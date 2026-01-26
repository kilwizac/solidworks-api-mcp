---
type: enum
name: swPropMgrPageSelectionBoxStyle_e
description: PropertyManager page selection box styles. Bitmask.
member_count: 4
docset: swconst
categories:
  - constants
used_by: []
---

# swPropMgrPageSelectionBoxStyle_e

PropertyManager page selection box styles. Bitmask.

## Values

| Member | Value | Description |
|---|---|---|
| `swPropMgrPageSelectionBoxStyle_HScroll` | 1 | or 0x1; Specifies that the selection box has a scroll bar so that interactive users can scroll through the list of items |
| `swPropMgrPageSelectionBoxStyle_MultipleItemSelect` | 4 | or 0x4; Specifies that you can select multiple items in the selection box |
| `swPropMgrPageSelectionBoxStyle_UpAndDownButtons` | 2 | or 0x2; Specifies that selection listbox has up and down arrows so that interactive users can move items in the list up or down |
| `swPropMgrPageSelectionBoxStyle_WantListboxSelectionChanged` | 8 | or 0x8; Specifies that you want a notification sent when a user changes the selected item in a listbox or selection listbox |