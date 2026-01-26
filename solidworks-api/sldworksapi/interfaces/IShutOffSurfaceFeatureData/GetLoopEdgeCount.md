---
type: method
interface: IShutOffSurfaceFeatureData
member: GetLoopEdgeCount
returns: System.Int32
parameters:
  -
    name: Index
    type: System.Int32
    description: Number indicating the loop for which to get the number of edges
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - geometry
related:
  - IShutOffSurfaceFeatureData.Edges
  - IShutOffSurfaceFeatureData.GetLoopCount
  - IShutOffSurfaceFeatureData.IGetEdges
  - IShutOffSurfaceFeatureData.IGetLoopEdges
  - IShutOffSurfaceFeatureData.ISetEdges
  - IShutOffSurfaceFeatureData.LoopEdges
  - IShutOffSurfaceFeatureData.LoopPatchType
  - IShutOffSurfaceFeatureData.SetAllPatchTypes
keywords:
  - getloopedgecount
  - ishutoffsurfacefeaturedata
  - shut
  - off
  - surface
  - feature
  - data
  - loop
  - edge
  - count
  - index
  - int32
---

# IShutOffSurfaceFeatureData.GetLoopEdgeCount

Gets the number of edges in the specified loop.

## Signature

```csharp
System.Int32 GetLoopEdgeCount( 
   System.Int32
Index
)
```
## Parameters

- `Index` (System.Int32): Number indicating the loop for which to get the number of edges

## Return Value

Number of edges in the loop specified by index

## Remarks

Call this method before calling
IShutOffSurfaceFeatureData::IGetLoopsEdges
to get the size of the array for that method.

## Examples

- IShutOffSurfaceFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IShutOffSurfaceFeatureData)

## See Also

- `IShutOffSurfaceFeatureData.Edges`
- `IShutOffSurfaceFeatureData.GetLoopCount`
- `IShutOffSurfaceFeatureData.IGetEdges`
- `IShutOffSurfaceFeatureData.IGetLoopEdges`
- `IShutOffSurfaceFeatureData.ISetEdges`
- `IShutOffSurfaceFeatureData.LoopEdges`
- `IShutOffSurfaceFeatureData.LoopPatchType`
- `IShutOffSurfaceFeatureData.SetAllPatchTypes`