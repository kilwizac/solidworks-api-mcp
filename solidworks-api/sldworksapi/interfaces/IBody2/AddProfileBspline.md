---
type: method
interface: IBody2
member: AddProfileBspline
returns: System.Object
parameters:
  -
    name: Props
    type: System.Object
    description: Contains 4 integers packed into 2 double elements (see Remarks )
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
  - IBody2.IAddProfileBspline
keywords:
  - addprofilebspline
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
  - create
  - reference
  - curve
  - vb
  - net
  - vba
---

# IBody2.AddProfileBspline

Creates an B-spline profile curve and returns a pointer to that curve.

## Signature

```csharp
System.Object AddProfileBspline( 
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

- `Props` (System.Object): Contains 4 integers packed into 2 double elements (see Remarks )
- `Knots` (System.Object): Array of numKnots (see Remarks )
- `CtrlPtCoords` (System.Object): Array of numCtrlPtCoord (see Remarks )

## Return Value

Curve

## Remarks

You can use this method with
IBody2::CreateRevolutionSurface
to generate any surface of revolution or with
IBody2::CreateExtrusionSurface
to generate a tabulated cylinder.
The Props argument contains the following values:
DimensionControlPoints
Order
NumCtrlPoints
Periodicity
The length of the knots array is given by:
numKnots = NumCtrlPoints + Order
The length of the CtrlPtCoords is given by:
NumCtrlPtCoord = NumCtrlPoints + DimensionControlPoints

## Examples

- Create Reference Curve (C#) (Create_Reference_Curve_Example_CSharp.htm)
- Create Reference Curve (VB.NET) (Create_Reference_Curve_Example_VBNET.htm)
- Create Reference Curve (VBA) (Create_Reference_Curve_Example_VB.htm)

## See Also

- `IBody2.IAddProfileBspline`