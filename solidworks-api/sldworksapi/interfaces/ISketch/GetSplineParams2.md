---
type: method
interface: ISketch
member: GetSplineParams2
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - sketches
related:
  - ISketch.GetSplineCount
  - ISketch.GetSplineInterpolateCount
  - ISketch.GetSplines
  - ISketch.GetSplinesInterpolate
  - ISketch.IGetSplineParams2
  - ISketch.IGetSplines
  - ISketch.IGetSplinesInterpolate
keywords:
  - getsplineparams2
  - isketch
  - sketch
  - spline
  - params2
  - object
---

# ISketch.GetSplineParams2

Obsolete. Superseded by ISketch::GetSplineParams3.

## Signature

```csharp
System.Object GetSplineParams2()
```
## Parameters

None.

## Return Value

Array of doubles (see Remarks )

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
The return value is an array of doubles containing data for all the splines in the sketch:
[
packedDouble1, packedDouble2, ControlPoint1[Dimension elements], ControlPoint2[Dimension elements],... knot1, knot2,..., packedDouble3, packedDouble4, packedDouble5,
]
packedDouble1 and packedDouble2
The first two array elements for each spline contain four integer values holding information that describes the rest of the data in that spline's parameters:
Spline Element
Packed Data
low part
high part
0
Dim
Order
1
nCtrlPoints
Periodic
where
:
Dim
is the number of dimensions in which the spline is defined
Order
is the order of the spline
nCtrlPoints
is the number of control points
Periodic
is 1 for a closed spline or 0 for an open spline
NOTE:
For information about unpacking double arrays into integer pairs, see:
Unpacking Double Arrays into Integer Paris in VB.NET and Visual Basic
Unpacking Double Arrays into Integer Pairs in C++
Unpacking Double Arrays into Integer Pairs in C#
ControlPoint
#
The ControlPoint data (in the sketch coordinate system) follows the two packed data elements.
knots
#
The number of knots depends on whether the spline is periodic or not:
Periodic:
numKnots = nCtrlPoints + 1
Non-Periodic:
numKnots = nCtrlPoints + Order
packedDouble3, packedDouble4, and packedDouble5
The last three array elements for each spline contain five integer values holding style and layer information:
Spline Element
Packed Data
low part
high part
i
Color
lineStyle
i+1
lineWidth
Layer
i+2
layerOverride
Not used
where:
i is the index following the last Knot or [2 + numKnots + numControlPointDoubles * Dim]
Color
is the COLORREF value describing the color used for the
ith
spline
lineStyle
is the line style used for the
ith
spline. Valid values can be found in the
swLineStyles_e
enumeration
lineWidth
is line width used for the
ith
spline. Valid values can be found in the
swLineWeights_e
enumeration
Layer
is an integer index to the layer that the
ith
spline is on
layerOverride
is integer with bit flags set to determine which properties, if any, have been overridden or should be overridden.
Therefore, the size of the data for each spline is given by:
2 + numKnots + numControlPointDoubles * Dim + 3

## See Also

- `ISketch.GetSplineCount`
- `ISketch.GetSplineInterpolateCount`
- `ISketch.GetSplines`
- `ISketch.GetSplinesInterpolate`
- `ISketch.IGetSplineParams2`
- `ISketch.IGetSplines`
- `ISketch.IGetSplinesInterpolate`