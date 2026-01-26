---
type: method
interface: IWeldmentBeadFeatureData
member: GetFacesCount
returns: void
parameters:
  -
    name: Side
    type: System.Int32
    description: Side as defined in swWeldBeadSide_e
  -
    name: FaceSet1Count
    type: System.Int32
    description: Number of faces in first set of faces
  -
    name: FaceSet2Count
    type: System.Int32
    description: Number of faces in second set of faces
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - geometry
related:
  - IWeldmentBeadFeatureData.GetFaces
  - IWeldmentBeadFeatureData.ISetFaces
  - IWeldmentBeadFeatureData.SetFaces
keywords:
  - getfacescount
  - iweldmentbeadfeaturedata
  - weldment
  - bead
  - feature
  - data
  - faces
  - count
  - side
  - int32
  - face
  - set1
  - set2
  - void
---

# IWeldmentBeadFeatureData.GetFacesCount

Gets the number of faces in each sets of faces whose intersection defines the edges to which this weld bead is applied.

## Signature

```csharp
void GetFacesCount( 
   System.Int32
Side
,
   out System.Int32
FaceSet1Count
,
   out System.Int32
FaceSet2Count
)
```
## Parameters

- `Side` (System.Int32): Side as defined in swWeldBeadSide_e
- `FaceSet1Count` (System.Int32): Number of faces in first set of faces
- `FaceSet2Count` (System.Int32): Number of faces in second set of faces

## Return Value

Unknown.

## Remarks

Call this method before calling
IWeldmentBeadFeatureData::IGetFaces
.

## See Also

- `IWeldmentBeadFeatureData.GetFaces`
- `IWeldmentBeadFeatureData.ISetFaces`
- `IWeldmentBeadFeatureData.SetFaces`