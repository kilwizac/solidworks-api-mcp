---
type: method
interface: IWeldmentBeadFeatureData
member: SetFaces
returns: System.Boolean
parameters:
  -
    name: Side
    type: System.Int32
    description: Side as defined in swWeldBeadSide_e
  -
    name: FaceSet1
    type: System.Object
    description: First set of faces to which to apply the weld bead
  -
    name: FaceSet2
    type: System.Object
    description: Second set of faces to which to apply the weld bead
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
  - IWeldmentBeadFeatureData.ISetFaces
keywords:
  - setfaces
  - iweldmentbeadfeaturedata
  - weldment
  - bead
  - feature
  - data
  - faces
  - side
  - int32
  - face
  - set1
  - object
  - set2
  - boolean
  - change
  - weld
  - vba
---

# IWeldmentBeadFeatureData.SetFaces

Sets the faces to which to apply the weld bead.

## Signature

```csharp
System.Boolean SetFaces( 
   System.Int32
Side
,
   System.Object
FaceSet1
,
   System.Object
FaceSet2
)
```
## Parameters

- `Side` (System.Int32): Side as defined in swWeldBeadSide_e
- `FaceSet1` (System.Object): First set of faces to which to apply the weld bead
- `FaceSet2` (System.Object): Second set of faces to which to apply the weld bead

## Return Value

True if the weld bead is applied to the specified faces, false if not

## Remarks

Although you must select planar faces for the face sets, fillet weld beads can follow non-planar, tangent contours when you set
IWeldmentBeadFeatureData::TangentPropagation
to TRUE.
See
Accessing Selections that Define Features
for additional details.

## Examples

- Change Weld Bead Faces (VBA) (Change_Weld_Bead_Faces_Example_VB.htm)

## See Also

- `IWeldmentBeadFeatureData.GetFaces`
- `IWeldmentBeadFeatureData.GetFacesCount`
- `IWeldmentBeadFeatureData.IGetFaces`
- `IWeldmentBeadFeatureData.ISetFaces`