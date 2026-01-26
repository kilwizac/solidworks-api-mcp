---
type: method
interface: ISketchRelation
member: IGetEntities
returns: System.Object
parameters:
  -
    name: NumEntities
    type: System.Int32
    description: Number of entities
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - sketches
related: []
keywords:
  - igetentities
  - isketchrelation
  - sketch
  - relation
  - entities
  - num
  - int32
  - object
---

# ISketchRelation.IGetEntities

Gets the entities associated with this sketch relation.

## Signature

```csharp
System.Object IGetEntities( 
   System.Int32
NumEntities
)
```
## Parameters

- `NumEntities` (System.Int32): Number of entities

## Return Value

in-process, unmanaged C++: Pointer to an array of entities for this sketch relation VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

When you create a sketch relation, an internal entity may also be created to define that sketch relation. For example, if you add a sketch relation by specifying or selecting a point and an edge, a sketch segment may be created. If this happens, then
ISketchRelation::GetEntities
and ISketchRelation::IGetEntities return the point and sketch segment. To get the actual entities used to define the sketch relation, call
ISketchRelation::GetDefinitionEntities
or
ISketchRelation::IGetDefinitionEntities
.
Because some of the objects may be NULL, you should check for this before accessing them. You should deallocate any dynamically allocated memory.
Before calling this method, call
ISketchRelation::GetEntitiesCount
to get the value for NumEntities.