---
type: method
interface: ISurface
member: IAddTrimmingLoop2
returns: void
parameters:
  -
    name: CurveCount
    type: System.Int32
    description: Number of surface parametric (UV) curves constituting the loop; the size of Order, Dim, Periodic, NumKnots, and NumControlPnts arrays
  -
    name: Order
    type: System.Int32
    description: Orders of the curves; array of CurveCount longs (VBA), Integers (VB.NET), or ints (C#, C++)
  -
    name: Dim
    type: System.Int32
    description: Dimensions of the curves' control points; array of CurveCount longs (VBA), Integers (VB.NET), or ints (C#, C++); if you set the first value in this array to negative of its absolute value, then 3D trim curves are expected
  -
    name: Periodic
    type: System.Int32
    description: 0 for non-periodic or 1 for periodic; array of CurveCount longs (VBA), Integers (VB.NET), or ints (C#, C++)
  -
    name: NumKnots
    type: System.Int32
    description: Number of knots in the curves; array of CurveCount longs (VBA), Integers (VB.NET), or ints (C#, C++)
  -
    name: NumCtrlPoints
    type: System.Int32
    description: Number of control points in the curves; array of CurveCount longs (VBA), Integers (VB.NET), or ints (C#, C++)
  -
    name: Knots
    type: System.Double
    description: Knot vectors of the curves; array of <TotalNumKnots> doubles, where TotalNumKnots = (TotalNumKnots + NumKnots[i]) for i = 1 to CurveCount
  -
    name: CtrlPointDbls
    type: System.Double
    description: Control point coordinates of the curves; array of <TotalNumCPCoords> doubles, where TotalNumCPCoords = (TotalNumCPCoords + (Dim[i] * NumCtrlPoints[i])) for i = 1 to CurveCount
  -
    name: UvRange
    type: System.Double
    description: Array of four doubles defining U Low U High V Low V High
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - ISurface.AddTrimmingLoop2
keywords:
  - iaddtrimmingloop2
  - isurface
  - surface
  - add
  - trimming
  - loop2
  - curve
  - count
  - int32
  - order
  - dim
  - periodic
  - num
  - knots
  - ctrl
  - points
  - double
  - point
  - dbls
  - uv
  - range
  - void
---

# ISurface.IAddTrimmingLoop2

Creates a trimming loop out of specified surface parametric (UV-curves) and adds it to a list of such loops.

## Signature

```csharp
void IAddTrimmingLoop2( 
   System.Int32
CurveCount
,
   ref System.Int32
Order
,
   ref System.Int32
Dim
,
   ref System.Int32
Periodic
,
   ref System.Int32
NumKnots
,
   ref System.Int32
NumCtrlPoints
,
   ref System.Double
Knots
,
   ref System.Double
CtrlPointDbls
,
   ref System.Double
UvRange
)
```
## Parameters

- `CurveCount` (System.Int32): Number of surface parametric (UV) curves constituting the loop; the size of Order, Dim, Periodic, NumKnots, and NumControlPnts arrays
- `Order` (System.Int32): Orders of the curves; array of CurveCount longs (VBA), Integers (VB.NET), or ints (C#, C++)
- `Dim` (System.Int32): Dimensions of the curves' control points; array of CurveCount longs (VBA), Integers (VB.NET), or ints (C#, C++); if you set the first value in this array to negative of its absolute value, then 3D trim curves are expected
- `Periodic` (System.Int32): 0 for non-periodic or 1 for periodic; array of CurveCount longs (VBA), Integers (VB.NET), or ints (C#, C++)
- `NumKnots` (System.Int32): Number of knots in the curves; array of CurveCount longs (VBA), Integers (VB.NET), or ints (C#, C++)
- `NumCtrlPoints` (System.Int32): Number of control points in the curves; array of CurveCount longs (VBA), Integers (VB.NET), or ints (C#, C++)
- `Knots` (System.Double): Knot vectors of the curves; array of <TotalNumKnots> doubles, where TotalNumKnots = (TotalNumKnots + NumKnots[i]) for i = 1 to CurveCount
- `CtrlPointDbls` (System.Double): Control point coordinates of the curves; array of <TotalNumCPCoords> doubles, where TotalNumCPCoords = (TotalNumCPCoords + (Dim[i] * NumCtrlPoints[i])) for i = 1 to CurveCount
- `UvRange` (System.Double): Array of four doubles defining U Low U High V Low V High

## Return Value

Unknown.

## Remarks

The list of trimming loops is created by a previous call to one of the base surface creation functions,
IBody2::CreateRevolutionSurface
or
IBody2::CreatePlanarSurface.
The information on each UV-curve is in b-spline form (knots and control point coordinates) and is compacted into two arrays, VKnots and VCtrlPointDbls.
Order of each curve in Order is, at a minimum, 2. A second order curve is a linear curve.
For each curve in NumCtrlPoints, Order, and NumKnots, (NumCtrlPoints >= Order) and (NumKnots = NumCtrlPoints + Order).
Dim for each curve in Dim specifies the dimension of each CtrlPointDbl set in CtrlPointDbls. This method expects 2D-polynomial (X,Y) or 2D-rational (X,Y,Weight) curves to be passed as trimming curves. However, you can set a flag so that this method accepts 3D-polynomial (X,Y,Z) or 3D-rational (X,Y,Z,Weight) trim curves. To do this, negate the absolute value of the first value in the VDim array. For example, if the first VDim value is 3, set it to -3. When you do this, 3D trim curves are expected.
If Dim is:
2, specify (X,Y) control points in each CtrlPointDbl sub-array.
-2, specify (X,Y,Z) control points in each CtrlPointDbl sub-array.
3, specify (X,Y,Weight) control points in each CtrlPointDbl sub-array.
-3, specify (X,Y,Z,Weight) control points in each CtrlPointDbl sub-array.
Multiplicity of a knot is the number of times it is repeated in the knot vector. There are specific rules around number of knots, knot multiplicity, and curve order. For example, if a curve's Periodic value is:
0 (non-periodic), there must be (NumCtrlPoints + Order) knots and the maximum multiplicity of any knot is Order.
1 (periodic), there must be (NumCtrlPoints + 1) knots and the maximum multiplicity of any knot is Order. If a knot has multiplicity greater than 1, repetitions must occur at the end of the knot vector.
If you do not want to specify a UV range, use null or Nothing in the UvRange array elements.
After calling this method to add a trimming loop, you can generate a trimmed surface by calling
IBody2::CreateTrimmedSurface
. You can create a body from trimmed surfaces using
IBody2::CreateBodyFromSurfaces
.
NOTE:
It is highly recommended that you consult other resources for the mathematics behind b-splines, knots, knot multiplicity, and control points before attempting to use this method.

## See Also

- `ISurface.AddTrimmingLoop2`