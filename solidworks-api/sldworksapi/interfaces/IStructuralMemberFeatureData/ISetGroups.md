---
type: method
interface: IStructuralMemberFeatureData
member: ISetGroups
returns: void
parameters:
  -
    name: Count
    type: System.Int32
    description: Number of structural-member groups
  -
    name: SegGroups
    type: StructuralMemberGroup
    description: in-process, unmanaged C++: Pointer to an array of structural-member groups VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IStructuralMemberFeatureData.Groups
  - IStructuralMemberFeatureData.IGetGroups
  - IStructuralMemberGroup
keywords:
  - isetgroups
  - istructuralmemberfeaturedata
  - structural
  - member
  - feature
  - data
  - groups
  - count
  - int32
  - seg
  - group
  - void
---

# IStructuralMemberFeatureData.ISetGroups

Sets the structural-member groups to use in this structural member.

## Signature

```csharp
void ISetGroups( 
   System.Int32
Count
,
   ref StructuralMemberGroup
SegGroups
)
```
## Parameters

- `Count` (System.Int32): Number of structural-member groups
- `SegGroups` (StructuralMemberGroup): in-process, unmanaged C++: Pointer to an array of structural-member groups VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Return Value

Unknown.

## Remarks

This method works only for features that support groups. A feature supports groups only if
IStructuralMemberFeatureData::GetGroupsCount
> 0.
Call
IFeatureManager::CreateStructuralMemberGroup
to create groups.
See
Accessing Selections that Define Features
for additional details.

## See Also

- `IStructuralMemberFeatureData.Groups`
- `IStructuralMemberFeatureData.IGetGroups`
- `IStructuralMemberGroup`