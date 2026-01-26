---
type: method
interface: IBody2
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
  - geometry
related:
  - IBody2.ICreateBsplineSurface
keywords:
  - surface
  - see
  - also
  - isurface
  - bodies
  - createbsplinesurface
  - ibody2
  - body2
  - create
  - bspline
  - props
  - object
  - knots
  - ctrl
  - pt
  - coords
---

# IBody2.CreateBsplineSurface

Creates a new B-spline surface.

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

A new B-spline surface

## Remarks

You can use this method with trimming curve creation routines (for example,
ISurface::AddTrimmingLoop2
) to construct a trimmed surface.
The Props array contains the following elements. These are integers packed into a double array in the Dispatch version.
Uorder, Vorder
numV_CtrlPoints, numU_CtrlPoints
Uperiodicity, Vperiodicity
DimensionControlPoints, UNUSED ( set =0 )
The number of elements in the UKnots array is given by:
numUKnots = numU_CtrlPoints + Uorder
The number of elements in the VKnots array is given by:
numVKnots = numV_CtrlPoints + Vorder
The number of elements in the ctrlPtCoords array is given by:
numCtrlPtCoord =( NumV_CtrlPoints * NumU_CtrlPoints * DimensionControlPoints )
NOTE:
The order of the UV control points are reversed if you used
ISurface::GetBSurfParams3
or
ISurface::IGetBSurfParams
to get the data. You do not need to reverse the UV control points; instead, you can switch the UV knots and related parameters.
For periodics, the first knot must have multiplicity = 1 and all excess multiplicity must be imposed on the last knot. Therefore, a valid periodic knot vector would be { 0, 1, 2, 3, 3, 3 } for a cubic curve. The control point on the seam of the closed curve cannot be replicated at both ends; it should occur only at the beginning.
To convert from a clamped periodic curve (numKnots = numCtrlPts + Order, ctrlPts replicated, knot multiplicity = order at each end) to a SOLIDWORKS periodic curve, remove all but one of the knots at the beginning of the vector and remove one at the end. Also remove the last control point to avoid the point replication.
Any existing object created by this method is destroyed if you call this method again.

## See Also

- `IBody2.ICreateBsplineSurface`