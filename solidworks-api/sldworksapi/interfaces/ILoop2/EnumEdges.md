---
type: method
interface: ILoop2
member: EnumEdges
returns: EnumEdges
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related:
  - ILoop2.GetEdgeCount
  - ILoop2.GetEdges
  - ILoop2.IGetEdges
keywords:
  - enumedges
  - iloop2
  - loop2
  - edges
---

# ILoop2.EnumEdges

Enumerates the edges in a face.

## Signature

```csharp
EnumEdges EnumEdges()
```
## Parameters

None.

## Return Value

Edges enumeration

## Remarks

The edge objects are returned in a CW or CCW manner based on the direction of the
ILoop2
.
The loop direction is determined as follows: if a loop is viewed along its direction, with the face normal pointing upwards, then the face that owns the loop is to the left. This means that inner loops are CW and outer loops are CCW. To determine if a loop is an outer loop, see
ILoop2::IsOuter
.
Because an edge is shared by multiple loops, the edge direction may be opposite to the direction of the ILoop2. To check this, use
IEdge::EdgeInFaceSense
.

## See Also

- `ILoop2.GetEdgeCount`
- `ILoop2.GetEdges`
- `ILoop2.IGetEdges`