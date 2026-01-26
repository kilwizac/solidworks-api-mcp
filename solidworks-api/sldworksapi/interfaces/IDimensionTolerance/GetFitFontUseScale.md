---
type: method
interface: IDimensionTolerance
member: GetFitFontUseScale
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IDimensionTolerance.FitDisplayStyle
  - IDimensionTolerance.FitType
  - IDimensionTolerance.GetHoleFitValue
  - IDimensionTolerance.GetShaftFitValue
  - IDimensionTolerance.SetFitValues
keywords:
  - fit
  - tolerances
  - getfitfontusescale
  - idimensiontolerance
  - dimension
  - tolerance
  - font
  - use
  - scale
  - boolean
---

# IDimensionTolerance.GetFitFontUseScale

Gets whether the fit tolerance font size is scaled based on the dimension font size, or if it is an absolute height value.

## Signature

```csharp
System.Boolean GetFitFontUseScale()
```
## Parameters

None.

## Return Value

True if the fit tolerance font size is scaled based on the dimension font size, false if the fit tolerance font size is an absolute height value

## Remarks

If
IDimensionTolerance::GetFitFontUseDimension
is true, then the value returned by IDimensionTolerance::GetFitFontUseScale method is true and the value returned by
IDimensionTolerance::GetFitFontScale
is 1.0.
To get other fit tolerance font information, use
IDimensionTolerance::GetFitFontHeight
.
To set the fit tolerance font information, use
IDimensionTolerance::SetFitFont
.
This method deals with the fit tolerance font information, not the tolerance font information. To get or set tolerance information, use
IDimensionTolerance::GetFontUseDimension
,
IDimensionTolerance::GetFontUseScale
,
IDimensionTolerance::GetFontScale
,
IDimensionTolerance::GetFontHeight
, and
IDimensionTolerance::SetFont
.

## See Also

- `IDimensionTolerance.FitDisplayStyle`
- `IDimensionTolerance.FitType`
- `IDimensionTolerance.GetHoleFitValue`
- `IDimensionTolerance.GetShaftFitValue`
- `IDimensionTolerance.SetFitValues`