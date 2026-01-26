---
type: method
interface: IModeler
member: ICreatePCurve
returns: Curve
parameters:
  -
    name: Surface
    type: Surface
    description: Surface associated with the pcurve
  -
    name: Props
    type: System.Int32
    description: Array containing 4 integers packed into 2 double elements (see Remarks )
  -
    name: Knots
    type: System.Double
    description: Array of numKnots (see Remarks )
  -
    name: CtrlPtCoords
    type: System.Double
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
  - IModeler.CreatePCurve
  - IModeler.ICreateBsplineCurve
keywords:
  - curve
  - see
  - also
  - icurve
  - pcurve
  - pcurves
  - icreatepcurve
  - imodeler
  - modeler
  - create
  - surface
  - props
  - int32
  - knots
  - double
  - ctrl
  - pt
  - coords
---

# IModeler.ICreatePCurve

Creates a pcurve.

## Signature

```csharp
Curve ICreatePCurve( 
   Surface
Surface
,
   ref System.Int32
Props
,
   ref System.Double
Knots
,
   ref System.Double
CtrlPtCoords
)
```
## Parameters

- `Surface` (Surface): Surface associated with the pcurve
- `Props` (System.Int32): Array containing 4 integers packed into 2 double elements (see Remarks )
- `Knots` (System.Double): Array of numKnots (see Remarks )
- `CtrlPtCoords` (System.Double): Array of numCtrlPtCoord (see Remarks )

## Return Value

Unknown.

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

## See Also

- `ICurve.GetPCurveParams`
- `ICurve.IGetPCurveParams`
- `ICurve.IGetPCurveParamsSize`
- `IModeler.CreateBsplineCurve`
- `IModeler.CreatePCurve`
- `IModeler.ICreateBsplineCurve`