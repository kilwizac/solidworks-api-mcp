---
type: method
interface: ICurve
member: GetBCurveParams3
returns: System.Object
parameters:
  -
    name: WantCubicIn
    type: System.Boolean
    description: True returns cubic rational parameters, false does not
  -
    name: WantNRational
    type: System.Boolean
    description: True returns cubic rational parameters, false does not
  -
    name: ForceNonPeriodic
    type: System.Boolean
    description: True converts the periodic curve to nonperiodic, false does not
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - documents
related:
  - ICoEdge.GetCurveParams
  - ICoEdge.IGetCurveParams
  - ICurve.CircleParams
  - ICurve.ConvertArcToBcurve
  - ICurve.ConvertLineToBcurve
  - ICurve.GetEllipseParams
  - ICurve.GetPCurveParams
  - ICurve.ICircleParams
  - ICurve.IGetBCurveParams3
  - ICurve.IGetBCurveParamsSize3
  - ICurve.IGetEllipseParams
  - ICurve.IGetPCurveParams
  - ICurve.ILineParams
  - ICurve.Identity
  - ICurve.IsBcurve
  - ICurve.IsCircle
  - ICurve.IsEllipse
  - ICurve.IsLine
  - ICurve.LineParams
  - ICurve.MakeBsplineCurve2
  - IEdge.GetCurveParams2
  - IEdge.IGetCurveParams2
  - IModeler.CreatePCurve
  - IModeler.ICreatePCurve
keywords:
  - getbcurveparams3
  - icurve
  - curve
  - params3
  - want
  - cubic
  - boolean
  - rational
  - force
  - non
  - periodic
  - object
---

# ICurve.GetBCurveParams3

Obsolete. Superseded by ICurve::GetBCurveParams4

## Signature

```csharp
System.Object GetBCurveParams3( 
   System.Boolean
WantCubicIn
,
   System.Boolean
WantNRational
,
   System.Boolean
ForceNonPeriodic
)
```
## Parameters

- `WantCubicIn` (System.Boolean): True returns cubic rational parameters, false does not
- `WantNRational` (System.Boolean): True returns cubic rational parameters, false does not
- `ForceNonPeriodic` (System.Boolean): True converts the periodic curve to nonperiodic, false does not

## Return Value

Array describing the parameters of the curve

## Remarks

To control the accuracy of the curve data, see
IModeler::SetToleranceValue
.
The return value is an array of doubles. The array size is ( 2 + numKnots + numControlPointDoubles) where numKnots is (numControlPoints + order). The array is as follows:
[
packedDouble1
,
packedDouble2
,
knot1
,
knot2
,...,
ControlPoint1
[
Dimension
],
ControlPoint2
[
Dimension
],...
]
where:
packedDouble1
is
an integer pair containing the
Dimension
and
Order
packedDouble2
is
an integer pair containing the
NumControlPoints
and
Periodicity
knot1
knot2
...
ControlPoint1
[
dimension
]
ControlPoint2
[
dimension
]
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
is an array of 4 doubles ( x, y, z, w ) where w = weight

## See Also

- `ICoEdge.GetCurveParams`
- `ICoEdge.IGetCurveParams`
- `ICurve.CircleParams`
- `ICurve.ConvertArcToBcurve`
- `ICurve.ConvertLineToBcurve`
- `ICurve.GetEllipseParams`
- `ICurve.GetPCurveParams`
- `ICurve.ICircleParams`
- `ICurve.IGetBCurveParams3`
- `ICurve.IGetBCurveParamsSize3`
- `ICurve.IGetEllipseParams`
- `ICurve.IGetPCurveParams`
- `ICurve.ILineParams`
- `ICurve.Identity`
- `ICurve.IsBcurve`
- `ICurve.IsCircle`
- `ICurve.IsEllipse`
- `ICurve.IsLine`
- `ICurve.LineParams`
- `ICurve.MakeBsplineCurve2`
- `IEdge.GetCurveParams2`
- `IEdge.IGetCurveParams2`
- `IModeler.CreatePCurve`
- `IModeler.ICreatePCurve`