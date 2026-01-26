---
type: method
interface: IModelDoc2
member: FontPoints
returns: void
parameters:
  -
    name: Points
    type: System.Int16
    description: Height, in points, of the font
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
  - IModelDoc2.FontUnderline
  - IModelDoc2.FontUnits
keywords:
  - fonts
  - height
  - fontpoints
  - imodeldoc2
  - model
  - doc2
  - font
  - points
  - int16
  - void
  - add
  - watermark
  - part
  - vb
  - net
  - vba
---

# IModelDoc2.FontPoints

Changes the font height (specified in points) in the selected notes, dimensions, and GTols.

## Signature

```csharp
void FontPoints( 
   System.Int16
Points
)
```
## Parameters

- `Points` (System.Int16): Height, in points, of the font

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
- `IModelDoc2.FontUnderline`
- `IModelDoc2.FontUnits`