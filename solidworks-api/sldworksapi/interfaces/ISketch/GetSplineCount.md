---
type: method
interface: ISketch
member: GetSplineCount
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
  - ISketch.GetSplineInterpolateCount
  - ISketch.GetSplineParams2
  - ISketch.GetSplineParamsCount2
  - ISketch.GetSplines
  - ISketch.GetSplinesInterpolate
  - ISketch.IGetSplineParams2
  - ISketch.IGetSplinesInterpolate
keywords:
  - sketch
  - see
  - also
  - isketch
  - splines
  - entities
  - getsplinecount
  - spline
  - count
  - point
  - int32
  - each
  - parameters
  - vb
  - net
  - vba
---

# ISketch.GetSplineCount

Gets the number of splines in this sketch.

## Signature

```csharp
System.Int32 GetSplineCount( 
   ref System.Int32
PointCount
)
```
## Parameters

- `PointCount` (System.Int32): Number of points in this sketch

## Return Value

Number of splines in the sketch

## Remarks

Call this method before calling
ISketch::IGetSplines
to get the size of the array for that method.

## Examples

- Get Each Spline's Parameters (C#) (Get_Each_Splines_Parameters_Example_CSharp.htm)
- Get Each Spline's Parameters (VB.NET) (Get_Each_Splines_Parameters_Example_VBNET.htm)
- Get Each Spline's Parameters (VBA) (Get_Each_Splines_Parameters_Example_VB.htm)

## See Also

- `ISketch.GetSplineInterpolateCount`
- `ISketch.GetSplineParams2`
- `ISketch.GetSplineParamsCount2`
- `ISketch.GetSplines`
- `ISketch.GetSplinesInterpolate`
- `ISketch.IGetSplineParams2`
- `ISketch.IGetSplinesInterpolate`