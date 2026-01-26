---
type: method
interface: ISecondaryMemberUpToMembersFeatureData
member: GetFromPoint
returns: void
parameters:
  -
    name: Point
    type: System.Object
    description: IVertex or ISketchPoint
  -
    name: PointType
    type: System.Int32
    description: Type of Point as defined by swSelectType_e
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - getfrompoint
  - isecondarymemberuptomembersfeaturedata
  - secondary
  - member
  - up
  - members
  - feature
  - data
  - point
  - object
  - type
  - int32
  - void
---

# ISecondaryMemberUpToMembersFeatureData.GetFromPoint

Gets the point from which to extend this secondary structure system up-to member.

## Signature

```csharp
void GetFromPoint( 
   out System.Object
Point
,
   out System.Int32
PointType
)
```
## Parameters

- `Point` (System.Object): IVertex or ISketchPoint
- `PointType` (System.Int32): Type of Point as defined by swSelectType_e

## Return Value

Unknown.

## Remarks

This method is valid only if
ISecondaryMemberUpToMembersFeatureData::MemberPointParametersType
is set to
swSecondaryMemberUpToMembersMemberPointParameters_e
.swSecondaryMemberUpToMembersMemberPointParameters_FromPoint.