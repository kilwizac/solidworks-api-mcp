---
type: method
interface: ISplineParamData
member: SetControlPoints
returns: System.Boolean
parameters:
  -
    name: ControlPoints
    type: System.Object
    description: One-dimensional array of doubles (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - ISketchSpline.ModifyControlPoint
  - ISplineParamData.GetControlPoints
  - ISplineParamData.IGetControlPoints
keywords:
  - setcontrolpoints
  - isplineparamdata
  - spline
  - param
  - data
  - control
  - points
  - object
  - boolean
  - parameters
  - vb
  - net
  - vba
---

# ISplineParamData.SetControlPoints

Sets the coordinates of all of the control points of a spline.

## Signature

```csharp
System.Boolean SetControlPoints( 
   System.Object
ControlPoints
)
```
## Parameters

- `ControlPoints` (System.Object): One-dimensional array of doubles (see Remarks )

## Return Value

True if successful, false if not

## Remarks

Control points determine the shape of a spline or curve. Starting with a set of control points, all other points of a spline can be calculated. A given point on the spline is calculated using the polynomial basis functions of its nearest control points. The
knot vector
determines which control point basis functions are in force for calculating each point along a curve.
The size of the ControlPoints array is based on the curve dimension:
if
dimension
= 2 then each control point has 2 doubles ( x, y )
if
dimension
= 3 then each control point has 3 doubles ( x, y, z )
if
dimension
= 4, and the curve is closed or periodic, then each control point has 4 doubles ( x, y, z, w ), where w = weight
if
dimension
= 4, and the curve is open or non-periodic, then each control point has 4 doubles ( w*x, w*y, w*z, w ), where w = weight
Size of ControlPoints array =
control points count
*
dimension

## Examples

- Get Spline's Parameters (C#) (Get_Spline's_Parameters_Example_CSharp.htm)
- Get Spline's Parameters (VB.NET) (Get_Spline's_Parameters_Example_VBNET.htm)
- Get Spline's Parameters (VBA) (Get_Spline's_Parameters_Example_VB.htm)

## See Also

- `ISketchSpline.ModifyControlPoint`
- `ISplineParamData.GetControlPoints`
- `ISplineParamData.IGetControlPoints`