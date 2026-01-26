---
type: property
interface: IMirrorSolidFeatureData
member: Merge
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - merge
  - imirrorsolidfeaturedata
  - mirror
  - solid
  - feature
  - data
  - boolean
  - vb
  - net
  - vba
readonly: null
---

# IMirrorSolidFeatureData.Merge

Gets or sets the merge results option for the mirrored solid feature in a multibody part.

## Signature

```csharp
System.Boolean Merge {get; set;}
```
## Parameters

None.

## Return Value

True enables the merge results option, false does not

## Remarks

The merge results option tells the SOLIDWORKS Design software whether to merge the new body or bodies with existing bodies in the multibody part. This property is set to True by default.

## Examples

- Get Mirror Solid Feature Data (C#) (Get_Mirror_Solid_Feature_Data_Example_CSharp.htm)
- Get Mirror Solid Feature Data (VB.NET) (Get_Mirror_Solid_Feature_Data_Example_VBNET.htm)
- Get Mirror Solid Feature Data (VBA) (Get_Mirror_Solid_Data_Example_VB.htm)