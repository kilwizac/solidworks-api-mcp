---
type: method
interface: IModelDoc2
member: FontUnits
returns: void
parameters:
  -
    name: Units
    type: System.Double
    description: Specifies the font height in current system units (for example, inches, millimeters, and so on)
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - ui
related:
  - IModelDoc2.FontBold
  - IModelDoc2.FontFace
  - IModelDoc2.FontItalic
  - IModelDoc2.FontPoints
  - IModelDoc2.FontUnderline
keywords:
  - fonts
  - height
  - fontunits
  - imodeldoc2
  - model
  - doc2
  - font
  - units
  - double
  - void
  - add
  - watermark
  - part
  - vb
  - net
  - vba
---

# IModelDoc2.FontUnits

Changes font height (specified in current system units) in the selected notes, dimensions, and GTols.

## Signature

```csharp
void FontUnits( 
   System.Double
Units
)
```
## Parameters

- `Units` (System.Double): Specifies the font height in current system units (for example, inches, millimeters, and so on)

## Return Value

Unknown.

## Remarks

You can also use
ITextFormat
for full control of text formatting. Obtain ITextFormat using the appropriate GetTextFormat method (see index entry GetTextFormat for a list of available GetTextFormat methods).

## Examples

- Add Watermark to Part (C#) (Add_Watermark_to_Part_Example_CSharp.htm)
- Add Watermark to Part (VB.NET) (Add_Watermark_to_Part_Example_VBNET.htm)
- Add Watermark to Part (VBA) (Add_Watermark_to_Part_Example_VB.htm)

## See Also

- `IModelDoc2.FontBold`
- `IModelDoc2.FontFace`
- `IModelDoc2.FontItalic`
- `IModelDoc2.FontPoints`
- `IModelDoc2.FontUnderline`