---
type: method
interface: ISketch
member: GetSketchPointsCount2
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - sketches
related:
  - ISketch.GetSketchPoints2
keywords:
  - sketch
  - points
  - see
  - also
  - isketchpoint
  - number
  - isketch
  - getsketchpointscount2
  - count2
  - int32
  - spline
---

# ISketch.GetSketchPointsCount2

Gets the number of sketch points in this sketch.

## Signature

```csharp
System.Int32 GetSketchPointsCount2()
```
## Parameters

None.

## Return Value

Number of sketch points in this sketch

## Remarks

Call this method before calling
ISketch::IGetSketchPoints2
to get the size of the array for that method.

## Examples

- Get Spline Points (C++) (Get_Spline_Points_Example_CPlusPlus_COM.htm)

## See Also

- `ISketch.GetSketchPoints2`