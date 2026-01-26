---
type: method
interface: IModeler
member: GetBodyOutline2
returns: System.Int32
parameters:
  -
    name: BodyList
    type: System.Object
    description: Array of bodies
  -
    name: Direction
    type: MathVector
    description: IMathVector direction of view
  -
    name: Tolerance
    type: System.Double
    description: Tolerance (Parasolid default 0.00001)
  -
    name: ProjectOnPlane
    type: System.Boolean
    description: True to project the curves onto a plane, false to not (see Remarks )
  -
    name: Curves
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
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related: []
keywords:
  - bodies
  - see
  - also
  - ibody2
  - outlines
  - curve
  - icurve
  - body
  - getbodyoutline2
  - imodeler
  - modeler
  - outline2
  - list
  - object
  - direction
  - math
  - vector
  - tolerance
  - double
  - project
  - plane
  - boolean
  - curves
  - topol
  - entities
  - outline
  - int32
  - form
  - vba
  - vb
  - net
---

# IModeler.GetBodyOutline2

Gets the curves that form the outline of a body.

## Signature

```csharp
System.Int32 GetBodyOutline2( 
   System.Object
BodyList
,
   MathVector
Direction
,
   System.Double
Tolerance
,
   System.Boolean
ProjectOnPlane
,
   out System.Object
Curves
,
   out System.Object
TopolEntities
,
   out System.Object
Outline
)
```
## Parameters

- `BodyList` (System.Object): Array of bodies
- `Direction` (MathVector): IMathVector direction of view
- `Tolerance` (System.Double): Tolerance (Parasolid default 0.00001)
- `ProjectOnPlane` (System.Boolean): True to project the curves onto a plane, false to not (see Remarks )
- `Curves` (System.Object): Array of 3D trimmed curves that form the outline
- `TopolEntities` (System.Object): Array of topological entities associated with the outline
- `Outline` (System.Object): Array of integers indicating which curves belong to which outline

## Return Value

Number of curves that form the outline

## Remarks

When rendered, the array of curves returned in Curves might not display as a continuous outline of the body.
To close gaps:
Call this method with ProjectOnPlane = true.
Post-process the array of curves returned in Curves to interpolate the end points of each curve to generate a continuous outline of the body. See the
Get Body Outline
examples.

## Examples

- Get Curves that Form Outline of Bodies (VBA) (Get_Curves_that_Form_Outline_of_Bodies_Example_VB.htm)
- Get Body Outline (VBA) (Get_Body_Outline_Example_VB.htm)
- Get Body Outline (VB.NET) (Get_Body_Outline_Example_VBNET.htm)
- Get Body Outline (C#) (Get_Body_Outline_Example_CSharp.htm)