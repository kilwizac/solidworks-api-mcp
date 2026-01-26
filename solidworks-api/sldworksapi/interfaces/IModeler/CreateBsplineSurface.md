---
type: method
interface: IModeler
member: CreateBsplineSurface
returns: System.Object
parameters:
  -
    name: Props
    type: System.Object
    description: Array containing 8 integers packed as 4 double elements (see Remarks )
  -
    name: UKnots
    type: System.Object
    description: Array of numUKnots (see Remarks )
  -
    name: VKnots
    type: System.Object
    description: Array of numVKnots (see Remarks )
  -
    name: CtrlPtCoords
    type: System.Object
    description: Array of numCtrlPtCoord (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IBody2.CreateBsplineSurface
  - IBody2.ICreateBsplineSurface
  - IModeler.CreateBsplineCurve
  - IModeler.CreateConicalSurface2
  - IModeler.CreateCoonsBSurface
  - IModeler.CreateCylindricalSurface2
  - IModeler.CreateExtrusionSurface
  - IModeler.CreateLoftSurface
  - IModeler.CreateOffsetSurface
  - IModeler.CreatePlanarSurface2
  - IModeler.CreateRuledSurface
  - IModeler.CreateSphericalSurface2
  - IModeler.CreateSweptSurface
  - IModeler.CreateToroidalSurface
  - IModeler.ICreateBsplineCurve
  - IModeler.ICreateBsplineSurface
  - IModeler.ICreateConicalSurface2
  - IModeler.ICreateCylindricalSurface2
  - IModeler.ICreateExtrusionSurface
  - IModeler.ICreateLoftSurface
  - IModeler.ICreateOffsetSurface
  - IModeler.ICreatePlanarSurface2
  - IModeler.ICreateRuledSurface
  - IModeler.ICreateSphericalSurface2
  - IModeler.ICreateSweptSurface
  - IModeler.ICreateToroidalSurface
keywords:
  - surface
  - see
  - also
  - isurface
  - spline
  - splines
  - createbsplinesurface
  - imodeler
  - modeler
  - create
  - bspline
  - props
  - object
  - knots
  - ctrl
  - pt
  - coords
---

# IModeler.CreateBsplineSurface

Creates a b-spline surface.

## Signature

```csharp
System.Object CreateBsplineSurface( 
   System.Object
Props
,
   System.Object
UKnots
,
   System.Object
VKnots
,
   System.Object
CtrlPtCoords
)
```
## Parameters

- `Props` (System.Object): Array containing 8 integers packed as 4 double elements (see Remarks )
- `UKnots` (System.Object): Array of numUKnots (see Remarks )
- `VKnots` (System.Object): Array of numVKnots (see Remarks )
- `CtrlPtCoords` (System.Object): Array of numCtrlPtCoord (see Remarks )

## Return Value

B-spline surface

## Remarks

The Props array contains the following elements. These are integers packed into a double array in the Dispatch version.
Uorder, Vorder
numV_CtrlPoints, numU_CtrlPoints
Uperiodicity, Vperiodicity
DimensionControlPoints, UNUSED ( set =0 )
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
- `IModeler.CreateConicalSurface2`
- `IModeler.CreateCoonsBSurface`
- `IModeler.CreateCylindricalSurface2`
- `IModeler.CreateExtrusionSurface`
- `IModeler.CreateLoftSurface`
- `IModeler.CreateOffsetSurface`
- `IModeler.CreatePlanarSurface2`
- `IModeler.CreateRuledSurface`
- `IModeler.CreateSphericalSurface2`
- `IModeler.CreateSweptSurface`
- `IModeler.CreateToroidalSurface`
- `IModeler.ICreateBsplineCurve`
- `IModeler.ICreateBsplineSurface`
- `IModeler.ICreateConicalSurface2`
- `IModeler.ICreateCylindricalSurface2`
- `IModeler.ICreateExtrusionSurface`
- `IModeler.ICreateLoftSurface`
- `IModeler.ICreateOffsetSurface`
- `IModeler.ICreatePlanarSurface2`
- `IModeler.ICreateRuledSurface`
- `IModeler.ICreateSphericalSurface2`
- `IModeler.ICreateSweptSurface`
- `IModeler.ICreateToroidalSurface`