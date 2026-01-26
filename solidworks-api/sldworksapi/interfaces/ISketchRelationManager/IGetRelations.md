---
type: method
interface: ISketchRelationManager
member: IGetRelations
returns: SketchRelation
parameters:
  -
    name: Filter
    type: System.Int32
    description: Sketch relation as defined in swSketchRelationFilterType_e
  -
    name: Count
    type: System.Int32
    description: Number of sketch relations
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - sketches
related:
  - ISketchRelationManager.GetRelations
keywords:
  - relations
  - igetrelations
  - isketchrelationmanager
  - sketch
  - relation
  - manager
  - filter
  - int32
  - count
---

# ISketchRelationManager.IGetRelations

Gets all of the sketch relations in the sketch based on the specified filter.

## Signature

```csharp
SketchRelation IGetRelations( 
   System.Int32
Filter
,
   System.Int32
Count
)
```
## Parameters

- `Filter` (System.Int32): Sketch relation as defined in swSketchRelationFilterType_e
- `Count` (System.Int32): Number of sketch relations

## Return Value

in-process, unmanaged C++: Pointer to an array of sketch relations VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

Because some of the objects may be NULL, you should check for this before accessing them. You should deallocate on any dynamically allocated memory.
Call
ISketchRelationManager::GetRelationsCount
before calling this method to get the value for Count.

## See Also

- `ISketchRelationManager.GetRelations`