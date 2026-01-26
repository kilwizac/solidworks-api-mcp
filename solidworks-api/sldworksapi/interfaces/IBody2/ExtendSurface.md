---
type: method
interface: IBody2
member: ExtendSurface
returns: Body2
parameters:
  -
    name: EdgesToExtend
    type: System.Object
    description: Array of the selected edges to extend
  -
    name: ExtendLinear
    type: System.Boolean
    description: True to extend the selected edges linearly along the tangent of the face at the edges; false to extend the selected edges in the same direction as the face
  -
    name: EndCondition
    type: System.Int32
    description: 0 = Extend selected edges per value specified for Dist 1 = Extend selected edges to PUpToVtx 2 = Extend selected edges to PUpToFace
  -
    name: Dist
    type: System.Double
    description: Distance by which to extend the selected edges (see Remarks )
  -
    name: PUpToVtx
    type: Vertex
    description: Vertex up to which to extend the selected edges (see Remarks )
  -
    name: PUpToFace
    type: Face
    description: Face up to which to extend the selected edges (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related:
  - IBody2.IExtendSurface
keywords:
  - temporary
  - bodies
  - extend
  - surface
  - see
  - also
  - isurface
  - extendsurface
  - ibody2
  - body2
  - edges
  - object
  - linear
  - boolean
  - end
  - condition
  - int32
  - dist
  - double
  - up
  - vtx
  - vertex
  - face
  - vba
---

# IBody2.ExtendSurface

Creates a new temporary body by extending the selected edges.

## Signature

```csharp
Body2 ExtendSurface( 
   System.Object
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

- `EdgesToExtend` (System.Object): Array of the selected edges to extend
- `ExtendLinear` (System.Boolean): True to extend the selected edges linearly along the tangent of the face at the edges; false to extend the selected edges in the same direction as the face
- `EndCondition` (System.Int32): 0 = Extend selected edges per value specified for Dist 1 = Extend selected edges to PUpToVtx 2 = Extend selected edges to PUpToFace
- `Dist` (System.Double): Distance by which to extend the selected edges (see Remarks )
- `PUpToVtx` (Vertex): Vertex up to which to extend the selected edges (see Remarks )
- `PUpToFace` (Face): Face up to which to extend the selected edges (see Remarks )

## Return Value

Pointer to the newly created IBody2 object

## Remarks

This method supports surface bodies only.
You can extend the edges by a specified distance or up to a vertex or up to a face.

## Examples

- Extend Surface (VBA) (Extend_Surface_Example_VB.htm)

## See Also

- `IBody2.IExtendSurface`