---
type: method
interface: IDisplayDimension
member: SetArcLengthLeader
returns: System.Int32
parameters:
  -
    name: AutoLeader
    type: System.Boolean
    description: True if the leader style is automatically selected, false if the leader style is selected by the user
  -
    name: LeaderType
    type: System.Int32
    description: Leader style as defined in swArcLengthLeaderType_e if autoLeader is false
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IDisplayDimension.GetArcLengthLeader
keywords:
  - leaders
  - dimensions
  - setarclengthleader
  - idisplaydimension
  - display
  - dimension
  - arc
  - length
  - leader
  - auto
  - boolean
  - type
  - int32
---

# IDisplayDimension.SetArcLengthLeader

Sets the leader style of this arc-length dimension.

## Signature

```csharp
System.Int32 SetArcLengthLeader( 
   System.Boolean
AutoLeader
,
   System.Int32
LeaderType
)
```
## Parameters

- `AutoLeader` (System.Boolean): True if the leader style is automatically selected, false if the leader style is selected by the user
- `LeaderType` (System.Int32): Leader style as defined in swArcLengthLeaderType_e if autoLeader is false

## Return Value

Return status: 0 Command was successful, leader style values were set -1 Command failed for an unknown reason, no leader style values were set -2 Specified leader style value is not valid

## Remarks

The leader style of an arc length dimension is specific to each display dimension. The leader style can be parallel (the leaders are parallel to each other) or radial (the leaders are perpendicular to the extension line and would extend through the center of the arc). The style can be selected automatically by SOLIDWORKS, or specified by the user.
If the autoLeader value is passed in as True to automatically select the leader style, then SOLIDWORKS ignores the leaderStyle value.
This method applies only to arc length dimensions. It does not affect any other types of dimensions.
After using this method, use
IModelDoc2::GraphicsRedraw2
to redraw the graphics window to see your changes.

## See Also

- `IDisplayDimension.GetArcLengthLeader`