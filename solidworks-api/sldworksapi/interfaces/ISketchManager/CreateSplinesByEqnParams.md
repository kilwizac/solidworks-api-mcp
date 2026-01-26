---
type: method
interface: ISketchManager
member: CreateSplinesByEqnParams
returns: System.Object
parameters:
  -
    name: Parameters
    type: System.Object
    description: Array containing an array of doubles to use in creating the spline (see Remarks )
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - sketches
related:
  - ISketchManager.CreateSpline
  - ISketchManager.CreateSplineByEqnParams
  - ISketchManager.ICreateSpline
  - ISketchManager.ICreateSplineByEqnParams
  - ISketchManager.ICreateSplinesByEqnParams
keywords:
  - createsplinesbyeqnparams
  - isketchmanager
  - sketch
  - manager
  - create
  - splines
  - eqn
  - params
  - parameters
  - object
---

# ISketchManager.CreateSplinesByEqnParams

Obsolete. Superseded by ISketchManager::CreateSplinesByEqnParams2.

## Signature

```csharp
System.Object CreateSplinesByEqnParams( 
   System.Object
Parameters
)
```
## Parameters

- `Parameters` (System.Object): Array containing an array of doubles to use in creating the spline (see Remarks )

## Return Value

Array of sketch segments of the newly created splines

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
If the spline being generated is a closed spline, then it must be flagged as periodic. If the data passed to this method does not generate a G1 continuous spline, then it creates multiple G1 continuous spline segments.
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
- `ISketchManager.ICreateSpline`
- `ISketchManager.ICreateSplineByEqnParams`
- `ISketchManager.ICreateSplinesByEqnParams`