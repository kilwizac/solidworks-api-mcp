---
type: method
interface: IWeldmentBeadFeatureData
member: ISetVirtualEdges
returns: void
parameters:
  -
    name: Side
    type: System.Int32
    description: Side as defined in swWeldBeadSide_e
  -
    name: Count
    type: System.Int32
    description: Number of edges to which to apply this weld bead
  -
    name: EdgesIn
    type: Edge
    description: in-process, unmanaged C++: Pointer to an array of edges to which to apply this weld bead VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - geometry
related:
  - IWeldmentBeadFeatureData.IGetVirtualEdges
  - IWeldmentBeadFeatureData.SetFaces
  - IWeldmentBeadFeatureData.SetVirtualEdges
keywords:
  - isetvirtualedges
  - iweldmentbeadfeaturedata
  - weldment
  - bead
  - feature
  - data
  - virtual
  - edges
  - side
  - int32
  - count
  - edge
  - void
---

# IWeldmentBeadFeatureData.ISetVirtualEdges

Sets the edges to which to apply this weld bead.

## Signature

```csharp
void ISetVirtualEdges( 
   System.Int32
Side
,
   System.Int32
Count
,
   ref Edge
EdgesIn
)
```
## Parameters

- `Side` (System.Int32): Side as defined in swWeldBeadSide_e
- `Count` (System.Int32): Number of edges to which to apply this weld bead
- `EdgesIn` (Edge): in-process, unmanaged C++: Pointer to an array of edges to which to apply this weld bead VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Return Value

Unknown.

## Remarks

After using
IWeldmentBeadFeatureData::ISetFaces
, use
IWeldmentBeadFeatureData::IGetVirtualEdges
to get the new intersections. Then use IWeldmentBeadFeatureData::ISetVirtualEdges to specify the edges to which you want the weld bead
applied. By default, IWeldmentBeadFeatureData::ISetFaces creates the bead on all virtual edges. IWeldmentBeadFeatureData::ISetVirtualEdges lets you exclude any of these edges.
See
Accessing Selections that Define Features
for additional details.

## See Also

- `IWeldmentBeadFeatureData.IGetVirtualEdges`
- `IWeldmentBeadFeatureData.SetFaces`
- `IWeldmentBeadFeatureData.SetVirtualEdges`