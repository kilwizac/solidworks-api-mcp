---
type: method
interface: ICurve
member: IGetBCurveParams
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - documents
related:
  - ICurve.ConvertArcToBcurve
  - ICurve.ConvertLineToBcurve
  - ICurve.GetBCurveParams
  - ICurve.IConvertArcToBcurveSize
  - ICurve.IConvertLineToBcurveSize
  - ICurve.IConvertPcurveToBcurveSize
  - ICurve.IsBcurve
  - ICurve.MakeBsplineCurve
  - ICurve.SimplifyBCurve
keywords:
  - igetbcurveparams
  - icurve
  - curve
  - params
  - double
  - spline
  - points
---

# ICurve.IGetBCurveParams

Obsolete. Superseded by ICurve::IGetBCurveParams3.

## Signature

```csharp
System.Double IGetBCurveParams()
```
## Parameters

None.

## Return Value

Pointer to an array of doubles describing the parameters of the curve (see Remarks )

## Remarks

Call
ICurve::IGetBCurveParamsSize2
to determine the size of the array returned and whether the curve data returned by ICurve::IGetBCurveParams is cubic rational or not.
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

- Get Curve Spline Points (C++) (Get_Curve_Spline_Points_Example_CPlusPlus_COM.htm)

## See Also

- `ICurve.ConvertArcToBcurve`
- `ICurve.ConvertLineToBcurve`
- `ICurve.GetBCurveParams`
- `ICurve.IConvertArcToBcurveSize`
- `ICurve.IConvertLineToBcurveSize`
- `ICurve.IConvertPcurveToBcurveSize`
- `ICurve.IsBcurve`
- `ICurve.MakeBsplineCurve`
- `ICurve.SimplifyBCurve`