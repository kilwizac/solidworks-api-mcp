---
type: method
interface: IVertex
member: EnumEdgesOriented
returns: EnumEdges
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related: []
keywords:
  - enumedgesoriented
  - ivertex
  - vertex
  - edges
  - oriented
---

# IVertex.EnumEdgesOriented

Gets the enumerated edges and orients them per coedge in the direction corresponding to this vertex.

## Signature

```csharp
EnumEdges EnumEdgesOriented()
```
## Parameters

None.

## Return Value

Enumerated edges

## Remarks

The order of the edges is counter-clockwise.