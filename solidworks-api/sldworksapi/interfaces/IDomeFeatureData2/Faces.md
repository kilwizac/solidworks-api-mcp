---
type: property
interface: IDomeFeatureData2
member: Faces
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - geometry
related:
  - IDomeFeatureData2.GetFaceCount
  - IDomeFeatureData2.IGetFaces
  - IDomeFeatureData2.ISetFaces
keywords:
  - face
  - see
  - also
  - iface2
  - faces
  - idomefeaturedata2
  - dome
  - feature
  - data2
  - object
  - create
  - modify
  - vb
  - net
  - vba
readonly: null
---

# IDomeFeatureData2.Faces

Gets or sets the planar or non-planar faces of this dome feature.

## Signature

```csharp
System.Object Faces {get; set;}
```
## Parameters

None.

## Return Value

Array of planar or non-planar faces of this dome feature

## Remarks

This property does not affect geometry until you call
IFeature::ModifyDefinition
or
IFeature::IModifyDefintion2
.
See
Accessing Selections that Define Features
for additional details on using this property.

## Examples

- Create and Modify Dome Feature (C#) (Create_and_Modify_Dome_Feature_Example_CSharp.htm)
- Create and Modify Dome Feature (VB.NET) (Create_and_Modify_Dome_Feature_Example_VBNET.htm)
- Create and Modify Dome Feature (VBA) (Create_and_Modify_Dome_Feature_Example_VB.htm)

## See Also

- `IDomeFeatureData2.GetFaceCount`
- `IDomeFeatureData2.IGetFaces`
- `IDomeFeatureData2.ISetFaces`