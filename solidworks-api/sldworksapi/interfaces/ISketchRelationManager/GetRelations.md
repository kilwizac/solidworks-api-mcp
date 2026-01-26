---
type: method
interface: ISketchRelationManager
member: GetRelations
returns: System.Object
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
  - ISketchRelationManager.GetRelationsCount
  - ISketchRelationManager.IGetRelations
keywords:
  - relations
  - getrelations
  - isketchrelationmanager
  - sketch
  - relation
  - manager
  - filter
  - int32
  - object
  - replace
  - vba
  - vb
  - net
---

# ISketchRelationManager.GetRelations

Gets all of the sketch relations in the sketch based on the specified filter.

## Signature

```csharp
System.Object GetRelations( 
   System.Int32
Filter
)
```
## Parameters

- `Filter` (System.Int32): Sketch relation as defined in swSketchRelationFilterType_e

## Return Value

Array of sketch relations

## Remarks

Because some of the objects may be NULL, you should check for this before accessing them. You should deallocate on any dynamically allocated memory.

## Examples

- Replace Sketch Relation (VBA) (Replace_Sketch_Relation_Example_VB.htm)
- Get Sketch Relations (VBA) (Get_Sketch_Relations_Example_VB.htm)
- Get Sketch Relations (VB.NET) (Get_Sketch_Relations_Example_VBNET.htm)
- Get Sketch Relations (C#) (Get_Sketch_Relations_Example_CSharp.htm)

## See Also

- `ISketchRelationManager.GetRelationsCount`
- `ISketchRelationManager.IGetRelations`