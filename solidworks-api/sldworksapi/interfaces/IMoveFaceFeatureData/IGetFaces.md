---
type: method
interface: IMoveFaceFeatureData
member: IGetFaces
returns: Face2
parameters:
  -
    name: Count
    type: System.Int32
    description: Number of faces to move
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
  - igetfaces
  - imovefacefeaturedata
  - move
  - face
  - feature
  - data
  - faces
  - count
  - int32
  - face2
---

# IMoveFaceFeatureData.IGetFaces

Gets the faces for this Move Face feature.

## Signature

```csharp
Face2 IGetFaces( 
   System.Int32
Count
)
```
## Parameters

- `Count` (System.Int32): Number of faces to move

## Return Value

in-process, unmanaged C++: Pointer to an array of faces to move VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

Call
IMoveFaceFeatureData::GetFacesCount
before calling this method to dimension the array.
See
Accessing Selections that Define Features
for additional details on using this method.

## See Also

- `IMoveFaceFeatureData.Faces`
- `IMoveFaceFeatureData.ISetFaces`