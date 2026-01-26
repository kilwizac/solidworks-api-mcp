---
type: property
interface: IStructuralMemberFeatureData
member: ConfigurationName
returns: System.String
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - configurationname
  - istructuralmemberfeaturedata
  - structural
  - member
  - feature
  - data
  - configuration
  - name
  - string
  - insert
  - weldments
  - using
  - custom
  - weldment
  - profile
  - vb
  - net
  - vba
readonly: null
---

# IStructuralMemberFeatureData.ConfigurationName

Gets or sets the name of the configuration in the custom weldment profile for this structural member.

## Signature

```csharp
System.String ConfigurationName {get; set;}
```
## Parameters

None.

## Return Value

Name of the configuration in the custom weldment profile or an empty string (see Remarks )

## Remarks

An empty string indicates that a configuration in a custom weldment profile was not used for this structural member.
See:
IFeatureManager::InsertStructuralWeldment5
for details about inserting a structural member using a configuration in a custom weldment profile.
SOLIDWORKS Help for details about custom weldment profiles.

## Examples

- Insert Structural Weldments Using Custom Weldment Profile (C#) (Insert_Structural_Weldments_Using_Custom_Weldment_Profile_Example_CSharp.htm)
- Insert Structural Weldments Using Custom Weldment Profile (VB.NET) (Insert_Structural_Weldments_Using_Custom_Weldment_Profile_Example_VBNET.htm)
- Insert Structural Weldments Using Custom Weldment Profile (VBA) (Insert_Structural_Weldments_Using_Custom_Weldment_Profile_Example_VB.htm)