---
type: method
interface: IDimensionTolerance
member: GetFitFontScale
returns: System.Double
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
  - getfitfontscale
  - idimensiontolerance
  - dimension
  - tolerance
  - font
  - scale
  - double
  - vb
  - net
  - vba
---

# IDimensionTolerance.GetFitFontScale

Gets the ratio of the height of the fit tolerance font to the height of the dimension font.

## Signature

```csharp
System.Double GetFitFontScale()
```
## Parameters

None.

## Return Value

Ratio of the height of the fit tolerance font to the height of the dimension font

## Remarks

If
IDimensionTolerance::GetFitFontUseDimension
is true, then the value returned by the
IDimensionTolerance::GetFitFontUseScale
is true and the value returned by IDimensionTolerance::GetFitFontScale method is 1.0.
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

## Examples

- Get Dimension Tolerance (C#) (Get_Dimension_Tolerance_Example_CSharp.htm)
- Get Dimension Tolerance (VB.NET) (Get_Dimension_Tolerance_Example_VBNET.htm)
- Get Dimension Tolerance (VBA) (Get_Dimension_Tolerance_Example_VB.htm)

## See Also

- `IDimensionTolerance.FitDisplayStyle`
- `IDimensionTolerance.FitType`
- `IDimensionTolerance.GetHoleFitValue`
- `IDimensionTolerance.GetShaftFitValue`
- `IDimensionTolerance.SetFitValues`