---
type: method
interface: IFeatureManager
member: InsertStructuralWeldment3
returns: Feature
parameters:
  -
    name: Path
    type: System.String
    description: Path, filename, and name of the type of structural member to insert
  -
    name: EndCond
    type: System.Int32
    description: End condition as defined in swSOLIDWORKSWeldmentEndCondOptions_e
  -
    name: Angle
    type: System.Double
    description: Angle of rotation of the sketch about the sketch segment
  -
    name: Merge
    type: System.Boolean
    description: True to merge the bodies of the arc segments to the adjacent bodies, false to not
  -
    name: Groups
    type: System.Object
    description: Array of IStructuralMemberGroup
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - features
related:
  - IStructuralMemberFeatureData
  - IStructuralMemberGroup
keywords:
  - feature
  - see
  - also
  - ifeature
  - structural
  - member
  - weldments
  - members
  - istructuralmemberfeaturedata
  - insertstructuralweldment3
  - ifeaturemanager
  - manager
  - insert
  - weldment3
  - path
  - string
  - end
  - cond
  - int32
  - angle
  - double
  - merge
  - boolean
  - groups
  - object
  - weldment
  - features
  - vba
  - vb
  - net
  - create
  - group
---

# IFeatureManager.InsertStructuralWeldment3

Obsolete. Superseded by IFeatureManager::InsertStructuralWeldment4.

## Signature

```csharp
Feature InsertStructuralWeldment3( 
   System.String
Path
,
   System.Int32
EndCond
,
   System.Double
Angle
,
   System.Boolean
Merge
,
   System.Object
Groups
)
```
## Parameters

- `Path` (System.String): Path, filename, and name of the type of structural member to insert
- `EndCond` (System.Int32): End condition as defined in swSOLIDWORKSWeldmentEndCondOptions_e
- `Angle` (System.Double): Angle of rotation of the sketch about the sketch segment
- `Merge` (System.Boolean): True to merge the bodies of the arc segments to the adjacent bodies, false to not
- `Groups` (System.Object): Array of IStructuralMemberGroup

## Return Value

IFeature

## Remarks

Use
IFeatureManager::CreateStructuralMemberGroup
,
IStructuralMemberFeatureData::Groups
, or
IStructuralMemberFeatureData::IGetGroups
to populate the
Groups
parameter.

## Examples

- Insert Weldment Features (VBA) (Insert_Weldment_Features_Example_VB.htm)
- Insert Weldment Features (VB.NET) (Insert_Weldment_Features_Example_VBNET.htm)
- Create Structural-Member Group (VBA) (Create_Structural_Member_Group_Example_VB.htm)
- Create Structural-Member Group (VB.NET) (Create_Structural_Member_Group_Example_VBNET.htm)
- Create Structural-Member Group (C#) (Create_Structural_Member_Group_Example_CSharp.htm)
- Insert Weldment Features (C#) (Insert_Weldment_Features_Example_CSharp.htm)

## See Also

- `IStructuralMemberFeatureData`
- `IStructuralMemberGroup`