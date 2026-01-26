---
type: property
interface: IPartingSurfaceFeatureData
member: PartingType
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - parts
related:
  - IPartingSurfaceFeatureData.OffsetAngle
  - IPartingSurfaceFeatureData.ReverseAlignment
keywords:
  - partingtype
  - ipartingsurfacefeaturedata
  - parting
  - surface
  - feature
  - data
  - type
  - int32
  - vb
  - net
  - vba
readonly: null
---

# IPartingSurfaceFeatureData.PartingType

Gets or sets the type of parting surface.

## Signature

```csharp
System.Int32 PartingType {get; set;}
```
## Parameters

None.

## Return Value

Type of parting surface as defined in swPartingSurfaceMoldParmType_e (see Remarks )

## Remarks

swPartingSurfaceMoldParmType_e.swPartingSurfaceMoldParmTangent is not available for some geometry.

## Examples

- Get and Set Parting Surface Feature Data (C#) (Get_and_Set_Parting_Surface_Feature_Data_Example_CSharp.htm)
- Get and Set Parting Surface Feature Data (VB.NET) (Get_and_Set_Parting_Surface_Feature_Data_Example_VBNET.htm)
- Get and Set Parting Surface Feature Data (VBA) (Get_and_Set_Parting_Surface_Feature_Data_Example_VB.htm)

## See Also

- `IPartingSurfaceFeatureData.OffsetAngle`
- `IPartingSurfaceFeatureData.ReverseAlignment`