---
type: method
interface: ISketchPoint
member: IGetRelations
returns: SketchRelation
parameters:
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
  - ISketchPoint.GetRelations
keywords:
  - relations
  - igetrelations
  - isketchpoint
  - sketch
  - point
  - count
  - int32
  - relation
---

# ISketchPoint.IGetRelations

Gets the sketch relations for this sketch point.

## Signature

```csharp
SketchRelation IGetRelations( 
   System.Int32
Count
)
```
## Parameters

- `Count` (System.Int32): Number of sketch relations

## Return Value

in-process, unmanaged C++: Pointer to an array of sketch relations VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

Before calling this method, call
ISketchPoint::GetRelationsCount
to get the value for Count.

## See Also

- `ISketchPoint.GetRelations`