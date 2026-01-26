---
type: method
interface: IDimensionTolerance
member: GetFontScale
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related: []
keywords:
  - getfontscale
  - idimensiontolerance
  - dimension
  - tolerance
  - font
  - scale
  - double
  - vba
  - vb
  - net
---

# IDimensionTolerance.GetFontScale

Gets the ratio of the height of the tolerance font to the height of the dimension font.

## Signature

```csharp
System.Double GetFontScale()
```
## Parameters

None.

## Return Value

Ratio of the height of the tolerance font to the height of the dimension font

## Remarks

If
IDimensionTolerance::GetFontUseDimension
is true, then the value returned by the
IDimensionTolerance::GetFontUseScale
is True and the value returned by IDimensionTolerance::GetFontScale is 1.0.
To get other tolerance font information, use
IDimensionTolerance::GetFontHeight
.
To set the tolerance font information, use
IDimensionTolerance::SetFont
.
This method deals with the tolerance font information, not the fit tolerance font information. To get or set fit tolerance information, use
IDimensionTolerance::GetFitFontUseDimension
,
IDimensionTolerance::GetFitFontUseScale
,
IDimensionTolerance::GetFitFontScale
,
IDimensionTolerance::GetFitFontHeight
, and
IDimensionTolerance::SetFitFont
.

## Examples

- Get Dimension Tolerance (VBA) (Get_Dimension_Tolerance_Example_VB.htm)
- Get Dimension Tolerance (VB.NET) (Get_Dimension_Tolerance_Example_VBNET.htm)
- Get Dimension Tolerance (C#) (Get_Dimension_Tolerance_Example_CSharp.htm)