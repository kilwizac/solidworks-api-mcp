---
type: method
interface: IDomeFeatureData2
member: ISetFaces
returns: void
parameters:
  -
    name: FaceCount
    type: System.Int32
    description: Number of planar or non-planar faces
  -
    name: FaceList
    type: Face2
    description: in-process, unmanaged C++: Pointer to an array of planar and non-planar faces of this dome feature VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - geometry
related:
  - IDomeFeatureData2.Faces
  - IDomeFeatureData2.GetFaceCount
  - IDomeFeatureData2.IGetFaces
keywords:
  - face
  - see
  - also
  - iface2
  - isetfaces
  - idomefeaturedata2
  - dome
  - feature
  - data2
  - faces
  - count
  - int32
  - list
  - face2
  - void
---

# IDomeFeatureData2.ISetFaces

Sets the planar or non-planar faces of this dome feature.

## Signature

```csharp
void ISetFaces( 
   System.Int32
FaceCount
,
   ref Face2
FaceList
)
```
## Parameters

- `FaceCount` (System.Int32): Number of planar or non-planar faces
- `FaceList` (Face2): in-process, unmanaged C++: Pointer to an array of planar and non-planar faces of this dome feature VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Return Value

Unknown.

## Remarks

This method does not affect geometry until you call
IFeature::IModifyDefintion2.
See
Accessing Selections that Define Features
for additional details on using this method.

## See Also

- `IDomeFeatureData2.Faces`
- `IDomeFeatureData2.GetFaceCount`
- `IDomeFeatureData2.IGetFaces`