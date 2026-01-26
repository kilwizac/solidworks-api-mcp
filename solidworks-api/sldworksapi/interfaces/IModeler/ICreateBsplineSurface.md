---
type: method
interface: IModeler
member: ICreateBsplineSurface
returns: Surface
parameters:
  -
    name: Properties
    type: System.Int32
    description: Array of 8 integers (see Remarks )
  -
    name: UKnotArray
    type: System.Double
    description: Array of numUKnots (see Remarks)
  -
    name: VKnotArray
    type: System.Double
    description: Array of numVKnots (see Remarks)
  -
    name: ControlPointCoordArray
    type: System.Double
    description: Array of numCtrlPtCoord (see Remarks)
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IBody2.CreateBsplineSurface
  - IBody2.ICreateBsplineSurface
  - IModeler.CreateBsplineCurve
  - IModeler.CreateBsplineSurface
  - IModeler.CreateConicalSurface2
  - IModeler.CreateCoonsBSurface
  - IModeler.CreateCylindricalSurface2
  - IModeler.CreateExtrusionSurface
  - IModeler.CreateLoftSurface
  - IModeler.CreateOffsetSurface
  - IModeler.CreatePlanarSurface2
  - IModeler.CreateRuledSurface
  - IModeler.CreateSweptSurface
  - IModeler.CreateToroidalSurface
  - IModeler.ICreateBsplineCurve
  - IModeler.ICreateConicalSurface2
  - IModeler.ICreateCylindricalSurface2
  - IModeler.ICreateExtrusionSurface
  - IModeler.ICreateLoftSurface
  - IModeler.ICreateOffsetSurface
  - IModeler.ICreatePlanarSurface2
  - IModeler.ICreateRuledSurface
  - IModeler.ICreateSweptSurface
  - IModeler.ICreateToroidalSurface
keywords:
  - surface
  - see
  - also
  - isurface
  - spline
  - splines
  - icreatebsplinesurface
  - imodeler
  - modeler
  - create
  - bspline
  - properties
  - int32
  - knot
  - array
  - double
  - control
  - point
  - coord
---

# IModeler.ICreateBsplineSurface

Creates a b-spline surface.

## Signature

```csharp
Surface ICreateBsplineSurface( 
   ref System.Int32
Properties
,
   ref System.Double
UKnotArray
,
   ref System.Double
VKnotArray
,
   ref System.Double
ControlPointCoordArray
)
```
## Parameters

- `Properties` (System.Int32): Array of 8 integers (see Remarks )
- `UKnotArray` (System.Double): Array of numUKnots (see Remarks)
- `VKnotArray` (System.Double): Array of numVKnots (see Remarks)
- `ControlPointCoordArray` (System.Double): Array of numCtrlPtCoord (see Remarks)

## Return Value

Surface

## Remarks

Number of elements in this array...
Given by...
UKnots
numUKnots = numU_CtrlPoints + Uorder
VKnots
numVKnots = numV_CtrlPoints + Vorder
CtrlPtCoords
numCtrlPtCoord =( NumV_CtrlPoints * NumU_CtrlPoints * DimensionControlPoints )
NOTE:
The order of the UV control points are reversed if you used
ISurface::GetBSurfParams3
or
ISurface::IGetBSurfParams
to get the data. You do not need to reverse the UV control points; instead, you can switch the UV knots and related parameters.
For periodics, the first knot must have multiplicity = 1 and all excess multiplicity must be imposed on the last knot. Therefore, a valid periodic knot vector would be { 0, 1, 2, 3, 3, 3 } for a cubic curve. The control point on the seam of the closed curve cannot be replicated at both ends; it should occur only at the beginning.
To convert from a clamped periodic curve (numKnots = numCtrlPts + Order, ctrlPts replicated, knot multiplicity = order at each end) to a SOLIDWORKS periodic curve, remove all but one of the knots at the beginning of the vector and remove one at the end. Also remove the last control point to avoid the point replication.

## See Also

- `IBody2.CreateBsplineSurface`
- `IBody2.ICreateBsplineSurface`
- `IModeler.CreateBsplineCurve`
- `IModeler.CreateBsplineSurface`
- `IModeler.CreateConicalSurface2`
- `IModeler.CreateCoonsBSurface`
- `IModeler.CreateCylindricalSurface2`
- `IModeler.CreateExtrusionSurface`
- `IModeler.CreateLoftSurface`
- `IModeler.CreateOffsetSurface`
- `IModeler.CreatePlanarSurface2`
- `IModeler.CreateRuledSurface`
- `IModeler.CreateSweptSurface`
- `IModeler.CreateToroidalSurface`
- `IModeler.ICreateBsplineCurve`
- `IModeler.ICreateConicalSurface2`
- `IModeler.ICreateCylindricalSurface2`
- `IModeler.ICreateExtrusionSurface`
- `IModeler.ICreateLoftSurface`
- `IModeler.ICreateOffsetSurface`
- `IModeler.ICreatePlanarSurface2`
- `IModeler.ICreateRuledSurface`
- `IModeler.ICreateSweptSurface`
- `IModeler.ICreateToroidalSurface`