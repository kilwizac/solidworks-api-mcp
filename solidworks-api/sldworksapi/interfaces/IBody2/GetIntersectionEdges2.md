---
type: method
interface: IBody2
member: GetIntersectionEdges2
returns: System.Object
parameters:
  -
    name: ToolBodyIn
    type: System.Object
    description: Temporary tool body used to perform the intersection with this body (see Remarks )
  -
    name: AddFaceIds
    type: System.Boolean
    description: True to create IDs for any new faces, false to not (see Remarks )
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
  - getintersectionedges2
  - ibody2
  - body2
  - intersection
  - edges2
  - tool
  - body
  - object
  - add
  - face
  - ids
  - boolean
---

# IBody2.GetIntersectionEdges2

Gets the edges resulting from the intersection of the specified tool body and this body.

## Signature

```csharp
System.Object GetIntersectionEdges2( 
   System.Object
ToolBodyIn
,
   System.Boolean
AddFaceIds
)
```
## Parameters

- `ToolBodyIn` (System.Object): Temporary tool body used to perform the intersection with this body (see Remarks )
- `AddFaceIds` (System.Boolean): True to create IDs for any new faces, false to not (see Remarks )

## Return Value

Array of edges

## Remarks

This method imprints a set of edges on both of the bodies and returns the edges in an unordered list as shown below. The total number of edges in the returned array is twice the value returned by
IBody2::IGetIntersectionEdgeCount
.
[
Edge1imprintedOnTarget, Edge1imprintedOnTool, Edge2imprintedOnTarget, Edge2imprintedOnTool
]
where
Target
is this IBody2 object, and
Tool
is the IBody2 object passed into this method as ToolBodyIn.
If the two bodies are in an assembly, then this method generates a list of the intersection edges between the two bodies. Before calling this method, the two bodies must be aligned. To align the two bodies, calculate the transformation from the first body to the second body and then apply the transform to the second body using
IBody2::ApplyTransform
.
In the case of a tangency condition (for example, a planar face contacting the cylindrical face of a cylinder), this method returns a single edge along the tangency.
You might also find that
IBody2::Operations2
provides an adequate solution when intersecting a sheet body with a target body.
AddFaceIds allows you to add IDs to any newly created faces. This may be useful if ToolBodyIn later becomes a permanent body, which can occur in macro features.