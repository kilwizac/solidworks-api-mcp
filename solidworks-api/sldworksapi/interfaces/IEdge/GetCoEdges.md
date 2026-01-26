---
type: method
interface: IEdge
member: GetCoEdges
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related: []
keywords:
  - getcoedges
  - iedge
  - edge
  - co
  - edges
  - object
  - select
  - loop
  - vba
  - tangent
  - via
  - iteration
---

# IEdge.GetCoEdges

Gets the coedges that reference this edge.

## Signature

```csharp
System.Object GetCoEdges()
```
## Parameters

None.

## Return Value

Array of coedges that reference the edge

## Remarks

Call this method for body-related edges, not reference curve or sketch edges.

## Examples

- Select Loop of Edges (VBA) (Select_Loop_of_Edges_Example_VB_.htm)
- Select Tangent Edges Via Iteration (VBA) (Select_Tangent_Edges_Example_VB.htm)