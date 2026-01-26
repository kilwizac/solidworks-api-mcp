---
type: method
interface: IAdvancedSelectionCriteria
member: DeleteItem
returns: System.Boolean
parameters:
  -
    name: Index
    type: System.Int32
    description: Index number of the criteria to delete
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
  - selections
related: []
keywords:
  - deleteitem
  - iadvancedselectioncriteria
  - advanced
  - selection
  - criteria
  - delete
  - item
  - index
  - int32
  - boolean
---

# IAdvancedSelectionCriteria.DeleteItem

Deletes a criteria from the advanced component selection list.

## Signature

```csharp
System.Boolean DeleteItem( 
   System.Int32
Index
)
```
## Parameters

- `Index` (System.Int32): Index number of the criteria to delete

## Return Value

True if criteria is deleted, false if not

## Remarks

Call
IAdvancedSelectionCriteria::GetItemCount
to get a valid value for Index before calling this method.