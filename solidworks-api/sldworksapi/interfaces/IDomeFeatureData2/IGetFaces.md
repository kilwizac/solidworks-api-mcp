---
type: method
interface: IDomeFeatureData2
member: IGetFaces
returns: Face2
parameters:
  -
    name: FaceCount
    type: System.Int32
    description: Number of planar or non-planar faces of this dome feature
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
  - face
  - see
  - also
  - iface2
  - igetfaces
  - idomefeaturedata2
  - dome
  - feature
  - data2
  - faces
  - count
  - int32
  - face2
---

# IDomeFeatureData2.IGetFaces

Gets the planar or non-planar faces of this dome feature.

## Signature

```csharp
Face2 IGetFaces( 
   System.Int32
FaceCount
)
```
## Parameters

- `FaceCount` (System.Int32): Number of planar or non-planar faces of this dome feature

## Return Value

in-process, unmanaged C++: Pointer to an array of planar or non-planar faces of this dome feature VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

Call
IDomeFeatureData2::GetFaceCount
before using this method to determine the size of the output array.

## See Also

- `IDomeFeatureData2.Faces`
- `IDomeFeatureData2.ISetFaces`