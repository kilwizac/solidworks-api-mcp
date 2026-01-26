---
type: method
interface: IModelDoc2
member: WindowRedraw
returns: void
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - ui
related:
  - IModelDoc2.GraphicsRedraw2
  - IModelView.DrawHighlightedItems
  - IModelView.DrawTransparentFeatureTree
  - IModelView.SuppressWaitCursorDuringRedraw
keywords:
  - windows
  - redraw
  - window
  - windowredraw
  - imodeldoc2
  - model
  - doc2
  - void
  - insert
  - note
  - vba
  - running
  - attaching
  - solidworks
  - session
  - anchor
  - vb
  - net
---

# IModelDoc2.WindowRedraw

Redraws the current window.

## Signature

```csharp
void WindowRedraw()
```
## Parameters

None.

## Return Value

Unknown.

## Remarks

The current window includes the FeatureManager design tree view and the graphics area or graphics areas if you are using the window splitter.

## Examples

- Insert a Note (VBA) (Insert_a_Note_Example_VB.htm)
- Running or Attaching to a SOLIDWORKS Session (VBA) (SOLIDWORKS_Visible_or_BackGround_Example_VB.htm)
- Anchor a Note (C#) (Anchor_a_Note_Example_CSharp.htm)
- Anchor a Note (VB.NET) (Anchor_a_Note_Example_VBNET.htm)
- Anchor a Note (VBA) (Anchor_a_Note_Example_VB.htm)

## See Also

- `IModelDoc2.GraphicsRedraw2`
- `IModelView.DrawHighlightedItems`
- `IModelView.DrawTransparentFeatureTree`
- `IModelView.SuppressWaitCursorDuringRedraw`