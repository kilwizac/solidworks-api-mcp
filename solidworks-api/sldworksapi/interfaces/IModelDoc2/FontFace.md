---
type: method
interface: IModelDoc2
member: FontFace
returns: void
parameters:
  -
    name: Face
    type: System.String
    description: Points to a null-terminated string that specifies the name of the font face (for example, Times New Roman)
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - geometry
  - ui
related:
  - IModelDoc2.FontBold
  - IModelDoc2.FontItalic
  - IModelDoc2.FontPoints
  - IModelDoc2.FontUnderline
  - IModelDoc2.FontUnits
keywords:
  - fonts
  - face
  - fontface
  - imodeldoc2
  - model
  - doc2
  - font
  - string
  - void
---

# IModelDoc2.FontFace

Changes the font face in the selected notes, dimensions, and GTols.

## Signature

```csharp
void FontFace( 
   System.String
Face
)
```
## Parameters

- `Face` (System.String): Points to a null-terminated string that specifies the name of the font face (for example, Times New Roman)

## Return Value

Unknown.

## Remarks

You can also use
ITextFormat
for full control of text formatting. Obtain ITextFormat using the appropriate GetTextFormat method (see index entry GetTextFormat for a list of available GetTextFormat methods).

## See Also

- `IModelDoc2.FontBold`
- `IModelDoc2.FontItalic`
- `IModelDoc2.FontPoints`
- `IModelDoc2.FontUnderline`
- `IModelDoc2.FontUnits`