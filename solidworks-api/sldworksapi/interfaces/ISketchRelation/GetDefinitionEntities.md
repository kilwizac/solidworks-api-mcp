---
type: method
interface: ISketchRelation
member: GetDefinitionEntities
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - sketches
related:
  - ISketchRelation.GetEntitiesCount
keywords:
  - getdefinitionentities
  - isketchrelation
  - sketch
  - relation
  - definition
  - entities
  - object
---

# ISketchRelation.GetDefinitionEntities

Obsolete. Superseded by ISketchRelation::GetDefinitionEntities2.

## Signature

```csharp
System.Object GetDefinitionEntities()
```
## Parameters

None.

## Return Value

Array of the actual entities for this sketch relation

## Remarks

When you created a sketch relation, an internal entity may have also been created to define that sketch relation. For example, if you added a sketch relation by specifying or selecting a point and an edge, a sketch segment may have been created. If this happened, then
ISketchRelation::GetEntities
and
ISketchRelation::IGetEntities
would return the point and sketch segment. To get the actual entities used to define the sketch relation, call ISketchRelation::GetDefinitionEntities or
ISketchRelation::IGetDefinitionEntities
.
Because some of the objects may be NULL, you should check for this before accessing them. You should deallocate any dynamically allocated memory.

## See Also

- `ISketchRelation.GetEntitiesCount`