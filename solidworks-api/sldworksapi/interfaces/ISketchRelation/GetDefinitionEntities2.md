---
type: method
interface: ISketchRelation
member: GetDefinitionEntities2
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - sketches
related:
  - ISketchRelation.GetEntitiesCount
keywords:
  - getdefinitionentities2
  - isketchrelation
  - sketch
  - relation
  - definition
  - entities2
  - object
  - relations
  - vba
  - vb
  - net
---

# ISketchRelation.GetDefinitionEntities2

Gets the actual entities associated with this sketch relation.

## Signature

```csharp
System.Object GetDefinitionEntities2()
```
## Parameters

None.

## Return Value

Array of the actual entities for this sketch relation

## Remarks

When you create a sketch relation, an internal entity may be created to define that sketch relation. For example, if you add a sketch relation by specifying or selecting a point and an edge, a sketch segment may be created. If this happens, then
ISketchRelation::GetEntities
and
ISketchRelation::IGetEntities
return the point and sketch segment.
To get the actual entities used to define the sketch relation, call ISketchRelation::GetDefinitionEntities2 or
ISketchRelation::IGetDefinitionEntities2
. For example, if the relation is of type
swConstraintType_e
.swConstraintType_OFFSETEDGE, and the relation is created by selecting a face, then this method returns that face.
Because some of the objects may be null, you should check for null before accessing them. You should deallocate any dynamically allocated memory.

## Examples

- Get Sketch Relations (VBA) (Get_Sketch_Relations_Example_VB.htm)
- Get Sketch Relations (VB.NET) (Get_Sketch_Relations_Example_VBNET.htm)
- Get Sketch Relations (C#) (Get_Sketch_Relations_Example_CSharp.htm)

## See Also

- `ISketchRelation.GetEntitiesCount`