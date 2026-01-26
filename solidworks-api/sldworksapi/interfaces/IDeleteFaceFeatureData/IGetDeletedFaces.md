---
type: method
interface: IDeleteFaceFeatureData
member: IGetDeletedFaces
returns: Face2
parameters:
  -
    name: Count
    type: System.Int32
    description: Number of faces
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - geometry
related:
  - IDeleteFaceFeatureData.GetDeletedFaces
  - IDeleteFaceFeatureData.ISetDeletedFaces
  - IDeleteFaceFeatureData.SetDeletedFaces
keywords:
  - igetdeletedfaces
  - ideletefacefeaturedata
  - delete
  - face
  - feature
  - data
  - deleted
  - faces
  - count
  - int32
  - face2
---

# IDeleteFaceFeatureData.IGetDeletedFaces

Get the faces of the DeleteFace feature.

## Signature

```csharp
Face2 IGetDeletedFaces( 
   System.Int32
Count
)
```
## Parameters

- `Count` (System.Int32): Number of faces

## Return Value

in-process, unmanaged C++: Pointer to an array of faces VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

Call
IDeleteFaceFeatureData::GetDeletedFacesCount
before calling this method to get the value for Count.
See
Accessing Selections that Define Features
for additional details on using this method.

## See Also

- `IDeleteFaceFeatureData.GetDeletedFaces`
- `IDeleteFaceFeatureData.ISetDeletedFaces`
- `IDeleteFaceFeatureData.SetDeletedFaces`