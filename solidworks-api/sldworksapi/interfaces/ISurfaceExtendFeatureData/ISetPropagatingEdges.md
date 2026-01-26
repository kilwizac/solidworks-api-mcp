---
type: method
interface: ISurfaceExtendFeatureData
member: ISetPropagatingEdges
returns: void
parameters:
  -
    name: Count
    type: System.Int32
    description: Number of propagating edges
  -
    name: EdgeArr
    type: Edge
    description: in-process, unmanaged C++: Pointer to an array extended items ( faces and edges ) of size Count VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - geometry
related:
  - ISurfaceExtendFeatureData.GetPropagatingEdgesCount
  - ISurfaceExtendFeatureData.IGetPropagatingEdges
  - ISurfaceExtendFeatureData.PropagatingEdges
keywords:
  - isetpropagatingedges
  - isurfaceextendfeaturedata
  - surface
  - extend
  - feature
  - data
  - propagating
  - edges
  - count
  - int32
  - edge
  - arr
  - void
---

# ISurfaceExtendFeatureData.ISetPropagatingEdges

Sets the propagating edges for this surface-extend feature.

## Signature

```csharp
void ISetPropagatingEdges( 
   System.Int32
Count
,
   ref Edge
EdgeArr
)
```
## Parameters

- `Count` (System.Int32): Number of propagating edges
- `EdgeArr` (Edge): in-process, unmanaged C++: Pointer to an array extended items ( faces and edges ) of size Count VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Return Value

Unknown.

## Remarks

See
Accessing Selections that Define Features
for additional details.

## See Also

- `ISurfaceExtendFeatureData.GetPropagatingEdgesCount`
- `ISurfaceExtendFeatureData.IGetPropagatingEdges`
- `ISurfaceExtendFeatureData.PropagatingEdges`