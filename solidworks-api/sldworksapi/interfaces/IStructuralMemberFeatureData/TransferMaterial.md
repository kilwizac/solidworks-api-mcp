---
type: property
interface: IStructuralMemberFeatureData
member: TransferMaterial
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IStructuralMemberFeatureData.ConfigurationName
keywords:
  - transfermaterial
  - istructuralmemberfeaturedata
  - structural
  - member
  - feature
  - data
  - transfer
  - material
  - boolean
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

# IStructuralMemberFeatureData.TransferMaterial

Gets or sets whether to transfer the material properties of a library profile for this structural member.

## Signature

```csharp
System.Boolean TransferMaterial {get; set;}
```
## Parameters

None.

## Return Value

True to transfer the material properties of a library profile, false to not

## Remarks

You can transfer material properties of a library profile:
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