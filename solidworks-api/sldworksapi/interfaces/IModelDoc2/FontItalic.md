---
type: method
interface: IModelDoc2
member: FontItalic
returns: void
parameters:
  -
    name: Italic
    type: System.Boolean
    description: True to enable italic font style, false to disable
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
  - IModelDoc2.FontPoints
  - IModelDoc2.FontUnderline
  - IModelDoc2.FontUnits
keywords:
  - fonts
  - italic
  - fontitalic
  - imodeldoc2
  - model
  - doc2
  - font
  - boolean
  - void
---

# IModelDoc2.FontItalic

Enables or disables italic font style in the selected notes, dimensions, and GTols.

## Signature

```csharp
void FontItalic( 
   System.Boolean
Italic
)
```
## Parameters

- `Italic` (System.Boolean): True to enable italic font style, false to disable

## Return Value

Unknown.

## Remarks

You can also use
ITextFormat
for full control of text formatting. Obtain ITextFormat using the appropriate GetTextFormat method (see index entry GetTextFormat for a list of available GetTextFormat methods).

## See Also

- `IModelDoc2.FontBold`
- `IModelDoc2.FontFace`
- `IModelDoc2.FontPoints`
- `IModelDoc2.FontUnderline`
- `IModelDoc2.FontUnits`