---
type: method
interface: IStructuralMemberFeatureData
member: IGetGroups
returns: StructuralMemberGroup
parameters:
  -
    name: Count
    type: System.Int32
    description: Number of structural-member groups
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IStructuralMemberFeatureData.Groups
  - IStructuralMemberFeatureData.ISetGroups
  - IStructuralMemberGroup
keywords:
  - igetgroups
  - istructuralmemberfeaturedata
  - structural
  - member
  - feature
  - data
  - groups
  - count
  - int32
  - group
---

# IStructuralMemberFeatureData.IGetGroups

Gets the structural-member groups in this structural member.

## Signature

```csharp
StructuralMemberGroup IGetGroups( 
   System.Int32
Count
)
```
## Parameters

- `Count` (System.Int32): Number of structural-member groups

## Return Value

in-process, unmanaged C++: Pointer to an array of structural-member groups VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

Call
IStructuralMemberFeatureData::GetGroupsCount
to set the Count parameter.
This method works only for features that support groups. A feature supports groups only if
IStructuralMemberFeatureData::GetGroupsCount
> 0.
See
Accessing Selections that Define Features
for additional details.

## See Also

- `IStructuralMemberFeatureData.Groups`
- `IStructuralMemberFeatureData.ISetGroups`
- `IStructuralMemberGroup`