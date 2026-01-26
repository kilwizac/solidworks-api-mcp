---
type: method
interface: IModelDoc2
member: ICreateSplinesByEqnParams
returns: EnumSketchSegments
parameters:
  -
    name: PropArray
    type: System.Int32
    description: Array of dimension, order, number of control points, periodicity (see Remarks )
  -
    name: KnotsArray
    type: System.Double
    description: knot1, knot2, and so on (see Remarks )
  -
    name: CntrlPntCoordArray
    type: System.Double
    description: controlpoint1[dimension], controlpoint2[dimension], and so on (see Remarks )
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
  - IModelDoc2.CreateSplinesByEqnParams
  - IModelDoc2.ICreateSpline
  - IModelDoc2.ICreateSplineByEqnParams
  - IModelDoc2.ISketchSplineByEqnParams
  - IModelDoc2.InsertCurveFile
  - IModelDoc2.InsertCurveFileBegin
  - IModelDoc2.InsertCurveFileEnd
  - IModelDoc2.SketchSplineByEqnParams2
keywords:
  - icreatesplinesbyeqnparams
  - imodeldoc2
  - model
  - doc2
  - create
  - splines
  - eqn
  - params
  - prop
  - array
  - int32
  - knots
  - double
  - cntrl
  - pnt
  - coord
  - sketch
  - segments
---

# IModelDoc2.ICreateSplinesByEqnParams

Obsolete. Superseded by ISketchManager::ICreateSplinesByEqnParams.

## Signature

```csharp
EnumSketchSegments ICreateSplinesByEqnParams( 
   ref System.Int32
PropArray
,
   ref System.Double
KnotsArray
,
   ref System.Double
CntrlPntCoordArray
)
```
## Parameters

- `PropArray` (System.Int32): Array of dimension, order, number of control points, periodicity (see Remarks )
- `KnotsArray` (System.Double): knot1, knot2, and so on (see Remarks )
- `CntrlPntCoordArray` (System.Double): controlpoint1[dimension], controlpoint2[dimension], and so on (see Remarks )

## Return Value

Pointer to the newly created splines enumeration (see Remarks )

## Remarks

The PropArray array contains four integers (placed in the first four doubles in a Visual Basic for Applications (VBA) SafeArray):
Dimension
Order
Number of Control Points
Periodicity ( True or false )
The KnotsArray contains doubles with (Number of Control Points + Order) elements.
The size of the CntrlPntCoordArray array is based upon the curve dimension.
Dimension = 2 then each Control Point is an array of 2 doubles ( x, y )
Dimension = 3 then each Control Point is an array of 3 doubles ( x, y, z)
Dimension = 4 then each Control Point is an array of 4 doubles ( x, y, z, w ) where w = weight
Pass the control point coordinates to this routine in sketch space. The Z value is
interpreted as 0. In certain situations, you must transform your B-curve parameters to sketch space using
ISketch::ModelToSketchTransform
.
NOTE:
If the generated spline is a closed spline, then it must be flagged as periodic. Additionally, splines generated in sketches must be G1 continuous. If the data passed to this method does not generate a G1 continuous spline, then it is rejected and a spline is not created. If your data is not G1 continuous, then you must split the spline into multiple G1 segments and call this method for each segment.
You can use the returned object pointer directly to call any APIs on the
ISketchSegment
interface, or use QueryInterface to obtain the pointer to the ISketchSpline and any APIs on the
ISketchSpline
interface.
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
- `IModelDoc2.CreateSplinesByEqnParams`
- `IModelDoc2.ICreateSpline`
- `IModelDoc2.ICreateSplineByEqnParams`
- `IModelDoc2.ISketchSplineByEqnParams`
- `IModelDoc2.InsertCurveFile`
- `IModelDoc2.InsertCurveFileBegin`
- `IModelDoc2.InsertCurveFileEnd`
- `IModelDoc2.SketchSplineByEqnParams2`