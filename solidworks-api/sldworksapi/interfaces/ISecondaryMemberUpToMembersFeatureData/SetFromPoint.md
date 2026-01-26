---
type: method
interface: ISecondaryMemberUpToMembersFeatureData
member: SetFromPoint
returns: System.Boolean
parameters:
  -
    name: Point
    type: System.Object
    description: IVertex or ISketchPoint
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - setfrompoint
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

# ISecondaryMemberUpToMembersFeatureData.SetFromPoint

Sets the point from which to extend this secondary structure system up-to member.

## Signature

```csharp
System.Boolean SetFromPoint( 
   System.Object
Point
)
```
## Parameters

- `Point` (System.Object): IVertex or ISketchPoint

## Return Value

Unknown.

## Remarks

This method is valid only if
ISecondaryMemberUpToMembersFeatureData::MemberPointParametersType
is set to
swSecondaryMemberUpToMembersMemberPointParameters_e
.swSecondaryMemberUpToMembersMemberPointParameters_FromPoint.

## Examples

- ISecondaryMemberBetweenPointsFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ISecondaryMemberBetweenPointsFeatureData)