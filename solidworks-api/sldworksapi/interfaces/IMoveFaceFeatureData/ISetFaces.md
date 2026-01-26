---
type: method
interface: IMoveFaceFeatureData
member: ISetFaces
returns: void
parameters:
  -
    name: Count
    type: System.Int32
    description: Number of faces to move
  -
    name: EntIn
    type: Face2
    description: in-process, unmanaged C++: Pointer to an array of faces to move VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - geometry
related:
  - IMoveFaceFeatureData.Faces
  - IMoveFaceFeatureData.GetFacesCount
  - IMoveFaceFeatureData.IGetFaces
keywords:
  - isetfaces
  - imovefacefeaturedata
  - move
  - face
  - feature
  - data
  - faces
  - count
  - int32
  - ent
  - face2
  - void
---

# IMoveFaceFeatureData.ISetFaces

Sets the faces for this Move Face feature.

## Signature

```csharp
void ISetFaces( 
   System.Int32
Count
,
   ref Face2
EntIn
)
```
## Parameters

- `Count` (System.Int32): Number of faces to move
- `EntIn` (Face2): in-process, unmanaged C++: Pointer to an array of faces to move VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Return Value

Unknown.

## Remarks

See
Accessing Selections that Define Features
for additional details on using this method.

## See Also

- `IMoveFaceFeatureData.Faces`
- `IMoveFaceFeatureData.GetFacesCount`
- `IMoveFaceFeatureData.IGetFaces`