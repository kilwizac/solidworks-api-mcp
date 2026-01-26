---
type: property
interface: ISecondaryMemberUpToMembersFeatureData
member: DistanceMember
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - distancemember
  - isecondarymemberuptomembersfeaturedata
  - secondary
  - member
  - up
  - members
  - feature
  - data
  - distance
  - double
  - isecondarymemberbetweenpointsfeaturedata
readonly: null
---

# ISecondaryMemberUpToMembersFeatureData.DistanceMember

Gets or sets the distance with which to offset this secondary structure system up-to member.

## Signature

```csharp
System.Double DistanceMember {get; set;}
```
## Parameters

None.

## Return Value

Distance in meters

## Remarks

This property is valid only if
ISecondaryMemberUpToMembersFeatureData::SecondaryMemberOffsetType
is set to
swSecondaryMemberUpToMembersDistanceFromEndType_e
.swSecondaryMemberUpToMembersDistanceFromEndType_Distance.

## Examples

- ISecondaryMemberBetweenPointsFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ISecondaryMemberBetweenPointsFeatureData)