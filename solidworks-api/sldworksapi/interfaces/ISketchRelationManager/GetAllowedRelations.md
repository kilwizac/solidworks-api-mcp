---
type: method
interface: ISketchRelationManager
member: GetAllowedRelations
returns: System.Object
parameters:
  -
    name: Entities
    type: System.Object
    description: Array of entities
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - sketches
related:
  - ISketchRelationManager.IGetAllowedRelations
  - ISketchRelationManager.IGetAllowedRelationsCount
keywords:
  - relations
  - getallowedrelations
  - isketchrelationmanager
  - sketch
  - relation
  - manager
  - allowed
  - entities
  - object
---

# ISketchRelationManager.GetAllowedRelations

Gets the types of sketch relations valid for the specified entities.

## Signature

```csharp
System.Object GetAllowedRelations( 
   System.Object
Entities
)
```
## Parameters

- `Entities` (System.Object): Array of entities

## Return Value

Array of sketch relation types valid for the specified entities as defined in swConstraintType_e

## See Also

- `ISketchRelationManager.IGetAllowedRelations`
- `ISketchRelationManager.IGetAllowedRelationsCount`