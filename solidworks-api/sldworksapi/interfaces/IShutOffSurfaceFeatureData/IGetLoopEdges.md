---
type: method
interface: IShutOffSurfaceFeatureData
member: IGetLoopEdges
returns: Edge
parameters:
  -
    name: Index
    type: System.Int32
    description: Index of the loop
  -
    name: Count
    type: System.Int32
    description: Number of edges in the loop specified by index
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - geometry
related:
  - IShutOffSurfaceFeatureData.GetEdgeCount
  - IShutOffSurfaceFeatureData.GetLoopCount
  - IShutOffSurfaceFeatureData.IGetEdges
  - IShutOffSurfaceFeatureData.LoopEdges
  - IShutOffSurfaceFeatureData.LoopPatchType
  - IShutOffSurfaceFeatureData.SetAllPatchTypes
keywords:
  - igetloopedges
  - ishutoffsurfacefeaturedata
  - shut
  - off
  - surface
  - feature
  - data
  - loop
  - edges
  - index
  - int32
  - count
  - edge
---

# IShutOffSurfaceFeatureData.IGetLoopEdges

Gets the edges in the specified loop.

## Signature

```csharp
Edge IGetLoopEdges( 
   System.Int32
Index
,
   System.Int32
Count
)
```
## Parameters

- `Index` (System.Int32): Index of the loop
- `Count` (System.Int32): Number of edges in the loop specified by index

## Return Value

in-process, unmanaged C++: Pointer to an array of edges VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

Call
IShutOffSurfaceFeatureData::GetLoopEdgeCount
before calling this method to get the value of Count.
Use
IShutOffSurfaceFeatureData::Edges
or
IShutOffSurfaceFeatureData::ISetEdges
to set the edges for the loops.
See
Accessing Selections that Define Features
for additional details.

## See Also

- `IShutOffSurfaceFeatureData.GetEdgeCount`
- `IShutOffSurfaceFeatureData.GetLoopCount`
- `IShutOffSurfaceFeatureData.IGetEdges`
- `IShutOffSurfaceFeatureData.LoopEdges`
- `IShutOffSurfaceFeatureData.LoopPatchType`
- `IShutOffSurfaceFeatureData.SetAllPatchTypes`