---
type: method
interface: IShutOffSurfaceFeatureData
member: SetAllPatchTypes
returns: void
parameters:
  -
    name: Type
    type: System.Int32
    description: Type of patch as defined in swShutOffSurfacePatchType_e
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IShutOffSurfaceFeatureData.GetLoopCount
  - IShutOffSurfaceFeatureData.GetLoopEdgeCount
  - IShutOffSurfaceFeatureData.IGetLoopEdges
  - IShutOffSurfaceFeatureData.Knit
  - IShutOffSurfaceFeatureData.LoopEdges
  - IShutOffSurfaceFeatureData.LoopPatchType
keywords:
  - setallpatchtypes
  - ishutoffsurfacefeaturedata
  - shut
  - off
  - surface
  - feature
  - data
  - all
  - patch
  - types
  - type
  - int32
  - void
---

# IShutOffSurfaceFeatureData.SetAllPatchTypes

Sets the type of patch for all loops for this shut-off surface feature.

## Signature

```csharp
void SetAllPatchTypes( 
   System.Int32
Type
)
```
## Parameters

- `Type` (System.Int32): Type of patch as defined in swShutOffSurfacePatchType_e

## Return Value

Unknown.

## See Also

- `IShutOffSurfaceFeatureData.GetLoopCount`
- `IShutOffSurfaceFeatureData.GetLoopEdgeCount`
- `IShutOffSurfaceFeatureData.IGetLoopEdges`
- `IShutOffSurfaceFeatureData.Knit`
- `IShutOffSurfaceFeatureData.LoopEdges`
- `IShutOffSurfaceFeatureData.LoopPatchType`