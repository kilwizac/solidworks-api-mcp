---
type: method
interface: IDisplayDimension
member: GetAutoArcLengthLeader
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IDisplayDimension.GetArcLengthLeader
  - IDisplayDimension.SetArcLengthLeader
keywords:
  - leaders
  - dimensions
  - getautoarclengthleader
  - idisplaydimension
  - display
  - dimension
  - auto
  - arc
  - length
  - leader
  - boolean
---

# IDisplayDimension.GetAutoArcLengthLeader

Gets whether the leader style of this arc-length dimension is being automatically selected or selected by the user.

## Signature

```csharp
System.Boolean GetAutoArcLengthLeader()
```
## Parameters

None.

## Return Value

True if the leader style is selected automatically , false if the leader style is selected by the user

## Remarks

The leader style of an arc-length dimension is specific to each display dimension. It can be parallel (the leaders are parallel to each other) or radial (the leaders are perpendicular to the extension line and would extend through the center of the arc). SOLIDWORKS can automatically select the style, or it can be specified by the user. Use IDisplayDimension::GetAutoArcLengthLeader to determine whether the leader type is selected automatically.
This method gets the leader style stored on this display dimension. If this display dimension is set to select the leader type automatically, then this method might return a value that is different from what is displayed.
This method applies to only arc length dimensions. It returns -1 if you run it on any other types of dimensions.

## See Also

- `IDisplayDimension.GetArcLengthLeader`
- `IDisplayDimension.SetArcLengthLeader`