---
type: method
interface: ISldWorks
member: ShowBubbleTooltip
returns: void
parameters:
  -
    name: PointAt
    type: System.Int32
    description: Toolbar button ID
  -
    name: FlashButtonIDs
    type: System.String
    description: Array of strings for the toolbar buttons
  -
    name: TitleResID
    type: System.Int32
    description: Title resource ID of bubble Tooltip or 0
  -
    name: TitleString
    type: System.String
    description: Title of bubble ToolTip
  -
    name: MessageString
    type: System.String
    description: Message string of bubble ToolTip
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - ui
related:
  - ISldWorks.ShowBubbleTooltipAt2
keywords:
  - bubble
  - tooltips
  - toolbars
  - showbubbletooltip
  - isldworks
  - sld
  - works
  - show
  - tooltip
  - point
  - int32
  - flash
  - button
  - ds
  - string
  - title
  - res
  - id
  - message
  - void
  - add
  - toolbar
  - vba
---

# ISldWorks.ShowBubbleTooltip

Displays a bubble ToolTip }}-->and flashes the specified toolbar button.

## Signature

```csharp
void ShowBubbleTooltip( 
   System.Int32
PointAt
,
   System.String
FlashButtonIDs
,
   System.Int32
TitleResID
,
   System.String
TitleString
,
   System.String
MessageString
)
```
## Parameters

- `PointAt` (System.Int32): Toolbar button ID
- `FlashButtonIDs` (System.String): Array of strings for the toolbar buttons
- `TitleResID` (System.Int32): Title resource ID of bubble Tooltip or 0
- `TitleString` (System.String): Title of bubble ToolTip
- `MessageString` (System.String): Message string of bubble ToolTip

## Return Value

Unknown.

## Examples

- Flash an Add-in's Toolbar Button (VBA) (Flash_an_Add-in_s_Toolbar_Button_Example_VB.htm)

## See Also

- `ISldWorks.ShowBubbleTooltipAt2`