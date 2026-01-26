---
type: method
interface: ISldWorks
member: CreateTaskpaneView3
returns: TaskpaneView
parameters:
  -
    name: ImageList
    type: System.Object
    description: Array of strings of paths to six image files for the tab of this Task Pane view (see Remarks )
  -
    name: ToolTip
    type: System.String
    description: Tool tip for this Task Pane view
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - ui
related:
  - ISldWorks.ActivateTaskPane
  - ISldWorks.GetImageSize
  - ISldWorks.RefreshTaskpaneContent
  - ISldWorks.TaskPaneIsPinned
keywords:
  - task
  - pane
  - see
  - also
  - itaskpaneview
  - create
  - createtaskpaneview3
  - isldworks
  - sld
  - works
  - taskpane
  - view3
  - image
  - list
  - object
  - tool
  - tip
  - string
  - view
  - add
  - vba
  - vb
  - net
---

# ISldWorks.CreateTaskpaneView3

Creates an application-level Task Pane view.

## Signature

```csharp
TaskpaneView CreateTaskpaneView3( 
   System.Object
ImageList
,
   System.String
ToolTip
)
```
## Parameters

- `ImageList` (System.Object): Array of strings of paths to six image files for the tab of this Task Pane view (see Remarks )
- `ToolTip` (System.String): Tool tip for this Task Pane view

## Return Value

Task Pane view

## Remarks

This method supports high resolution screens with high resolution operating system scaling options.
ImageList contains paths to PNG or BMP images in six pixel sizes:
20 X 20
32 X 32
40 X 40
64 X 64
96 X 96
128 X 128
The SOLIDWORKS Design user interface displays icons in three sizes: small, medium and large. After using this method to specify an image in six sizes, SOLIDWORKS selects the appropriate images to display as required by the current screen resolution or operating system scale.
If OS scale is...
Then SOLIDWORKS icon...
Uses image pixel size...
100%
Small
20X20
Medium
32X32
Large
40X40
150%
Small
32X32
Medium
40X40
Large
64X64
200%
Small
40X40
Medium
64X64
Large
96X96
250%
Small
64X64
Medium
96X96
Large
128X128
The images should use a 256-color palette and gray (192, 192, 192) for transparent areas.

## Examples

- Add Task Pane View (VBA) (Add_Task_Pane_View_Example_VB.htm)
- Add Task Pane View (VB.NET) (Add_Task_Pane_View_Example_VBNET.htm)
- Add Task Pane View (C#) (Add_Task_Pane_View_Example_CSharp.htm)

## See Also

- `ISldWorks.ActivateTaskPane`
- `ISldWorks.GetImageSize`
- `ISldWorks.RefreshTaskpaneContent`
- `ISldWorks.TaskPaneIsPinned`