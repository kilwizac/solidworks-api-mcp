---
type: method
interface: ISketchRelation
member: IGetDefinitionEntities
returns: System.Object
parameters:
  -
    name: NumEntities
    type: System.Int32
    description: Number of actual entities
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - sketches
related: []
keywords:
  - igetdefinitionentities
  - isketchrelation
  - sketch
  - relation
  - definition
  - entities
  - num
  - int32
  - object
---

# ISketchRelation.IGetDefinitionEntities

Obsolete. Superseded by ISketchRelation::IGetDefinitionEntities2.

## Signature

```csharp
System.Object IGetDefinitionEntities( 
   System.Int32
NumEntities
)
```
## Parameters

- `NumEntities` (System.Int32): Number of actual entities

## Return Value

in-process, unmanaged C++: Pointer to an array of the actual entities for this sketch relation VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

When you created a sketch relation, an internal entity may have also been created to define that sketch relation. For example, if you added a sketch relation by specifying or selecting a point and an edge, a sketch segment may have been created. If this happened, then
ISketchRelation::GetEntities
and
ISketchRelation::IGetEntities
would return the point and sketch segment. To get the actual entities used to define the sketch relation, call
ISketchRelation::GetDefinitionEntities
or ISketchRelation::IGetDefinitionEntities.
Because some of the objects may be NULL, you should check for this before accessing them. You should deallocate any dynamically allocated memory.
Before calling this method, call
ISketchRelation::GetEntitiesCount
to get the value for NumEntities.