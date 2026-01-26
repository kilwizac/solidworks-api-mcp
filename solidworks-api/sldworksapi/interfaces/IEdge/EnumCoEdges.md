---
type: method
interface: IEdge
member: EnumCoEdges
returns: EnumCoEdges
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related:
  - IEnumCoEdges.Next
keywords:
  - enumcoedges
  - iedge
  - edge
  - co
  - edges
---

# IEdge.EnumCoEdges

Lists the coedges that reference this edge.

## Signature

```csharp
EnumCoEdges EnumCoEdges()
```
## Parameters

None.

## Return Value

Pointer to the enumerated list of coedges

## See Also

- `IEnumCoEdges.Next`