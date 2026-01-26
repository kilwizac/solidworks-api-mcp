---
type: property
interface: IShutOffSurfaceFeatureData
member: LoopPatchType
returns: System.Int32
parameters:
  -
    name: Index
    type: System.Int32
    description: Index of the loop for which to set the type of patch
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
  - IShutOffSurfaceFeatureData.SetAllPatchTypes
keywords:
  - looppatchtype
  - ishutoffsurfacefeaturedata
  - shut
  - off
  - surface
  - feature
  - data
  - loop
  - patch
  - type
  - index
  - int32
readonly: null
---

# IShutOffSurfaceFeatureData.LoopPatchType

Gets and sets the type of patch for the specified loop for this shut-off surface feature.

## Signature

```csharp
System.Int32 LoopPatchType( 
   System.Int32
Index
) {get; set;}
```
## Parameters

- `Index` (System.Int32): Index of the loop for which to set the type of patch

## Return Value

Type of patch as defined in swShutOffSurfacePatchType_e

## Remarks

See
Accessing Selections that Define Features
for additional details.

## See Also

- `IShutOffSurfaceFeatureData.GetLoopCount`
- `IShutOffSurfaceFeatureData.GetLoopEdgeCount`
- `IShutOffSurfaceFeatureData.IGetLoopEdges`
- `IShutOffSurfaceFeatureData.Knit`
- `IShutOffSurfaceFeatureData.LoopEdges`
- `IShutOffSurfaceFeatureData.SetAllPatchTypes`