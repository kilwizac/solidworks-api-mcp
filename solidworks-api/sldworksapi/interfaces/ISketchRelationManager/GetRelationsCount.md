---
type: method
interface: ISketchRelationManager
member: GetRelationsCount
returns: System.Int32
parameters:
  -
    name: Filter
    type: System.Int32
    description: Sketch relation as defined in swSketchRelationFilterType_e
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - sketches
related:
  - ISketchRelationManager.AddRelation
  - ISketchRelationManager.GetRelations
keywords:
  - relations
  - getrelationscount
  - isketchrelationmanager
  - sketch
  - relation
  - manager
  - count
  - filter
  - int32
  - replace
  - vba
---

# ISketchRelationManager.GetRelationsCount

Gets the number of sketch relations in the sketch based on the specified filter.

## Signature

```csharp
System.Int32 GetRelationsCount( 
   System.Int32
Filter
)
```
## Parameters

- `Filter` (System.Int32): Sketch relation as defined in swSketchRelationFilterType_e

## Return Value

Number of sketch relations

## Remarks

Call this method before calling
ISketchRelationManager::IAddRelation
and
ISketchRelationManager::IGetRelations
to get the size of the array for that method.

## Examples

- Replace Sketch Relation (VBA) (Replace_Sketch_Relation_Example_VB.htm)

## See Also

- `ISketchRelationManager.AddRelation`
- `ISketchRelationManager.GetRelations`