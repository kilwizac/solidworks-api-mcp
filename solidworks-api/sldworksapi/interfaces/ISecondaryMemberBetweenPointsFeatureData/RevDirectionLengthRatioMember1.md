---
type: property
interface: ISecondaryMemberBetweenPointsFeatureData
member: RevDirectionLengthRatioMember1
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - revdirectionlengthratiomember1
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
  - member1
  - boolean
readonly: null
---

# ISecondaryMemberBetweenPointsFeatureData.RevDirectionLengthRatioMember1

Gets and sets whether to reverse the direction of the length ratio offset for the first member of the primary structure system member pair.

## Signature

```csharp
System.Boolean RevDirectionLengthRatioMember1 {get; set;}
```
## Parameters

None.

## Return Value

True to reverse the direction of the length ratio offset from the end of the first member, false to not

## Remarks

This property is valid only if
ISecondaryMemberBetweenPointsFeatureData::SecondaryMemberOffsetType
is set to
swSecondaryMemberBetweenPointsDistanceFromEndType_e
.swSecondaryMemberBetweenPointsDistanceFromEndType_LengthRatio.