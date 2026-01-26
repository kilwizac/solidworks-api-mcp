---
type: property
interface: IDimensionTolerance
member: FitDisplayStyle
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IDimensionTolerance.FitType
  - IDimensionTolerance.GetFitFontHeight
  - IDimensionTolerance.GetFitFontScale
  - IDimensionTolerance.GetFitFontUseDimension
  - IDimensionTolerance.GetFitFontUseScale
  - IDimensionTolerance.GetHoleFitValue
  - IDimensionTolerance.GetShaftFitValue
  - IDimensionTolerance.SetFitFont
  - IDimensionTolerance.SetFitValues
keywords:
  - fit
  - tolerances
  - fitdisplaystyle
  - idimensiontolerance
  - dimension
  - tolerance
  - display
  - style
  - int32
readonly: null
---

# IDimensionTolerance.FitDisplayStyle

Gets or sets how this dimension fit tolerance is displayed.

## Signature

```csharp
System.Int32 FitDisplayStyle {get; set;}
```
## Parameters

None.

## Return Value

Fit tolerance display style as defined in swFitTolDisplay_e

## Remarks

Use
ICalloutVariable::FitDisplayStyle
for multiple callouts in a display dimension for a hole.
To see the effects of changing the fit tolerance display style, use
IModelDoc2::GraphicsRedraw2
.

## See Also

- `IDimensionTolerance.FitType`
- `IDimensionTolerance.GetFitFontHeight`
- `IDimensionTolerance.GetFitFontScale`
- `IDimensionTolerance.GetFitFontUseDimension`
- `IDimensionTolerance.GetFitFontUseScale`
- `IDimensionTolerance.GetHoleFitValue`
- `IDimensionTolerance.GetShaftFitValue`
- `IDimensionTolerance.SetFitFont`
- `IDimensionTolerance.SetFitValues`