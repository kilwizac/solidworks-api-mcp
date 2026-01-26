---
type: method
interface: IShutOffSurfaceFeatureData
member: IGetEdges
returns: Edge
parameters:
  -
    name: Count
    type: System.Int32
    description: Number of edges that form loops
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - geometry
related:
  - IShutOffSurfaceFeatureData.Edges
  - IShutOffSurfaceFeatureData.GetLoopEdgeCount
  - IShutOffSurfaceFeatureData.IGetLoopEdges
  - IShutOffSurfaceFeatureData.ISetEdges
  - IShutOffSurfaceFeatureData.LoopEdges
keywords:
  - igetedges
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
---

# IShutOffSurfaceFeatureData.IGetEdges

Gets the edges that form closed loops to use for the patches.

## Signature

```csharp
Edge IGetEdges( 
   System.Int32
Count
)
```
## Parameters

- `Count` (System.Int32): Number of edges that form loops

## Return Value

in-process, unmanaged C++: Pointer to an array of edges VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

Call
IShutOffSurfaceFeatureData::GetLoopCount
before calling this method to get the value for Count.
See
Accessing Selections that Define Features
for additional details.

## See Also

- `IShutOffSurfaceFeatureData.Edges`
- `IShutOffSurfaceFeatureData.GetLoopEdgeCount`
- `IShutOffSurfaceFeatureData.IGetLoopEdges`
- `IShutOffSurfaceFeatureData.ISetEdges`
- `IShutOffSurfaceFeatureData.LoopEdges`