---
type: method
interface: IFace2
member: IImprintCurve
returns: void
parameters:
  -
    name: Curve
    type: Curve
    description: Pointer to the curve to imprint on the face
  -
    name: NewEdgeCount
    type: System.Int32
    description: Number of new edges to create
  -
    name: NewEdges
    type: Edge
    description: Array of new edges created by the imprinted curve of size NewEdgeCount
  -
    name: NewFaceCount
    type: System.Int32
    description: Number of new faces to create
  -
    name: NewFaces
    type: Face2
    description: Array of new faces created by the imprinted curve of size NewFaceCount
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related:
  - IFace2.ImprintCurve
keywords:
  - curve
  - see
  - also
  - icurve
  - faces
  - face
  - iface2
  - curves
  - iimprintcurve
  - face2
  - imprint
  - new
  - edge
  - count
  - int32
  - edges
  - void
---

# IFace2.IImprintCurve

Imprints a curve on the selected face.

## Signature

```csharp
void IImprintCurve( 
   Curve
Curve
,
   System.Int32
NewEdgeCount
,
   out Edge
NewEdges
,
   System.Int32
NewFaceCount
,
   out Face2
NewFaces
)
```
## Parameters

- `Curve` (Curve): Pointer to the curve to imprint on the face
- `NewEdgeCount` (System.Int32): Number of new edges to create
- `NewEdges` (Edge): Array of new edges created by the imprinted curve of size NewEdgeCount
- `NewFaceCount` (System.Int32): Number of new faces to create
- `NewFaces` (Face2): Array of new faces created by the imprinted curve of size NewFaceCount

## Return Value

Unknown.

## Remarks

Before calling this method, call
IFace2::ImprintCurveCount
to get the size of the arrays.
The specified curve must lie on the face.
To imprint a curve on a new face of a temporary body, create a copy of the original curve and imprint the copy of the curve on the new face.

## See Also

- `IFace2.ImprintCurve`