---
type: property
interface: ICalloutVariable
member: FitDisplayStyle
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - ICalloutVariable.FitTextHeight
  - ICalloutVariable.HoleFit
  - ICalloutVariable.ShaftFit
  - IDimensionTolerance.FitDisplayStyle
keywords:
  - fitdisplaystyle
  - icalloutvariable
  - callout
  - variable
  - fit
  - display
  - style
  - int32
readonly: null
---

# ICalloutVariable.FitDisplayStyle

Gets or sets how fit tolerance is displayed in a hole callout.

## Signature

```csharp
System.Int32 FitDisplayStyle {get; set;}
```
## Parameters

None.

## Return Value

Fit tolerance display style as defined in swFitTolDisplay_e

## Remarks

To see the effects of changing the fit tolerance display style, use
IModelView::GraphicsRedraw
.

## See Also

- `ICalloutVariable.FitTextHeight`
- `ICalloutVariable.HoleFit`
- `ICalloutVariable.ShaftFit`
- `IDimensionTolerance.FitDisplayStyle`