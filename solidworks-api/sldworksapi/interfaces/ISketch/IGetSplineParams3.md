---
type: method
interface: ISketch
member: IGetSplineParams3
returns: System.Double
parameters:
  -
    name: ForceNonPeriodic
    type: System.Boolean
    description: True to attempt to convert all non-periodic splines to periodic, false to not
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - sketches
related:
  - ISketch.GetSplineCount
  - ISketch.GetSplineInterpolateCount
  - ISketch.GetSplineParams3
  - ISketch.GetSplines
  - ISketch.GetSplinesInterpolate
  - ISketch.IGetSplines
  - ISketch.IGetSplinesInterpolate
keywords:
  - igetsplineparams3
  - isketch
  - sketch
  - spline
  - params3
  - force
  - non
  - periodic
  - boolean
  - double
---

# ISketch.IGetSplineParams3

Obsolete. Superseded by ISketch::GetSplineParams4.

## Signature

```csharp
System.Double IGetSplineParams3( 
   System.Boolean
ForceNonPeriodic
)
```
## Parameters

- `ForceNonPeriodic` (System.Boolean): True to attempt to convert all non-periodic splines to periodic, false to not

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
- `ISketch.GetSplineParams3`
- `ISketch.GetSplines`
- `ISketch.GetSplinesInterpolate`
- `ISketch.IGetSplines`
- `ISketch.IGetSplinesInterpolate`