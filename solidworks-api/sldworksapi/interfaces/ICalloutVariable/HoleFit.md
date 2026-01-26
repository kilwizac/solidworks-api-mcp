---
type: property
interface: ICalloutVariable
member: HoleFit
returns: System.String
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - ICalloutVariable.FitDisplayStyle
  - ICalloutVariable.FitTextHeight
  - ICalloutVariable.FitTextScale
  - ICalloutVariable.FitType
  - ICalloutVariable.FitUseTextScale
  - ICalloutVariable.ShaftFit
  - IDimensionTolerance.GetHoleFitValue
  - IDimensionTolerance.SetFitValues
keywords:
  - fit
  - tolerances
  - holefit
  - icalloutvariable
  - callout
  - variable
  - hole
  - string
readonly: null
---

# ICalloutVariable.HoleFit

Gets or sets the fit tolerance in a hole callout.

## Signature

```csharp
System.String HoleFit {get; set;}
```
## Parameters

None.

## Return Value

Fit tolerance

## Remarks

Depending on the
tolerance type
, tolerance fit might not be visible. You cannot set tolerance fit if the tolerance type is
swTolType_e
.swTolNONE.
To see the effects of setting tolerance fit, use
IModelView::GraphicsRedraw
.

## See Also

- `ICalloutVariable.FitDisplayStyle`
- `ICalloutVariable.FitTextHeight`
- `ICalloutVariable.FitTextScale`
- `ICalloutVariable.FitType`
- `ICalloutVariable.FitUseTextScale`
- `ICalloutVariable.ShaftFit`
- `IDimensionTolerance.GetHoleFitValue`
- `IDimensionTolerance.SetFitValues`