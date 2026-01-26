---
type: method
interface: IWeldmentBeadFeatureData
member: GetFaces
returns: void
parameters:
  -
    name: Side
    type: System.Int32
    description: Side as defined in swWeldBeadSide_e
  -
    name: FaceSet1
    type: System.Object
    description: First set of faces
  -
    name: FaceSet2
    type: System.Object
    description: Second set of faces
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - geometry
related:
  - IWeldmentBeadFeatureData.GetFacesCount
  - IWeldmentBeadFeatureData.IGetFaces
  - IWeldmentBeadFeatureData.ISetFaces
  - IWeldmentBeadFeatureData.SetFaces
keywords:
  - getfaces
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
  - void
---

# IWeldmentBeadFeatureData.GetFaces

Gets the sets of faces whose edges intersection defines the edges to which the weld bead is applied.

## Signature

```csharp
void GetFaces( 
   System.Int32
Side
,
   out System.Object
FaceSet1
,
   out System.Object
FaceSet2
)
```
## Parameters

- `Side` (System.Int32): Side as defined in swWeldBeadSide_e
- `FaceSet1` (System.Object): First set of faces
- `FaceSet2` (System.Object): Second set of faces

## Return Value

Unknown.

## Remarks

After using this method, use
IWeldmentBeadFeatureData::GetVirtualEdges
to get the new intersections. Then use
IWeldmentBeadFeatureData::SetVirtualEdges
to specify the edges to which you want the weld bead applied. By default,
IWeldmentBeadFeatureData::SetFaces
creates the bead on all virtual edges.
IWeldmentBeadFeatureData::SetVirtualEdges
lets
you exclude any of these edges.

## Examples

- IWeldmentBeadFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IWeldmentBeadFeatureData)

## See Also

- `IWeldmentBeadFeatureData.GetFacesCount`
- `IWeldmentBeadFeatureData.IGetFaces`
- `IWeldmentBeadFeatureData.ISetFaces`
- `IWeldmentBeadFeatureData.SetFaces`