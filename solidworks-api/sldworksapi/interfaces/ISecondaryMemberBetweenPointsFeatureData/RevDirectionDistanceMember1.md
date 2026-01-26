---
type: property
interface: ISecondaryMemberBetweenPointsFeatureData
member: RevDirectionDistanceMember1
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - revdirectiondistancemember1
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
  - member1
  - boolean
readonly: null
---

# ISecondaryMemberBetweenPointsFeatureData.RevDirectionDistanceMember1

Gets and sets whether to reverse the direction of the offset for the first member of the primary structure system member pair.

## Signature

```csharp
System.Boolean RevDirectionDistanceMember1 {get; set;}
```
## Parameters

None.

## Return Value

True to reverse the direction of the offset from the end of the first member, false to not

## Remarks

This property is valid only if
ISecondaryMemberBetweenPointsFeatureData::SecondaryMemberOffsetType
is set to
swSecondaryMemberBetweenPointsDistanceFromEndType_e
.swSecondaryMemberBetweenPointsDistanceFromEndType_Distance.

## Examples

- ISecondaryMemberBetweenPointsFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ISecondaryMemberBetweenPointsFeatureData)