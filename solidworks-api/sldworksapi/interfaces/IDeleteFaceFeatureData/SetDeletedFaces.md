---
type: method
interface: IDeleteFaceFeatureData
member: SetDeletedFaces
returns: System.Boolean
parameters:
  -
    name: Faces
    type: System.Object
    description: Array of faces
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
  - IDeleteFaceFeatureData.ISetDeletedFaces
keywords:
  - setdeletedfaces
  - ideletefacefeaturedata
  - delete
  - face
  - feature
  - data
  - deleted
  - faces
  - object
  - boolean
---

# IDeleteFaceFeatureData.SetDeletedFaces

Sets the faces for the DeleteFace feature.

## Signature

```csharp
System.Boolean SetDeletedFaces( 
   System.Object
Faces
)
```
## Parameters

- `Faces` (System.Object): Array of faces

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
- `IDeleteFaceFeatureData.ISetDeletedFaces`