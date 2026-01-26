---
type: method
interface: IDisplayDimension
member: GetArrowHeadStyle2
returns: System.Boolean
parameters:
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
  - getarrowheadstyle2
  - idisplaydimension
  - display
  - dimension
  - arrow
  - head
  - style2
  - style1
  - int32
  - boolean
---

# IDisplayDimension.GetArrowHeadStyle2

Gets the arrowhead style used by this display dimension.

## Signature

```csharp
System.Boolean GetArrowHeadStyle2( 
   out System.Int32
Style1
,
   out System.Int32
Style2
)
```
## Parameters

- `Style1` (System.Int32): Arrowhead style of first arrowhead as defined in swArrowStyle_e
- `Style2` (System.Int32): Arrowhead style of second arrowhead as defined in swArrowStyle_e

## Return Value

True if the styles are set, false if not

## Remarks

The arrowhead style for a display dimension is controlled by a value stored in one of two places: on the owning document or on the individual display dimension.
Use this method and
IDisplayDimension::GetUseDocArrowHeadStyle
to get the current values for these settings. Use
IDisplayDimension::SetArrowHeadStyle2
to set the arrowhead style.