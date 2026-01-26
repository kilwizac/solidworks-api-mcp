---
type: method
interface: IFeatureManager
member: InsertStructuralWeldment5
returns: Feature
parameters:
  -
    name: Path
    type: System.String
    description: Path and file name of the type of structural member (see Remarks )
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
    description: Array of IStructuralMemberGroup objects
  -
    name: ConfigurationName
    type: System.String
    description: Name of the configuration in a custom weldment profile or an empty string (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IStructuralMemberFeatureData
  - IStructuralMemberFeatureData.ConfigurationName
  - IStructuralMemberGroup
keywords:
  - feature
  - see
  - also
  - ifeature
  - structural
  - member
  - istructuralmemberfeaturedata
  - weldments
  - members
  - insertstructuralweldment5
  - ifeaturemanager
  - manager
  - insert
  - weldment5
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
  - configuration
  - name
  - using
  - custom
  - weldment
  - profile
  - vb
  - net
  - vba
---

# IFeatureManager.InsertStructuralWeldment5

Inserts a structural weldment feature.

## Signature

```csharp
Feature InsertStructuralWeldment5( 
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
,
   System.String
ConfigurationName
)
```
## Parameters

- `Path` (System.String): Path and file name of the type of structural member (see Remarks )
- `ConnectedSegmentsOption` (System.Int32): Option as defined in swConnectedSegmentsOption_e
- `AllowProtrusion` (System.Boolean): True to allow protrusion, false to not
- `Groups` (System.Object): Array of IStructuralMemberGroup objects
- `ConfigurationName` (System.String): Name of the configuration in a custom weldment profile or an empty string (see Remarks )

## Return Value

Structural weldment feature

## Remarks

Specify Path using either:
SOLIDWORKS-supplied weldment profile (*.
sldlfp
) from
install_dir
\
lang
\
lang
\
weldment profiles
-
or -
custom weldment profile (*.
sldlfp
); see the SOLIDWORKS Help for details about custom weldment profiles
If using...
Then specify ConfigurationName as...
SOLIDWORKS-supplied weldment profile
Empty string
Custom weldment profile
Name of the configuration in the custom weldment profile
Use
IFeatureManager::CreateStructuralMemberGroup
,
IStructuralMemberFeatureData::Groups
, or
IStructuralMemberFeatureData::IGetGroups
to populate the Groups parameter.

## Examples

- Insert Structural Weldments Using Custom Weldment Profile (C#) (Insert_Structural_Weldments_Using_Custom_Weldment_Profile_Example_CSharp.htm)
- Insert Structural Weldments Using Custom Weldment Profile (VB.NET) (Insert_Structural_Weldments_Using_Custom_Weldment_Profile_Example_VBNET.htm)
- Insert Structural Weldments Using Custom Weldment Profile (VBA) (Insert_Structural_Weldments_Using_Custom_Weldment_Profile_Example_VB.htm)

## See Also

- `IStructuralMemberFeatureData`
- `IStructuralMemberFeatureData.ConfigurationName`
- `IStructuralMemberGroup`