---
type: method
interface: IModelView
member: IGraphicsRedraw
returns: void
parameters:
  -
    name: Rect
    type: System.Int32
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
  - IModelView.GraphicsRedraw
  - IModelView.SuppressWaitCursorDuringRedraw
keywords:
  - redraw
  - graphics
  - igraphicsredraw
  - imodelview
  - model
  - view
  - rect
  - int32
  - void
---

# IModelView.IGraphicsRedraw

Redraws the specified region of or the entire SOLIDWORKS graphics window.

## Signature

```csharp
void IGraphicsRedraw( 
   ref System.Int32
Rect
)
```
## Parameters

- `Rect` (System.Int32): Array of four integers or longs indicating the boundary of the region in the SOLIDWORKS graphics window to redraw; if the array is empty, then the entire graphics window is redrawn

## Return Value

Unknown.

## Remarks

This method forces the specified region or the entire SOLIDWORKS graphics window to be updated immediately when called.

## See Also

- `IModelDoc2.WindowRedraw`
- `IModelView.DrawHighlightedItems`
- `IModelView.DrawTransparentFeatureTree`
- `IModelView.GraphicsRedraw`
- `IModelView.SuppressWaitCursorDuringRedraw`