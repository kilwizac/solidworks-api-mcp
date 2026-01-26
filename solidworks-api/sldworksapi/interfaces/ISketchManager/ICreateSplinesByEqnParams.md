---
type: method
interface: ISketchManager
member: ICreateSplinesByEqnParams
returns: EnumSketchSegments
parameters:
  -
    name: Properties
    type: System.Int32
    description: in-process, unmanaged C++: Pointer to an array of dimension, order, number of control points, periodicity (see Remarks ) VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
  -
    name: KnotArrayCount
    type: System.Int32
    description: Number of knots
  -
    name: Knots
    type: System.Double
    description: in-process, unmanaged C++: Pointer to an array of knots (e.g., knot1, knot2, etc.) VBA, VB.NET, C#, and C++/CLI: Not supported
  -
    name: ControlPointArrayCount
    type: System.Int32
    description: Number of control points
  -
    name: ControlPoints
    type: System.Double
    description: in-process, unmanaged C++: Pointer to an array of control points ( e.g., controlpoint1[dimension], controlpoint2[dimension], etc.) VBA, VB.NET, C#, and C++/CLI: Not supported
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - sketches
related:
  - ISketchManager.CreateSpline
  - ISketchManager.CreateSplineByEqnParams
  - ISketchManager.CreateSplinesByEqnParams
  - ISketchManager.ICreateSpline
  - ISketchManager.ICreateSplineByEqnParams
keywords:
  - sketch
  - entities
  - splines
  - curve
  - see
  - also
  - isketch
  - icreatesplinesbyeqnparams
  - isketchmanager
  - manager
  - create
  - eqn
  - params
  - properties
  - int32
  - knot
  - array
  - count
  - knots
  - double
  - control
  - point
  - points
  - segments
---

# ISketchManager.ICreateSplinesByEqnParams

Creates one or more spline segments using the B-curve parameters provided.

## Signature

```csharp
EnumSketchSegments ICreateSplinesByEqnParams( 
   ref System.Int32
Properties
,
   System.Int32
KnotArrayCount
,
   ref System.Double
Knots
,
   System.Int32
ControlPointArrayCount
,
   ref System.Double
ControlPoints
)
```
## Parameters

- `Properties` (System.Int32): in-process, unmanaged C++: Pointer to an array of dimension, order, number of control points, periodicity (see Remarks ) VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
- `KnotArrayCount` (System.Int32): Number of knots
- `Knots` (System.Double): in-process, unmanaged C++: Pointer to an array of knots (e.g., knot1, knot2, etc.) VBA, VB.NET, C#, and C++/CLI: Not supported
- `ControlPointArrayCount` (System.Int32): Number of control points
- `ControlPoints` (System.Double): in-process, unmanaged C++: Pointer to an array of control points ( e.g., controlpoint1[dimension], controlpoint2[dimension], etc.) VBA, VB.NET, C#, and C++/CLI: Not supported

## Return Value

in-process, unmanaged C++: Pointer to an array of sketch segments of the newly created splines VBA, VB.NET, C#, and C++/CLI: Not supported

## Remarks

The Properties array contains four longs (placed in the first four doubles in the array):
Dimension
Order
Number of Control Points
Periodicity ( true or false)
The Knots array contains doubles with (Number of Control Points + Order) elements.
The size of the ControlPoints array is based upon the curve dimension.
Dimension = 2 then each Control Point is an array of 2 doubles ( x, y )
Dimension = 3 then each Control Point is an array of 3 doubles ( x, y, z)
Dimension = 4 then each Control Point is an array of 4 doubles ( x, y, z, w ) where w = weight
The parameters are provided as three arrays.
Pass the control point coordinates to this routine in sketch space. The Z value is
interpreted as 0. In certain situations, you must transform your B-curve parameters to sketch space using
ISketch::ModelToSketchTransform
.
NOTE:
The curve can be either periodic or non-periodic. If the generated spline is a closed spline, then it must be flagged as periodic. Additionally, splines generated in sketches must be G1 continuous. If the data passed to this method does not generate a G1 continuous spline, then it is rejected and a spline is not created. If your data is not G1 continuous, then you must split the spline into multiple G1 segments and call this method for each segment.
This method does not work with
ISketchManager::AddToDB
or
ISketchManager::DisplayWhenAdded
. It always adds the spline directly to the database (as if ISketchManager::AddToDB(True) is in effect), and you must redraw your document window to see the entities that you added (as if ISketchManager::DisplayWhenAdded(False) is in effect).
To create 3D splines, see
IModelDoc2::InsertCurveFilePoint
and related functions.

## See Also

- `ISketchManager.CreateSpline`
- `ISketchManager.CreateSplineByEqnParams`
- `ISketchManager.CreateSplinesByEqnParams`
- `ISketchManager.ICreateSpline`
- `ISketchManager.ICreateSplineByEqnParams`