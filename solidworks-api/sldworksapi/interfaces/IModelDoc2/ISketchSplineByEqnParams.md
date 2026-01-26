---
type: method
interface: IModelDoc2
member: ISketchSplineByEqnParams
returns: System.Int32
parameters:
  -
    name: PropArray
    type: System.Int32
    description: Includes dimension, order, number of control points, and periodicity
  -
    name: KnotsArray
    type: System.Double
    description: knot1, knot2, and so on
  -
    name: CntrlPntCoordArray
    type: System.Double
    description: controlpoint1[dimension], controlpoint2[dimension], and so on
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - sketches
  - ui
related:
  - IModelDoc2.CreateSplineByEqnParams
  - IModelDoc2.CreateSplinesByEqnParams
  - IModelDoc2.ICreateSplineByEqnParams
  - IModelDoc2.ICreateSplinesByEqnParams
  - IModelDoc2.SketchSplineByEqnParams2
keywords:
  - sketch
  - entities
  - splines
  - see
  - also
  - isketch
  - isketchsplinebyeqnparams
  - imodeldoc2
  - model
  - doc2
  - spline
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
  - insert
  - drawing
---

# IModelDoc2.ISketchSplineByEqnParams

Creates a spline on the active 2D sketch using the specified b-curve parameters.

## Signature

```csharp
System.Int32 ISketchSplineByEqnParams( 
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

- `PropArray` (System.Int32): Includes dimension, order, number of control points, and periodicity
- `KnotsArray` (System.Double): knot1, knot2, and so on
- `CntrlPntCoordArray` (System.Double): controlpoint1[dimension], controlpoint2[dimension], and so on

## Return Value

True if created successfully, false if not

## Remarks

The PropArray argument contains 4 integers packed into the first two doubles in the array:
Dimension
Order
Number of Control Points
Periodicity ( True or false )
The KnotsArray argument is an array of doubles with (Number of Control Points + Order) elements.
The size of the CntrlPntCoordArray array is based upon the curve dimension:
Dimension = 2 then each control point is an array of 2 doubles ( x, y )
Dimension = 3 then each control point is an array of 3 doubles ( x, y, z)
Dimension = 4 then each control point is an array of 4 doubles ( x, y, z, w ) where w = weight
The parameters are provided as 3 arrays, which for COM applications are passed separately.
Pass control point coordinates
to this method in sketch space. The Z value is interpreted as 0. In certain situations, you must transform your b-curve parameters to sketch space with the help of
ISketch::ModelToSketchTransform
.
NOTE:
If the spline being generated is a closed spline, then it must be flagged as periodic. In addition, splines generated in sketches must be G1 continuous. If the data passed to this method does not generate a G1 continuous spline, then it is rejected and a spline is not created.

## Examples

- Insert Spline in Drawing (C++) (Insert_Spline_in_Drawing_Example_CPlusPlus_COM.htm)

## See Also

- `IModelDoc2.CreateSplineByEqnParams`
- `IModelDoc2.CreateSplinesByEqnParams`
- `IModelDoc2.ICreateSplineByEqnParams`
- `IModelDoc2.ICreateSplinesByEqnParams`
- `IModelDoc2.SketchSplineByEqnParams2`