---
type: property
interface: IDisplayDimension
member: LeaderVisibility
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related: []
keywords:
  - leaders
  - dimensions
  - dimension
  - see
  - also
  - idimension
  - leadervisibility
  - idisplaydimension
  - display
  - leader
  - visibility
  - int32
  - properties
  - vba
readonly: null
---

# IDisplayDimension.LeaderVisibility

Gets or sets which leader lines (dimension lines) are visible on a display dimension.

## Signature

```csharp
System.Int32 LeaderVisibility {get; set;}
```
## Parameters

None.

## Return Value

Leader visibility state as defined in swLeaderLineVisibility_e

## Remarks

After using this property, use
IModelDoc2::GraphicsRedraw2
to redraw the graphics window to see your changes.

## Examples

- Get Display Dimension Properties (VBA) (Get_Display_Dimension_Properties_Example_VB.htm)