---
type: method
interface: ISketchBlockDefinition
member: GetSplineParams
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - sketches
related:
  - ISketchBlockDefinition.GetSplineCount
  - ISketchBlockDefinition.GetSplineInterpolateCount
  - ISketchBlockDefinition.GetSplineParamsCount
  - ISketchBlockDefinition.GetSplines2
  - ISketchBlockDefinition.GetSplinesInterpolate
  - ISketchBlockDefinition.IGetSplineParams
  - ISketchBlockDefinition.IGetSplines2
  - ISketchBlockDefinition.IGetSplinesInterpolate
keywords:
  - blocks
  - see
  - also
  - isketchblockdefinition
  - isketchblockinstance
  - interfaces
  - splines
  - parameters
  - iparameter
  - getsplineparams
  - sketch
  - block
  - definition
  - spline
  - params
  - object
---

# ISketchBlockDefinition.GetSplineParams

Gets all the parameters of the splines in the sketch block definition.

## Signature

```csharp
System.Object GetSplineParams()
```
## Parameters

None.

## Return Value

Array of doubles, containing spline parameters (see Remarks )

## Remarks

The return value is an array of doubles containing data for all the splines in the sketch block definitioni.
The first two array elements for each spline contain 4 integer values holding information that describes the rest of the data in that splines parameters:
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
is the number of dimensions the spline is defined in
Order
is the order of the spline
nCtrlPoints
is the number of control points
Periodic
is 1 for a closed spline or 0 for an open spline
The number of knots depends on whether the spline is periodic or not:
Periodic:
numKnots = nCtrlPoints + 1
Non-Periodic:
numKnots = nCtrlPoints + Order
The last three array elements for each spline contain 5 integer values holding style and layer information:
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
The ControlPoint data (in the sketch coordinate system) follows the 2 packed data elements, the Knot points, and, finally, the last 3 packed data elements. Subsequent splines follow one another in the array.
[
packedDouble1, packedDouble2, ControlPoint1[Dimension elements], ControlPoint2[Dimension elements],... knot1, knot2,..., packedDouble3, packedDouble4, packedDouble5,
]
For information about unpacking double arrays into integer pairs, see:
Unpacking Double Arrays into Integer Paris in Visual Basic.NET and Visual Basic
Unpacking Double Arrays into Integer Pairs in C++
Unpacking Double Arrays into Integer Pairs in C#

## See Also

- `ISketchBlockDefinition.GetSplineCount`
- `ISketchBlockDefinition.GetSplineInterpolateCount`
- `ISketchBlockDefinition.GetSplineParamsCount`
- `ISketchBlockDefinition.GetSplines2`
- `ISketchBlockDefinition.GetSplinesInterpolate`
- `ISketchBlockDefinition.IGetSplineParams`
- `ISketchBlockDefinition.IGetSplines2`
- `ISketchBlockDefinition.IGetSplinesInterpolate`