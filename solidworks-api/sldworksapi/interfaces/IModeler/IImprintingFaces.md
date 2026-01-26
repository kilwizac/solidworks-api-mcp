---
type: method
interface: IModeler
member: IImprintingFaces
returns: void
parameters:
  -
    name: TargetEdges
    type: Edge
    description: Array of target edges
  -
    name: ToolEdges
    type: Edge
    description: Array of tool edges
  -
    name: TargetVertices
    type: Vertex
    description: Array of target vertices
  -
    name: ToolVertices
    type: Vertex
    description: Array of tool vertices
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related:
  - IModeler.ImprintingFaces
keywords:
  - face
  - see
  - also
  - iface2
  - imprinted
  - faces
  - iimprintingfaces
  - imodeler
  - modeler
  - imprinting
  - target
  - edges
  - edge
  - tool
  - vertices
  - vertex
  - void
---

# IModeler.IImprintingFaces

Imprints the specified tool faces onto the specified target faces.

## Signature

```csharp
void IImprintingFaces( 
   out Edge
TargetEdges
,
   out Edge
ToolEdges
,
   out Vertex
TargetVertices
,
   out Vertex
ToolVertices
)
```
## Parameters

- `TargetEdges` (Edge): Array of target edges
- `ToolEdges` (Edge): Array of tool edges
- `TargetVertices` (Vertex): Array of target vertices
- `ToolVertices` (Vertex): Array of tool vertices

## Return Value

Unknown.

## Remarks

Call
IModeler::IImprintingFacesCount2
before calling this method.
The target and tool faces must:
belong to different bodies.
intersect each other.

## See Also

- `IModeler.ImprintingFaces`