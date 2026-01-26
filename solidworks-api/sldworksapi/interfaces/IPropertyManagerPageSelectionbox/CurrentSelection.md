---
type: property
interface: IPropertyManagerPageSelectionbox
member: CurrentSelection
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
  - currentselection
  - ipropertymanagerpageselectionbox
  - manager
  - page
  - selectionbox
  - current
  - selection
  - int32
readonly: null
---

# IPropertyManagerPageSelectionbox.CurrentSelection

Gets or sets the index number of the currently selected item in this selection box.

## Signature

```csharp
System.Int32 CurrentSelection {get; set;}
```
## Parameters

None.

## Return Value

0-based index of the currently selected item in this selection box

## Remarks

The return value Item is the item in the selection box that is selected. Only the active selection box can have a current selection.
If you use this property with an inactive selection box, -1 is returned. See
IPropertyManagerPageSelectionbox::GetSelectionFocus
to determine if a selection box is active or not.