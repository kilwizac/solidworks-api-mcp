---
type: method
interface: ISketchRelationManager
member: IAddRelation
returns: SketchRelation
parameters:
  -
    name: NumEntities
    type: System.Int32
    description: Number of entities to which to add the relation
  -
    name: EntityArray
    type: System.Object
    description: Array of entities to which to add the relation
  -
    name: RelationType
    type: System.Int32
    description: Type of relation as defined by swConstraintType_e
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - sketches
related:
  - ISketchRelationManager.AddRelation
keywords:
  - relations
  - iaddrelation
  - isketchrelationmanager
  - sketch
  - relation
  - manager
  - add
  - num
  - entities
  - int32
  - entity
  - array
  - object
  - type
---

# ISketchRelationManager.IAddRelation

Adds a relation to the specified entities in the active sketch.

## Signature

```csharp
SketchRelation IAddRelation( 
   System.Int32
NumEntities
,
   ref System.Object
EntityArray
,
   System.Int32
RelationType
)
```
## Parameters

- `NumEntities` (System.Int32): Number of entities to which to add the relation
- `EntityArray` (System.Object): Array of entities to which to add the relation
- `RelationType` (System.Int32): Type of relation as defined by swConstraintType_e

## Return Value

Sketch relation

## Remarks

A sketch must be active for this method to have any effect. Use
IModelDoc2::GetActiveSketch2
or
IModelDoc2::IGetActiveSketch2
to determine if a sketch is active.
Call
ISketchRelationManager::GetRelationsCount
before calling this method to get the value for NumEntities.

## See Also

- `ISketchRelationManager.AddRelation`