---
type: method
interface: ITaskpaneView
member: GetTaskpaneViewWndx64
returns: System.Int64
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related: []
keywords:
  - gettaskpaneviewwndx64
  - itaskpaneview
  - taskpane
  - view
  - wndx64
  - int64
---

# ITaskpaneView.GetTaskpaneViewWndx64

Gets the Taskpane view window handle.

## Signature

```csharp
System.Int64 GetTaskpaneViewWndx64()
```
## Parameters

None.

## Return Value

Window handle

## Remarks

This method is only available through early binding and with 64-bit versions of the SOLIDWORKS Design software.
To insert a Task Pane view window, create your Task Pane view window and pass its handle to SOLIDWORKS Design using
ITaskpaneView::DisplayWindowFromHandlex64
.