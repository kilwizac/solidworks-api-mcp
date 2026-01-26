---
type: method
interface: IShutOffSurfaceFeatureData
member: ISetEdges
returns: void
parameters:
  -
    name: Count
    type: System.Int32
    description: Number of edges
  -
    name: EdgeArr
    type: Edge
    description: in-process, unmanaged C++: Pointer to an array of edges VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - geometry
related:
  - IShutOffSurfaceFeatureData.Edges
  - IShutOffSurfaceFeatureData.GetEdgeCount
  - IShutOffSurfaceFeatureData.GetLoopEdgeCount
  - IShutOffSurfaceFeatureData.IGetEdges
  - IShutOffSurfaceFeatureData.IGetLoopEdges
  - IShutOffSurfaceFeatureData.LoopEdges
keywords:
  - isetedges
  - ishutoffsurfacefeaturedata
  - shut
  - off
  - surface
  - feature
  - data
  - edges
  - count
  - int32
  - edge
  - arr
  - void
---

# IShutOffSurfaceFeatureData.ISetEdges

Sets the edges to use to form closed loops for patches.

## Signature

```csharp
void ISetEdges( 
   System.Int32
Count
,
   ref Edge
EdgeArr
)
```
## Parameters

- `Count` (System.Int32): Number of edges
- `EdgeArr` (Edge): in-process, unmanaged C++: Pointer to an array of edges VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Return Value

Unknown.

## Remarks

See
Accessing Selections that Define Features
for additional details.

## See Also

- `IShutOffSurfaceFeatureData.Edges`
- `IShutOffSurfaceFeatureData.GetEdgeCount`
- `IShutOffSurfaceFeatureData.GetLoopEdgeCount`
- `IShutOffSurfaceFeatureData.IGetEdges`
- `IShutOffSurfaceFeatureData.IGetLoopEdges`
- `IShutOffSurfaceFeatureData.LoopEdges`