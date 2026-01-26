---
type: method
interface: IChamferFeatureData2
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
  - IChamferFeatureData2.Faces
keywords:
  - getfacecount
  - ichamferfeaturedata2
  - chamfer
  - feature
  - data2
  - face
  - count
  - int32
  - edge
  - distances
  - vb
  - net
  - vba
---

# IChamferFeatureData2.GetFaceCount

Gets the number of faces that are chamfered.

## Signature

```csharp
System.Int32 GetFaceCount()
```
## Parameters

None.

## Return Value

Number of faces

## Remarks

Call this method before calling
IChamferFeatureData2::IGetFaces
.

## Examples

- Get Edge Chamfer Distances (C#) (Get_Edge_Chamfer_Distances_Example_CSharp.htm)
- Get Edge Chamfer Distances (VB.NET) (Get_Edge_Chamfer_Distances_Example_VBNET.htm)
- Get Edge Chamfer Distances (VBA) (Get_Edge_Chamfer_Distances_Example_VB.htm)

## See Also

- `IChamferFeatureData2.Faces`