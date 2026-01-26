---
type: method
interface: ISecondaryMemberUpToMembersFeatureData
member: SetPointMemberPairs
returns: System.Boolean
parameters:
  -
    name: Points
    type: System.Object
    description: Array of IVertex es or ISketchPoint s
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
  - setpointmemberpairs
  - isecondarymemberuptomembersfeaturedata
  - secondary
  - member
  - up
  - members
  - feature
  - data
  - point
  - pairs
  - points
  - object
  - boolean
---

# ISecondaryMemberUpToMembersFeatureData.SetPointMemberPairs

Sets the point-member pair(s) used to create one or more secondary structure system up-to members.

## Signature

```csharp
System.Boolean SetPointMemberPairs( 
   System.Object
Points
,
   System.Object
Members
)
```
## Parameters

- `Points` (System.Object): Array of IVertex es or ISketchPoint s
- `Members` (System.Object): Array of IStructureSystemMemberFeatureData s

## Return Value

Unknown.

## Remarks

Points and Members arrays must be ordered to create point-member pairs.
This method is valid only if
ISecondaryMemberUpToMembersFeatureData::MemberPointParametersType
is set to
swSecondaryMemberUpToMembersMemberPointParameters_e
.swSecondaryMemberUpToMembersMemberPointParameters_PointMemberPair.