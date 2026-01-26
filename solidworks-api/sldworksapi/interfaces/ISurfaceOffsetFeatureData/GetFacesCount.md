---
type: method
interface: ISurfaceOffsetFeatureData
member: GetFacesCount
returns: System.Int32
parameters: []
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
  - getfacescount
  - isurfaceoffsetfeaturedata
  - surface
  - offset
  - feature
  - data
  - faces
  - count
  - int32
---

# ISurfaceOffsetFeatureData.GetFacesCount

Obsolete. Superseded by ISurfaceOffsetFeatureData::GetEntitiesCount.

## Signature

```csharp
System.Int32 GetFacesCount()
```
## Parameters

None.

## Return Value

Number of offset faces

## Remarks

Call this method before calling
ISurfaceOffsetFeatureData::IGetFaces
.

## See Also

- `ISurfaceOffsetFeatureData.Faces`
- `ISurfaceOffsetFeatureData.ISetFaces`