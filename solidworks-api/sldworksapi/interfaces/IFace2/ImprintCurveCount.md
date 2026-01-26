---
type: method
interface: IFace2
member: ImprintCurveCount
returns: void
parameters:
  -
    name: Curve
    type: Curve
    description: Pointer to the curve
  -
    name: NewEdgeCount
    type: System.Int32
    description: Number of new edges to create when imprinting this curve
  -
    name: NewFaceCount
    type: System.Int32
    description: Number of new faces to create when imprinting this curve
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
  - imprintcurvecount
  - face2
  - imprint
  - count
  - new
  - edge
  - int32
  - void
---

# IFace2.ImprintCurveCount

Gets the number of new edges and faces to create when imprinting a curve.

## Signature

```csharp
void ImprintCurveCount( 
   Curve
Curve
,
   out System.Int32
NewEdgeCount
,
   out System.Int32
NewFaceCount
)
```
## Parameters

- `Curve` (Curve): Pointer to the curve
- `NewEdgeCount` (System.Int32): Number of new edges to create when imprinting this curve
- `NewFaceCount` (System.Int32): Number of new faces to create when imprinting this curve

## Return Value

Unknown.

## Remarks

Call this method before calling
IFace2::IImprintCurve
to get the size of the edges and faces arrays.

## See Also

- `IFace2.ImprintCurve`