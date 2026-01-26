---
type: method
interface: IVertex
member: GetEdgesOriented
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related:
  - IVertex.EnumEdgesOriented
keywords:
  - getedgesoriented
  - ivertex
  - vertex
  - edges
  - oriented
  - object
---

# IVertex.GetEdgesOriented

Gets the enumerated edges and orients them per coedge in the direction corresponding to this vertex.

## Signature

```csharp
System.Object GetEdgesOriented()
```
## Parameters

None.

## Return Value

Array of edges for this vertex

## Remarks

The order of the edges is counter-clockwise.

## See Also

- `IVertex.EnumEdgesOriented`