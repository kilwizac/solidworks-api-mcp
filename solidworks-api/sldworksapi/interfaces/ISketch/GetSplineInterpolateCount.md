---
type: method
interface: ISketch
member: GetSplineInterpolateCount
returns: System.Int32
parameters:
  -
    name: PointCount
    type: System.Int32
    description: Number of points in this sketch
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - sketches
related:
  - ISketch.GetSplineCount
  - ISketch.GetSplineParams2
  - ISketch.GetSplineParamsCount2
  - ISketch.GetSplines
  - ISketch.GetSplinesInterpolate
  - ISketch.IGetSplineParams2
  - ISketch.IGetSplines
keywords:
  - sketch
  - see
  - also
  - isketch
  - splines
  - entities
  - getsplineinterpolatecount
  - spline
  - interpolate
  - count
  - point
  - int32
---

# ISketch.GetSplineInterpolateCount

Gets the number of points in the spline and number of splines in the sketch.

## Signature

```csharp
System.Int32 GetSplineInterpolateCount( 
   ref System.Int32
PointCount
)
```
## Parameters

- `PointCount` (System.Int32): Number of points in this sketch

## Return Value

Number of splines in this sketch

## Remarks

Call this method before calling
ISketch::IGetSplinesInterpolate
to get the size of the array for that method.

## See Also

- `ISketch.GetSplineCount`
- `ISketch.GetSplineParams2`
- `ISketch.GetSplineParamsCount2`
- `ISketch.GetSplines`
- `ISketch.GetSplinesInterpolate`
- `ISketch.IGetSplineParams2`
- `ISketch.IGetSplines`