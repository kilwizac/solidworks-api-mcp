---
type: method
interface: ICurve
member: MakeBsplineCurve2
returns: Curve
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - ICurve.CreateTrimmedCurve2
  - ICurve.ExtentCurve
  - ICurve.IConvertPcurveToBcurveSize
  - ICurve.IJoinCurves
  - ICurve.IReverseCurve
  - ICurve.JoinCurves
  - ICurve.ReverseCurve
  - ICurve.SimplifyBCurve
keywords:
  - makebsplinecurve2
  - icurve
  - curve
  - make
  - bspline
  - curve2
---

# ICurve.MakeBsplineCurve2

Creates a b-spline curve.

## Signature

```csharp
Curve MakeBsplineCurve2()
```
## Parameters

None.

## Return Value

B-spline curve

## Remarks

This method uses the input curve as it is and allows lines and arcs.
To convert the arc or line to a b-spline, use any of these methods:
ICurve::ConvertArcToBcurve
ICurve::ConvertLineToBcurve
ICurve::GetBCurveParams3
and
ICurve::IGetBCurveParams3

## See Also

- `ICurve.CreateTrimmedCurve2`
- `ICurve.ExtentCurve`
- `ICurve.IConvertPcurveToBcurveSize`
- `ICurve.IJoinCurves`
- `ICurve.IReverseCurve`
- `ICurve.JoinCurves`
- `ICurve.ReverseCurve`
- `ICurve.SimplifyBCurve`