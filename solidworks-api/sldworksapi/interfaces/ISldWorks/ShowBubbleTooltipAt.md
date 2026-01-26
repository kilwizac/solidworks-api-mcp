---
type: method
interface: ISldWorks
member: ShowBubbleTooltipAt
returns: void
parameters:
  -
    name: PointX
    type: System.Int32
    description: x coordinate in pixels relative to upper-left corner of screen
  -
    name: PointY
    type: System.Int32
    description: y coordinate in pixels relative to upper-left corner of screen
  -
    name: ArrowPos
    type: System.Int32
    description: Arrow position as defined in swArrowPosition
  -
    name: TitleString
    type: System.String
    description: Title of bubble ToolTip
  -
    name: MessageString
    type: System.String
    description: Message string of bubble ToolTip
  -
    name: UrlLoc
    type: System.String
    description: Any valid Windows Internet Explorer file (see Remarks )
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - core
  - documents
  - ui
related:
  - ISldWorks.ShowBubbleTooltip
keywords:
  - tooltips
  - showbubbletooltipat
  - isldworks
  - sld
  - works
  - show
  - bubble
  - tooltip
  - point
  - int32
  - arrow
  - pos
  - title
  - string
  - message
  - url
  - loc
  - void
---

# ISldWorks.ShowBubbleTooltipAt

Obsolete. Superseded by ISldWorks::ShowBubbleTooltipAt2.

## Signature

```csharp
void ShowBubbleTooltipAt( 
   System.Int32
PointX
,
   System.Int32
PointY
,
   System.Int32
ArrowPos
,
   System.String
TitleString
,
   System.String
MessageString
,
   System.String
UrlLoc
)
```
## Parameters

- `PointX` (System.Int32): x coordinate in pixels relative to upper-left corner of screen
- `PointY` (System.Int32): y coordinate in pixels relative to upper-left corner of screen
- `ArrowPos` (System.Int32): Arrow position as defined in swArrowPosition
- `TitleString` (System.String): Title of bubble ToolTip
- `MessageString` (System.String): Message string of bubble ToolTip
- `UrlLoc` (System.String): Any valid Windows Internet Explorer file (see Remarks )

## Return Value

Unknown.

## Remarks

If you specified a ...
Then the ToolTip's bubble...
gif, .jpg, or .jpeg image for urlLoc
Is automatically expanded to accommodate the image
URL for urlLoc
Cannot be resized; if the URL is:
an HTML file, then the contents of the HTML file are displayed in the bubble ToolTip
to a website, then the default or specified web page at that website is displayed in the bubble ToolTip

## See Also

- `ISldWorks.ShowBubbleTooltip`