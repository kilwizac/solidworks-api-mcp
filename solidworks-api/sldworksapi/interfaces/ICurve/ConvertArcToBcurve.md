---
type: method
interface: ICurve
member: ConvertArcToBcurve
returns: System.Object
parameters:
  -
    name: Center
    type: System.Object
    description: Array for the x, y, z coordinates of the center point of the arc
  -
    name: Axis
    type: System.Object
    description: Array for the normal vector of the arc
  -
    name: Start
    type: System.Object
    description: Array for the x, y, z coordinates of the start point of the arc
  -
    name: End
    type: System.Object
    description: Array for the x, y, z coordinates of the end point of the arc
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - ICurve.ConvertLineToBcurve
  - ICurve.GetBCurveParams
  - ICurve.IGetBCurveParams
  - ICurve.MakeBsplineCurve
keywords:
  - convertarctobcurve
  - icurve
  - curve
  - convert
  - arc
  - bcurve
  - center
  - object
  - axis
  - start
  - end
---

# ICurve.ConvertArcToBcurve

Gets the b-spline value representation of the arc.

## Signature

```csharp
System.Object ConvertArcToBcurve( 
   System.Object
Center
,
   System.Object
Axis
,
   System.Object
Start
,
   System.Object
End
)
```
## Parameters

- `Center` (System.Object): Array for the x, y, z coordinates of the center point of the arc
- `Axis` (System.Object): Array for the normal vector of the arc
- `Start` (System.Object): Array for the x, y, z coordinates of the start point of the arc
- `End` (System.Object): Array for the x, y, z coordinates of the end point of the arc

## Return Value

Array for the b-spline representation of the arc

## Remarks

Given coordinates of the center, start, end points and the normal vector of an arc, this method returns the b-spline representation of the arc.
The returned data are doubles arranged in the following order:
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
) knot values. If the original curve is periodic, then the data is returned in a non-periodic form with extra knots inserted at the curve ends.
ControlPoints
List of control points output in (
NumControlPoints
) vectors of dimension dim.
For non-rational b-spline, control point coordinates are output as [x0,y0,z0,x1,y1,z1,.........].
For rational b-spline, control point coordinates and the weight are output as [x0,y0,z0,w0,x1,y1,z1,w1,........], where w is the weight for the point.

## See Also

- `ICurve.ConvertLineToBcurve`
- `ICurve.GetBCurveParams`
- `ICurve.IGetBCurveParams`
- `ICurve.MakeBsplineCurve`