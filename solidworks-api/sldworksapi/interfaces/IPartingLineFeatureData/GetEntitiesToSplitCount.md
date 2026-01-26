---
type: method
interface: IPartingLineFeatureData
member: GetEntitiesToSplitCount
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - parts
related:
  - IPartingLineFeatureData.GetEntitiesToSplit
  - IPartingLineFeatureData.ISetEntitiesToSplit
  - IPartingLineFeatureData.SetEntitiesToSplit
  - IPartingLineFeatureData.SplitFaces
  - IPartingLineFeatureData.SplitFacesOption
keywords:
  - getentitiestosplitcount
  - ipartinglinefeaturedata
  - parting
  - line
  - feature
  - data
  - entities
  - split
  - count
  - int32
  - vb
  - net
  - vba
---

# IPartingLineFeatureData.GetEntitiesToSplitCount

Gets the number of entities to use to split a face and add edges to the parting line feature.

## Signature

```csharp
System.Int32 GetEntitiesToSplitCount()
```
## Parameters

None.

## Return Value

Number of entities

## Remarks

Call this method before calling
IPartingLineFeatureData::IGetEntitiesToSplit
.

## Examples

- Get and Set Parting Line Feature Data (C#) (Get_and_Set_Parting_Line_Feature_Data_Example_CSharp.htm)
- Get and Set Parting Line Feature Data (VB.NET) (Get_and_Set_Parting_Line_Feature_Data_Example_VBNET.htm)
- Get and Set Parting Line Feature Data (VBA) (Get_and_Set_Parting_Line_Feature_Data_Example_VB.htm)

## See Also

- `IPartingLineFeatureData.GetEntitiesToSplit`
- `IPartingLineFeatureData.ISetEntitiesToSplit`
- `IPartingLineFeatureData.SetEntitiesToSplit`
- `IPartingLineFeatureData.SplitFaces`
- `IPartingLineFeatureData.SplitFacesOption`