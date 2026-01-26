---
type: method
interface: IEdge
member: GetTangentEdgesCount
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related:
  - IEdge.GetTangentEdges
keywords:
  - edge
  - see
  - also
  - iedge
  - tangent
  - edges
  - gettangentedgescount
  - count
  - int32
---

# IEdge.GetTangentEdgesCount

Gets the number of edges tangent to this edge.

## Signature

```csharp
System.Int32 GetTangentEdgesCount()
```
## Parameters

None.

## Return Value

Number of tangent edges

## Remarks

Call this method before calling
IEdge::IGetTangentEdges.

## See Also

- `IEdge.GetTangentEdges`