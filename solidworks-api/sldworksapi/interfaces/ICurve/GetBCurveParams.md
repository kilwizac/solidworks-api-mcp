---
type: method
interface: ICurve
member: GetBCurveParams
returns: System.Object
parameters:
  -
    name: WantCubicIn
    type: System.Boolean
    description: True returns cubic rational parameters, false does not
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - documents
related:
  - ICurve.ConvertArcToBcurve
  - ICurve.ConvertLineToBcurve
  - ICurve.IConvertPcurveToBcurveSize
  - ICurve.IGetBCurveParamsSize2
  - ICurve.IsBcurve
  - ICurve.SimplifyBCurve
keywords:
  - getbcurveparams
  - icurve
  - curve
  - params
  - want
  - cubic
  - boolean
  - object
  - spline
  - points
  - vba
  - select
  - edges
  - all
  - holes
  - face
  - vb
  - net
---

# ICurve.GetBCurveParams

Obsolete. Superseded by ICurve::GetBCurveParams3.

## Signature

```csharp
System.Object GetBCurveParams( 
   System.Boolean
WantCubicIn
)
```
## Parameters

- `WantCubicIn` (System.Boolean): True returns cubic rational parameters, false does not

## Return Value

Array describing the parameters of the curve (see Remarks )

## Remarks

To control the accuracy of the curve data, see
IModeler::SetToleranceValue
.
The return value is an array of doubles. The array size is ( 2 + numKnots + numControlPointDoubles) where numKnots is (numControlPoints + order). The array is as follows:
[
packedDouble1, packedDouble2, knot1, knot2,..., ControlPoint1[Dimension], ControlPoint2[Dimension],...
]
where:
packedDouble1
is an integer pair containing the
Dimension
and
Order
packedDouble2
is an integer pair containing the
NumControlPoints
and
Periodicity
knot1
knot2
...
ControlPoint1[dimension]
ControlPoint2[dimension]
...
The size of the control point array is based on the curve dimension:
If
Dimension
= 3, then
ControlPoint
is an array of 3 doubles ( x, y, z )
If
Dimension
= 4, then
ControlPoint
is an array of 4 doubles ( x, y, z, w ) where
w = weight

## Examples

- Get Curve Spline Points (VBA) (Get_Curve_Spline_Points_Example_VB.htm)
- Select Edges of All Holes on Face (C#) (Select_Edges_of_All_Holes_on_Face_Example_CSharp.htm)
- Select Edges of All Holes on Face (VB.NET) (Select_Edges_of_All_Holes_on_Face_Example_VBNET.htm)
- Select Edges of All Holes on Face (VBA) (Select_Edges_of_All_Holes_on_Face_Example_VB.htm)

## See Also

- `ICurve.ConvertArcToBcurve`
- `ICurve.ConvertLineToBcurve`
- `ICurve.IConvertPcurveToBcurveSize`
- `ICurve.IGetBCurveParamsSize2`
- `ICurve.IsBcurve`
- `ICurve.SimplifyBCurve`