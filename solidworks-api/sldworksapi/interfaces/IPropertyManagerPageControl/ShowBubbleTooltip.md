---
type: property
interface: IPropertyManagerPageControl
member: ShowBubbleTooltip
returns: void
parameters:
  -
    name: Title
    type: System.String
    description: Title to display in bubble ToolTip
  -
    name: Message
    type: System.String
    description: Message to display in bubble ToolTip
  -
    name: BmpFile
    type: System.String
    description: Path and filename of bitmap to display in bubble ToolTip
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related: []
keywords:
  - tooltips
  - showbubbletooltip
  - ipropertymanagerpagecontrol
  - manager
  - page
  - control
  - show
  - bubble
  - tooltip
  - title
  - string
  - message
  - bmp
  - file
  - void
readonly: null
---

# IPropertyManagerPageControl.ShowBubbleTooltip

Displays a bubble ToolTip containing the specified title, message, and bitmap.

## Signature

```csharp
void ShowBubbleTooltip( 
   System.String
Title
,
   System.String
Message
,
   System.String
BmpFile
)
```
## Parameters

- `Title` (System.String): Title to display in bubble ToolTip
- `Message` (System.String): Message to display in bubble ToolTip
- `BmpFile` (System.String): Path and filename of bitmap to display in bubble ToolTip

## Return Value

Unknown.

## Remarks

A bubble ToolTip is useful for validating data typed or selected by users in controls on a PropertyManager page.

## Examples

- IPropertyManagerPageControl (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IPropertyManagerPageControl)