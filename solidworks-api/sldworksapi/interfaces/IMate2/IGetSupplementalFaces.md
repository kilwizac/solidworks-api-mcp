---
type: method
interface: IMate2
member: IGetSupplementalFaces
returns: Face2
parameters:
  -
    name: WhichOne
    type: System.Int32
    description: Number of components in this mate
  -
    name: FaceCount
    type: System.Int32
    description: Number of faces in this mate
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
  - geometry
related:
  - IMate2.GetSupplementalFaces
  - IMate2.HasLoadBearingFaces
  - IMate2.IsLoadBearingFacesBonded
keywords:
  - igetsupplementalfaces
  - imate2
  - mate2
  - supplemental
  - faces
  - which
  - one
  - int32
  - face
  - count
  - face2
---

# IMate2.IGetSupplementalFaces

Gets the faces in this mate.

## Signature

```csharp
Face2 IGetSupplementalFaces( 
   System.Int32
WhichOne
,
   System.Int32
FaceCount
)
```
## Parameters

- `WhichOne` (System.Int32): Number of components in this mate
- `FaceCount` (System.Int32): Number of faces in this mate

## Return Value

in-process, unmanaged C++: Pointer to an array of faces in this mate VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## See Also

- `IMate2.GetSupplementalFaces`
- `IMate2.HasLoadBearingFaces`
- `IMate2.IsLoadBearingFacesBonded`