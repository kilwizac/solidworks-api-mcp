---
type: method
interface: IModelDoc2
member: FontUnderline
returns: void
parameters:
  -
    name: Underline
    type: System.Boolean
    description: True to enable underlining, false to disable it
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
  - IModelDoc2.FontUnits
keywords:
  - fonts
  - underlining
  - fontunderline
  - imodeldoc2
  - model
  - doc2
  - font
  - underline
  - boolean
  - void
---

# IModelDoc2.FontUnderline

Enables or disables underlining the selected notes, dimensions, and GTols.

## Signature

```csharp
void FontUnderline( 
   System.Boolean
Underline
)
```
## Parameters

- `Underline` (System.Boolean): True to enable underlining, false to disable it

## Return Value

Unknown.

## Remarks

You can also use
ITextFormat
for full control of text formatting. Obtain ITextFormat using the appropriate GetTextFormat method (see index entry GetTextFormat for a list of available GetTextFormat methods).

## See Also

- `IModelDoc2.FontBold`
- `IModelDoc2.FontFace`
- `IModelDoc2.FontItalic`
- `IModelDoc2.FontPoints`
- `IModelDoc2.FontUnits`