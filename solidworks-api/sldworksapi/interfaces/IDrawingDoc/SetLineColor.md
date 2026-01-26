---
type: method
interface: IDrawingDoc
member: SetLineColor
returns: void
parameters:
  -
    name: Color
    type: System.Int32
    description: Color definition as a COLORREF
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
  - IDrawingDoc.SetLineStyle
  - IDrawingDoc.SetLineWidth
  - IDrawingDoc.SetLineWidthCustom
keywords:
  - drawings
  - see
  - also
  - idrawingdoc
  - lines
  - colors
  - sketch
  - entities
  - setlinecolor
  - drawing
  - doc
  - line
  - color
  - int32
  - void
---

# IDrawingDoc.SetLineColor

Sets the line color for a selected edge or sketch entity.

## Signature

```csharp
void SetLineColor( 
   System.Int32
Color
)
```
## Parameters

- `Color` (System.Int32): Color definition as a COLORREF

## Return Value

Unknown.

## See Also

- `IDrawingDoc.GetLineFontCount2`
- `IDrawingDoc.GetLineFontId`
- `IDrawingDoc.GetLineFontInfo2`
- `IDrawingDoc.GetLineFontName2`
- `IDrawingDoc.SetLineStyle`
- `IDrawingDoc.SetLineWidth`
- `IDrawingDoc.SetLineWidthCustom`