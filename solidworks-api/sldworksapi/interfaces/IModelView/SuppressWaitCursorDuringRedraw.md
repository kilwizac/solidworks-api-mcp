---
type: property
interface: IModelView
member: SuppressWaitCursorDuringRedraw
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related:
  - IModelView.GraphicsRedraw
  - IModelView.IGraphicsRedraw
keywords:
  - cursor
  - hourglass
  - suppresswaitcursorduringredraw
  - imodelview
  - model
  - view
  - suppress
  - wait
  - during
  - redraw
  - boolean
  - disable
  - when
  - redrawn
  - vba
readonly: null
---

# IModelView.SuppressWaitCursorDuringRedraw

Gets or sets the state of the wait cursor (also called the hourglass) while this model view is being redrawn.

## Signature

```csharp
System.Boolean SuppressWaitCursorDuringRedraw {get; set;}
```
## Parameters

None.

## Return Value

True to enable the wait cursor, false to disable it

## Remarks

When a model view is being redrawn, the wait cursor is normally displayed. This property allows you to suppress the wait cursor.
An add-in might find this property useful in situations where it is running a series of APIs, and one or more of those APIs cause the model view to redraw. By default, redrawing the model causes the wait cursor to flash on and off, which the end user may find disconcerting. By setting this property to false, the flashing wait cursor is suppressed.
IModelDoc::GraphicsRedraw2
is the most common API that causes a model view to redraw.
If your program disables this property, then it should re-enable it when the operation for which it was disabled completes. Otherwise, SOLIDWORKS will continue to
not
display the wait cursor. In other words, the expected use of this property is that you should disable it for a specific operation (or set of operations) in your code, and then immediately restore its previous behavior when that operation is completed.
Use of this property does not affect SOLIDWORKS performance.

## Examples

- Disable Wait Cursor When Model View Redrawn (VBA) (Disable_Wait_Cursor_While_Model_View_Redrawn_VB.htm)

## See Also

- `IModelView.GraphicsRedraw`
- `IModelView.IGraphicsRedraw`