---
type: method
interface: ISketchRelationManager
member: IGetAllowedRelationsCount
returns: System.Int32
parameters:
  -
    name: NumEntities
    type: System.Int32
    description: Number of entities
  -
    name: EntityArray
    type: System.Object
    description: Array of entities
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - sketches
related:
  - ISketchRelationManager.GetAllowedRelations
keywords:
  - relations
  - igetallowedrelationscount
  - isketchrelationmanager
  - sketch
  - relation
  - manager
  - allowed
  - count
  - num
  - entities
  - int32
  - entity
  - array
  - object
---

# ISketchRelationManager.IGetAllowedRelationsCount

Gets the number of sketch relations valid for the specified entities.

## Signature

```csharp
System.Int32 IGetAllowedRelationsCount( 
   System.Int32
NumEntities
,
   ref System.Object
EntityArray
)
```
## Parameters

- `NumEntities` (System.Int32): Number of entities
- `EntityArray` (System.Object): Array of entities

## Return Value

Number of sketch relations valid for the specified entities

## Remarks

Call this method before calling
ISketchRelationManager::IGetAllowedRelations
to get the size of the array for that method.

## See Also

- `ISketchRelationManager.GetAllowedRelations`