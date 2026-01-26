---
type: property
interface: IPropertyManagerPageListbox
member: DeleteItem
returns: System.Int16
parameters:
  -
    name: Item
    type: System.Int16
    description: Index number of the item to delete from the 0-based list of items
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related: []
keywords:
  - deleteitem
  - ipropertymanagerpagelistbox
  - manager
  - page
  - listbox
  - delete
  - item
  - int16
readonly: null
---

# IPropertyManagerPageListbox.DeleteItem

Removes the specified item from the attached drop-down list for this list box.

## Signature

```csharp
System.Int16 DeleteItem( 
   System.Int16
Item
)
```
## Parameters

- `Item` (System.Int16): Index number of the item to delete from the 0-based list of items

## Return Value

Number of items remaining in the list or -1 if the item is not deleted