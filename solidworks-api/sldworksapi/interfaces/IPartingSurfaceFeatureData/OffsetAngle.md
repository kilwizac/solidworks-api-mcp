---
type: property
interface: IPartingSurfaceFeatureData
member: OffsetAngle
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - parts
related: []
keywords:
  - offsetangle
  - ipartingsurfacefeaturedata
  - parting
  - surface
  - feature
  - data
  - offset
  - angle
  - double
  - vb
  - net
  - vba
readonly: null
---

# IPartingSurfaceFeatureData.OffsetAngle

Gets or sets the angle for this parting surface feature.

## Signature

```csharp
System.Double OffsetAngle {get; set;}
```
## Parameters

None.

## Return Value

Angle

## Remarks

This property only applies if you set
IPartingSurfaceFeatureData::PartingType
to swPartingSurfaceMoldParmTangent or swPartingSurfceMoldParmNormal.

## Examples

- Get and Set Parting Surface Feature Data (C#) (Get_and_Set_Parting_Surface_Feature_Data_Example_CSharp.htm)
- Get and Set Parting Surface Feature Data (VB.NET) (Get_and_Set_Parting_Surface_Feature_Data_Example_VBNET.htm)
- Get and Set Parting Surface Feature Data (VBA) (Get_and_Set_Parting_Surface_Feature_Data_Example_VB.htm)