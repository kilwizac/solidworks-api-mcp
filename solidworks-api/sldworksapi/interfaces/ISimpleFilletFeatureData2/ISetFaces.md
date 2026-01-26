---
type: method
interface: ISimpleFilletFeatureData2
member: ISetFaces
returns: void
parameters:
  -
    name: WhichFaceList
    type: System.Int32
    description: Face as defined in swSimpleFilletWhichFaces_e
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
  - ISimpleFilletFeatureData2.GetFaceCount
  - ISimpleFilletFeatureData2.IGetFaces
  - ISimpleFilletFeatureData2.SetFaces
keywords:
  - isetfaces
  - isimplefilletfeaturedata2
  - simple
  - fillet
  - feature
  - data2
  - faces
  - which
  - face
  - list
  - int32
  - count
  - face2
  - void
---

# ISimpleFilletFeatureData2.ISetFaces

Sets the faces on which to create a simple radius fillet.

## Signature

```csharp
void ISetFaces( 
   System.Int32
WhichFaceList
,
   System.Int32
Count
,
   ref Face2
FaceList
)
```
## Parameters

- `WhichFaceList` (System.Int32): Face as defined in swSimpleFilletWhichFaces_e
- `Count` (System.Int32): Number of faces
- `FaceList` (Face2): in-process, unmanaged C++: Pointer to an array of faces of size Count VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Return Value

Unknown.

## Remarks

See
Accessing Selections that Define Features
for additional details.

## See Also

- `ISimpleFilletFeatureData2.GetFaceCount`
- `ISimpleFilletFeatureData2.IGetFaces`
- `ISimpleFilletFeatureData2.SetFaces`