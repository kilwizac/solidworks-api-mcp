---
type: method
interface: IModeler
member: GetBodyOutline
returns: System.Int32
parameters:
  -
    name: BodyVar
    type: System.Object
    description: Array of bodies
  -
    name: Direction
    type: MathVector
    description: Direction of view
  -
    name: Tolerance
    type: System.Double
    description: Tolerance (Parasolid default 0.00001)
  -
    name: CurvesOut
    type: System.Object
    description: Array of 3D trimmed curves that form the outline
  -
    name: TopolEntities
    type: System.Object
    description: Array of topological entities associated with the outline
  -
    name: Outline
    type: System.Object
    description: Array of integers indicating which curves belong to which outline
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - documents
  - geometry
related: []
keywords:
  - getbodyoutline
  - imodeler
  - modeler
  - body
  - outline
  - var
  - object
  - direction
  - math
  - vector
  - tolerance
  - double
  - curves
  - out
  - topol
  - entities
  - int32
---

# IModeler.GetBodyOutline

Obsolete. Superseded by IModeler::GetBodyOutline2.

## Signature

```csharp
System.Int32 GetBodyOutline( 
   System.Object
BodyVar
,
   MathVector
Direction
,
   System.Double
Tolerance
,
   out System.Object
CurvesOut
,
   out System.Object
TopolEntities
,
   out System.Object
Outline
)
```
## Parameters

- `BodyVar` (System.Object): Array of bodies
- `Direction` (MathVector): Direction of view
- `Tolerance` (System.Double): Tolerance (Parasolid default 0.00001)
- `CurvesOut` (System.Object): Array of 3D trimmed curves that form the outline
- `TopolEntities` (System.Object): Array of topological entities associated with the outline
- `Outline` (System.Object): Array of integers indicating which curves belong to which outline

## Return Value

Number of curves that form the outline of a body

## Remarks

See Parasolid's documentation of PK_BODY_make_curves_outline for more information about the output.