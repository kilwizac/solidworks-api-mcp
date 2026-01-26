---
type: method
interface: IDisplayDimension
member: SetArrowHeadStyle2
returns: System.Boolean
parameters:
  -
    name: UseDoc
    type: System.Boolean
    description: True uses the document setting for arrowhead style, false uses the settings specified in Style1 and Style2
  -
    name: Style1
    type: System.Int32
    description: Arrowhead style of first arrowhead as defined in swArrowStyle_e
  -
    name: Style2
    type: System.Int32
    description: Arrowhead style of second arrowhead as defined in swArrowStyle_e
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related: []
keywords:
  - arrows
  - dimensions
  - setarrowheadstyle2
  - idisplaydimension
  - display
  - dimension
  - arrow
  - head
  - style2
  - use
  - doc
  - boolean
  - style1
  - int32
---

# IDisplayDimension.SetArrowHeadStyle2

Sets the arrowhead style of this display dimension.

## Signature

```csharp
System.Boolean SetArrowHeadStyle2( 
   System.Boolean
UseDoc
,
   System.Int32
Style1
,
   System.Int32
Style2
)
```
## Parameters

- `UseDoc` (System.Boolean): True uses the document setting for arrowhead style, false uses the settings specified in Style1 and Style2
- `Style1` (System.Int32): Arrowhead style of first arrowhead as defined in swArrowStyle_e
- `Style2` (System.Int32): Arrowhead style of second arrowhead as defined in swArrowStyle_e

## Return Value

True if the arrowhead styles are set, false if not

## Remarks

The arrowhead style for a display dimension is controlled by a value stored in one of two places: on the owning document or on the individual display dimension. Use
IDisplayDimension::GetUseDocArrowHeadStyle
and
IDisplayDimension::GetArrowHeadStyle2
to get the current values for these settings.
Setting UseDoc to True indicates that the document default setting for arrowhead style should be used, and Style1 and Style2 will be ignored.
After using this method, use
IModelDoc2::GraphicsRedraw2
to redraw the graphics window to see your changes.