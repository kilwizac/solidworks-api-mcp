---
type: property
interface: IBrokenOutSectionFeatureData
member: DepthReference
returns: Entity
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IBrokenOutSectionFeatureData.Depth
keywords:
  - depthreference
  - ibrokenoutsectionfeaturedata
  - broken
  - out
  - section
  - feature
  - data
  - depth
  - reference
  - entity
  - vba
  - vb
  - net
readonly: null
---

# IBrokenOutSectionFeatureData.DepthReference

Gets or sets the geometry reference that defines the depth of exposure of inner details of the model in the broken-out section feature.

## Signature

```csharp
Entity DepthReference {get; set;}
```
## Parameters

None.

## Return Value

IEntity (see Remarks )

## Remarks

Before setting this property, you must set
IBrokenOutSectionFeatureData::EditSketch
to false.
To set the depth reference you can either:
Set this property to an
IEntity
object.
-or-
Set this property to null and select the depth geometry in the drawing view.

## Examples

- Get Broken-Out Section Feature Data (VBA) (Get_Broken_Out_Section_Feature_Data_Example_VB.htm)
- Get Broken-Out Section Feature Data (VB.NET) (Get_Broken_Out_Section_Feature_Data_Example_VBNET.htm)
- Get Broken-Out Section Feature Data (C#) (Get_Broken_Out_Section_Feature_Data_Example_CSharp.htm)

## See Also

- `IBrokenOutSectionFeatureData.Depth`