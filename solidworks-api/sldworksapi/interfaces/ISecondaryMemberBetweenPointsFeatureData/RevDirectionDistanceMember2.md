---
type: property
interface: ISecondaryMemberBetweenPointsFeatureData
member: RevDirectionDistanceMember2
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - revdirectiondistancemember2
  - isecondarymemberbetweenpointsfeaturedata
  - secondary
  - member
  - between
  - points
  - feature
  - data
  - rev
  - direction
  - distance
  - member2
  - boolean
readonly: null
---

# ISecondaryMemberBetweenPointsFeatureData.RevDirectionDistanceMember2

Gets and sets whether to reverse the direction of the offset for the second member of the primary structure system member pair.

## Signature

```csharp
System.Boolean RevDirectionDistanceMember2 {get; set;}
```
## Parameters

None.

## Return Value

True to reverse the direction of the offset from the end of the second member, false to not

## Remarks

This property is valid only if
ISecondaryMemberBetweenPointsFeatureData::SecondaryMemberOffsetType
is set to
swSecondaryMemberBetweenPointsDistanceFromEndType_e
.swSecondaryMemberBetweenPointsDistanceFromEndType_Distance.

## Examples

- ISecondaryMemberBetweenPointsFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ISecondaryMemberBetweenPointsFeatureData)