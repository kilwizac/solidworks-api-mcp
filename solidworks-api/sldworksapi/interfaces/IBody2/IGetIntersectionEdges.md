---
type: method
interface: IBody2
member: IGetIntersectionEdges
returns: Edge
parameters:
  -
    name: ToolBodyIn
    type: Body2
    description: Temporary body used to perform the intersection
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - documents
  - geometry
related:
  - IBody2.GetIntersectionEdges
keywords:
  - igetintersectionedges
  - ibody2
  - body2
  - intersection
  - edges
  - tool
  - body
  - edge
---

# IBody2.IGetIntersectionEdges

Obsolete. Superseded by IBody2::GetIntersectionEdges2.

## Signature

```csharp
Edge IGetIntersectionEdges( 
   Body2
ToolBodyIn
)
```
## Parameters

- `ToolBodyIn` (Body2): Temporary body used to perform the intersection

## Return Value

in-process, unmanaged C++: Pointer to an array of edges VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

This method imprints a set of edges on both of these temporary bodies and returns the edges in an unordered list as shown below. The total number of edges in this array is twice the value returned from
IBody2::IGetIntersectionEdgeCount
.
[
Edge1imprintedOnTarget, Edge1imprintedOnTool, Edge2imprintedOnTarget, Edge2imprintedOnTool
]
where the target body is the IBody2 object used to call this method and the tool body is passed into this method as the first argument.
If the two bodies are in an assembly, then IBody2::GetIntersectionEdges generates a list of the intersection edges between the two bodies. To do this, the second body must be transformed in its coordinate space so that it is positioned the same with respect to the first body as it is in assembly space.
To align the two bodies before calling IBody2::GetIntersectionEdges or IBody2::IGetIntersectionEdgeCount, calculate the transformation from the first body to the second body and set this as the transform for the second body using
IBody2::ApplyTransform
.
In the case of a tangency condition (for example, a planar face contacting the cylindrical face of a cylinder), this method returns a single edge along the tangency.
You might also find that
IBody2::IOperations2
provides an adequate solution. This method intersects a sheet body with a target body.

## See Also

- `IBody2.GetIntersectionEdges`