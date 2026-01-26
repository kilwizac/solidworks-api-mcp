---
type: method
interface: ISurfaceExtendFeatureData
member: IGetPropagatingEdges
returns: Edge
parameters:
  -
    name: Count
    type: System.Int32
    description: Number of propagating edges
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - geometry
related: []
keywords:
  - igetpropagatingedges
  - isurfaceextendfeaturedata
  - surface
  - extend
  - feature
  - data
  - propagating
  - edges
  - count
  - int32
  - edge
---

# ISurfaceExtendFeatureData.IGetPropagatingEdges

Gets the propagating edges for this surface-extend feature.

## Signature

```csharp
Edge IGetPropagatingEdges( 
   System.Int32
Count
)
```
## Parameters

- `Count` (System.Int32): Number of propagating edges

## Return Value

in-process, unmanaged C++: Pointer to an array of propagating edges of size Count VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

Call
ISurfaceExtendFeatureData::GetPropagatingEdgesCount
before calling this method.
See
Accessing Selections that Define Features
for additional details.