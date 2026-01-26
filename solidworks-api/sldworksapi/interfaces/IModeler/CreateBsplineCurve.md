---
type: method
interface: IModeler
member: CreateBsplineCurve
returns: System.Object
parameters:
  -
    name: Props
    type: System.Object
    description: Array containing 4 integers packed into 2 double elements (see Remarks )
  -
    name: Knots
    type: System.Object
    description: Array of numKnots doubles (see Remarks )
  -
    name: CtrlPtCoords
    type: System.Object
    description: Array of NumCtrlPtCoord doubles (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IBody2.AddProfileBspline
  - IBody2.IAddProfileBspline
  - IModeler.ICreateBsplineCurve
keywords:
  - curve
  - see
  - also
  - icurve
  - spline
  - splines
  - createbsplinecurve
  - imodeler
  - modeler
  - create
  - bspline
  - props
  - object
  - knots
  - ctrl
  - pt
  - coords
---

# IModeler.CreateBsplineCurve

Creates a b-spline curve.

## Signature

```csharp
System.Object CreateBsplineCurve( 
   System.Object
Props
,
   System.Object
Knots
,
   System.Object
CtrlPtCoords
)
```
## Parameters

- `Props` (System.Object): Array containing 4 integers packed into 2 double elements (see Remarks )
- `Knots` (System.Object): Array of numKnots doubles (see Remarks )
- `CtrlPtCoords` (System.Object): Array of NumCtrlPtCoord doubles (see Remarks )

## Return Value

B-spline curve

## Remarks

The Props argument contains the following values:
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

- `IBody2.AddProfileBspline`
- `IBody2.IAddProfileBspline`
- `IModeler.ICreateBsplineCurve`