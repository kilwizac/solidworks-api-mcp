---
type: method
interface: IBody2
member: IExtendSurface
returns: Body2
parameters:
  -
    name: EdgeCount
    type: System.Int32
    description: Number of edges to extend
  -
    name: EdgesToExtend
    type: Edge
    description: Array of the selected edges to extend
  -
    name: ExtendLinear
    type: System.Boolean
    description: True to extend the selected edges linearly along the tangent of the face at the edges; false to extend the selected edges in the same direction as the face
  -
    name: EndCondition
    type: System.Int32
    description: 0 = Extend selected edges per value specified for Dist 1 = Extend selected edges to PUpToVtx 2 = Extend selected edges to PpUpToFace
  -
    name: Dist
    type: System.Double
    description: Distance by which to extend the selected edges (see Remarks )
  -
    name: PUpToVtx
    type: Vertex
    description: Vertex up to which to extend the selected edges (see Remarks)
  -
    name: PUpToFace
    type: Face
    description: Face up to which to extend the selected edges (see Remarks)
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related:
  - IBody2.ExtendSurface
keywords:
  - temporary
  - bodies
  - extend
  - surface
  - see
  - also
  - isurface
  - iextendsurface
  - ibody2
  - body2
  - edge
  - count
  - int32
  - edges
  - linear
  - boolean
  - end
  - condition
  - dist
  - double
  - up
  - vtx
  - vertex
  - face
---

# IBody2.IExtendSurface

Creates a new temporary body by extending the selected edges.

## Signature

```csharp
Body2 IExtendSurface( 
   System.Int32
EdgeCount
,
   ref Edge
EdgesToExtend
,
   System.Boolean
ExtendLinear
,
   System.Int32
EndCondition
,
   System.Double
Dist
,
   Vertex
PUpToVtx
,
   Face
PUpToFace
)
```
## Parameters

- `EdgeCount` (System.Int32): Number of edges to extend
- `EdgesToExtend` (Edge): Array of the selected edges to extend
- `ExtendLinear` (System.Boolean): True to extend the selected edges linearly along the tangent of the face at the edges; false to extend the selected edges in the same direction as the face
- `EndCondition` (System.Int32): 0 = Extend selected edges per value specified for Dist 1 = Extend selected edges to PUpToVtx 2 = Extend selected edges to PpUpToFace
- `Dist` (System.Double): Distance by which to extend the selected edges (see Remarks )
- `PUpToVtx` (Vertex): Vertex up to which to extend the selected edges (see Remarks)
- `PUpToFace` (Face): Face up to which to extend the selected edges (see Remarks)

## Return Value

Pointer to the newly created IBody2 object

## Remarks

This method supports surface bodies only.
You can extend the edges by a specified distance or up to a vertex or up to a face.

## See Also

- `IBody2.ExtendSurface`