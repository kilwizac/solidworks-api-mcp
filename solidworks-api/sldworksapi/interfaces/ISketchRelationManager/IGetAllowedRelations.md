---
type: method
interface: ISketchRelationManager
member: IGetAllowedRelations
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
  -
    name: NumAllowedRelations
    type: System.Int32
    description: Number of relations valid for the specified entities
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - sketches
related:
  - ISketchRelationManager.GetAllowedRelations
keywords:
  - relations
  - igetallowedrelations
  - isketchrelationmanager
  - sketch
  - relation
  - manager
  - allowed
  - num
  - entities
  - int32
  - entity
  - array
  - object
---

# ISketchRelationManager.IGetAllowedRelations

Gets the types of sketch relations valid for the specified entities.

## Signature

```csharp
System.Int32 IGetAllowedRelations( 
   System.Int32
NumEntities
,
   ref System.Object
EntityArray
,
   System.Int32
NumAllowedRelations
)
```
## Parameters

- `NumEntities` (System.Int32): Number of entities
- `EntityArray` (System.Object): Array of entities
- `NumAllowedRelations` (System.Int32): Number of relations valid for the specified entities

## Return Value

in-process, unmanaged C++: Pointer to an array of sketch relation types valid for the specified entities as defined in swConstraintType_e VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

Call
ISketchRelationManager::IGetAllowedRelationsCount
before calling this method to get the value for NumEntities.

## See Also

- `ISketchRelationManager.GetAllowedRelations`