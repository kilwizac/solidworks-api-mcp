---
type: method
interface: ICurve
member: GetSplinePts
returns: System.Object
parameters:
  -
    name: ParamsArrayIn
    type: System.Object
    description: Array containing the definition of the spline
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - ICurve.IGetSplinePts
keywords:
  - getsplinepts
  - icurve
  - curve
  - spline
  - pts
  - params
  - array
  - object
  - points
  - vba
  - length
  - elliptical
  - edge
  - parameters
---

# ICurve.GetSplinePts

Gets the spline points for this curve.

## Signature

```csharp
System.Object GetSplinePts( 
   System.Object
ParamsArrayIn
)
```
## Parameters

- `ParamsArrayIn` (System.Object): Array containing the definition of the spline

## Return Value

Array containing the spline points

## Remarks

For OLE Automation applications, the ParamsIn argument contains an array defining the spline. This array contains the values for propArray, knotsArray and cntrlPntCoordArray, all packed into a single array (propArray is packed as four integers into the first two elements of the array.) The contents of these arrays is described in
ICurve::IGetSplinePtsSize
.
The array returned contains the x, y, z location of the spline points:
[
x1, y1, z1, x2, y2, z2
,....
]
Data passed into this method must satisfy the following requirements:
If the curve is periodic, it must not have any repeated knots.
If the curve is non-periodic, it must only have repeated knots at its ends.
The curve must be cubic or lower degree, non-rational, and have continuous first
and second derivatives.
NOTE:
For a linear or quadratic curve to satisfy these continuity requirements, it must consist of a single segment.

## Examples

- Get Curve Spline Points (VBA) (Get_Curve_Spline_Points_Example_VB.htm)
- Get Length of Spline or Elliptical Edge (VBA) (Get_Length_of_Spline_or_Elliptical_Edge_Example_VB.htm)
- Get Parameters and Spline Points for Curve (VBA) (Get_Parameters_and_Spline_Points_for_Curve_Example_VB.htm)

## See Also

- `ICurve.IGetSplinePts`