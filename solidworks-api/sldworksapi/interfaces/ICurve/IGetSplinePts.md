---
type: method
interface: ICurve
member: IGetSplinePts
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - ICurve.GetSplinePts
keywords:
  - igetsplinepts
  - icurve
  - curve
  - spline
  - pts
  - double
  - points
---

# ICurve.IGetSplinePts

Gets the spline points for this curve.

## Signature

```csharp
System.Double IGetSplinePts()
```
## Parameters

None.

## Return Value

in-process, unmanaged C++: Pointer to an array containing the spline points VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

ICurve::IGetSplinePtsSize
defines the spline and determines the size of the array returned.
The array returned contains the x, y, z location of the spline points:
[
x1, y1, z1, x2, y2, z2
,....
]
Data passed into ICurve::IGetSplinePtsSize must satisfy the following requirements:
If the curve is periodic, it must not have any repeated knots.
If the curve is non-periodic, it must only have repeated knots at its ends.
The curve must be cubic or lower degree, non-rational, and have continuous first
and second derivatives.
NOTE:
For a linear or quadratic curve to satisfy these continuity requirements, it must consist of a single segment.

## Examples

- Get Curve Spline Points (C++) (Get_Curve_Spline_Points_Example_CPlusPlus_COM.htm)

## See Also

- `ICurve.GetSplinePts`