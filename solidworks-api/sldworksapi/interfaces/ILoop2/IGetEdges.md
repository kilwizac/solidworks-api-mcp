---
type: method
interface: ILoop2
member: IGetEdges
returns: Edge
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related:
  - ILoop2.EnumEdges
  - ILoop2.GetEdgeCount
  - ILoop2.GetEdges
keywords:
  - igetedges
  - iloop2
  - loop2
  - edges
  - edge
---

# ILoop2.IGetEdges

Gets all the edges in the loop.

## Signature

```csharp
Edge IGetEdges()
```
## Parameters

None.

## Return Value

in-process, unmanaged C++: Pointer to an array of edges that make up the loop VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

The
IEdge
objects are returned in a CW or CCW manner based on the direction of the
ILoop2
.
The loop direction is determined as follows: if a loop is viewed along its direction, with the face normal pointing upwards, then the face that owns the loop is to the left. This means that inner loops are CW and outer loops are CCW. To determine if a loop is an outer loop, use
ILoop2::IsOuter
.
Because an edge is shared by multiple loops, the edge direction might be opposite to the direction of the ILoop2. To check this, use
IEdge::IEdgeInFaceSense2
.
If the loop is a singular loop, use
ILoop2::IGetVertices
to get its position (a single vertex). LIoop2::GetEdges returns an empty array if the loop is singular.

## See Also

- `ILoop2.EnumEdges`
- `ILoop2.GetEdgeCount`
- `ILoop2.GetEdges`