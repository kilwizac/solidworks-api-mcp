---
type: method
interface: IChamferFeatureData2
member: ISetFaces
returns: void
parameters:
  -
    name: Count
    type: System.Int32
    description: Number of faces
  -
    name: FaceList
    type: Face2
    description: in-process, unmanaged C++: Pointer to an array of faces of size Count VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - geometry
related:
  - IChamferFeatureData2.Faces
  - IChamferFeatureData2.IGetFaces
keywords:
  - isetfaces
  - ichamferfeaturedata2
  - chamfer
  - feature
  - data2
  - faces
  - count
  - int32
  - face
  - list
  - face2
  - void
---

# IChamferFeatureData2.ISetFaces

Gets the faces to which a chamfer is applied.

## Signature

```csharp
void ISetFaces( 
   System.Int32
Count
,
   ref Face2
FaceList
)
```
## Parameters

- `Count` (System.Int32): Number of faces
- `FaceList` (Face2): in-process, unmanaged C++: Pointer to an array of faces of size Count VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Return Value

Unknown.

## Remarks

See
Accessing Selections that Define Features
for additional details on using this method.

## See Also

- `IChamferFeatureData2.Faces`
- `IChamferFeatureData2.IGetFaces`