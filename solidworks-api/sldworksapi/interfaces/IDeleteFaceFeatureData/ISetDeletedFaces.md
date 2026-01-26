---
type: method
interface: IDeleteFaceFeatureData
member: ISetDeletedFaces
returns: System.Boolean
parameters:
  -
    name: Count
    type: System.Int32
    description: Number of faces
  -
    name: Facedisp
    type: Face2
    description: in-process, unmanaged C++: Pointer to an array of faces VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - geometry
related:
  - IDeleteFaceFeatureData.GetDeletedFaces
  - IDeleteFaceFeatureData.GetDeletedFacesCount
  - IDeleteFaceFeatureData.IGetDeletedFaces
  - IDeleteFaceFeatureData.SetDeletedFaces
keywords:
  - isetdeletedfaces
  - ideletefacefeaturedata
  - delete
  - face
  - feature
  - data
  - deleted
  - faces
  - count
  - int32
  - facedisp
  - face2
  - boolean
---

# IDeleteFaceFeatureData.ISetDeletedFaces

Sets the faces for the DeleteFace feature.

## Signature

```csharp
System.Boolean ISetDeletedFaces( 
   System.Int32
Count
,
   ref Face2
Facedisp
)
```
## Parameters

- `Count` (System.Int32): Number of faces
- `Facedisp` (Face2): in-process, unmanaged C++: Pointer to an array of faces VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Return Value

True if the faces are set, false if not

## Remarks

See
Accessing Selections that Define Features
for additional details on using this method.

## See Also

- `IDeleteFaceFeatureData.GetDeletedFaces`
- `IDeleteFaceFeatureData.GetDeletedFacesCount`
- `IDeleteFaceFeatureData.IGetDeletedFaces`
- `IDeleteFaceFeatureData.SetDeletedFaces`