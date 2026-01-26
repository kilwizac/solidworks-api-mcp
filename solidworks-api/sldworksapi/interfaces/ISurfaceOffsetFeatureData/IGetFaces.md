---
type: method
interface: ISurfaceOffsetFeatureData
member: IGetFaces
returns: Face2
parameters:
  -
    name: Count
    type: System.Int32
    description: Number of offset faces
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - features
  - geometry
related:
  - ISurfaceOffsetFeatureData.Faces
  - ISurfaceOffsetFeatureData.ISetFaces
keywords:
  - igetfaces
  - isurfaceoffsetfeaturedata
  - surface
  - offset
  - feature
  - data
  - faces
  - count
  - int32
  - face2
---

# ISurfaceOffsetFeatureData.IGetFaces

Obsolete. Superseded by ISurfaceOffsetFeatureData::IGetEntities.

## Signature

```csharp
Face2 IGetFaces( 
   System.Int32
Count
)
```
## Parameters

- `Count` (System.Int32): Number of offset faces

## Return Value

in-process, unmanaged C++: Pointer to an array of faces of size Count VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

Call
ISurfaceOffsetFeatureData::GetFacesCount
before calling this method to get the value for Count.
See
Accessing Selections that Define Features
for additional details.

## See Also

- `ISurfaceOffsetFeatureData.Faces`
- `ISurfaceOffsetFeatureData.ISetFaces`