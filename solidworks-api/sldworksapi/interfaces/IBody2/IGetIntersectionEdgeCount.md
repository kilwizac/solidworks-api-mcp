---
type: method
interface: IBody2
member: IGetIntersectionEdgeCount
returns: System.Int32
parameters:
  -
    name: ToolBodyIn
    type: Body2
    description: Pointer to the temporary body used to perform the intersection
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related: []
keywords:
  - temporary
  - bodies
  - igetintersectionedgecount
  - ibody2
  - body2
  - intersection
  - edge
  - count
  - tool
  - body
  - int32
---

# IBody2.IGetIntersectionEdgeCount

Gets the number of intersecting edges between this body and the specified tool body.

## Signature

```csharp
System.Int32 IGetIntersectionEdgeCount( 
   Body2
ToolBodyIn
)
```
## Parameters

- `ToolBodyIn` (Body2): Pointer to the temporary body used to perform the intersection

## Return Value

Number of intersection edges

## Remarks

Use the return value from this method to determine the size of the array returned by
IBody2::IGetIntersectionEdges
.
If the two bodies are in an assembly, then IBody2::GetIntersectionEdges and IBody2::IGetIntersectionEdges generate a list of the intersection edges between the two bodies. To do this, the second body must be transformed in its coordinate space so that it is positioned the same with respect to the first body as it is in assembly space.
To align the two bodies before calling IBody2::GetIntersectionEdges, IBody2::IGetIntersectionEdges, or Body2::IGetIntersectionEdgeCount, calculate the transformation from the first body to the second body and apply the transform to the second body using
IBody2::ApplyTransform
.