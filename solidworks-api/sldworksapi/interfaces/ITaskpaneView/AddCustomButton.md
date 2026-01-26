---
type: method
interface: ITaskpaneView
member: AddCustomButton
returns: System.Boolean
parameters:
  -
    name: BitmapPath
    type: System.String
    description: Path and filename of the bitmap for the custom button
  -
    name: ToolTip
    type: System.String
    description: ToolTip for the custom button
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - ui
related:
  - DTaskpaneViewEvents_TaskPaneToolbarButtonClickedEventHandler
  - ITaskpaneView.AddStandardButton
  - ITaskpaneView.GetButtonState
  - ITaskpaneView.SetButtonState
keywords:
  - addcustombutton
  - itaskpaneview
  - taskpane
  - view
  - add
  - custom
  - button
  - bitmap
  - path
  - string
  - tool
  - tip
  - boolean
---

# ITaskpaneView.AddCustomButton

Obsolete. Superseded by ITaskpaneView::AddCustomButton2.

## Signature

```csharp
System.Boolean AddCustomButton( 
   System.String
BitmapPath
,
   System.String
ToolTip
)
```
## Parameters

- `BitmapPath` (System.String): Path and filename of the bitmap for the custom button
- `ToolTip` (System.String): ToolTip for the custom button

## Return Value

True if the custom button is added to the Task Pane, false if not

## Remarks

Button images can be either BMP (bitmap) or PNG and should be 16 pixels wide x 16 pixels high. The bitmap image can be 8-, 16-, 24-, or 32-bit depth.

## See Also

- `DTaskpaneViewEvents_TaskPaneToolbarButtonClickedEventHandler`
- `ITaskpaneView.AddStandardButton`
- `ITaskpaneView.GetButtonState`
- `ITaskpaneView.SetButtonState`