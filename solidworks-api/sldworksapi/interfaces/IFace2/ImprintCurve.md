---
type: method
interface: IFace2
member: ImprintCurve
returns: void
parameters:
  -
    name: Curve
    type: System.Object
    description: Curve to imprint on the face
  -
    name: NewEdges
    type: System.Object
    description: Array of new edges created by the imprinted curve
  -
    name: NewFaces
    type: System.Object
    description: Array of new faces created by the imprinted curve
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related:
  - IFace2.IImprintCurve
  - IFace2.ImprintCurveCount
keywords:
  - curve
  - see
  - also
  - icurve
  - faces
  - face
  - iface2
  - curves
  - imprintcurve
  - face2
  - imprint
  - object
  - new
  - edges
  - void
---

# IFace2.ImprintCurve

Imprints a curve on the selected face.

## Signature

```csharp
void ImprintCurve( 
   System.Object
Curve
,
   out System.Object
NewEdges
,
   out System.Object
NewFaces
)
```
## Parameters

- `Curve` (System.Object): Curve to imprint on the face
- `NewEdges` (System.Object): Array of new edges created by the imprinted curve
- `NewFaces` (System.Object): Array of new faces created by the imprinted curve

## Return Value

Unknown.

## Remarks

The specified curve must lie on the face.
To imprint a curve on a new face of a temporary body, create a copy of the original curve and imprint the copy of the curve on the new face.

## See Also

- `IFace2.IImprintCurve`
- `IFace2.ImprintCurveCount`