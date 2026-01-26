---
type: method
interface: IModeler
member: CreatePCurve
returns: System.Object
parameters:
  -
    name: Surface
    type: System.Object
    description: Surface associated with the pcurve
  -
    name: Props
    type: System.Object
    description: Array containing 4 integers packed into 2 double elements (see Remarks )
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
related:
  - ICurve.GetPCurveParams
  - ICurve.IGetPCurveParams
  - ICurve.IGetPCurveParamsSize
  - IModeler.CreateBsplineCurve
  - IModeler.ICreateBsplineCurve
  - IModeler.ICreatePCurve
keywords:
  - curve
  - see
  - also
  - icurve
  - pcurve
  - pcurves
  - createpcurve
  - imodeler
  - modeler
  - create
  - surface
  - object
  - props
  - knots
  - ctrl
  - pt
  - coords
  - space
  - parameter
  - vba
---

# IModeler.CreatePCurve

Creates a pcurve.

## Signature

```csharp
System.Object CreatePCurve( 
   System.Object
Surface
,
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

- `Surface` (System.Object): Surface associated with the pcurve
- `Props` (System.Object): Array containing 4 integers packed into 2 double elements (see Remarks )
- `Knots` (System.Object): Array of numKnots (see Remarks )
- `CtrlPtCoords` (System.Object): Array of numCtrlPtCoord (see Remarks )

## Return Value

Pcurve

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
NumCtrlPtCoord = NumCtrlPoints * DimensionControlPoints

## Examples

- Create Space Parameter Curve On Surface (VBA) (Create_Space_Parameter_Curve_on_Surface_Example_VB.htm)

## See Also

- `ICurve.GetPCurveParams`
- `ICurve.IGetPCurveParams`
- `ICurve.IGetPCurveParamsSize`
- `IModeler.CreateBsplineCurve`
- `IModeler.ICreateBsplineCurve`
- `IModeler.ICreatePCurve`