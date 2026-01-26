---
type: method
interface: IProjectionCurveFeatureData
member: GetFaceArrayCount
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - geometry
related:
  - IProjectionCurveFeatureData.FaceArray
  - IProjectionCurveFeatureData.ISetFaceArray
keywords:
  - getfacearraycount
  - iprojectioncurvefeaturedata
  - projection
  - curve
  - feature
  - data
  - face
  - array
  - count
  - int32
---

# IProjectionCurveFeatureData.GetFaceArrayCount

Gets the number of target faces for this projected curve.

## Signature

```csharp
System.Int32 GetFaceArrayCount()
```
## Parameters

None.

## Return Value

Number of faces for this projected curve

## Remarks

Call this method before calling
IProjectionCurveFeatureData::IGetFaceArray
.

## See Also

- `IProjectionCurveFeatureData.FaceArray`
- `IProjectionCurveFeatureData.ISetFaceArray`