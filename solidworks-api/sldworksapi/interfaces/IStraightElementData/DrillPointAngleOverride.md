---
type: property
interface: IStraightElementData
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
  - istraightelementdata
  - straight
  - element
  - data
  - drill
  - point
  - angle
  - override
  - boolean
readonly: null
---

# IStraightElementData.DrillPointAngleOverride

Gets or sets whether to override the drill point angle of this straight hole element.

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
IStraightElementData::EndShape
is set to
swEndShape_e
.swEndShape_DrillPoint.

## See Also

- `IStraightTapElementData.DrillPointAngle`