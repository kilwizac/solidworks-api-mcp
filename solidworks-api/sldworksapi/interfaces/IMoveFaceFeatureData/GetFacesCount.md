---
type: method
interface: IMoveFaceFeatureData
member: GetFacesCount
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - geometry
related:
  - IMoveFaceFeatureData.Faces
  - IMoveFaceFeatureData.ISetFaces
keywords:
  - getfacescount
  - imovefacefeaturedata
  - move
  - face
  - feature
  - data
  - faces
  - count
  - int32
---

# IMoveFaceFeatureData.GetFacesCount

Gets the number of faces for this Move Face feature.

## Signature

```csharp
System.Int32 GetFacesCount()
```
## Parameters

None.

## Return Value

Number of faces

## Remarks

Call this method before calling
IMoveFaceFeatureData::IGetFaces
to dimension that method's array.

## See Also

- `IMoveFaceFeatureData.Faces`
- `IMoveFaceFeatureData.ISetFaces`