---
type: property
interface: ISecondaryMemberUpToMembersFeatureData
member: RevDirectionLengthRatioMember
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - revdirectionlengthratiomember
  - isecondarymemberuptomembersfeaturedata
  - secondary
  - member
  - up
  - members
  - feature
  - data
  - rev
  - direction
  - length
  - ratio
  - boolean
readonly: null
---

# ISecondaryMemberUpToMembersFeatureData.RevDirectionLengthRatioMember

Gets or sets whether to flip the direction of the length ratio offset of this secondary structure system up-to member.

## Signature

```csharp
System.Boolean RevDirectionLengthRatioMember {get; set;}
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
.swSecondaryMemberUpToMembersDistanceFromEndType_LengthRatio.