---
type: method
interface: IDimensionTolerance
member: GetFitFontHeight
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
  - getfitfontheight
  - idimensiontolerance
  - dimension
  - tolerance
  - font
  - height
  - double
  - vb
  - net
  - vba
---

# IDimensionTolerance.GetFitFontHeight

Gets the height of the fit tolerance font.

## Signature

```csharp
System.Double GetFitFontHeight()
```
## Parameters

None.

## Return Value

Height of the fit tolerance font in system units

## Remarks

This value is used only if the
IDimensionTolerance::GetFitFontUseDimension
and
IDimensionTolerance::GetFitFontUseScale
are false.
To get other tolerance fit font information, use
IDimensionTolerance::GetFitFontScale
.
To set the tolerance font information, use
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