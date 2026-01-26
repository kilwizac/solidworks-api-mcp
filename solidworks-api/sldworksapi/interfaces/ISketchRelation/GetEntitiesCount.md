---
type: method
interface: ISketchRelation
member: GetEntitiesCount
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - sketches
related: []
keywords:
  - getentitiescount
  - isketchrelation
  - sketch
  - relation
  - entities
  - count
  - int32
  - replace
  - vba
---

# ISketchRelation.GetEntitiesCount

Gets the number of entities associated with this sketch relation.

## Signature

```csharp
System.Int32 GetEntitiesCount()
```
## Parameters

None.

## Return Value

Number of entities for this sketch relation

## Remarks

Call this method before calling
ISketchRelation::IGetDefinitionEntities
,
ISketchRelation::IGetEntities
, or
ISketchRelation::IGetEntitiesType
to determine the size of array for the entities or types of entities associated with the sketch relation.

## Examples

- Replace Sketch Relation (VBA) (Replace_Sketch_Relation_Example_VB.htm)