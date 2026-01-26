---
type: property
interface: ISecondaryMemberBetweenPointsFeatureData
member: RevDirectionLengthRatioMember2
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - revdirectionlengthratiomember2
  - isecondarymemberbetweenpointsfeaturedata
  - secondary
  - member
  - between
  - points
  - feature
  - data
  - rev
  - direction
  - length
  - ratio
  - member2
  - boolean
readonly: null
---

# ISecondaryMemberBetweenPointsFeatureData.RevDirectionLengthRatioMember2

Gets and sets whether to reverse the direction of the length ratio offset for the second member of the primary structure system member pair.

## Signature

```csharp
System.Boolean RevDirectionLengthRatioMember2 {get; set;}
```
## Parameters

None.

## Return Value

True to reverse the direction of the length ratio offset from the end of the second member, false to not

## Remarks

This property is valid only if
ISecondaryMemberBetweenPointsFeatureData::SecondaryMemberOffsetType
is set to
swSecondaryMemberBetweenPointsDistanceFromEndType_e
.swSecondaryMemberBetweenPointsDistanceFromEndType_LengthRatio.