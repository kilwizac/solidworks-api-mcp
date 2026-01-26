---
type: method
interface: IRuledSurfaceFeatureData
member: ISetEdges
returns: void
parameters:
  -
    name: Count
    type: System.Int32
    description: Number of edges
  -
    name: Entities
    type: System.Object
    description: Array of edges
  -
    name: SideFlags
    type: System.Int32
    description: in-process, unmanaged C++: Pointer to an array of flags indicating which side of each edge to create the ruled-surface feature VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
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
  - IRuledSurfaceFeatureData.SetEdges
keywords:
  - isetedges
  - iruledsurfacefeaturedata
  - ruled
  - surface
  - feature
  - data
  - edges
  - count
  - int32
  - entities
  - object
  - side
  - flags
  - void
---

# IRuledSurfaceFeatureData.ISetEdges

Sets the edge to use as the base for this ruled-surface feature.

## Signature

```csharp
void ISetEdges( 
   System.Int32
Count
,
   ref System.Object
Entities
,
   ref System.Int32
SideFlags
)
```
## Parameters

- `Count` (System.Int32): Number of edges
- `Entities` (System.Object): Array of edges
- `SideFlags` (System.Int32): in-process, unmanaged C++: Pointer to an array of flags indicating which side of each edge to create the ruled-surface feature VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

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
- `IRuledSurfaceFeatureData.SetEdges`