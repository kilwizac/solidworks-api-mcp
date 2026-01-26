---
type: method
interface: IDrawingDoc
member: GetDrawingPaletteViewNames
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - drawings
  - ui
related:
  - IDrawingDoc.DropDrawingViewFromPalette2
  - IDrawingDoc.GenerateViewPaletteViews
keywords:
  - drawings
  - see
  - also
  - idrawingdoc
  - view
  - palette
  - drawing
  - views
  - iview
  - getdrawingpaletteviewnames
  - doc
  - names
  - object
  - drop
  - vba
  - first
  - number
  - lines
  - flat
  - pattern
  - boundary
  - box
  - sketch
  - vb
  - net
---

# IDrawingDoc.GetDrawingPaletteViewNames

Gets the names of drawing views in the View Palette for the active drawing sheet.

## Signature

```csharp
System.Object GetDrawingPaletteViewNames()
```
## Parameters

None.

## Return Value

Array of the names of the drawing views in the View Palette for the active drawing sheet

## Remarks

If...
Then this method...
a part or assembly was not pre-selected for the View Palette (i.e., the View Palette is empty)
returns an empty array.
an end-user moves a drawing view from the View Palette to the drawing sheet (either through the user-interface or via an API)
does not include that drawing name the next time this method is called.

## Examples

- Drop Drawing Views from View Palette (VBA) (Drop_Drawing_Views_from_View_Palette_Example_VB.htm)
- Drop First Drawing View from View Palette (VBA) (Drop_Drawing_Views_from_View_Palette_Example_VB.htm)
- Get Number of Lines in Flat-pattern Drawing View's Boundary-box Sketch (C#) (Get_Number_of_Lines_Flat-pattern_Drawing_View_Boundary-box_Sketch_Example_CSharp.htm)
- Get Number of Lines in Flat-pattern Drawing View's Boundary-box Sketch (VB.NET) (Get_Number_of_Lines_Flat-pattern_Drawing_View_Boundary-box_Sketch_Example_VBNET.htm)
- Get Number of Lines in Flat-pattern Drawing View's Boundary-box Sketch (VBA) (Get_Number_of_Lines_Flat-pattern_Drawing_View_Boundary-box_Sketch_Example_VB.htm)

## See Also

- `IDrawingDoc.DropDrawingViewFromPalette2`
- `IDrawingDoc.GenerateViewPaletteViews`