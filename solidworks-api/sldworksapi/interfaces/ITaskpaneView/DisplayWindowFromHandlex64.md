---
type: method
interface: ITaskpaneView
member: DisplayWindowFromHandlex64
returns: System.Boolean
parameters:
  -
    name: WindowHandle
    type: System.Int64
    description: 64-bit handle of .NET control
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related:
  - ITaskpaneView.GetTaskpaneViewWndx64
keywords:
  - task
  - pane
  - see
  - also
  - itaskpaneview
  - net
  - controls
  - displaywindowfromhandlex64
  - taskpane
  - view
  - display
  - window
  - handlex64
  - handle
  - int64
  - boolean
  - add
  - solidworks
  - using
  - vb
---

# ITaskpaneView.DisplayWindowFromHandlex64

Adds a .NET control to the Task Pane view on 64-bit machines.

## Signature

```csharp
System.Boolean DisplayWindowFromHandlex64( 
   System.Int64
WindowHandle
)
```
## Parameters

- `WindowHandle` (System.Int64): 64-bit handle of .NET control

## Return Value

True if .NET control is added, false if not

## Remarks

This method is only available through early binding and with 64-bit versions of the SOLIDWORKS Design software.
To insert a Task Pane view window, use this method to create your Task Pane view window and pass its handle to SOLIDWORKS Design.

## Examples

- Add .NET Controls to SOLIDWORKS using an Add-in (C#) (Add_.NET_Controls_to_SOLIDWORKS_Using_an_Add-in_Example_CSharp.htm)
- Add .NET Controls to SOLIDWORKS using an Add-in (VB.NET) (Add_.NET_Controls_to_SolidWorks_Using_an_Add-in_Example_VBNET.htm)

## See Also

- `ITaskpaneView.GetTaskpaneViewWndx64`