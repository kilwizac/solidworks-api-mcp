---
type: property
interface: ISecondaryMemberUpToMembersFeatureData
member: LengthRatioMember
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - lengthratiomember
  - isecondarymemberuptomembersfeaturedata
  - secondary
  - member
  - up
  - members
  - feature
  - data
  - length
  - ratio
  - double
readonly: null
---

# ISecondaryMemberUpToMembersFeatureData.LengthRatioMember

Gets or sets the length ratio with which to offset this secondary structure system up-to member.

## Signature

```csharp
System.Double LengthRatioMember {get; set;}
```
## Parameters

None.

## Return Value

0.0 <= Length ratio <= 1.0

## Remarks

This property is valid only if
ISecondaryMemberUpToMembersFeatureData::SecondaryMemberOffsetType
is set to
swSecondaryMemberUpToMembersDistanceFromEndType_e
.swSecondaryMemberUpToMembersDistanceFromEndType_LengthRatio.