---
type: method
interface: ICurve
member: IGetBCurveParams3
returns: System.Double
parameters:
  -
    name: ArraySize
    type: System.Int32
    description: Size of the return array
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
  - ICurve.GetBCurveParams3
  - ICurve.GetEllipseParams
  - ICurve.GetPCurveParams
  - ICurve.ICircleParams
  - ICurve.IGetEllipseParams
  - ICurve.IGetPCurveParams
  - ICurve.IGetSplinePts
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
  - igetbcurveparams3
  - icurve
  - curve
  - params3
  - array
  - size
  - int32
  - double
---

# ICurve.IGetBCurveParams3

Obsolete. Superseded by ICurve::GetBCurveParams4.

## Signature

```csharp
System.Double IGetBCurveParams3( 
   System.Int32
ArraySize
)
```
## Parameters

- `ArraySize` (System.Int32): Size of the return array

## Return Value

in-process, unmanaged C++: Pointer to an array of doubles describing the parameters of the curve VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

Use
ICurve::IGetBCurveParamsSize3
to determine the size of the array returned and whether the curve data returned by Curve::IGetBCurveParams3 is cubic rational or not.
To control the accuracy of the curve data, see
IModeler::SetToleranceValue
.
The return value retval is an array of doubles. The array size is ( 2 + numKnots + numControlPointDoubles) where numKnots is (numControlPoints + order). The array is as follows:
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
- `ICurve.GetBCurveParams3`
- `ICurve.GetEllipseParams`
- `ICurve.GetPCurveParams`
- `ICurve.ICircleParams`
- `ICurve.IGetEllipseParams`
- `ICurve.IGetPCurveParams`
- `ICurve.IGetSplinePts`
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