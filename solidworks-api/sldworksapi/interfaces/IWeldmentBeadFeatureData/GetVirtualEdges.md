---
type: method
interface: IWeldmentBeadFeatureData
member: GetVirtualEdges
returns: System.Object
parameters:
  -
    name: FromFeature
    type: System.Boolean
    description: True gets the virtual edges used by the feature, false gets all of the virtual edges
  -
    name: Side
    type: System.Int32
    description: Side as defined in swWeldBeadSide_e
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - geometry
related:
  - IWeldmentBeadFeatureData.GetVirtualEdgesCount
  - IWeldmentBeadFeatureData.IGetVirtualEdges
  - IWeldmentBeadFeatureData.ISetFaces
  - IWeldmentBeadFeatureData.ISetVirtualEdges
keywords:
  - getvirtualedges
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
  - object
---

# IWeldmentBeadFeatureData.GetVirtualEdges

Gets the edges to which the weld bead is applied.

## Signature

```csharp
System.Object GetVirtualEdges( 
   System.Boolean
FromFeature
,
   System.Int32
Side
)
```
## Parameters

- `FromFeature` (System.Boolean): True gets the virtual edges used by the feature, false gets all of the virtual edges
- `Side` (System.Int32): Side as defined in swWeldBeadSide_e

## Return Value

Array of the edges

## Remarks

Do not perform any operations on the returned edges as they are only temporary to help you decide which edges to keep for this weld bead.
After using
IWeldmentBeadFeatureData::SetFaces
, use IWeldmentBeadFeatureData::GetVirtualEdges to get the new intersections. Then use
IWeldmentBeadFeatureData::SetVirtualEdges
to specify the edges to which you want the weld bead applied. By default, IWeldmentBeadFeatureData::SetFaces creates the bead on all virtual edges; IWeldmentBeadFeatureData::SetVirtualEdges lets you exclude any of these edges.

## Examples

- IWeldmentBeadFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IWeldmentBeadFeatureData)

## See Also

- `IWeldmentBeadFeatureData.GetVirtualEdgesCount`
- `IWeldmentBeadFeatureData.IGetVirtualEdges`
- `IWeldmentBeadFeatureData.ISetFaces`
- `IWeldmentBeadFeatureData.ISetVirtualEdges`