---
type: method
interface: ISldWorks
member: CreateTaskpaneView2
returns: TaskpaneView
parameters:
  -
    name: Bitmap
    type: System.String
    description: Path and file name of the bitmap for the tab of this Task Pane view (see Remarks )
  -
    name: ToolTip
    type: System.String
    description: ToolTip for this Task Pane view
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - core
  - documents
  - ui
related:
  - ISldWorks.ActivateTaskPane
  - ISldWorks.RefreshTaskpaneContent
  - ISldWorks.TaskPaneIsPinned
keywords:
  - createtaskpaneview2
  - isldworks
  - sld
  - works
  - create
  - taskpane
  - view2
  - bitmap
  - string
  - tool
  - tip
  - view
---

# ISldWorks.CreateTaskpaneView2

Obsolete. Superseded by ISldworks::CreateTaskpaneView3.

## Signature

```csharp
TaskpaneView CreateTaskpaneView2( 
   System.String
Bitmap
,
   System.String
ToolTip
)
```
## Parameters

- `Bitmap` (System.String): Path and file name of the bitmap for the tab of this Task Pane view (see Remarks )
- `ToolTip` (System.String): ToolTip for this Task Pane view

## Return Value

Task Pane view

## Remarks

The bitmap should be 16 colors and 16 x 18 (width x height) pixels. Any portions of the bitmap that are white (RGB 255,255,255) will be transparent.

## See Also

- `ISldWorks.ActivateTaskPane`
- `ISldWorks.RefreshTaskpaneContent`
- `ISldWorks.TaskPaneIsPinned`