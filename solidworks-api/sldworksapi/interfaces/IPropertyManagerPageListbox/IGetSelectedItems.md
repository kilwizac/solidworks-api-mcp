---
type: property
interface: IPropertyManagerPageListbox
member: IGetSelectedItems
returns: System.Int16
parameters:
  -
    name: Count
    type: System.Int32
    description: Number of selected items
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - selections
  - ui
related:
  - IPropertyManagerPageListbox.GetSelectedItems
keywords:
  - igetselecteditems
  - ipropertymanagerpagelistbox
  - manager
  - page
  - listbox
  - selected
  - items
  - count
  - int32
  - int16
readonly: null
---

# IPropertyManagerPageListbox.IGetSelectedItems

Gets the items selected in a list box enabled for multiple selections.

## Signature

```csharp
System.Int16 IGetSelectedItems( 
   System.Int32
Count
)
```
## Parameters

- `Count` (System.Int32): Number of selected items

## Return Value

in-process, unmanaged C++: Pointer to an array of shorts of the currently selected items in this list box VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

Each item is a 0-based index into the list of items.
Call
IPropertyManagerPageListbox::GetSelectedItemsCount
to size the returned array.

## See Also

- `IPropertyManagerPageListbox.GetSelectedItems`