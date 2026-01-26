---
type: method
interface: IModelView
member: GraphicsRedraw
returns: void
parameters:
  -
    name: Rect
    type: System.Object
    description: Array of four integers or longs indicating the boundary of the region in the SOLIDWORKS graphics window to redraw; if the array is empty, then the entire graphics window is redrawn
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related:
  - IModelDoc2.WindowRedraw
  - IModelView.DrawHighlightedItems
  - IModelView.DrawTransparentFeatureTree
  - IModelView.IGraphicsRedraw
  - IModelView.SuppressWaitCursorDuringRedraw
keywords:
  - redraw
  - graphics
  - graphicsredraw
  - imodelview
  - model
  - view
  - rect
  - object
  - void
  - exclude
  - faces
  - before
  - flattening
  - vb
  - net
  - vba
---

# IModelView.GraphicsRedraw

Redraws the specified region of or the entire SOLIDWORKS graphics window.

## Signature

```csharp
void GraphicsRedraw( 
   System.Object
Rect
)
```
## Parameters

- `Rect` (System.Object): Array of four integers or longs indicating the boundary of the region in the SOLIDWORKS graphics window to redraw; if the array is empty, then the entire graphics window is redrawn

## Return Value

Unknown.

## Remarks

This method forces the specified region or the entire SOLIDWORKS graphics window to be updated immediately when called.

## Examples

- Exclude Faces Before Flattening (C#) (Exclude_Faces_Before_Flattening_Example_CSharp.htm)
- Exclude Faces Before Flattening (VB.NET) (Exclude_Faces_Before_Flattening_Example_VBNET.htm)
- Exclude Faces Before Flattening (VBA) (Exclude_Faces_Before_Flattening_Example_VB.htm)

## See Also

- `IModelDoc2.WindowRedraw`
- `IModelView.DrawHighlightedItems`
- `IModelView.DrawTransparentFeatureTree`
- `IModelView.IGraphicsRedraw`
- `IModelView.SuppressWaitCursorDuringRedraw`