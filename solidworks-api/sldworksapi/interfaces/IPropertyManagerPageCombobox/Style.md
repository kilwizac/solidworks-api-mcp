---
type: property
interface: IPropertyManagerPageCombobox
member: Style
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related: []
keywords:
  - style
  - ipropertymanagerpagecombobox
  - manager
  - page
  - combobox
  - int32
readonly: null
---

# IPropertyManagerPageCombobox.Style

Gets or sets the style for the attached drop-down list for this combo box.

## Signature

```csharp
System.Int32 Style {get; set;}
```
## Parameters

None.

## Return Value

Combo-box style as defined in swPropMgrPageComboBoxStyle_e

## Remarks

Style is a combination of Boolean values, each represented by a bit in this long value. The different Boolean values are represented in the swPropMgrPageComboBoxStyle_e enumeration.
For example, to set the attached drop-down list of a combo box so that the items are sorted, set Style to swPropMgrPageComboBoxStyle_Sorted.
The control style must be set before the PropertyManager page is displayed except if setting Style to swPropMgrPageComboBoxStyle_EditBoxReadOnly. You can set swPropMgrPageComboBoxStyle_EditBoxReadOnly either before or after the PropertyManager page is displayed.