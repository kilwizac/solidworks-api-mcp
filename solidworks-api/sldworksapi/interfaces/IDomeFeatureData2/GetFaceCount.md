---
type: method
interface: IDomeFeatureData2
member: GetFaceCount
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - geometry
related:
  - IDomeFeatureData2.Faces
  - IDomeFeatureData2.ISetFaces
keywords:
  - getfacecount
  - idomefeaturedata2
  - dome
  - feature
  - data2
  - face
  - count
  - int32
  - create
  - modify
  - vb
  - net
  - vba
---

# IDomeFeatureData2.GetFaceCount

Gets the number of planar and non-planar faces of this dome feature.

## Signature

```csharp
System.Int32 GetFaceCount()
```
## Parameters

None.

## Return Value

Number of planar and non-planar faces

## Remarks

Call this method before calling
IDomeFeatureData2::IGetFaces
.

## Examples

- Create and Modify Dome Feature (C#) (Create_and_Modify_Dome_Feature_Example_CSharp.htm)
- Create and Modify Dome Feature (VB.NET) (Create_and_Modify_Dome_Feature_Example_VBNET.htm)
- Create and Modify Dome Feature (VBA) (Create_and_Modify_Dome_Feature_Example_VB.htm)

## See Also

- `IDomeFeatureData2.Faces`
- `IDomeFeatureData2.ISetFaces`