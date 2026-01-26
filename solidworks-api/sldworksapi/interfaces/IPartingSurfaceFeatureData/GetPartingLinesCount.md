---
type: method
interface: IPartingSurfaceFeatureData
member: GetPartingLinesCount
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - parts
related:
  - IPartingSurfaceFeatureData.GetPartingLinesType
  - IPartingSurfaceFeatureData.ISetPartingLines
  - IPartingSurfaceFeatureData.PartingLines
keywords:
  - getpartinglinescount
  - ipartingsurfacefeaturedata
  - parting
  - surface
  - feature
  - data
  - lines
  - count
  - int32
  - vb
  - net
  - vba
---

# IPartingSurfaceFeatureData.GetPartingLinesCount

Gets the number of parting lines for this parting surface feature.

## Signature

```csharp
System.Int32 GetPartingLinesCount()
```
## Parameters

None.

## Return Value

Number of parting lines

## Remarks

Call this method before calling
IPartingSurfaceFeatureData::IGetPartingLines
.

## Examples

- Get and Set Parting Surface Feature Data (C#) (Get_and_Set_Parting_Surface_Feature_Data_Example_CSharp.htm)
- Get and Set Parting Surface Feature Data (VB.NET) (Get_and_Set_Parting_Surface_Feature_Data_Example_VBNET.htm)
- Get and Set Parting Surface Feature Data (VBA) (Get_and_Set_Parting_Surface_Feature_Data_Example_VB.htm)

## See Also

- `IPartingSurfaceFeatureData.GetPartingLinesType`
- `IPartingSurfaceFeatureData.ISetPartingLines`
- `IPartingSurfaceFeatureData.PartingLines`