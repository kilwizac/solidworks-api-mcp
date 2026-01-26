---
type: method
interface: IWeldmentBeadFeatureData
member: IGetFaces
returns: void
parameters:
  -
    name: Side
    type: System.Int32
    description: Side as defined in swWeldBeadSide_e
  -
    name: Count1
    type: System.Int32
    description: Number of faces in first set of faces
  -
    name: FaceSet1
    type: Face2
    description: in-process, unmanaged C++: Pointer to an array of the first set of faces VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
  -
    name: Count2
    type: System.Int32
    description: Number of faces in second set of faces
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
  - IWeldmentBeadFeatureData.GetVirtualEdges
  - IWeldmentBeadFeatureData.GetVirtualEdgesCount
  - IWeldmentBeadFeatureData.SetFaces
  - IWeldmentBeadFeatureData.SetVirtualEdges
keywords:
  - igetfaces
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
  - void
---

# IWeldmentBeadFeatureData.IGetFaces

Gets the sets of faces whose edges intersection defines the edges to which the weld bead is applied.

## Signature

```csharp
void IGetFaces( 
   System.Int32
Side
,
   System.Int32
Count1
,
   out Face2
FaceSet1
,
   System.Int32
Count2
,
   out Face2
FaceSet2
)
```
## Parameters

- `Side` (System.Int32): Side as defined in swWeldBeadSide_e
- `Count1` (System.Int32): Number of faces in first set of faces
- `FaceSet1` (Face2): in-process, unmanaged C++: Pointer to an array of the first set of faces VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
- `Count2` (System.Int32): Number of faces in second set of faces
- `FaceSet2` (Face2): in-process, unmanaged C++: Pointer to an array of the second set of faces VBA, VB.NET, C#, and C++/CLI: Not supported

## Return Value

Unknown.

## Remarks

Before calling this method, call
IWeldmentBeadFeatureData::GetFacesCount
.
After using this method, use
IWeldmentBeadFeatureData::IGetVirtualEdges
to get the new intersections. Then use
IWeldmentBeadFeatureData::ISetVirtualEdges
to specify the edges to which you want the weld bead applied. By default, WeldmentBeadFeatureData::SetFaces creates the bead on all virtual edges. IWeldmentBeadFeatureData::ISetVirtualEdges lets you exclude any of these edges.

## See Also

- `IWeldmentBeadFeatureData.GetFaces`
- `IWeldmentBeadFeatureData.GetVirtualEdges`
- `IWeldmentBeadFeatureData.GetVirtualEdgesCount`
- `IWeldmentBeadFeatureData.SetFaces`
- `IWeldmentBeadFeatureData.SetVirtualEdges`