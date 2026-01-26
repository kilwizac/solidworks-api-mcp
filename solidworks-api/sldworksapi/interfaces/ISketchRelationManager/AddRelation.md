---
type: method
interface: ISketchRelationManager
member: AddRelation
returns: SketchRelation
parameters:
  -
    name: Entities
    type: System.Object
    description: Array of entities to which add the relation
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
  - ISketchRelationManager.GetRelationsCount
  - ISketchRelationManager.IAddRelation
keywords:
  - relations
  - addrelation
  - isketchrelationmanager
  - sketch
  - relation
  - manager
  - add
  - entities
  - object
  - type
  - int32
---

# ISketchRelationManager.AddRelation

Adds a relation to the specified entities in the active sketch.

## Signature

```csharp
SketchRelation AddRelation( 
   System.Object
Entities
,
   System.Int32
RelationType
)
```
## Parameters

- `Entities` (System.Object): Array of entities to which add the relation
- `RelationType` (System.Int32): Type of relation as defined by swConstraintType_e

## Return Value

Sketch relation

## Remarks

A sketch must be active for this method to have any effect. Use
IModelDoc2::GetActiveSketch2
or
IModelDoc2::IGetActiveSketch2
to determine if a sketch is active.

## See Also

- `ISketchRelationManager.GetRelationsCount`
- `ISketchRelationManager.IAddRelation`