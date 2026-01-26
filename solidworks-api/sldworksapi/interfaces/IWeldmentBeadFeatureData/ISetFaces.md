---
type: method
interface: IWeldmentBeadFeatureData
member: ISetFaces
returns: System.Boolean
parameters:
  -
    name: Side
    type: System.Int32
    description: Side as defined in swWeldBeadSide_e
  -
    name: Count1
    type: System.Int32
    description: Number of faces in the first set of faces
  -
    name: FaceSet1
    type: Face2
    description: in-process, unmanaged C++: Pointer to an array of the first set of faces VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
  -
    name: Count2
    type: System.Int32
    description: Number of faces in the second set of faces
  -
    name: FaceSet2
    type: Face2
    description: in-process, unmanaged C++: Pointer to an array of the second set of faces VBA, VB.NET, C#, and C++/CLI: Not supported
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - geometry
related:
  - IWeldmentBeadFeatureData.GetFaces
  - IWeldmentBeadFeatureData.GetFacesCount
  - IWeldmentBeadFeatureData.IGetFaces
  - IWeldmentBeadFeatureData.SetFaces
keywords:
  - isetfaces
  - iweldmentbeadfeaturedata
  - weldment
  - bead
  - feature
  - data
  - faces
  - side
  - int32
  - count1
  - face
  - set1
  - face2
  - count2
  - set2
  - boolean
---

# IWeldmentBeadFeatureData.ISetFaces

Sets the faces to which to apply the weld bead.

## Signature

```csharp
System.Boolean ISetFaces( 
   System.Int32
Side
,
   System.Int32
Count1
,
   ref Face2
FaceSet1
,
   System.Int32
Count2
,
   ref Face2
FaceSet2
)
```
## Parameters

- `Side` (System.Int32): Side as defined in swWeldBeadSide_e
- `Count1` (System.Int32): Number of faces in the first set of faces
- `FaceSet1` (Face2): in-process, unmanaged C++: Pointer to an array of the first set of faces VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
- `Count2` (System.Int32): Number of faces in the second set of faces
- `FaceSet2` (Face2): in-process, unmanaged C++: Pointer to an array of the second set of faces VBA, VB.NET, C#, and C++/CLI: Not supported

## Return Value

True if the weld bead is applied to the specified faces, false if not

## Remarks

Although you must select planar faces for the face sets, fillet weld beads can follow non-planar, tangent contours when you set
IWeldmentBeadFeatureData::TangentPropagation
to TRUE.
See
Accessing Selections that Define Features
for additional details.

## See Also

- `IWeldmentBeadFeatureData.GetFaces`
- `IWeldmentBeadFeatureData.GetFacesCount`
- `IWeldmentBeadFeatureData.IGetFaces`
- `IWeldmentBeadFeatureData.SetFaces`