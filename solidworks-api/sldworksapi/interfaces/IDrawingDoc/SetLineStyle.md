---
type: method
interface: IDrawingDoc
member: SetLineStyle
returns: void
parameters:
  -
    name: StyleName
    type: System.String
    description: Style or font for the selected edge or sketch entity as defined in swLineStyles_e
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - drawings
  - ui
related:
  - IDrawingDoc.GetLineFontCount2
  - IDrawingDoc.GetLineFontId
  - IDrawingDoc.GetLineFontInfo2
  - IDrawingDoc.GetLineFontName2
  - IDrawingDoc.SetLineColor
  - IDrawingDoc.SetLineWidth
  - IDrawingDoc.SetLineWidthCustom
keywords:
  - drawings
  - see
  - also
  - idrawingdoc
  - lines
  - styles
  - fonts
  - sketch
  - entities
  - style
  - setlinestyle
  - drawing
  - doc
  - line
  - name
  - string
  - void
---

# IDrawingDoc.SetLineStyle

Sets the style or font for the line for a selected edge or sketch entity.

## Signature

```csharp
void SetLineStyle( 
   System.String
StyleName
)
```
## Parameters

- `StyleName` (System.String): Style or font for the selected edge or sketch entity as defined in swLineStyles_e

## Return Value

Unknown.

## See Also

- `IDrawingDoc.GetLineFontCount2`
- `IDrawingDoc.GetLineFontId`
- `IDrawingDoc.GetLineFontInfo2`
- `IDrawingDoc.GetLineFontName2`
- `IDrawingDoc.SetLineColor`
- `IDrawingDoc.SetLineWidth`
- `IDrawingDoc.SetLineWidthCustom`