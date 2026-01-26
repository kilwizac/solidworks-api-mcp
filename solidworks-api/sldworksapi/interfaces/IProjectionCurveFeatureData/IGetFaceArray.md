---
type: method
interface: IProjectionCurveFeatureData
member: IGetFaceArray
returns: System.Object
parameters:
  -
    name: FaceCount
    type: System.Int32
    description: Number of target faces
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
  - igetfacearray
  - iprojectioncurvefeaturedata
  - projection
  - curve
  - feature
  - data
  - face
  - array
  - count
  - int32
  - object
---

# IProjectionCurveFeatureData.IGetFaceArray

Gets a list of target faces for the projected curve.

## Signature

```csharp
System.Object IGetFaceArray( 
   System.Int32
FaceCount
)
```
## Parameters

- `FaceCount` (System.Int32): Number of target faces

## Return Value

in-process, unmanaged C++: Pointer to an array of target faces of size FaceCount VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

Call
IProjectionCurveFeatureData::GetFaceArrayCount
before calling this method to get the value of FaceCount.
See
Accessing Selections that Define Features
for additional details on using this method.

## See Also

- `IProjectionCurveFeatureData.FaceArray`
- `IProjectionCurveFeatureData.ISetFaceArray`