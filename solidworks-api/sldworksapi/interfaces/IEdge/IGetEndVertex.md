---
type: method
interface: IEdge
member: IGetEndVertex
returns: Vertex
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related:
  - IEdge.GetEndVertex
  - IEdge.GetStartVertex
  - IEdge.IGetStartVertex
keywords:
  - igetendvertex
  - iedge
  - edge
  - end
  - vertex
---

# IEdge.IGetEndVertex

Gets the ending vertex for this edge.

## Signature

```csharp
Vertex IGetEndVertex()
```
## Parameters

None.

## Return Value

Pointer to the vertex

## Remarks

If no vertex exists for this edge (such as the edge of a newly created cylinder), then this method returns NULL.
This method and
IEdge::GetStartVertex
or
IEdge::IGetStartVertex
return distinct vertices, unless the edge is closed. Because edges have no natural direction, you cannot necessarily predict which of the two points you will get first and which last.
Use
ICoEdge::GetCurveParams
or
ICoEdge::IGetCurveParams
to get consistent start and end positions.

## See Also

- `IEdge.GetEndVertex`
- `IEdge.GetStartVertex`
- `IEdge.IGetStartVertex`