---
type: method
interface: IRuledSurfaceFeatureData
member: SetEdges
returns: void
parameters:
  -
    name: Edges
    type: System.Object
    description: Array of edges
  -
    name: SideFlags
    type: System.Object
    description: Array of flags indicating which side of each edge to create the ruled-surface feature
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - geometry
related:
  - IRuledSurfaceFeatureData.GetEdges
  - IRuledSurfaceFeatureData.GetEdgesCount
  - IRuledSurfaceFeatureData.IGetEdges
  - IRuledSurfaceFeatureData.ISetEdges
keywords:
  - setedges
  - iruledsurfacefeaturedata
  - ruled
  - surface
  - feature
  - data
  - edges
  - object
  - side
  - flags
  - void
---

# IRuledSurfaceFeatureData.SetEdges

Sets the edge to use as the base for this ruled-surface feature.

## Signature

```csharp
void SetEdges( 
   System.Object
Edges
,
   System.Object
SideFlags
)
```
## Parameters

- `Edges` (System.Object): Array of edges
- `SideFlags` (System.Object): Array of flags indicating which side of each edge to create the ruled-surface feature

## Return Value

Unknown.

## Remarks

See
Accessing Selections that Define Features
for additional details on using this method.

## See Also

- `IRuledSurfaceFeatureData.GetEdges`
- `IRuledSurfaceFeatureData.GetEdgesCount`
- `IRuledSurfaceFeatureData.IGetEdges`
- `IRuledSurfaceFeatureData.ISetEdges`