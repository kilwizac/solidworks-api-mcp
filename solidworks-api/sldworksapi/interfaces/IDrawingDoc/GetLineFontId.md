---
type: method
interface: IDrawingDoc
member: GetLineFontId
returns: System.Int32
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
  - IDrawingDoc.GetLineFontInfo2
  - IDrawingDoc.GetLineFontName2
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
  - getlinefontid
  - drawing
  - doc
  - line
  - font
  - id
  - index
  - int32
---

# IDrawingDoc.GetLineFontId

Gets the associated line font ID.

## Signature

```csharp
System.Int32 GetLineFontId( 
   System.Int32
Index
)
```
## Parameters

- `Index` (System.Int32): Index position of the line font which is within the index range returned by IDrawingDoc::GetLineFontCount2

## Return Value

Line font ID

## Remarks

SOLIDWORKS uses the line font ID to represent specific line fonts whose names are, for example, Visible, Hidden, Sketch, and so on.

## See Also

- `IDrawingDoc.GetLineFontCount2`
- `IDrawingDoc.GetLineFontInfo2`
- `IDrawingDoc.GetLineFontName2`
- `IDrawingDoc.SetLineColor`
- `IDrawingDoc.SetLineStyle`
- `IDrawingDoc.SetLineWidth`