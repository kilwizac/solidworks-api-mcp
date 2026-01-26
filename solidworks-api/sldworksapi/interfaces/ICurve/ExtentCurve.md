---
type: method
interface: ICurve
member: ExtentCurve
returns: Curve
parameters:
  -
    name: AtStart
    type: System.Boolean
    description: True to extend b-spline curve from start point, false to extend b-spline curve from end point
  -
    name: Length
    type: System.Double
    description: Length by which to extend b-spline curve
  -
    name: LinearExt
    type: System.Boolean
    description: True if the extension is linear, false if not
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - ICurve.CreateTrimmedCurve2
  - ICurve.IConvertPcurveToBcurveSize
  - ICurve.IJoinCurves
  - ICurve.JoinCurves
  - ICurve.MakeBsplineCurve
  - ICurve.ReverseCurve
  - ICurve.SimplifyBCurve
keywords:
  - extentcurve
  - icurve
  - curve
  - extent
  - start
  - boolean
  - length
  - double
  - linear
  - ext
---

# ICurve.ExtentCurve

Extends a b-spline curve by the specified length.

## Signature

```csharp
Curve ExtentCurve( 
   System.Boolean
AtStart
,
   System.Double
Length
,
   System.Boolean
LinearExt
)
```
## Parameters

- `AtStart` (System.Boolean): True to extend b-spline curve from start point, false to extend b-spline curve from end point
- `Length` (System.Double): Length by which to extend b-spline curve
- `LinearExt` (System.Boolean): True if the extension is linear, false if not

## Return Value

Pointer to newly extended ICurve object

## Remarks

This method only affects b-spline curves. For all other types of curves, this method does nothing.

## See Also

- `ICurve.CreateTrimmedCurve2`
- `ICurve.IConvertPcurveToBcurveSize`
- `ICurve.IJoinCurves`
- `ICurve.JoinCurves`
- `ICurve.MakeBsplineCurve`
- `ICurve.ReverseCurve`
- `ICurve.SimplifyBCurve`