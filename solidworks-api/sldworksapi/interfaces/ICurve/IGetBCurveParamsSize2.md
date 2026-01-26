---
type: method
interface: ICurve
member: IGetBCurveParamsSize2
returns: System.Int32
parameters:
  -
    name: WantCubic
    type: System.Boolean
    description: True for cubic curves, false if not
  -
    name: WantNRational
    type: System.Boolean
    description: True for non-rational curves, false if not
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - documents
related:
  - ICurve.GetBCurveParams
  - ICurve.IGetBCurveParams
  - ICurve.IsBcurve
  - ICurve.MakeBsplineCurve
  - ICurve.SimplifyBCurve
keywords:
  - igetbcurveparamssize2
  - icurve
  - curve
  - params
  - size2
  - want
  - cubic
  - boolean
  - rational
  - int32
  - spline
  - points
---

# ICurve.IGetBCurveParamsSize2

Obsolete. Superseded by ICurve::IGetBCurveParamsSize3.

## Signature

```csharp
System.Int32 IGetBCurveParamsSize2( 
   System.Boolean
WantCubic
,
   System.Boolean
WantNRational
)
```
## Parameters

- `WantCubic` (System.Boolean): True for cubic curves, false if not
- `WantNRational` (System.Boolean): True for non-rational curves, false if not

## Return Value

Size of the data set returned by ICurve::IGetBCurveParams .

## Remarks

Use this method to control the type of information returned in the subsequent call to
ICurve::IGetBCurveParams
.
To control the accuracy of the curve data, use
IModeler::SetToleranceValue
.

## Examples

- Get Curve Spline Points (C++) (Get_Curve_Spline_Points_Example_CPlusPlus_COM.htm)

## See Also

- `ICurve.GetBCurveParams`
- `ICurve.IGetBCurveParams`
- `ICurve.IsBcurve`
- `ICurve.MakeBsplineCurve`
- `ICurve.SimplifyBCurve`