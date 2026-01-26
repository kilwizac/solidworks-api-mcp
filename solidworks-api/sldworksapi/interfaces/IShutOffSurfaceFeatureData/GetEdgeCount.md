---
type: method
interface: IShutOffSurfaceFeatureData
member: GetEdgeCount
returns: System.Int32
parameters: []
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
  - getedgecount
  - ishutoffsurfacefeaturedata
  - shut
  - off
  - surface
  - feature
  - data
  - edge
  - count
  - int32
---

# IShutOffSurfaceFeatureData.GetEdgeCount

Gets the number of edges that form a closed loop.

## Signature

```csharp
System.Int32 GetEdgeCount()
```
## Parameters

None.

## Return Value

Number of edges

## Remarks

Call this method before calling
IShutOffSurfaceFeatureData::IGetEdges
to get the size of the array for that method.

## Examples

- IShutOffSurfaceFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IShutOffSurfaceFeatureData)

## See Also

- `IShutOffSurfaceFeatureData.Edges`
- `IShutOffSurfaceFeatureData.GetLoopEdgeCount`
- `IShutOffSurfaceFeatureData.IGetLoopEdges`
- `IShutOffSurfaceFeatureData.ISetEdges`
- `IShutOffSurfaceFeatureData.LoopEdges`