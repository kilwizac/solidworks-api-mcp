---
type: method
interface: IFeatureManager
member: InsertStructuralWeldment4
returns: Feature
parameters:
  -
    name: Path
    type: System.String
    description: Full path name of the type of structural member (see Remarks )
  -
    name: ConnectedSegmentsOption
    type: System.Int32
    description: Option as defined in swConnectedSegmentsOption_e
  -
    name: AllowProtrusion
    type: System.Boolean
    description: True to allow protrusion, false to not
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
  - insertstructuralweldment4
  - ifeaturemanager
  - feature
  - manager
  - insert
  - structural
  - weldment4
  - path
  - string
  - connected
  - segments
  - option
  - int32
  - allow
  - protrusion
  - boolean
  - groups
  - object
  - weldment
  - vb
  - net
  - vba
---

# IFeatureManager.InsertStructuralWeldment4

Obsolete. Superseded by IFeatureManager::InsertStructuralWeldment5.

## Signature

```csharp
Feature InsertStructuralWeldment4( 
   System.String
Path
,
   System.Int32
ConnectedSegmentsOption
,
   System.Boolean
AllowProtrusion
,
   System.Object
Groups
)
```
## Parameters

- `Path` (System.String): Full path name of the type of structural member (see Remarks )
- `ConnectedSegmentsOption` (System.Int32): Option as defined in swConnectedSegmentsOption_e
- `AllowProtrusion` (System.Boolean): True to allow protrusion, false to not
- `Groups` (System.Object): Array of IStructuralMemberGroup

## Return Value

IFeature

## Remarks

Populate Path using a weldment profile (*.
sldlfp
) from
install_dir
\
lang
\
lang
\
weldment profiles
.
Use
IFeatureManager::CreateStructuralMemberGroup
,
IStructuralMemberFeatureData::Groups
, or
IStructuralMemberFeatureData::IGetGroups
to populate the Groups parameter.

## Examples

- Insert Structural Weldment (C#) (Insert_Structural_Weldment_Example_CSharp.htm)
- Insert Structural Weldment (VB.NET) (Insert_Structural_Weldment_Example_VBNET.htm)
- Insert Structural Weldment (VBA) (Insert_Structural_Weldment_Example_VB.htm)

## See Also

- `IStructuralMemberFeatureData`
- `IStructuralMemberGroup`