---
type: method
interface: IBody2
member: IAddProfileBspline
returns: Curve
parameters:
  -
    name: Props
    type: System.Object
    description: Contains four integers packed into two double elements (see Remarks )
  -
    name: Knots
    type: System.Object
    description: Array of numKnots (see Remarks )
  -
    name: CtrlPtCoords
    type: System.Object
    description: Array of numCtrlPtCoord (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related:
  - IBody2.AddProfileBspline
keywords:
  - iaddprofilebspline
  - ibody2
  - body2
  - add
  - profile
  - bspline
  - props
  - object
  - knots
  - ctrl
  - pt
  - coords
  - curve
---

# IBody2.IAddProfileBspline

Creates an B-spline profile curve and returns a pointer to that curve.

## Signature

```csharp
Curve IAddProfileBspline( 
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

- `Props` (System.Object): Contains four integers packed into two double elements (see Remarks )
- `Knots` (System.Object): Array of numKnots (see Remarks )
- `CtrlPtCoords` (System.Object): Array of numCtrlPtCoord (see Remarks )

## Return Value

ICurve

## Remarks

You can use this method with
IBody2::ICreateRevolutionSurface
to generate any surface of revolution or with
IBody2::ICreateExtrusionSurface
to generate a tabulated cylinder.
The Props argument contains the following values:
DimensionControlPoints
Order
NumCtrlPoints
Periodicity
The length of the knots array is given by:
numKnots = NumCtrlPoints + Order
The length of the CtrlPtCoords is given by:
numCtrlPtCoord = NumCtrlPoints + DimensionControlPoints

## See Also

- `IBody2.AddProfileBspline`