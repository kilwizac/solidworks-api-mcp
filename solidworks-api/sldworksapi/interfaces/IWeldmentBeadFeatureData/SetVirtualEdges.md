---
type: method
interface: IWeldmentBeadFeatureData
member: SetVirtualEdges
returns: void
parameters:
  -
    name: Side
    type: System.Int32
    description: Side as defined in swWeldBeadSide_e
  -
    name: EdgesIn
    type: System.Object
    description: Array of edges to which to apply this weld bead
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - geometry
related:
  - IWeldmentBeadFeatureData.GetVirtualEdges
  - IWeldmentBeadFeatureData.GetVirtualEdgesCount
  - IWeldmentBeadFeatureData.IGetVirtualEdges
  - IWeldmentBeadFeatureData.ISetFaces
  - IWeldmentBeadFeatureData.ISetVirtualEdges
keywords:
  - setvirtualedges
  - iweldmentbeadfeaturedata
  - weldment
  - bead
  - feature
  - data
  - virtual
  - edges
  - side
  - int32
  - object
  - void
---

# IWeldmentBeadFeatureData.SetVirtualEdges

Sets the edges to which to apply this weld bead.

## Signature

```csharp
void SetVirtualEdges( 
   System.Int32
Side
,
   System.Object
EdgesIn
)
```
## Parameters

- `Side` (System.Int32): Side as defined in swWeldBeadSide_e
- `EdgesIn` (System.Object): Array of edges to which to apply this weld bead

## Return Value

Unknown.

## Remarks

After using
IWeldmentBeadFeatureData::SetFaces
, use
IWeldmentBeadFeatureData::GetVirtualEdges
to get the new intersections. Then use IWeldmentBeadFeatureData::SetVirtualEdges to specify the edges to which you want the weld bead
applied. By default, IWeldmentBeadFeatureData::SetFaces creates the bead on all virtual edges. IWeldmentBeadFeatureData::SetVirtualEdges lets you exclude any of these edges.
See
Accessing Selections that Define Features
for additional details.

## See Also

- `IWeldmentBeadFeatureData.GetVirtualEdges`
- `IWeldmentBeadFeatureData.GetVirtualEdgesCount`
- `IWeldmentBeadFeatureData.IGetVirtualEdges`
- `IWeldmentBeadFeatureData.ISetFaces`
- `IWeldmentBeadFeatureData.ISetVirtualEdges`