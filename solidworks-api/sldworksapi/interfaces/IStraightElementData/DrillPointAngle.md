---
type: property
interface: IStraightElementData
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
  - istraightelementdata
  - straight
  - element
  - data
  - drill
  - point
  - angle
  - double
readonly: null
---

# IStraightElementData.DrillPointAngle

Gets or sets the drill point angle of this straight hole element.

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
IStraightElementData::EndShape
is set to
swEndShape_e
.swEndShape_DrillPoint and
IStraightElementData::DrillPointAngleOverride
is set to true.