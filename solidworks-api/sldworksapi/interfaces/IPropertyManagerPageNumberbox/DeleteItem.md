---
type: property
interface: IPropertyManagerPageNumberbox
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
  - ipropertymanagerpagenumberbox
  - manager
  - page
  - numberbox
  - delete
  - item
  - int16
readonly: null
---

# IPropertyManagerPageNumberbox.DeleteItem

Deletes an item from the attached drop-down list for this number box.

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