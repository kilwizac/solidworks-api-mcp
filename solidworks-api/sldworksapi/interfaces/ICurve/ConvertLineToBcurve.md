---
type: method
interface: ICurve
member: ConvertLineToBcurve
returns: System.Object
parameters:
  -
    name: StartPoint
    type: System.Object
    description: Array values for the coordinates of the start point of the line
  -
    name: EndPoint
    type: System.Object
    description: Array values for the coordinates of the end point of the line
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - ICurve.ConvertArcToBcurve
  - ICurve.GetBCurveParams
  - ICurve.IGetBCurveParams
  - ICurve.IsLine
  - ICurve.MakeBsplineCurve
keywords:
  - convertlinetobcurve
  - icurve
  - curve
  - convert
  - line
  - bcurve
  - start
  - point
  - object
  - end
---

# ICurve.ConvertLineToBcurve

Converts the specified line into a b-spline curve.

## Signature

```csharp
System.Object ConvertLineToBcurve( 
   System.Object
StartPoint
,
   System.Object
EndPoint
)
```
## Parameters

- `StartPoint` (System.Object): Array values for the coordinates of the start point of the line
- `EndPoint` (System.Object): Array values for the coordinates of the end point of the line

## Return Value

Array values giving the b-spline representation of the line

## Remarks

Given coordinates of two end points of a line, this method returns the b-spline representation of the line. The returned data are doubles arranged in the following order:
dim, order
Two integers packed into a double.
dim
Dimension of the control point data.
If dim=3 (non-rational), control point coordinates are returned as [x0,y0,z0,x1,y1,z1,.....].
If dim=4 (rational), control point coordinates are returned as [x0,y0,z0,w0,x1,y1,z1,w1,.....], where w is the weight for the point.
order
Order of the b-spline returned.
NumControlPoints, Periodic
Two integers packed into a double.
NumControlPoints
Number of control points for the b-spline.
Periodic
True if the b-spline is periodic.
Knots
Knot vectors. The Knot array contains (
NumControlPoints
+
order
) knot values. If the original curve is periodic, then the data is
returned in a non-periodic form with extra knots inserted at the curve ends.
ControlPoints
List of control points output in (
NumControlPoints
) vectors of dimension dim.
For non-rational b-spline, control point coordinates are output as [x0,y0,z0,x1,y1,z1,.........].
For rational b-spline, control point coordinates and the weight are output as [x0,y0,z0,w0,x1,y1,z1,w1,........], where w is the weight for the point.

## See Also

- `ICurve.ConvertArcToBcurve`
- `ICurve.GetBCurveParams`
- `ICurve.IGetBCurveParams`
- `ICurve.IsLine`
- `ICurve.MakeBsplineCurve`