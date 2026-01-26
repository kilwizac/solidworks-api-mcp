---
type: method
interface: ISecondaryMemberUpToMembersFeatureData
member: GetFromPointMembers
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - getfrompointmembers
  - isecondarymemberuptomembersfeaturedata
  - secondary
  - member
  - up
  - members
  - feature
  - data
  - point
  - object
---

# ISecondaryMemberUpToMembersFeatureData.GetFromPointMembers

Gets the structure system member(s) connected to a from point to create one or more secondary structure system up-to members.

## Signature

```csharp
System.Object GetFromPointMembers()
```
## Parameters

None.

## Return Value

Array of IStructureSystemMemberFeatureData s

## Remarks

This method is valid only if
ISecondaryMemberUpToMembersFeatureData::MemberPointParametersType
is set to
swSecondaryMemberUpToMembersMemberPointParameters_e
.swSecondaryMemberUpToMembersMemberPointParameters_FromPoint.