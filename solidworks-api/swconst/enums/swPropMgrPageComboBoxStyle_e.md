---
type: enum
name: swPropMgrPageComboBoxStyle_e
description: PropertyManager page combobox styles.
member_count: 4
docset: swconst
categories:
  - constants
used_by: []
---

# swPropMgrPageComboBoxStyle_e

PropertyManager page combobox styles.

## Values

| Member | Value | Description |
|---|---|---|
| `swPropMgrPageComboBoxStyle_AvoidSelectionText` | 8 | or 0x8; The item the user selects in the attached drop-down list does not appear in the combo box. Instead, the user's selection causes the add-in to get a callback via IPropertyManagerPage2Handler4::OnComboboxSelectionChanged . The Id argument is the combo box |
| `swPropMgrPageComboBoxStyle_EditableText` | 2 | or 0x2; Allows editing of the text in the combo box |
| `swPropMgrPageComboBoxStyle_EditBoxReadOnly` | 4 | or 0x4; User can only select a value from the attached drop-down list for the combo box NOTE: You can set swPropMgrPageComboBoxStyle_EditBoxReadOnly either before or after the PropertyManager page is displayed. If set after the PropertyManager page is displayed and the box contains editable text, then that text cannot be edited by the user. However, you can use IPropertyManagerPageCombobox::EditText to edit the text in the combo box. |
| `swPropMgrPageComboBoxStyle_Sorted` | 1 | or 0x1; Sort the items in the attached drop-down list of the combo box in alphabetical order |