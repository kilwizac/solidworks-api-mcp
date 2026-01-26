---
type: property
interface: IPropertyManagerPageSelectionbox
member: SelectionIndex
returns: System.Int32
parameters:
  -
    name: Item
    type: System.Int32
    description: 0-based index number of the currently selected item (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - selections
  - ui
related: []
keywords:
  - selectionindex
  - ipropertymanagerpageselectionbox
  - manager
  - page
  - selectionbox
  - selection
  - index
  - item
  - int32
readonly: true
---

# IPropertyManagerPageSelectionbox.SelectionIndex

Gets the index number of the currently selected item in the selection box.

## Signature

```csharp
System.Int32 SelectionIndex( 
   System.Int32
Item
) {get;}
```
## Parameters

- `Item` (System.Int32): 0-based index number of the currently selected item (see Remarks )

## Return Value

1-based index number to use with ISelectionMgr APIs (see Remarks )

## Remarks

Use:
IPropertyManagerPageSelectionbox::ItemCount
to get the number of items in the selection box.
the return value Index with such ISelectionMgr APIs as
ISelectionMgr::GetSelectedObject6
and
ISelectionMgr::GetSelectedObjectType3
.