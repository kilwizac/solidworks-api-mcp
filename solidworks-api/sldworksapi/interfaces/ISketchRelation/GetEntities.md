---
type: method
interface: ISketchRelation
member: GetEntities
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
  - getentities
  - isketchrelation
  - sketch
  - relation
  - entities
  - object
  - replace
  - vba
  - relations
  - vb
  - net
---

# ISketchRelation.GetEntities

Gets the entities associated with this sketch relation.

## Signature

```csharp
System.Object GetEntities()
```
## Parameters

None.

## Return Value

Array of entities for this sketch relation

## Remarks

When you create a sketch relation, an internal entity may also be created to define that sketch relation. For example, if you add a sketch relation by specifying or selecting a point and an edge, a sketch segment may be created. If this happens, then ISketchRelation::GetEntities and
ISketchRelation::IGetEntities
return the point and sketch segment. To get the actual entities used to define the sketch relation, call
ISketchRelation::GetDefinitionEntities
or
ISketchRelation::IGetDefinitionEntities
.
Because some of the objects may be NULL, you should check for this before accessing them. You should deallocate any dynamically allocated memory.

## Examples

- Replace Sketch Relation (VBA) (Replace_Sketch_Relation_Example_VB.htm)
- Get Sketch Relations (VBA) (Get_Sketch_Relations_Example_VB.htm)
- Get Sketch Relations (VB.NET) (Get_Sketch_Relations_Example_VBNET.htm)
- Get Sketch Relations (C#) (Get_Sketch_Relations_Example_CSharp.htm)

## See Also

- `ISketchRelation.GetEntitiesCount`