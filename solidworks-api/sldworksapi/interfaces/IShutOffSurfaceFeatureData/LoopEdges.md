---
type: property
interface: IShutOffSurfaceFeatureData
member: LoopEdges
returns: System.Object
parameters:
  -
    name: Index
    type: System.Int32
    description: Index of the loop
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - geometry
related:
  - IShutOffSurfaceFeatureData.Edges
  - IShutOffSurfaceFeatureData.GetLoopCount
  - IShutOffSurfaceFeatureData.GetLoopEdgeCount
  - IShutOffSurfaceFeatureData.IGetEdges
  - IShutOffSurfaceFeatureData.IGetLoopEdges
  - IShutOffSurfaceFeatureData.SetAllPatchTypes
keywords:
  - loopedges
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
  - object
readonly: true
---

# IShutOffSurfaceFeatureData.LoopEdges

Gets the edges in the specified loop in this shut-off surface feature.

## Signature

```csharp
System.Object LoopEdges( 
   System.Int32
Index
) {get;}
```
## Parameters

- `Index` (System.Int32): Index of the loop

## Return Value

Array of edges

## Remarks

Use
IShutOffSurfaceFeatureData::Edges
or
IShutOffSurfaceFeatureData::ISetEdges
to set the edges for the loops.
See
Accessing Selections that Define Features
for additional details.

## Examples

- IShutOffSurfaceFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IShutOffSurfaceFeatureData)

## See Also

- `IShutOffSurfaceFeatureData.Edges`
- `IShutOffSurfaceFeatureData.GetLoopCount`
- `IShutOffSurfaceFeatureData.GetLoopEdgeCount`
- `IShutOffSurfaceFeatureData.IGetEdges`
- `IShutOffSurfaceFeatureData.IGetLoopEdges`
- `IShutOffSurfaceFeatureData.SetAllPatchTypes`