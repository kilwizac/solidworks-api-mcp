---
type: method
interface: ISldWorks
member: ShowBubbleTooltipAt2
returns: void
parameters:
  -
    name: PointX
    type: System.Int32
    description: x coordinate in pixels relative to upper-left corner of the screen (see Remarks )
  -
    name: PointY
    type: System.Int32
    description: y coordinate in pixels relative to upper-left corner of the screen (see Remarks )
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
    description: Message for bubble ToolTip
  -
    name: TitleBitmapID
    type: System.Int32
    description: ID of the bitmap to display in the bubble ToolTip as defined in swBitMaps (see Remarks )
  -
    name: TitleBitmap
    type: System.String
    description: Path and filename of the bitmap to display before TitleString in the bubble ToolTip
  -
    name: UrlLoc
    type: System.String
    description: Any valid Windows Internet Explorer file to display in the body of the bubble ToolTip (see Remarks )
  -
    name: Cookie
    type: System.Int32
    description: Add-in's application ID specified in ISwAddin::ConnectToSW
  -
    name: LinkStringID
    type: System.Int32
    description: ID of the hyperlink as defined in swLinkString (see Remarks )
  -
    name: LinkString
    type: System.String
    description: String to show as the hyperlink in the bubble ToolTip
  -
    name: CallBack
    type: System.String
    description: Name of the callback function for the hyperlink
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - ui
related:
  - ISldWorks.HideBubbleTooltip
  - ISldWorks.ShowBubbleTooltip
keywords:
  - bubble
  - tooltips
  - showbubbletooltipat2
  - isldworks
  - sld
  - works
  - show
  - tooltip
  - at2
  - point
  - int32
  - arrow
  - pos
  - title
  - string
  - message
  - bitmap
  - id
  - url
  - loc
  - cookie
  - link
  - call
  - back
  - void
  - vb
  - net
  - vba
---

# ISldWorks.ShowBubbleTooltipAt2

Displays a bubble ToolTip at the specified location.

## Signature

```csharp
void ShowBubbleTooltipAt2( 
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
   System.Int32
TitleBitmapID
,
   System.String
TitleBitmap
,
   System.String
UrlLoc
,
   System.Int32
Cookie
,
   System.Int32
LinkStringID
,
   System.String
LinkString
,
   System.String
CallBack
)
```
## Parameters

- `PointX` (System.Int32): x coordinate in pixels relative to upper-left corner of the screen (see Remarks )
- `PointY` (System.Int32): y coordinate in pixels relative to upper-left corner of the screen (see Remarks )
- `ArrowPos` (System.Int32): Arrow position as defined in swArrowPosition
- `TitleString` (System.String): Title of bubble ToolTip
- `MessageString` (System.String): Message for bubble ToolTip
- `TitleBitmapID` (System.Int32): ID of the bitmap to display in the bubble ToolTip as defined in swBitMaps (see Remarks )
- `TitleBitmap` (System.String): Path and filename of the bitmap to display before TitleString in the bubble ToolTip
- `UrlLoc` (System.String): Any valid Windows Internet Explorer file to display in the body of the bubble ToolTip (see Remarks )
- `Cookie` (System.Int32): Add-in's application ID specified in ISwAddin::ConnectToSW
- `LinkStringID` (System.Int32): ID of the hyperlink as defined in swLinkString (see Remarks )
- `LinkString` (System.String): String to show as the hyperlink in the bubble ToolTip
- `CallBack` (System.String): Name of the callback function for the hyperlink

## Return Value

Unknown.

## Remarks

If PointX and PointY are both set to 0 and TitleBitmapID is swBitMapTreeError and a PropertyManager page is displayed, then the bubble ToolTip will appear in the same location as the SOLIDWORKS Design user-interface Rebuild Errors bubble ToolTip. You must specify both TitleBitmapID and TitleBitmap values.
If you specified a ...
Then the bubble ToolTip...
gif, .jpg, or .jpeg image for UrlLoc
is automatically expanded to accommodate the image.
URL for UrlLoc
cannot be resized; if the URL:
is an HTML file, then the contents of the HTML file are displayed in the bubble ToolTip.
links to a website, then the default or specified web page at that website is displayed in the bubble ToolTip.
The Cookie, LinkStringID, LinkString, and Callback parameters are intended for use by add-in applications to display a hyperlink in the bubble ToolTip that, when clicked, calls a function to do something outside of the application; for example, open the add-in application's Help system.

## Examples

- C# (#CSharp)
- VB.NET (#VBNET)
- VBA (#VBA)

## See Also

- `ISldWorks.HideBubbleTooltip`
- `ISldWorks.ShowBubbleTooltip`