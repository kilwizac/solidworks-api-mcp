---
type: method
interface: ICurve
member: MakeBsplineCurve
returns: Curve
parameters: []
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - documents
related:
  - ICurve.IsBcurve
  - ICurve.SimplifyBCurve
keywords:
  - makebsplinecurve
  - icurve
  - curve
  - make
  - bspline
---

# ICurve.MakeBsplineCurve

Obsolete. Superseded by ICurve::MakeBsplineCurve2.

## Signature

```csharp
Curve MakeBsplineCurve()
```
## Parameters

None.

## Return Value

Pointer to the arc or line

## Remarks

To convert the arc or line to a b-spline curve, use any of these methods:
ICurve::ConvertArcToBcurve
ICurve::ConvertLineToBcurve
ICurve::GetBCurveParams
or
ICurve::IGetBCurveParmas

## See Also

- `ICurve.IsBcurve`
- `ICurve.SimplifyBCurve`