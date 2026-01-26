---
type: method
interface: IModelView
member: GetViewHWnd
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related:
  - IModelWindow.HWnd
keywords:
  - microsoft
  - window
  - handle
  - model
  - views
  - see
  - also
  - imodelview
  - imodelviewmanager
  - interfaces
  - getviewhwnd
  - view
  - wnd
  - int32
---

# IModelView.GetViewHWnd

Gets the Microsoft window handle for this model view.

## Signature

```csharp
System.Int32 GetViewHWnd()
```
## Parameters

None.

## Return Value

Microsoft window handle

## Remarks

If your application must be x64 compatible, then use
IModelView::GetViewHWndx64
.
Window handles are not unique across computers.

## See Also

- `IModelWindow.HWnd`