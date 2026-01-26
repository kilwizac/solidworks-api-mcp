---
type: method
interface: IRuledSurfaceFeatureData
member: GetEdgesCount
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - geometry
related:
  - IRuledSurfaceFeatureData.GetEdges
  - IRuledSurfaceFeatureData.ISetEdges
  - IRuledSurfaceFeatureData.SetEdges
keywords:
  - getedgescount
  - iruledsurfacefeaturedata
  - ruled
  - surface
  - feature
  - data
  - edges
  - count
  - int32
---

# IRuledSurfaceFeatureData.GetEdgesCount

Gets the number of edges to use as a base for this ruled-surface feature.

## Signature

```csharp
System.Int32 GetEdgesCount()
```
## Parameters

None.

## Return Value

Number of edges

## Remarks

Call this method before calling
IRuledSurfaceFeatureData::IGetEdges
to get the size of the array for that method.

## See Also

- `IRuledSurfaceFeatureData.GetEdges`
- `IRuledSurfaceFeatureData.ISetEdges`
- `IRuledSurfaceFeatureData.SetEdges`