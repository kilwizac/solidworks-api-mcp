---
type: method
interface: IModeler
member: ICreateBsplineCurve
returns: Curve
parameters:
  -
    name: Properties
    type: System.Int32
    description: Array containing 4 integers packed into 2 double elements (see Remarks )
  -
    name: KnotArray
    type: System.Double
    description: Array of numKnots doubles (see Remarks )
  -
    name: ControlPointCoordArray
    type: System.Double
    description: Array of NumCtrlPtCoord doubles (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IModeler.CreateBsplineCurve
  - IModeler.CreateBsplineSurface
  - IModeler.ICreateBsplineSurface
keywords:
  - spline
  - curve
  - bodies
  - see
  - also
  - ibody2
  - brep
  - splines
  - icreatebsplinecurve
  - imodeler
  - modeler
  - create
  - bspline
  - properties
  - int32
  - knot
  - array
  - double
  - control
  - point
  - coord
---

# IModeler.ICreateBsplineCurve

Creates a b-spline curve.

## Signature

```csharp
Curve ICreateBsplineCurve( 
   ref System.Int32
Properties
,
   ref System.Double
KnotArray
,
   ref System.Double
ControlPointCoordArray
)
```
## Parameters

- `Properties` (System.Int32): Array containing 4 integers packed into 2 double elements (see Remarks )
- `KnotArray` (System.Double): Array of numKnots doubles (see Remarks )
- `ControlPointCoordArray` (System.Double): Array of NumCtrlPtCoord doubles (see Remarks )

## Return Value

B-spline curve

## Remarks

The Properties argument contains the following values:
DimensionControlPoints
Order
NumCtrlPoints
Periodicity
Length of this array...
Given by...
Knots
numKnots = NumCtrlPoints + Order
CtrlPtCoords
NumCtrlPtCoord = NumCtrlPoints + DimensionControlPoints

## See Also

- `IModeler.CreateBsplineCurve`
- `IModeler.CreateBsplineSurface`
- `IModeler.ICreateBsplineSurface`