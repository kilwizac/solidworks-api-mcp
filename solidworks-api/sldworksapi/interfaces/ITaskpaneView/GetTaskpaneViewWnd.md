---
type: method
interface: ITaskpaneView
member: GetTaskpaneViewWnd
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - ui
related: []
keywords:
  - gettaskpaneviewwnd
  - itaskpaneview
  - taskpane
  - view
  - wnd
  - int32
---

# ITaskpaneView.GetTaskpaneViewWnd

Obsolete. Superseded by ITaskpaneView::GetTaskpaneViewWndx64.

## Signature

```csharp
System.Int32 GetTaskpaneViewWnd()
```
## Parameters

None.

## Return Value

CWnd object pointer

## Remarks

This method gets a Task Pane view window object pointer for 32-bit MFC applications only.
Because this method is valid only for 32-bit applications, it is now obsolete.
To insert a Task Pane view window, create your Task Pane view window and pass its handle to SOLIDWORKS using
ITaskpaneView::DisplayWindowFromHandlex64
.