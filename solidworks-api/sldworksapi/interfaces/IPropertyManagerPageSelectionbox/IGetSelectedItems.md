---
type: property
interface: IPropertyManagerPageSelectionbox
member: IGetSelectedItems
returns: System.Int16
parameters:
  -
    name: Count
    type: System.Int32
    description: Number of items selected
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - selections
  - ui
related: []
keywords:
  - igetselecteditems
  - ipropertymanagerpageselectionbox
  - manager
  - page
  - selectionbox
  - selected
  - items
  - count
  - int32
  - int16
readonly: null
---

# IPropertyManagerPageSelectionbox.IGetSelectedItems

Gets the items selected in a PropertyManager selection box.

## Signature

```csharp
System.Int16 IGetSelectedItems( 
   System.Int32
Count
)
```
## Parameters

- `Count` (System.Int32): Number of items selected

## Return Value

in-process, unmanaged C++: Pointer to an array of shorts of the indices of the currently selected items VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

Each item is a 0-based index into the list of items. For example, if there are five (5) items in the selection box and the first and last items are selected, then this method will return an array containing 0, 4.
Before calling:
this method, call
IPropertyManagerPageSelectionbox::Style
and set the style to swPropMgrPageSelectionBoxStyle_MultipleItemSelect to enable multiple selections.
IPropertyManagerPageSelectionbox::GetSelectedItemsCount
to ge the value of Count.