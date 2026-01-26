---
type: method
interface: IDrawingDoc
member: GenerateViewPaletteViews
returns: System.Boolean
parameters:
  -
    name: FileName
    type: System.String
    description: Path and file name of the document from which to add the predefined drawing views to the View Palette
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - drawings
  - ui
related:
  - IDrawingDoc.DropDrawingViewFromPalette2
  - IDrawingDoc.GetDrawingPaletteViewNames
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
  - generateviewpaletteviews
  - doc
  - generate
  - file
  - name
  - string
  - boolean
  - whether
  - hide
  - cutting
  - line
  - shoulders
  - vb
  - net
  - vba
---

# IDrawingDoc.GenerateViewPaletteViews

Adds the specified document's predefined drawing views to the View Palette.

## Signature

```csharp
System.Boolean GenerateViewPaletteViews( 
   System.String
FileName
)
```
## Parameters

- `FileName` (System.String): Path and file name of the document from which to add the predefined drawing views to the View Palette

## Return Value

True if the drawing views are added to the View Palette, false if not

## Examples

- Get and Set Whether to Hide Cutting Line Shoulders (C#) (Get_and_Set_Whether_to_Hide_Cutting_Line_Shoulders_Example_CSharp.htm)
- Get and Set Whether to Hide Cutting Line Shoulders (VB.NET) (Get_and_Set_Whether_to_Hide_Cutting_Line_Shoulders_Example_VBNET.htm)
- Get and Set Whether to Hide Cutting Line Shoulders (VBA) (Get_and_Set_Whether_to_Hide_Cutting_Line_Shoulders_Example_VB.htm)

## See Also

- `IDrawingDoc.DropDrawingViewFromPalette2`
- `IDrawingDoc.GetDrawingPaletteViewNames`