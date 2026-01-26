---
type: method
interface: IModelDoc2
member: GraphicsRedraw2
returns: void
parameters: []
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - core
  - documents
  - ui
related:
  - IModelDoc2.WindowRedraw
  - IModelView.DrawHighlightedItems
  - IModelView.DrawTransparentFeatureTree
  - IModelView.SuppressWaitCursorDuringRedraw
keywords:
  - graphicsredraw2
  - imodeldoc2
  - model
  - doc2
  - graphics
  - redraw2
  - void
  - dynamic
  - view
  - rotation
  - insert
  - spline
  - drawing
  - autodimension
  - sketch
  - vba
  - dxf
  - file
  - add
  - dimension
  - redraw
---

# IModelDoc2.GraphicsRedraw2

Obsolete. Superseded by IModelView::GraphicsRedraw and IModelView::IGraphicsRedraw.

## Signature

```csharp
void GraphicsRedraw2()
```
## Parameters

None.

## Return Value

Unknown.

## Remarks

This method forces the display to be updated immediately when called.

## Examples

- Dynamic View Rotation (C++) (Dynamic_View_Rotation_Example_CPlusPlus_COM.htm)
- Insert Spline in Drawing (C++) (Insert_Spline_in_Drawing_Example_CPlusPlus_COM.htm)
- Autodimension a Sketch (VBA) (Autodimension_a_Sketch_Example_VB.htm)
- Insert DXF File and Add Dimension (VBA) (Insert_DXF_File_and_Add_Dimension_Example_VB.htm)
- Redraw Graphics (VBA) (Redraw_Graphics_Example_VB.htm)

## See Also

- `IModelDoc2.WindowRedraw`
- `IModelView.DrawHighlightedItems`
- `IModelView.DrawTransparentFeatureTree`
- `IModelView.SuppressWaitCursorDuringRedraw`