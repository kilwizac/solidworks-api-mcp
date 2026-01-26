---
type: method
interface: ITaskpaneView
member: DisplayWindowFromHandle
returns: System.Boolean
parameters:
  -
    name: WindowHandle
    type: System.Int32
    description: Handle of .NET control
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - ui
related:
  - ITaskpaneView.AddControl
keywords:
  - task
  - pane
  - see
  - also
  - itaskpaneview
  - net
  - controls
  - displaywindowfromhandle
  - taskpane
  - view
  - display
  - window
  - handle
  - int32
  - boolean
---

# ITaskpaneView.DisplayWindowFromHandle

Obsolete. Superseded by ITaskpaneView::DisplayWindowFromHandlex64.

## Signature

```csharp
System.Boolean DisplayWindowFromHandle( 
   System.Int32
WindowHandle
)
```
## Parameters

- `WindowHandle` (System.Int32): Handle of .NET control

## Return Value

True if .NET control is added, false if not

## Remarks

Because this method is valid only for 32-bit applications, it is now obsolete.
To insert a Task Pane view window, create your Task Pane view window and pass its handle to SOLIDWORKS using ITaskpaneView::DisplayWindowFromHandlex64.

## See Also

- `ITaskpaneView.AddControl`