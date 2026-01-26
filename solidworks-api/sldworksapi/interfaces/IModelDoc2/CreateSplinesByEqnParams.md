---
type: method
interface: IModelDoc2
member: CreateSplinesByEqnParams
returns: System.Object
parameters:
  -
    name: ParamsIn
    type: System.Object
    description: Array containing an array of doubles to use in creating the spline (see Remarks )
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - core
  - documents
  - ui
related:
  - IModelDoc2.CreateSpline
  - IModelDoc2.CreateSplineByEqnParams
  - IModelDoc2.ICreateSpline
  - IModelDoc2.ICreateSplineByEqnParams
  - IModelDoc2.ICreateSplinesByEqnParams
  - IModelDoc2.InsertCurveFile
  - IModelDoc2.InsertCurveFileBegin
  - IModelDoc2.InsertCurveFileEnd
keywords:
  - createsplinesbyeqnparams
  - imodeldoc2
  - model
  - doc2
  - create
  - splines
  - eqn
  - params
  - object
---

# IModelDoc2.CreateSplinesByEqnParams

Obsolete. Superseded by ISketchManager::CreateSplinesByEqnParams.

## Signature

```csharp
System.Object CreateSplinesByEqnParams( 
   System.Object
ParamsIn
)
```
## Parameters

- `ParamsIn` (System.Object): Array containing an array of doubles to use in creating the spline (see Remarks )

## Return Value

Array containing an array of objects of the newly created splines

## Remarks

The parameters are provided as three arrays, which for OLE automation are packed into a single SafeArray, which is packed as follows:
[
Dimension, Order, Number of control Points, Periodicity, knot1, knot2,...,ControlPoint1[Dimension], ControlPoint2[Dimension],...
]
Pass the control point coordinates to this routine in sketch space. The Z value is
interpreted as 0. In certain situations, you must transform your B-curve parameters to sketch space using
ISketch::ModelToSketchTransform
.
NOTE:
If the generated spline is a closed spline, then it must be flagged as periodic. Additionally, splines generated in sketches must be G1 continuous. If the data passed to this method does not generate a G1 continuous spline, then it is rejected and a spline is not created. If your data is not G1 continuous, then you must split the spline into multiple G1 segments and call this method for each segment.
For the OLE interface, you can use the returned object pointer directly to call any APIs on the
ISketchSpline
interface or its base class,
ISketchSegment
.
This method does not work with
IModelDoc2::SetAddToDB
or
IModelDoc2::SetDisplayWhenAdded
. It always adds the spline directly to the database (as if IModelDoc2::SetAddToDB(True) is in effect), and you must redraw your document window to see the entities that you added (as if IModelDoc2::SetDisplayWhenAdded(false) is in effect).
To create 3D splines, see
IModelDoc2::InsertCurveFilePoint
and related functions.

## See Also

- `IModelDoc2.CreateSpline`
- `IModelDoc2.CreateSplineByEqnParams`
- `IModelDoc2.ICreateSpline`
- `IModelDoc2.ICreateSplineByEqnParams`
- `IModelDoc2.ICreateSplinesByEqnParams`
- `IModelDoc2.InsertCurveFile`
- `IModelDoc2.InsertCurveFileBegin`
- `IModelDoc2.InsertCurveFileEnd`