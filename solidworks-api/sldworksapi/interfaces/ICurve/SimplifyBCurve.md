---
type: method
interface: ICurve
member: SimplifyBCurve
returns: Curve
parameters:
  -
    name: TolIn
    type: System.Double
    description: Tolerance
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - ICurve.ConvertArcToBcurve
  - ICurve.ConvertLineToBcurve
  - ICurve.ExtentCurve
  - ICurve.GetBCurveParams
  - ICurve.IConvertArcToBcurveSize
  - ICurve.IConvertLineToBcurveSize
  - ICurve.IConvertPcurveToBcurveSize
  - ICurve.IGetBCurveParams
  - ICurve.IGetBCurveParamsSize2
  - ICurve.IsBcurve
keywords:
  - simplifybcurve
  - icurve
  - curve
  - simplify
  - tol
  - double
---

# ICurve.SimplifyBCurve

Simplifies a b-curve.

## Signature

```csharp
Curve SimplifyBCurve( 
   System.Double
TolIn
)
```
## Parameters

- `TolIn` (System.Double): Tolerance

## Return Value

Pointer to simplified b-curve

## See Also

- `ICurve.ConvertArcToBcurve`
- `ICurve.ConvertLineToBcurve`
- `ICurve.ExtentCurve`
- `ICurve.GetBCurveParams`
- `ICurve.IConvertArcToBcurveSize`
- `ICurve.IConvertLineToBcurveSize`
- `ICurve.IConvertPcurveToBcurveSize`
- `ICurve.IGetBCurveParams`
- `ICurve.IGetBCurveParamsSize2`
- `ICurve.IsBcurve`