---
type: method
interface: IWeldmentBeadFeatureData
member: IGetVirtualEdges
returns: Edge
parameters:
  -
    name: FromFeature
    type: System.Boolean
    description: True gets the virtual edges used by the feature, false gets all of the virtual edges
  -
    name: Side
    type: System.Int32
    description: Side as defined in swWeldBeadSide_e
  -
    name: Count
    type: System.Int32
    description: Number of edges to which weld bead applied
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - geometry
related:
  - IWeldmentBeadFeatureData.GetVirtualEdges
  - IWeldmentBeadFeatureData.SetFaces
  - IWeldmentBeadFeatureData.SetVirtualEdges
keywords:
  - igetvirtualedges
  - iweldmentbeadfeaturedata
  - weldment
  - bead
  - feature
  - data
  - virtual
  - edges
  - boolean
  - side
  - int32
  - count
  - edge
---

# IWeldmentBeadFeatureData.IGetVirtualEdges

Gets the edges to which the weld bead is applied.

## Signature

```csharp
Edge IGetVirtualEdges( 
   System.Boolean
FromFeature
,
   System.Int32
Side
,
   System.Int32
Count
)
```
## Parameters

- `FromFeature` (System.Boolean): True gets the virtual edges used by the feature, false gets all of the virtual edges
- `Side` (System.Int32): Side as defined in swWeldBeadSide_e
- `Count` (System.Int32): Number of edges to which weld bead applied

## Return Value

in-process, unmanaged C++: Pointer to an array of edges VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

Do not perform any operations on the returned edges as they are only temporary to help you decide which edges to keep for this weld bead.
Call
IWeldmentBeadFeatureData::GetVirutalEdgesCount
to get the number of edges.
After using
IWeldmentBeadFeatureData::ISetFaces
, use IWeldmentBeadFeatureData::IGetVirtualEdges to get the new intersections. Then use
IWeldmentBeadFeatureData::ISetVirtualEdges
to specify the edges to which you want the weld bead applied. By default, IWeldmentBeadFeatureData::ISetFaces creates the bead on all virtual edges; IWeldmentBeadFeatureData::ISetVirtualEdges lets you exclude any of these edges.

## See Also

- `IWeldmentBeadFeatureData.GetVirtualEdges`
- `IWeldmentBeadFeatureData.SetFaces`
- `IWeldmentBeadFeatureData.SetVirtualEdges`