---
type: property
interface: ISecondaryMemberBetweenPointsFeatureData
member: DistanceMember2
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - distancemember2
  - isecondarymemberbetweenpointsfeaturedata
  - secondary
  - member
  - between
  - points
  - feature
  - data
  - distance
  - member2
  - double
readonly: null
---

# ISecondaryMemberBetweenPointsFeatureData.DistanceMember2

Gets and sets the offset from the end of the second member of the primary structure system member pair.

## Signature

```csharp
System.Double DistanceMember2 {get; set;}
```
## Parameters

None.

## Return Value

0.0 <= Offset from end of second member <= length of Member 2

## Remarks

This property is valid only if
ISecondaryMemberBetweenPointsFeatureData::SecondaryMemberOffsetType
is set to
swSecondaryMemberBetweenPointsDistanceFromEndType_e
.swSecondaryMemberBetweenPointsDistanceFromEndType_Distance.

## Examples

- ISecondaryMemberBetweenPointsFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ISecondaryMemberBetweenPointsFeatureData)