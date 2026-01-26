---
type: method
interface: ISurface
member: AddTrimmingLoop2
returns: System.Boolean
parameters:
  -
    name: NCrvs
    type: System.Int32
    description: Number of surface parametric (UV) curves constituting the loop and the size of each of the VOrder, VDim, VPeriodic, VNumKnots, VNumControlPnts arrays
  -
    name: VOrder
    type: System.Object
    description: Array containing NCrvs longs (VBA), Integers (VB.NET), or ints (C#, C++) representing orders of the curves (see Remarks )
  -
    name: VDim
    type: System.Object
    description: Array containing NCrvs longs (VBA), Integers (VB.NET), or ints (C#, C++) representing dimensions (2, 3, or 4) of the control points of the curves (see Remarks )
  -
    name: VPeriodic
    type: System.Object
    description: Array containing NCrvs longs (VBA), Integers (VB.NET), or ints (C#, C++) representing whether the curve is periodic (1) or non-periodic (0) (see Remarks )
  -
    name: VNumKnots
    type: System.Object
    description: Array containing NCrvs longs (VBA), Integers (VB.NET), or ints (C#, C++) representing number of knots on the curves (see Remarks )
  -
    name: VNumCtrlPoints
    type: System.Object
    description: Array containing NCrvs longs (VBA), Integers (VB.NET), or ints (C#, C++) representing number of control points on the curves (see Remarks )
  -
    name: VKnots
    type: System.Object
    description: Knot vector array of <TotalNumKnots> doubles, where TotalNumKnots = (TotalNumKnots + VNumKnots[i]) for i = 1 to NCrvs (see Remarks )
  -
    name: VCtrlPointDbls
    type: System.Object
    description: Control point coordinate array of <TotalNumCPCoords> doubles, where TotalNumCPCoords = (TotalNumCPCoords + (VDim[i] * VNumCtrlPoints[i])) for i = 1 to NCrvs (see Remarks )
  -
    name: UvRange
    type: System.Object
    description: Array of four doubles representing U Low, U High, V Low, and V High (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - ISurface.IAddTrimmingLoop2
keywords:
  - addtrimmingloop2
  - isurface
  - surface
  - add
  - trimming
  - loop2
  - crvs
  - int32
  - order
  - object
  - dim
  - periodic
  - num
  - knots
  - ctrl
  - points
  - point
  - dbls
  - uv
  - range
  - boolean
  - create
  - body
  - using
  - trimmed
  - surfaces
  - vba
  - vb
  - net
---

# ISurface.AddTrimmingLoop2

Creates a trimming loop out of specified surface parametric UV-curves and adds it to a list of such loops.

## Signature

```csharp
System.Boolean AddTrimmingLoop2( 
   System.Int32
NCrvs
,
   System.Object
VOrder
,
   System.Object
VDim
,
   System.Object
VPeriodic
,
   System.Object
VNumKnots
,
   System.Object
VNumCtrlPoints
,
   System.Object
VKnots
,
   System.Object
VCtrlPointDbls
,
   System.Object
UvRange
)
```
## Parameters

- `NCrvs` (System.Int32): Number of surface parametric (UV) curves constituting the loop and the size of each of the VOrder, VDim, VPeriodic, VNumKnots, VNumControlPnts arrays
- `VOrder` (System.Object): Array containing NCrvs longs (VBA), Integers (VB.NET), or ints (C#, C++) representing orders of the curves (see Remarks )
- `VDim` (System.Object): Array containing NCrvs longs (VBA), Integers (VB.NET), or ints (C#, C++) representing dimensions (2, 3, or 4) of the control points of the curves (see Remarks )
- `VPeriodic` (System.Object): Array containing NCrvs longs (VBA), Integers (VB.NET), or ints (C#, C++) representing whether the curve is periodic (1) or non-periodic (0) (see Remarks )
- `VNumKnots` (System.Object): Array containing NCrvs longs (VBA), Integers (VB.NET), or ints (C#, C++) representing number of knots on the curves (see Remarks )
- `VNumCtrlPoints` (System.Object): Array containing NCrvs longs (VBA), Integers (VB.NET), or ints (C#, C++) representing number of control points on the curves (see Remarks )
- `VKnots` (System.Object): Knot vector array of <TotalNumKnots> doubles, where TotalNumKnots = (TotalNumKnots + VNumKnots[i]) for i = 1 to NCrvs (see Remarks )
- `VCtrlPointDbls` (System.Object): Control point coordinate array of <TotalNumCPCoords> doubles, where TotalNumCPCoords = (TotalNumCPCoords + (VDim[i] * VNumCtrlPoints[i])) for i = 1 to NCrvs (see Remarks )
- `UvRange` (System.Object): Array of four doubles representing U Low, U High, V Low, and V High (see Remarks )

## Return Value

True if successful in adding a trimming loop to the surface, false if not

## Remarks

The list of trimming loops is created by a previous call to one of the base surface creation functions,
IBody2::CreateRevolutionSurface
or
IBody2::CreatePlanarSurface.
The information on each UV-curve is in b-spline form (knots and control point coordinates) and is compacted into two arrays, VKnots and VCtrlPointDbls.
Order of each curve in VOrder is, at a minimum, 2. A second order curve is a linear curve.
For each curve in VNumCtrlPoints, VOrder, and VNumKnots, (NumCtrlPoints >= Order) and (NumKnots = NumCtrlPoints + Order).
Dim for each curve in VDim specifies the dimension of each CtrlPointDbl set in VCtrlPointDbls. This method expects 2D-polynomial (X,Y) or 2D-rational (X,Y,Weight) curves to be passed as trimming curves. However, you can set a flag so that this method accepts 3D-polynomial (X,Y,Z) or 3D-rational (X,Y,Z,Weight) trim curves. To do this, negate the absolute value of the first value in the VDim array. For example, if the first VDim value is 3, set it to -3. When you do this, 3D trim curves are expected.
If Dim is:
2, specify (X,Y) control points in each CtrlPointDbl set.
-2, specify (X,Y,Z) control points in each CtrlPointDbl set.
3, specify (X,Y,Weight) control points in each CtrlPointDbl.
-3, specify (X,Y,Z,Weight) control points in each CtrlPointDbl.
Multiplicity of a knot is the number of times it is repeated in the knot vector. There are specific rules around number of knots, knot multiplicity, and curve order. For example, if a curve's Periodic value is:
0 (non-periodic), there must be (NumCtrlPoints + Order) knots and the maximum multiplicity of any knot is Order.
1 (periodic), there must be (NumCtrlPoints + 1) knots and the maximum multiplicity of any knot is Order. If a knot has multiplicity greater than 1, repetitions must occur at the end of the knot vector.
If you do not want to specify a UV range, use null or Nothing in the UvRange array elements.
After calling this method to add a trimming loop, you can generate the trimmed surface by calling
IBody2::CreateTrimmedSurface
. You can create a body from trimmed surfaces using
IBody2::CreateBodyFromSurfaces
.
NOTE:
It is highly recommended that you consult other resources for the mathematics behind b-splines, knots, knot multiplicity, and control points before attempting to use this method.

## Examples

- Create Body Using Trimmed Surfaces (VBA) (Create_Body_using_Trimmed_Surfaces_Example_VB.htm)
- Create Body Using Trimmed Surfaces (VB.NET) (Create_Body_using_Trimmed_Surfaces_Example_VBNET.htm)
- Create Body Using Trimmed Surfaces (C#) (Create_Body_using_Trimmed_Surfaces_Example_CSharp.htm)

## See Also

- `ISurface.IAddTrimmingLoop2`