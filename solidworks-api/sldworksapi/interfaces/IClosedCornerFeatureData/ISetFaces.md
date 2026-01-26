---
type: method
interface: IClosedCornerFeatureData
member: ISetFaces
returns: void
parameters:
  -
    name: FaceCount
    type: System.Int32
    description: Number of faces used to describe the closed corner
  -
    name: FaceArray
    type: System.Object
    description: in-process, unmanaged C++: Pointer to an array of faces used to describe the closed corner of size FaceCount VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - geometry
related:
  - IClosedCornerFeatureData.Faces
  - IClosedCornerFeatureData.IGetFaces
  - IClosedCornerFeatureData.IGetFacesCount
keywords:
  - isetfaces
  - iclosedcornerfeaturedata
  - closed
  - corner
  - feature
  - data
  - faces
  - face
  - count
  - int32
  - array
  - object
  - void
---

# IClosedCornerFeatureData.ISetFaces

Sets the faces for this closed corner feature.

## Signature

```csharp
void ISetFaces( 
   System.Int32
FaceCount
,
   ref System.Object
FaceArray
)
```
## Parameters

- `FaceCount` (System.Int32): Number of faces used to describe the closed corner
- `FaceArray` (System.Object): in-process, unmanaged C++: Pointer to an array of faces used to describe the closed corner of size FaceCount VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Return Value

Unknown.

## Remarks

See
Accessing Selections that Define Features
for additional details on using this method.

## See Also

- `IClosedCornerFeatureData.Faces`
- `IClosedCornerFeatureData.IGetFaces`
- `IClosedCornerFeatureData.IGetFacesCount`