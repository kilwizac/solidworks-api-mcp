---
type: method
interface: IDrawingDoc
member: SetLineWidth
returns: void
parameters:
  -
    name: Width
    type: System.Int32
    description: Weight for the line as defined in swLineWeights_e
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
  - IDrawingDoc.SetLineStyle
  - IDrawingDoc.SetLineWidthCustom
keywords:
  - lines
  - drawings
  - see
  - also
  - idrawingdoc
  - widths
  - sketch
  - entities
  - setlinewidth
  - drawing
  - doc
  - line
  - width
  - int32
  - void
---

# IDrawingDoc.SetLineWidth

Sets the line thickness for a selected edge or sketch entity to a SOLIDWORKS-supplied weight (width).

## Signature

```csharp
void SetLineWidth( 
   System.Int32
Width
)
```
## Parameters

- `Width` (System.Int32): Weight for the line as defined in swLineWeights_e

## Return Value

Unknown.

## See Also

- `IDrawingDoc.GetLineFontCount2`
- `IDrawingDoc.GetLineFontId`
- `IDrawingDoc.GetLineFontInfo2`
- `IDrawingDoc.GetLineFontName2`
- `IDrawingDoc.SetLineColor`
- `IDrawingDoc.SetLineStyle`
- `IDrawingDoc.SetLineWidthCustom`