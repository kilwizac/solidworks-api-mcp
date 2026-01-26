---
type: property
interface: IPropertyManagerPageSelectionbox
member: SetSelectedItem
returns: System.Boolean
parameters:
  -
    name: Item
    type: System.Int16
    description: Index of the item to select or clear
  -
    name: Selected
    type: System.Boolean
    description: True to select the item, false to clear it
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - selections
  - ui
related:
  - IPropertyManagerPageSelectionbox.GetSelectedItems
  - IPropertyManagerPageSelectionbox.GetSelectedItemsCount
  - IPropertyManagerPageSelectionbox.IGetSelectedItems
  - IPropertyManagerPageSelectionbox.Style
keywords:
  - setselecteditem
  - ipropertymanagerpageselectionbox
  - manager
  - page
  - selectionbox
  - selected
  - item
  - int16
  - boolean
readonly: null
---

# IPropertyManagerPageSelectionbox.SetSelectedItem

Sets whether an item is selected or cleared in a selection box enabled for multiple selection.

## Signature

```csharp
System.Boolean SetSelectedItem( 
   System.Int16
Item
,
   System.Boolean
Selected
)
```
## Parameters

- `Item` (System.Int16): Index of the item to select or clear
- `Selected` (System.Boolean): True to select the item, false to clear it

## Return Value

True if the time was selected or cleared, false if not

## Remarks

The value specified for Item must be a valid index number. If it is not, then this method returns false. Thus, set up your list item index before using this method.
If you use this method to set a selected item in a single-selection style list box and another item in the list box is already selected, then that item is automatically cleared. You can use this method to clear a selection in a single-selection style list box, which results in no current selection in that list box.

## See Also

- `IPropertyManagerPageSelectionbox.GetSelectedItems`
- `IPropertyManagerPageSelectionbox.GetSelectedItemsCount`
- `IPropertyManagerPageSelectionbox.IGetSelectedItems`
- `IPropertyManagerPageSelectionbox.Style`