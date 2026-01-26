---
type: method
interface: ITaskpaneView
member: GetButtonState
returns: System.Boolean
parameters:
  -
    name: ButtonIndex
    type: System.Int32
    description: Index of Task Pane button
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related:
  - DTaskpaneViewEvents_TaskPaneToolbarButtonClickedEventHandler
  - ITaskpaneView.AddCustomButton
  - ITaskpaneView.AddStandardButton
  - ITaskpaneView.SetButtonState
keywords:
  - getbuttonstate
  - itaskpaneview
  - taskpane
  - view
  - button
  - state
  - index
  - int32
  - boolean
  - add
  - buttons
  - task
  - pane
  - vb
  - net
  - vba
---

# ITaskpaneView.GetButtonState

Gets whether the Task Pane button is enabled.

## Signature

```csharp
System.Boolean GetButtonState( 
   System.Int32
ButtonIndex
)
```
## Parameters

- `ButtonIndex` (System.Int32): Index of Task Pane button

## Return Value

True if the Task Pane button is enabled, false if not

## Examples

- Add Buttons to Task Pane (C#) (Add_Buttons_to_Task_Pane_Example_CSharp.htm)
- Add Buttons to Task Pane (VB.NET) (Add_Buttons_to_Task_Pane_Example_VBNET.htm)
- Add Buttons to Task Pane (VBA) (Add_Buttons_to_Task_Pane_Example_VB.htm)

## See Also

- `DTaskpaneViewEvents_TaskPaneToolbarButtonClickedEventHandler`
- `ITaskpaneView.AddCustomButton`
- `ITaskpaneView.AddStandardButton`
- `ITaskpaneView.SetButtonState`