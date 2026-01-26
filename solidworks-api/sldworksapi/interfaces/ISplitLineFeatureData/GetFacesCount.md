---
type: method
interface: ISplitLineFeatureData
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
  - ISplitLineFeatureData.Faces
  - ISplitLineFeatureData.ISetFaces
keywords:
  - getfacescount
  - isplitlinefeaturedata
  - split
  - line
  - feature
  - data
  - faces
  - count
  - int32
---

# ISplitLineFeatureData.GetFacesCount

Gets the number of faces split by this split line.

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
ISplitLineFeatureData::IGetFaces
to determine the size of the array for that method.

## See Also

- `ISplitLineFeatureData.Faces`
- `ISplitLineFeatureData.ISetFaces`