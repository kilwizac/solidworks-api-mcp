---
type: property
interface: IPropertyManagerPageSelectionbox
member: Style
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - selections
  - ui
related: []
keywords:
  - style
  - ipropertymanagerpageselectionbox
  - manager
  - page
  - selectionbox
  - int32
readonly: null
---

# IPropertyManagerPageSelectionbox.Style

Gets or sets style of this selection box.

## Signature

```csharp
System.Int32 Style {get; set;}
```
## Parameters

None.

## Return Value

Style as defined in swPropMgrPageSelectionboxStyle_e

## Remarks

You must set this property before the PropertyManager page is displayed.
For a selection list to automatically have a horizontal scroll bar if the text is wider than the selection box, set this property's style to swPropMgrPageSelectionBoxStyle_HScroll.