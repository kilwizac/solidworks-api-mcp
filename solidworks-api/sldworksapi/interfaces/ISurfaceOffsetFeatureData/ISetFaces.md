---
type: method
interface: ISurfaceOffsetFeatureData
member: ISetFaces
returns: void
parameters:
  -
    name: Count
    type: System.Int32
    description: Number of offset faces
  -
    name: FaceArr
    type: Face2
    description: in-process, unmanaged C++: Pointer to an array of faces of size Count VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - features
  - geometry
related:
  - ISurfaceOffsetFeatureData.Faces
  - ISurfaceOffsetFeatureData.GetFacesCount
  - ISurfaceOffsetFeatureData.IGetFaces
keywords:
  - isetfaces
  - isurfaceoffsetfeaturedata
  - surface
  - offset
  - feature
  - data
  - faces
  - count
  - int32
  - face
  - arr
  - face2
  - void
---

# ISurfaceOffsetFeatureData.ISetFaces

Obsolete. Superseded by ISurfaceOffsetFeatureData::ISetEntities.

## Signature

```csharp
void ISetFaces( 
   System.Int32
Count
,
   ref Face2
FaceArr
)
```
## Parameters

- `Count` (System.Int32): Number of offset faces
- `FaceArr` (Face2): in-process, unmanaged C++: Pointer to an array of faces of size Count VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Return Value

Unknown.

## Remarks

See
Accessing Selections that Define Features
for additional details.

## See Also

- `ISurfaceOffsetFeatureData.Faces`
- `ISurfaceOffsetFeatureData.GetFacesCount`
- `ISurfaceOffsetFeatureData.IGetFaces`