---
type: method
interface: IBody2
member: IAddProfileBsplineDLL
returns: Curve
parameters:
  -
    name: Properties
    type: System.Int32
    description: Contains 4 longs (see Remarks )
  -
    name: KnotArray
    type: System.Double
    description: Pointer to an array of numKnots doubles (see Remarks )
  -
    name: ControlPointCoordArray
    type: System.Double
    description: Pointer to an array of numCtrlPtCoord doubles (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related: []
keywords:
  - iaddprofilebsplinedll
  - ibody2
  - body2
  - add
  - profile
  - bspline
  - dll
  - properties
  - int32
  - knot
  - array
  - double
  - control
  - point
  - coord
  - curve
---

# IBody2.IAddProfileBsplineDLL

Adds a profile B-spline.

## Signature

```csharp
Curve IAddProfileBsplineDLL( 
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

- `Properties` (System.Int32): Contains 4 longs (see Remarks )
- `KnotArray` (System.Double): Pointer to an array of numKnots doubles (see Remarks )
- `ControlPointCoordArray` (System.Double): Pointer to an array of numCtrlPtCoord doubles (see Remarks )

## Return Value

Pointer to the profile B-spline curve

## Remarks

You can use this method with
IBody2::ICreateRevolutionSurface
to generate any surface
of revolution or with
IBody2::ICreateExtrusionSurface
to generate a tabulated cylinder.
The Properties argument contains the following values:
DimensionControlPoints
Order
NumCtrlPoints
Periodicity
The length of the KnotArray argument is:
numKnots = NumCtrlPoints + Order
The length of the ControlPointCoordArray is:
numCtrlPtCoord = NumCtrlPoints * DimensionControlPoints