---
type: property
interface: ICalloutVariable
member: ShaftFit
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
  - ICalloutVariable.HoleFit
  - IDimensionTolerance.GetShaftFitValue
  - IDimensionTolerance.SetFitValues
keywords:
  - fit
  - tolerances
  - shaftfit
  - icalloutvariable
  - callout
  - variable
  - shaft
  - string
readonly: null
---

# ICalloutVariable.ShaftFit

Gets or sets the shaft fit tolerance in a hole callout.

## Signature

```csharp
System.String ShaftFit {get; set;}
```
## Parameters

None.

## Return Value

Shaft fit tolerance

## Remarks

Depending on the
tolerance type
, tolerance shaft fit might not be visible. You cannot set tolerance shaft fit if the tolerance type is
swTolType_e
.swTolNONE.
To see the effects of setting the tolerance shaft fit, use
IModelView::GraphicsRedraw
.

## See Also

- `ICalloutVariable.FitDisplayStyle`
- `ICalloutVariable.FitTextHeight`
- `ICalloutVariable.FitTextScale`
- `ICalloutVariable.FitType`
- `ICalloutVariable.FitUseTextScale`
- `ICalloutVariable.HoleFit`
- `IDimensionTolerance.GetShaftFitValue`
- `IDimensionTolerance.SetFitValues`