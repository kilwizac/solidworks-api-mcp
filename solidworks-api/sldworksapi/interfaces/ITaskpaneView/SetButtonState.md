---
type: method
interface: ITaskpaneView
member: SetButtonState
returns: void
parameters:
  -
    name: ButtonIndex
    type: System.Int32
    description: Index of Task Pane button
  -
    name: Enable
    type: System.Boolean
    description: True to enable Task Pane button, false to disable it
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related:
  - DTaskpaneViewEvents_TaskPaneToolbarButtonClickedEventHandler
  - ITaskpaneView.AddCustomButton
  - ITaskpaneView.AddStandardButton
  - ITaskpaneView.GetButtonState
keywords:
  - setbuttonstate
  - itaskpaneview
  - taskpane
  - view
  - button
  - state
  - index
  - int32
  - enable
  - boolean
  - void
  - add
  - buttons
  - task
  - pane
  - vb
  - net
  - vba
---

# ITaskpaneView.SetButtonState

Sets whether the Task Pane button is enabled.

## Signature

```csharp
void SetButtonState( 
   System.Int32
ButtonIndex
,
   System.Boolean
Enable
)
```
## Parameters

- `ButtonIndex` (System.Int32): Index of Task Pane button
- `Enable` (System.Boolean): True to enable Task Pane button, false to disable it

## Return Value

Unknown.

## Examples

- Add Buttons to Task Pane (C#) (Add_Buttons_to_Task_Pane_Example_CSharp.htm)
- Add Buttons to Task Pane (VB.NET) (Add_Buttons_to_Task_Pane_Example_VBNET.htm)
- Add Buttons to Task Pane (VBA) (Add_Buttons_to_Task_Pane_Example_VB.htm)

## See Also

- `DTaskpaneViewEvents_TaskPaneToolbarButtonClickedEventHandler`
- `ITaskpaneView.AddCustomButton`
- `ITaskpaneView.AddStandardButton`
- `ITaskpaneView.GetButtonState`