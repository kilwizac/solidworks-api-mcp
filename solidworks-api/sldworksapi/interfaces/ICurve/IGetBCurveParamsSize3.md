---
type: method
interface: ICurve
member: IGetBCurveParamsSize3
returns: System.Int32
parameters:
  -
    name: WantCubicIn
    type: System.Boolean
    description: True for cubic curves, false if not
  -
    name: WantNRational
    type: System.Boolean
    description: True for non-rational curves, false if not
  -
    name: ForceNonPeriodic
    type: System.Boolean
    description: True converts the curve to nonperiodic and returns parameters, false does not
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - ICurve.GetBCurveParams3
keywords:
  - igetbcurveparamssize3
  - icurve
  - curve
  - params
  - size3
  - want
  - cubic
  - boolean
  - rational
  - force
  - non
  - periodic
  - int32
---

# ICurve.IGetBCurveParamsSize3

Gets the b-curve size.

## Signature

```csharp
System.Int32 IGetBCurveParamsSize3( 
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

- `WantCubicIn` (System.Boolean): True for cubic curves, false if not
- `WantNRational` (System.Boolean): True for non-rational curves, false if not
- `ForceNonPeriodic` (System.Boolean): True converts the curve to nonperiodic and returns parameters, false does not

## Return Value

Size of the data set returned by ICurve::IGetBCurveParams3

## Remarks

Use this method to control the type of information returned in the subsequent call to
ICurve::IGetBCurveParams3
.
To control the accuracy of the curve data, see
IModeler::SetToleranceValue
.

## See Also

- `ICurve.GetBCurveParams3`