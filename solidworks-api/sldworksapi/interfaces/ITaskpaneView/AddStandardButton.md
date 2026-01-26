---
type: method
interface: ITaskpaneView
member: AddStandardButton
returns: System.Boolean
parameters:
  -
    name: BitmapOption
    type: System.Int32
    description: Type of standard SOLIDWORKS button as defined in swTaskPaneBitmapsOptions_e
  -
    name: ToolTip
    type: System.String
    description: ToolTip for the standard SOLIDWORKS button
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related:
  - DTaskpaneViewEvents_TaskPaneToolbarButtonClickedEventHandler
  - ITaskpaneView.AddCustomButton
  - ITaskpaneView.GetButtonState
  - ITaskpaneView.SetButtonState
keywords:
  - task
  - pane
  - see
  - also
  - itaskpaneview
  - buttons
  - button
  - addstandardbutton
  - taskpane
  - view
  - add
  - standard
  - bitmap
  - option
  - int32
  - tool
  - tip
  - string
  - boolean
  - vba
  - vb
  - net
---

# ITaskpaneView.AddStandardButton

Adds a standard SOLIDWORKS button to the Task Pane.

## Signature

```csharp
System.Boolean AddStandardButton( 
   System.Int32
BitmapOption
,
   System.String
ToolTip
)
```
## Parameters

- `BitmapOption` (System.Int32): Type of standard SOLIDWORKS button as defined in swTaskPaneBitmapsOptions_e
- `ToolTip` (System.String): ToolTip for the standard SOLIDWORKS button

## Return Value

True if a standard SOLIDWORKS button is added to the Task Pane, false if not

## Examples

- Add Buttons to Task Pane (VBA) (Add_Buttons_to_Task_Pane_Example_VB.htm)
- Add Buttons to Task Pane (VB.NET) (Add_Buttons_to_Task_Pane_Example_VBNET.htm)
- Add Buttons to Task Pane (C#) (Add_Buttons_to_Task_Pane_Example_CSharp.htm)

## See Also

- `DTaskpaneViewEvents_TaskPaneToolbarButtonClickedEventHandler`
- `ITaskpaneView.AddCustomButton`
- `ITaskpaneView.GetButtonState`
- `ITaskpaneView.SetButtonState`