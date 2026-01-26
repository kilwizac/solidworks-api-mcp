---
type: method
interface: IEdge
member: IGetTangentEdges
returns: Edge
parameters:
  -
    name: Count
    type: System.Int32
    description: Number of tangent edges
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related:
  - IEdge.GetTangentEdges
  - IModelDoc2.SelectTangency
keywords:
  - edge
  - see
  - also
  - iedge
  - tangent
  - edges
  - igettangentedges
  - count
  - int32
---

# IEdge.IGetTangentEdges

Gets all of the edges tangent to this edge.

## Signature

```csharp
Edge IGetTangentEdges( 
   System.Int32
Count
)
```
## Parameters

- `Count` (System.Int32): Number of tangent edges

## Return Value

in-process, unmanaged C++: Pointer to an array of edges of size Count VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

Call
IEdge::GetTangentEdgesCount
before this method.

## See Also

- `IEdge.GetTangentEdges`
- `IModelDoc2.SelectTangency`