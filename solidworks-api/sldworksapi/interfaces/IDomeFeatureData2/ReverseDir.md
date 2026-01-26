---
type: property
interface: IDomeFeatureData2
member: ReverseDir
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - reversedir
  - idomefeaturedata2
  - dome
  - feature
  - data2
  - reverse
  - dir
  - boolean
  - change
  - height
  - vba
  - create
  - modify
  - vb
  - net
readonly: null
---

# IDomeFeatureData2.ReverseDir

Gets or sets whether this dome is convex or concave.

## Signature

```csharp
System.Boolean ReverseDir {get; set;}
```
## Parameters

None.

## Return Value

True for concave domes, false for convex domes

## Remarks

This property does not affect geometry until you call
IFeature::ModifyDefinition
or
IFeature::IModifyDefintion2
.

## Examples

- Change Height of Dome Feature (VBA) (Change_Height_of_Dome_Feature_Example_VB.htm)
- Create and Modify Dome Feature (C#) (Create_and_Modify_Dome_Feature_Example_CSharp.htm)
- Create and Modify Dome Feature (VB.NET) (Create_and_Modify_Dome_Feature_Example_VBNET.htm)
- Create and Modify Dome Feature (VBA) (Create_and_Modify_Dome_Feature_Example_VB.htm)