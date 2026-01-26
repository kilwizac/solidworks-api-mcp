---
type: method
interface: IDimensionTolerance
member: GetFontHeight
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related: []
keywords:
  - getfontheight
  - idimensiontolerance
  - dimension
  - tolerance
  - font
  - height
  - double
  - vba
  - vb
  - net
---

# IDimensionTolerance.GetFontHeight

Gets the height of the tolerance font.

## Signature

```csharp
System.Double GetFontHeight()
```
## Parameters

None.

## Return Value

Height of the tolerance font in system units

## Remarks

This value is used only if
IDimensionTolerance::GetFontUseDimension
and
IDimensionTolerance::GetFontUseScale
are false.
To get other tolerance font information, use
IDimensionTolerance::GetFontScale
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