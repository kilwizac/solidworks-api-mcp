---
type: method
interface: ICurve
member: IsBcurve
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - ICurve.GetBCurveParams
  - ICurve.GetSplinePts
  - ICurve.IGetBCurveParams
  - ICurve.IGetBCurveParamsSize2
  - ICurve.IGetSplinePts
  - ICurve.IGetSplinePtsSize
  - ICurve.Identity
  - ICurve.MakeBsplineCurve
keywords:
  - isbcurve
  - icurve
  - curve
  - bcurve
  - boolean
---

# ICurve.IsBcurve

Gets whether the curve is a b-spline curve.

## Signature

```csharp
System.Boolean IsBcurve()
```
## Parameters

None.

## Return Value

True if curve is a b-spline curve, false if other curve type

## Remarks

This method returns True if the curve is an intersection curve, ellipse, trimming curve, or a surface parametric curve. Because intersection and trimming curves can be lines or circles, it is advisable to first determine whether the curve is a circle or line before recognizing it as a b-curve.

## See Also

- `ICurve.GetBCurveParams`
- `ICurve.GetSplinePts`
- `ICurve.IGetBCurveParams`
- `ICurve.IGetBCurveParamsSize2`
- `ICurve.IGetSplinePts`
- `ICurve.IGetSplinePtsSize`
- `ICurve.Identity`
- `ICurve.MakeBsplineCurve`