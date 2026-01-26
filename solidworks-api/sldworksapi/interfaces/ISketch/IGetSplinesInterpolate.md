---
type: method
interface: ISketch
member: IGetSplinesInterpolate
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - sketches
related:
  - ISketch.GetSplineCount
  - ISketch.GetSplineParams2
  - ISketch.GetSplineParamsCount2
  - ISketch.GetSplinesInterpolate
  - ISketch.IGetSplineParams2
keywords:
  - sketch
  - see
  - also
  - isketch
  - splines
  - entities
  - igetsplinesinterpolate
  - interpolate
  - double
---

# ISketch.IGetSplinesInterpolate

Gets the spline points by interpolation instead of by tessellation as is done by ISketch::GetSplines and ISketch::IGetSplines.

## Signature

```csharp
System.Double IGetSplinesInterpolate()
```
## Parameters

None.

## Return Value

in-process, unmanaged C++: Pointer to an array of doubles (see Remarks ) VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

To determine the size of the array returned, call
ISketch:GetSplineInterpolateCount
.
The return value is an array of doubles formatted as:
[
[
NumSplinePoints, [x, y, z]
]
,
]
This complete set of data repeats itself for each spline found in the sketch. For each spline, the array returned contains the number of spline points in the spline, and the X,Y,Z value for each of those points.
The
[x,y,z]
parameter is an array of
NumSplinePoints
. For example, if your sketch has two splines and each spline has three points, then the data would be in the following format:
[
3,
x1_1, y1_1, z1_1, x2_1, y2_1, z2_1, x3_1, y3_1, z3_1
, 3,
x1_2, y1_2, z1_2, x2_2, y2_2, z2_2, x3_2, y3_2, z3_2
]
The
[x,y,z]
points for each spline are the same points used to generate the spline.

## See Also

- `ISketch.GetSplineCount`
- `ISketch.GetSplineParams2`
- `ISketch.GetSplineParamsCount2`
- `ISketch.GetSplinesInterpolate`
- `ISketch.IGetSplineParams2`