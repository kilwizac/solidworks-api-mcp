---
type: method
interface: IShutOffSurfaceFeatureData
member: GetLoopCount
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IShutOffSurfaceFeatureData.GetLoopEdgeCount
  - IShutOffSurfaceFeatureData.IGetLoopEdges
  - IShutOffSurfaceFeatureData.LoopEdges
  - IShutOffSurfaceFeatureData.LoopPatchType
  - IShutOffSurfaceFeatureData.SetAllPatchTypes
keywords:
  - getloopcount
  - ishutoffsurfacefeaturedata
  - shut
  - off
  - surface
  - feature
  - data
  - loop
  - count
  - int32
---

# IShutOffSurfaceFeatureData.GetLoopCount

Gets the number of closed loops for all of the patches.

## Signature

```csharp
System.Int32 GetLoopCount()
```
## Parameters

None.

## Return Value

Number of loops for the patches

## Remarks

Call this method before calling
IShutOffSurfaceFeatureData::IGetEdges
to get the size of the array for that method.

## Examples

- IShutOffSurfaceFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IShutOffSurfaceFeatureData)

## See Also

- `IShutOffSurfaceFeatureData.GetLoopEdgeCount`
- `IShutOffSurfaceFeatureData.IGetLoopEdges`
- `IShutOffSurfaceFeatureData.LoopEdges`
- `IShutOffSurfaceFeatureData.LoopPatchType`
- `IShutOffSurfaceFeatureData.SetAllPatchTypes`