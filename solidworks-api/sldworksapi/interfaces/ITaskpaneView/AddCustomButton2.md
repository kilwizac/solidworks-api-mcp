---
type: method
interface: ITaskpaneView
member: AddCustomButton2
returns: System.Boolean
parameters:
  -
    name: ImageList
    type: System.Object
    description: Array of strings for the paths for the image files for the custom button (see Remarks )
  -
    name: ToolTip
    type: System.String
    description: Array of strings for the paths for the image files for the custom button (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related:
  - DTaskpaneViewEvents_TaskPaneToolbarButtonClickedEventHandler
  - ISldWorks.GetImageSize
  - ITaskpaneView.AddStandardButton
  - ITaskpaneView.GetButtonState
  - ITaskpaneView.SetButtonState
keywords:
  - button
  - task
  - pane
  - see
  - also
  - itaskpaneview
  - buttons
  - addcustombutton2
  - taskpane
  - view
  - add
  - custom
  - button2
  - image
  - list
  - object
  - tool
  - tip
  - string
  - boolean
---

# ITaskpaneView.AddCustomButton2

Adds a custom button to the Task Pane.

## Signature

```csharp
System.Boolean AddCustomButton2( 
   System.Object
ImageList
,
   System.String
ToolTip
)
```
## Parameters

- `ImageList` (System.Object): Array of strings for the paths for the image files for the custom button (see Remarks )
- `ToolTip` (System.String): Array of strings for the paths for the image files for the custom button (see Remarks )

## Return Value

True if the custom button is added to the Task Pane, false if not

## Remarks

This method supports scaling for high resolution screens with high resolution operating system scaling options.
ImageList images can be:
20 x 20 pixels
32 x 32 pixels
40 x 40 pixels
64 x 64 pixels
96 x 96 pixels
128 x128 pixels
The images should use 256-color palette.
The size of the custom button displayed is dictated by both the monitor's or laptop's screen resolution and SOLIDWORKS icon size. You must set the custom button size before executing a macro or application that calls this method.
For example, if running Windows 7:
To set your monitor's or laptop's screen resolution:
Click
Start > Control Panel > Appearance and  Personalization > Display
.
Select a different icon size.
Click
Apply
.
Click
Log off now
.
Log back in.
Start SOLIDWORKS and open a part, assembly, or drawing.
Click
Tools > Customize
and on the Toolbars tab, click the
Icon size
that matches the size that you set in step 1b and click
OK
two twice.

## See Also

- `DTaskpaneViewEvents_TaskPaneToolbarButtonClickedEventHandler`
- `ISldWorks.GetImageSize`
- `ITaskpaneView.AddStandardButton`
- `ITaskpaneView.GetButtonState`
- `ITaskpaneView.SetButtonState`