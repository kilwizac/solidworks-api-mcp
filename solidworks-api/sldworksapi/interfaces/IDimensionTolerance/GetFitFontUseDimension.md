---
type: method
interface: IDimensionTolerance
member: GetFitFontUseDimension
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
  - getfitfontusedimension
  - idimensiontolerance
  - dimension
  - tolerance
  - font
  - use
  - boolean
  - vb
  - net
  - vba
---

# IDimensionTolerance.GetFitFontUseDimension

Gets whether the fit tolerance font is the same size as the dimension font.

## Signature

```csharp
System.Boolean GetFitFontUseDimension()
```
## Parameters

None.

## Return Value

True if the fit tolerance font is the same size as the dimension font, false if not

## Remarks

To get other fit tolerance font information, use
IDimensionTolerance::GetFitFontUseScale
,
IDimensionTolerance::GetFitFontScale
, and
IDimensionTolerance::GetFitFontHeight
.
To set the fit tolerance font information, use
IDimensionTolerance::SetFitFont
.
This method deals with the fit tolerance font information, not the tolerance font information.
To get or set tolerance information, use
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