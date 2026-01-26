---
type: property
interface: ISecondaryMemberUpToMembersFeatureData
member: RevDirectionDistanceMember
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - revdirectiondistancemember
  - isecondarymemberuptomembersfeaturedata
  - secondary
  - member
  - up
  - members
  - feature
  - data
  - rev
  - direction
  - distance
  - boolean
  - isecondarymemberbetweenpointsfeaturedata
readonly: null
---

# ISecondaryMemberUpToMembersFeatureData.RevDirectionDistanceMember

Gets or sets whether to flip the direction of the distance offset for this secondary structure system up-to member.

## Signature

```csharp
System.Boolean RevDirectionDistanceMember {get; set;}
```
## Parameters

None.

## Return Value

True to flip the direction of the offset, false to not

## Remarks

This property is valid only if
ISecondaryMemberUpToMembersFeatureData::SecondaryMemberOffsetType
is set to
swSecondaryMemberUpToMembersDistanceFromEndType_e
.swSecondaryMemberUpToMembersDistanceFromEndType_Distance.

## Examples

- ISecondaryMemberBetweenPointsFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ISecondaryMemberBetweenPointsFeatureData)