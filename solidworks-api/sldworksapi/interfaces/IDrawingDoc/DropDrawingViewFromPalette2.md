---
type: method
interface: IDrawingDoc
member: DropDrawingViewFromPalette2
returns: View
parameters:
  -
    name: PaletteViewName
    type: System.String
    description: Name of the drawing view to move to the drawing sheet
  -
    name: X
    type: System.Double
    description: x coordinate where to drop the drawing view
  -
    name: Y
    type: System.Double
    description: y coordinate where to drop the drawing view
  -
    name: Z
    type: System.Double
    description: z coordinate where to drop the drawing view ; this coordinate is always 0
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - drawings
  - ui
related:
  - IDrawingDoc.GenerateViewPaletteViews
  - IDrawingDoc.GetDrawingPaletteViewNames
keywords:
  - drawing
  - views
  - see
  - also
  - iview
  - view
  - palette
  - drawings
  - idrawingdoc
  - dropdrawingviewfrompalette2
  - doc
  - drop
  - palette2
  - name
  - string
  - double
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

# IDrawingDoc.DropDrawingViewFromPalette2

Moves the specified drawing view from the View Palette to the current drawing sheet.

## Signature

```csharp
View DropDrawingViewFromPalette2( 
   System.String
PaletteViewName
,
   System.Double
X
,
   System.Double
Y
,
   System.Double
Z
)
```
## Parameters

- `PaletteViewName` (System.String): Name of the drawing view to move to the drawing sheet
- `X` (System.Double): x coordinate where to drop the drawing view
- `Y` (System.Double): y coordinate where to drop the drawing view
- `Z` (System.Double): z coordinate where to drop the drawing view ; this coordinate is always 0

## Return Value

View

## Remarks

The x, y, and z coordinates are in paper space. Thus, the drawing sheet scale is irrelevant.

## Examples

- Drop Drawing Views from View Palette (VBA) (Drop_Drawing_Views_from_View_Palette_Example_VB.htm)
- Drop First Drawing View from View Palette (VBA) (Drop_First_Drawing_View_from_View_Palette_Example_VB.htm)
- Get the Number of Lines in Flat-pattern Drawing View's Boundary-box Sketch (C#) (Get_Number_of_Lines_Flat-pattern_Drawing_View_Boundary-box_Sketch_Example_CSharp.htm)
- Get the Number of Lines in Flat-pattern Drawing View's Boundary-box Sketch (VB.NET) (Get_Number_of_Lines_Flat-pattern_Drawing_View_Boundary-box_Sketch_Example_VBNET.htm)
- Get the Number of Lines in Flat-pattern Drawing View's Boundary-box Sketch (VBA) (Get_Number_of_Lines_Flat-pattern_Drawing_View_Boundary-box_Sketch_Example_VB.htm)

## See Also

- `IDrawingDoc.GenerateViewPaletteViews`
- `IDrawingDoc.GetDrawingPaletteViewNames`