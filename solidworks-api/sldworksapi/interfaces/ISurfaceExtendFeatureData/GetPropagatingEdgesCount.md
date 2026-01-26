---
type: method
interface: ISurfaceExtendFeatureData
member: GetPropagatingEdgesCount
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - geometry
related:
  - ISurfaceExtendFeatureData.ISetPropagatingEdges
  - ISurfaceExtendFeatureData.PropagatingEdges
keywords:
  - getpropagatingedgescount
  - isurfaceextendfeaturedata
  - surface
  - extend
  - feature
  - data
  - propagating
  - edges
  - count
  - int32
---

# ISurfaceExtendFeatureData.GetPropagatingEdgesCount

Gets the propagating edges for this surface-extend feature.

## Signature

```csharp
System.Int32 GetPropagatingEdgesCount()
```
## Parameters

None.

## Return Value

Number of propagating edges

## Remarks

Call this method before calling
ISurfaceExtendFeatureData::IGetPropagatingEdges
.

## See Also

- `ISurfaceExtendFeatureData.ISetPropagatingEdges`
- `ISurfaceExtendFeatureData.PropagatingEdges`