---
type: method
interface: ISecondaryMemberUpToMembersFeatureData
member: SetFromPointMembers
returns: System.Boolean
parameters:
  -
    name: Members
    type: System.Object
    description: Array of IStructureSystemMemberFeatureData s
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - setfrompointmembers
  - isecondarymemberuptomembersfeaturedata
  - secondary
  - member
  - up
  - members
  - feature
  - data
  - point
  - object
  - boolean
  - isecondarymemberbetweenpointsfeaturedata
---

# ISecondaryMemberUpToMembersFeatureData.SetFromPointMembers

Sets the structure system member(s) connected to a from point to create one or more secondary structure system up-to members.

## Signature

```csharp
System.Boolean SetFromPointMembers( 
   System.Object
Members
)
```
## Parameters

- `Members` (System.Object): Array of IStructureSystemMemberFeatureData s

## Return Value

True if From point member successfully set, false if not

## Remarks

This property is valid only if
ISecondaryMemberUpToMembersFeatureData::MemberPointParametersType
is set to
swSecondaryMemberUpToMembersMemberPointParameters_e
.swSecondaryMemberUpToMembersMemberPointParameters_FromPoint.

## Examples

- ISecondaryMemberBetweenPointsFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ISecondaryMemberBetweenPointsFeatureData)