---
type: method
interface: IModelDoc2
member: FontBold
returns: void
parameters:
  -
    name: Bold
    type: System.Boolean
    description: True to enable bold font style, false to disable it
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - ui
related:
  - IModelDoc2.FontFace
  - IModelDoc2.FontItalic
  - IModelDoc2.FontPoints
  - IModelDoc2.FontUnderline
  - IModelDoc2.FontUnits
keywords:
  - fonts
  - bold
  - fontbold
  - imodeldoc2
  - model
  - doc2
  - font
  - boolean
  - void
---

# IModelDoc2.FontBold

Enables or disables bold font style in the selected notes, dimensions, and GTols.

## Signature

```csharp
void FontBold( 
   System.Boolean
Bold
)
```
## Parameters

- `Bold` (System.Boolean): True to enable bold font style, false to disable it

## Return Value

Unknown.

## Remarks

You can also use
ITextFormat
for full control of text formatting. Obtain ITextFormat using the appropriate GetTextFormat method (see index entry GetTextFormat for a list of available GetTextFormat methods).

## See Also

- `IModelDoc2.FontFace`
- `IModelDoc2.FontItalic`
- `IModelDoc2.FontPoints`
- `IModelDoc2.FontUnderline`
- `IModelDoc2.FontUnits`