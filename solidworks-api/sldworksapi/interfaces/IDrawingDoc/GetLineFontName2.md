---
type: method
interface: IDrawingDoc
member: GetLineFontName2
returns: System.String
parameters:
  -
    name: Index
    type: System.Int32
    description: Index position of the line font which is within the index range returned by IDrawingDoc::GetLineFontCount2
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
  - IDrawingDoc.SetLineColor
  - IDrawingDoc.SetLineStyle
  - IDrawingDoc.SetLineWidth
keywords:
  - drawings
  - see
  - also
  - idrawingdoc
  - lines
  - fonts
  - getlinefontname2
  - drawing
  - doc
  - line
  - font
  - name2
  - index
  - int32
  - string
---

# IDrawingDoc.GetLineFontName2

Gets the name of the specified line font.

## Signature

```csharp
System.String GetLineFontName2( 
   System.Int32
Index
)
```
## Parameters

- `Index` (System.Int32): Index position of the line font which is within the index range returned by IDrawingDoc::GetLineFontCount2

## Return Value

Line font name

## Remarks

This method can return a font name Hidden, Visible, etc.

## See Also

- `IDrawingDoc.GetLineFontCount2`
- `IDrawingDoc.GetLineFontId`
- `IDrawingDoc.GetLineFontInfo2`
- `IDrawingDoc.SetLineColor`
- `IDrawingDoc.SetLineStyle`
- `IDrawingDoc.SetLineWidth`