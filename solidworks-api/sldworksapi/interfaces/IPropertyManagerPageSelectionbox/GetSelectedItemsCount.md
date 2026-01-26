---
type: property
interface: IPropertyManagerPageSelectionbox
member: GetSelectedItemsCount
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - selections
  - ui
related:
  - IPropertyManagerPageSelectionbox.GetSelectedItems
  - IPropertyManagerPageSelectionbox.SetSelectedItem
keywords:
  - getselecteditemscount
  - ipropertymanagerpageselectionbox
  - manager
  - page
  - selectionbox
  - selected
  - items
  - count
  - int32
readonly: null
---

# IPropertyManagerPageSelectionbox.GetSelectedItemsCount

Gets the number of currently selected items in this PropertyManager selection box.

## Signature

```csharp
System.Int32 GetSelectedItemsCount()
```
## Parameters

None.

## Return Value

Number of currently selected items

## Remarks

Before calling:
this method, call
IPropertyManagerPageSelectionbox::Style
and set the style to swPropMgrPageSelectionBoxStyle_MultipleItemSelect to enable multiple selections.
IPropertyManagerPageSelectionbox::IGetSelectedItems
, call this method to get the size of the array for that method.

## See Also

- `IPropertyManagerPageSelectionbox.GetSelectedItems`
- `IPropertyManagerPageSelectionbox.SetSelectedItem`