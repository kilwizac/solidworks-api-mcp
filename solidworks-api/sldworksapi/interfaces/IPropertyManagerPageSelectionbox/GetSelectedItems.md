---
type: property
interface: IPropertyManagerPageSelectionbox
member: GetSelectedItems
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - selections
  - ui
related:
  - IPropertyManagerPageSelectionbox.GetSelectedItemsCount
  - IPropertyManagerPageSelectionbox.IGetSelectedItems
  - IPropertyManagerPageSelectionbox.SetSelectedItem
  - IPropertyManagerPageSelectionbox.Style
keywords:
  - getselecteditems
  - ipropertymanagerpageselectionbox
  - manager
  - page
  - selectionbox
  - selected
  - items
  - object
readonly: null
---

# IPropertyManagerPageSelectionbox.GetSelectedItems

Gets the items selected in a PropertyManager selection box.

## Signature

```csharp
System.Object GetSelectedItems()
```
## Parameters

None.

## Return Value

Array of shorts of the indices of the currently selected items

## Remarks

Each item is a 0-based index into the list of items. For example, if there are five (5) items in the selection box and the first and last items are selected, then this method will return an array containing 0, 4.
Before calling this method, call
IPropertyManagerPageSelectionbox::Style
and set the style to swPropMgrPageSelectionBoxStyle_MultipleItemSelect to enable multiple selections.

## See Also

- `IPropertyManagerPageSelectionbox.GetSelectedItemsCount`
- `IPropertyManagerPageSelectionbox.IGetSelectedItems`
- `IPropertyManagerPageSelectionbox.SetSelectedItem`
- `IPropertyManagerPageSelectionbox.Style`