---
type: property
interface: IStraightTapElementData
member: DrillPointAngle
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - drillpointangle
  - istraighttapelementdata
  - straight
  - tap
  - element
  - data
  - drill
  - point
  - angle
  - double
readonly: null
---

# IStraightTapElementData.DrillPointAngle

Gets or sets the drill point angle of this straight tap hole element.

## Signature

```csharp
System.Double DrillPointAngle {get; set;}
```
## Parameters

None.

## Return Value

Drill point angle

## Remarks

This property is valid only if
IStraightTapElementData::EndShape
is set to
swEndShape_e
.swEndShape_DrillPoint and
IStraightTapElementData::DrillPointAngleOverride
is set to true.