---
type: property
interface: IStraightTapElementData
member: DrillPointAngleOverride
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IStraightTapElementData.DrillPointAngle
keywords:
  - drillpointangleoverride
  - istraighttapelementdata
  - straight
  - tap
  - element
  - data
  - drill
  - point
  - angle
  - override
  - boolean
readonly: null
---

# IStraightTapElementData.DrillPointAngleOverride

Gets or sets whether to override the drill point angle of this straight tap hole element.

## Signature

```csharp
System.Boolean DrillPointAngleOverride {get; set;}
```
## Parameters

None.

## Return Value

True to override the drill point angle, false to not

## Remarks

This property is valid only if
IStraightTapElementData::EndShape
is set to
swEndShape_e
.swEndShape_DrillPoint.

## See Also

- `IStraightTapElementData.DrillPointAngle`