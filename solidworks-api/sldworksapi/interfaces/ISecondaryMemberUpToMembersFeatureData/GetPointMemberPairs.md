---
type: method
interface: ISecondaryMemberUpToMembersFeatureData
member: GetPointMemberPairs
returns: void
parameters:
  -
    name: Points
    type: System.Object
    description: Array of IVertex es or ISketchPoint s
  -
    name: Members
    type: System.Object
    description: Array of IStructureSystemMemberFeatureData s
  -
    name: PointTypes
    type: System.Object
    description: Array of Points types as defined by swSelectType_e
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - getpointmemberpairs
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
  - types
  - void
---

# ISecondaryMemberUpToMembersFeatureData.GetPointMemberPairs

Gets the point-member pair(s) used to create one or more secondary structure system up-to members.

## Signature

```csharp
void GetPointMemberPairs( 
   out System.Object
Points
,
   out System.Object
Members
,
   out System.Object
PointTypes
)
```
## Parameters

- `Points` (System.Object): Array of IVertex es or ISketchPoint s
- `Members` (System.Object): Array of IStructureSystemMemberFeatureData s
- `PointTypes` (System.Object): Array of Points types as defined by swSelectType_e

## Return Value

Unknown.

## Remarks

Points and Members arrays are ordered to create point-member pairs.
This method is valid only if
ISecondaryMemberUpToMembersFeatureData::MemberPointParametersType
is set to
swSecondaryMemberUpToMembersMemberPointParameters_e
.swSecondaryMemberUpToMembersMemberPointParameters_PointMemberPair.