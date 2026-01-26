---
type: method
interface: IChamferFeatureData2
member: IGetFaces
returns: Face2
parameters:
  -
    name: FaceCount
    type: System.Int32
    description: Number of faces
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - geometry
related:
  - IChamferFeatureData2.Faces
  - IChamferFeatureData2.ISetFaces
keywords:
  - igetfaces
  - ichamferfeaturedata2
  - chamfer
  - feature
  - data2
  - faces
  - face
  - count
  - int32
  - face2
---

# IChamferFeatureData2.IGetFaces

Gets the faces to which a chamfer is applied.

## Signature

```csharp
Face2 IGetFaces( 
   System.Int32
FaceCount
)
```
## Parameters

- `FaceCount` (System.Int32): Number of faces

## Return Value

in-process, unmanaged C++: Pointer to an array of faces of size FaceCount VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

Call
IChamferFeatureData2::GetFaceCount
before calling this method.
See
Accessing Selections that Define Features
for additional details on using this method.

## See Also

- `IChamferFeatureData2.Faces`
- `IChamferFeatureData2.ISetFaces`