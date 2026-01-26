---
type: method
interface: ISketchSegment
member: IGetRelations
returns: SketchRelation
parameters:
  -
    name: Count
    type: System.Int32
    description: Number of sketch relations for this sketch segment
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - sketches
related:
  - ISketchSegment.GetRelations
keywords:
  - relations
  - igetrelations
  - isketchsegment
  - sketch
  - segment
  - count
  - int32
  - relation
---

# ISketchSegment.IGetRelations

Gets the sketch relations for this sketch segment.

## Signature

```csharp
SketchRelation IGetRelations( 
   System.Int32
Count
)
```
## Parameters

- `Count` (System.Int32): Number of sketch relations for this sketch segment

## Return Value

in-process, unmanaged C++: Pointer to an array of sketch relations for this sketch segment VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

Before calling this method, call
ISketchSegment::GetRelationsCount
to get the value for Count.

## See Also

- `ISketchSegment.GetRelations`