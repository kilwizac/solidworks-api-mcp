---
type: property
interface: IStructuralMemberFeatureData
member: LibraryProfileMaterial
returns: System.String
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IStructuralMemberFeatureData.ConfigurationName
keywords:
  - libraryprofilematerial
  - istructuralmemberfeaturedata
  - structural
  - member
  - feature
  - data
  - library
  - profile
  - material
  - string
  - insert
  - weldments
  - using
  - custom
  - weldment
  - vb
  - net
  - vba
readonly: true
---

# IStructuralMemberFeatureData.LibraryProfileMaterial

Gets the name of the material for the library profile for this structural member.

## Signature

```csharp
System.String LibraryProfileMaterial {get;}
```
## Parameters

None.

## Return Value

Name of the material for this library profile

## Remarks

You can
transfer material properties
of a library profile:
when you use it as a structural member.
that has a configuration-specific material.
See
Accessing Selections that Define Features
for additional details.

## Examples

- Insert Structural Weldments Using Custom Weldment Profile (C#) (Insert_Structural_Weldments_Using_Custom_Weldment_Profile_Example_CSharp.htm)
- Insert Structural Weldments Using Custom Weldment Profile (VB.NET) (Insert_Structural_Weldments_Using_Custom_Weldment_Profile_Example_VBNET.htm)
- Insert Structural Weldments Using Custom Weldment Profile (VBA) (Insert_Structural_Weldments_Using_Custom_Weldment_Profile_Example_VB.htm)

## See Also

- `IStructuralMemberFeatureData.ConfigurationName`