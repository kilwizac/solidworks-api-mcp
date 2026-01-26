---
type: method
interface: IDimensionTolerance
member: SetFitFont
returns: System.Boolean
parameters:
  -
    name: UseDimension
    type: System.Boolean
    description: True if the fit tolerance font should be the same size as the dimension font, false if not
  -
    name: UseScale
    type: System.Boolean
    description: True if the fit tolerance font should be scaled based on the dimension font, false if the fit tolerance font size is an absolute height value
  -
    name: Value
    type: System.Double
    description: Scale ratio if UseScale is true or height value if UseScale is false
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IDimensionTolerance.FitDisplayStyle
  - IDimensionTolerance.FitType
keywords:
  - fit
  - tolerances
  - setfitfont
  - idimensiontolerance
  - dimension
  - tolerance
  - font
  - use
  - boolean
  - scale
  - value
  - double
  - vb
  - net
  - vba
---

# IDimensionTolerance.SetFitFont

Sets the fit tolerance font values.

## Signature

```csharp
System.Boolean SetFitFont( 
   System.Boolean
UseDimension
,
   System.Boolean
UseScale
,
   System.Double
Value
)
```
## Parameters

- `UseDimension` (System.Boolean): True if the fit tolerance font should be the same size as the dimension font, false if not
- `UseScale` (System.Boolean): True if the fit tolerance font should be scaled based on the dimension font, false if the fit tolerance font size is an absolute height value
- `Value` (System.Double): Scale ratio if UseScale is true or height value if UseScale is false

## Return Value

True if the fit tolerance font is set, false if not

## Remarks

If UseDimension is...
Then...
True
The other arguments are ignored.
UseScale is true.
Value is 1.0.
False
UseScale determines how Value is interpreted.
If UseScale is...
Then Value is assumed to be...
True
Scale value to use, and the height value is not changed.
False
Height value to use, and the scale value is not changed.
To get the fit tolerance font information, use
IDimensionTolerance::GetFitFontUseDimension
,
IDimensionTolerance::GetFitFontUseScale
,
IDimensionTolerance::GetFitFontScale
, and
IDimensionTolerance::GetFitFontHeight
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
To see the effects of changing the fit tolerance font information, use
IModelDoc2::GraphicsRedraw2
.

## Examples

- Get Dimension Tolerance (C#) (Get_Dimension_Tolerance_Example_CSharp.htm)
- Get Dimension Tolerance (VB.NET) (Get_Dimension_Tolerance_Example_VBNET.htm)
- Get Dimension Tolerance (VBA) (Get_Dimension_Tolerance_Example_VB.htm)

## See Also

- `IDimensionTolerance.FitDisplayStyle`
- `IDimensionTolerance.FitType`