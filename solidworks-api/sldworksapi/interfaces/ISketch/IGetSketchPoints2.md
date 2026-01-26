---
type: method
interface: ISketch
member: IGetSketchPoints2
returns: SketchPoint
parameters:
  -
    name: Count
    type: System.Int32
    description: Number of sketch points in this sketch
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - sketches
related:
  - ISketch.GetSketchPoints2
  - ISketch.GetUserPoints2
  - ISketch.GetUserPointsCount
  - ISketch.IEnumSketchPoints
  - ISketch.IGetUserPoints2
  - ISketch.MergePoints
  - ISketchPoint
keywords:
  - sketch
  - points
  - see
  - also
  - isketchpoint
  - isketch
  - entities
  - igetsketchpoints2
  - points2
  - count
  - int32
  - point
---

# ISketch.IGetSketchPoints2

Gets the sketch points in this sketch.

## Signature

```csharp
SketchPoint IGetSketchPoints2( 
   System.Int32
Count
)
```
## Parameters

- `Count` (System.Int32): Number of sketch points in this sketch

## Return Value

in-process, unmanaged C++: Pointer to an array of sketch points in this sketch VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

Call
ISketch::GetSketchPointsCount2
before calling this method to get the number of sketch points in this sketch.

## See Also

- `ISketch.GetSketchPoints2`
- `ISketch.GetUserPoints2`
- `ISketch.GetUserPointsCount`
- `ISketch.IEnumSketchPoints`
- `ISketch.IGetUserPoints2`
- `ISketch.MergePoints`
- `ISketchPoint`