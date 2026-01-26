---
type: method
interface: IProjectionCurveFeatureData
member: ISetFaceArray
returns: void
parameters:
  -
    name: FaceCount
    type: System.Int32
    description: Number of target faces
  -
    name: ArrayDataIn
    type: System.Object
    description: in-process, unmanaged C++: Pointer to an array of target faces of size FaceCount VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - geometry
related:
  - IProjectionCurveFeatureData.FaceArray
  - IProjectionCurveFeatureData.GetFaceArrayCount
  - IProjectionCurveFeatureData.IGetFaceArray
keywords:
  - isetfacearray
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
  - void
---

# IProjectionCurveFeatureData.ISetFaceArray

Sets the target faces for the projected curve.

## Signature

```csharp
void ISetFaceArray( 
   System.Int32
FaceCount
,
   ref System.Object
ArrayDataIn
)
```
## Parameters

- `FaceCount` (System.Int32): Number of target faces
- `ArrayDataIn` (System.Object): in-process, unmanaged C++: Pointer to an array of target faces of size FaceCount VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Return Value

Unknown.

## Remarks

See
Accessing Selections that Define Features
for additional details on using this method.

## See Also

- `IProjectionCurveFeatureData.FaceArray`
- `IProjectionCurveFeatureData.GetFaceArrayCount`
- `IProjectionCurveFeatureData.IGetFaceArray`