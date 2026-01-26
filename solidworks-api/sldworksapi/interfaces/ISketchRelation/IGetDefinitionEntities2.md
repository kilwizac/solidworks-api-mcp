---
type: method
interface: ISketchRelation
member: IGetDefinitionEntities2
returns: System.Object
parameters:
  -
    name: NumEntities
    type: System.Int32
    description: Number of actual entities
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - sketches
related: []
keywords:
  - igetdefinitionentities2
  - isketchrelation
  - sketch
  - relation
  - definition
  - entities2
  - num
  - entities
  - int32
  - object
---

# ISketchRelation.IGetDefinitionEntities2

Gets the actual entities associated with this sketch relation.

## Signature

```csharp
System.Object IGetDefinitionEntities2( 
   System.Int32
NumEntities
)
```
## Parameters

- `NumEntities` (System.Int32): Number of actual entities

## Return Value

In-process, unmanaged C++: Pointer to an array of the actual entities for this sketch relation VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

When you create a sketch relation, an internal entity may also be created to define that sketch relation. For example, if you add a sketch relation by specifying or selecting a point and an edge, a sketch segment may be created. If this happens, then
ISketchRelation::GetEntities
and
ISketchRelation::IGetEntities
return the point and sketch segment.
To get the actual entities used to define the sketch relation, call
ISketchRelation::GetDefinitionEntities2
or ISketchRelation::IGetDefinitionEntities2. For example, if the relation is of type
swConstraintType_e
.swConstraintType_OFFSETEDGE, and the relation is created by selecting a face, then this method returns that face.
Because some of the objects may be null, you should check for null before accessing them. You should deallocate any dynamically allocated memory.
Before calling this method, call
ISketchRelation::GetEntitiesCount
to get the value for NumEntities.