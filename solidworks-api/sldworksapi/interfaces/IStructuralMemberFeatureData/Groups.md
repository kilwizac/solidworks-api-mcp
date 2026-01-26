---
type: property
interface: IStructuralMemberFeatureData
member: Groups
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IStructuralMemberFeatureData.IGetGroups
  - IStructuralMemberFeatureData.ISetGroups
  - IStructuralMemberGroup
keywords:
  - groups
  - istructuralmemberfeaturedata
  - structural
  - member
  - feature
  - data
  - object
  - insert
  - weldment
  - vb
  - net
  - vba
  - create
  - group
readonly: null
---

# IStructuralMemberFeatureData.Groups

Gets or sets the groups to use in this structural member.

## Signature

```csharp
System.Object Groups {get; set;}
```
## Parameters

None.

## Return Value

Array of IStructuralMemberGroup objects

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

## Examples

- Insert Structural Weldment (C#) (Insert_Structural_Weldment_Example_CSharp.htm)
- Insert Structural Weldment (VB.NET) (Insert_Structural_Weldment_Example_VBNET.htm)
- Insert Structural Weldment (VBA) (Insert_Structural_Weldment_Example_VB.htm)
- Create Structural-Member Group (VBA) (Create_Structural_Member_Group_Example_VB.htm)
- Create Structural-Member Group (VB.NET) (Create_Structural_Member_Group_Example_VBNET.htm)
- Create Structural-Member Group (C#) (Create_Structural_Member_Group_Example_CSharp.htm)

## See Also

- `IStructuralMemberFeatureData.IGetGroups`
- `IStructuralMemberFeatureData.ISetGroups`
- `IStructuralMemberGroup`