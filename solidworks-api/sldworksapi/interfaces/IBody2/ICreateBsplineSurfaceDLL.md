---
type: method
interface: IBody2
member: ICreateBsplineSurfaceDLL
returns: Surface
parameters:
  -
    name: Properties
    type: System.Int32
    description: Contains 8 longs (see Remarks )
  -
    name: UKnotArray
    type: System.Double
    description: Array of numUKnots doubles (see Remarks )
  -
    name: VKnotArray
    type: System.Double
    description: Array of numVKnots doubles (see Remarks )
  -
    name: ControlPointCoordArray
    type: System.Double
    description: Array of numCtrlPtCoord doubles (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related: []
keywords:
  - surface
  - see
  - also
  - isurface
  - bodies
  - icreatebsplinesurfacedll
  - ibody2
  - body2
  - create
  - bspline
  - dll
  - properties
  - int32
  - knot
  - array
  - double
  - control
  - point
  - coord
---

# IBody2.ICreateBsplineSurfaceDLL

Creates a B-spline surface in this body.

## Signature

```csharp
Surface ICreateBsplineSurfaceDLL( 
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

- `Properties` (System.Int32): Contains 8 longs (see Remarks )
- `UKnotArray` (System.Double): Array of numUKnots doubles (see Remarks )
- `VKnotArray` (System.Double): Array of numVKnots doubles (see Remarks )
- `ControlPointCoordArray` (System.Double): Array of numCtrlPtCoord doubles (see Remarks )

## Return Value

New B-spline surface

## Remarks

You can use this method with trimming curve creation routines (for example,
ISurface::AddTrimmingLoop2
) to construct a trimmed surface.
The Properties argument contains the following elements. These are integers packed into a double array in the Dispatch version.
Uorder, Vorder
numV_CtrlPoints, numU_CtrlPoints
Uperiodicity, Vperiodicity
DimensionControlPoints, UNUSED ( set = 0 )
The number of elements in UKnotArray is:
numUKnots = numU_CtrlPoints + Uorder
The number of elements in VKnotArray is:
numVKnots = numV_CtrlPoints + Vorder
The number of elements in ControlPointCoordArray is :
numCtrlPtCoord =( NumV_CtrlPoints * NumU_CtrlPoints * DimensionControlPoints )
NOTE:
The order of the UV control points are reversed if you used
ISurface::GetBSurfParams3
or
ISurface::IGetBSurfParams
to get the data. You do not need to reverse the UV control points; instead, you can switch the UV knots and related parameters.
For periodics, the first knot must have multiplicity = 1 and all excess multiplicity must be imposed on the last knot. Therefore, a valid periodic knot vector would be { 0, 1, 2, 3, 3, 3 } for a cubic curve. The control point on the seam of the closed curve cannot be replicated at both ends; it should occur only at the beginning.
To convert a clamped periodic curve (numKnots = numCtrlPts + Order, ctrlPts replicated, knot multiplicity = order at each end) to a SOLIDWORKS periodic curve, remove all but one of the knots at the beginning of the vector and remove one at the end. Also, remove the last control point to avoid the point replication.
Any existing object created by this method is destroyed if you call this method again.