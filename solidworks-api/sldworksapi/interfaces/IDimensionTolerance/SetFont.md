---
type: method
interface: IDimensionTolerance
member: SetFont
returns: System.Boolean
parameters:
  -
    name: UseDimension
    type: System.Boolean
    description: True if the tolerance font should be the same size as the dimension font, false if not
  -
    name: UseScale
    type: System.Boolean
    description: True if the tolerance font size should be scaled based on the dimension font size, false if the tolerance font size is an absolute height value
  -
    name: Value
    type: System.Double
    description: Scale ratio if UseScale is true or height value if UseScale is false
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related: []
keywords:
  - setfont
  - idimensiontolerance
  - dimension
  - tolerance
  - font
  - use
  - boolean
  - scale
  - value
  - double
---

# IDimensionTolerance.SetFont

Sets the tolerance font values.

## Signature

```csharp
System.Boolean SetFont( 
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

- `UseDimension` (System.Boolean): True if the tolerance font should be the same size as the dimension font, false if not
- `UseScale` (System.Boolean): True if the tolerance font size should be scaled based on the dimension font size, false if the tolerance font size is an absolute height value
- `Value` (System.Double): Scale ratio if UseScale is true or height value if UseScale is false

## Return Value

True if the tolerance font is set, false if not

## Remarks

If UseDimension is...
Then...
True
The other arguments are ignored.
UseScale is True.
Value is 1.0.
false
UseScale determines how Value is interpreted.
If UseScale is...
Then Value is assumed to be the...
True
scale value to use, and the height value is not changed.
false
height value to use, and the scale value is not changed.
To get the tolerance font information, use
IDimensionTolerance::GetFontUseDimension
,
IDimensionTolerance::GetFontUseScale
,
IDimensionTolerance::GetFontScale
, and
IDimensionTolerance::GetFontHeight
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
To see the effects of changing the tolerance font information, use
IModelDoc2::GraphicsRedraw2
.