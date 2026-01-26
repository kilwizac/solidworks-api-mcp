---
type: method
interface: ISketch
member: IGetSplines
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - sketches
related:
  - ISketch.GetSplineCount
  - ISketch.GetSplineInterpolateCount
  - ISketch.GetSplineParams2
  - ISketch.GetSplineParamsCount2
  - ISketch.GetSplines
  - ISketch.GetSplinesInterpolate
  - ISketch.IGetSplineParams2
  - ISketch.IGetSplinesInterpolate
  - ISketchSpline
keywords:
  - sketch
  - see
  - also
  - isketch
  - splines
  - entities
  - igetsplines
  - double
---

# ISketch.IGetSplines

Gets information for each spline by tessellation instead of by interpolation as is done by ISketch::GetSplinesInterpolate and ISketch::IGetSplinesInterpolate.

## Signature

```csharp
System.Double IGetSplines()
```
## Parameters

None.

## Return Value

in-process, unmanaged C++: Pointer to an array of doubles (see Remarks ) VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

See
ISketch::GetSketchSegments
or
ISketch::IEnumSketchSegments
for access to individual
ISketchSegment
and
ISketchSpline
objects.
The returned array of doubles has the format:
[
[
Color, LineType, NumSplinePoints, [x,y,z]
]
]
This complete set of data repeats itself for each spline found in the sketch. For each spline, the array returned contains the color, the line type, the number of spline points in the spline, and the X,Y,Z value for each of those points. Therefore, the [x,y,z] parameter is an array of
NumSplinePoints
, which may vary in size from spline to spline.
The
[x,y,z]
points for each spline are not the same as the points used to generate the spline. This method
tessellates the spline based on the display quality and places points along the spline appropriately.
LineType
may take one of the values in
swLineTypes_e
.

## See Also

- `ISketch.GetSplineCount`
- `ISketch.GetSplineInterpolateCount`
- `ISketch.GetSplineParams2`
- `ISketch.GetSplineParamsCount2`
- `ISketch.GetSplines`
- `ISketch.GetSplinesInterpolate`
- `ISketch.IGetSplineParams2`
- `ISketch.IGetSplinesInterpolate`
- `ISketchSpline`