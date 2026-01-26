---
type: method
interface: ICurve
member: IIntersectCurve
returns: System.Double
parameters:
  -
    name: OtherCurve
    type: Curve
    description: Curve to intersect with this curve
  -
    name: ThisStartPoint
    type: System.Double
    description: Start point of this curve
  -
    name: ThisEndPoint
    type: System.Double
    description: End point of this curve
  -
    name: OtherStartPoint
    type: System.Double
    description: Start point of otherCurve
  -
    name: OtherEndPoint
    type: System.Double
    description: End point of otherCurve
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - ICurve.IntersectCurve
keywords:
  - iintersectcurve
  - icurve
  - curve
  - intersect
  - other
  - start
  - point
  - double
  - end
---

# ICurve.IIntersectCurve

Gets a set of points that represent the intersection of two trimmed curves.

## Signature

```csharp
System.Double IIntersectCurve( 
   Curve
OtherCurve
,
   ref System.Double
ThisStartPoint
,
   ref System.Double
ThisEndPoint
,
   ref System.Double
OtherStartPoint
,
   ref System.Double
OtherEndPoint
)
```
## Parameters

- `OtherCurve` (Curve): Curve to intersect with this curve
- `ThisStartPoint` (System.Double): Start point of this curve
- `ThisEndPoint` (System.Double): End point of this curve
- `OtherStartPoint` (System.Double): Start point of otherCurve
- `OtherEndPoint` (System.Double): End point of otherCurve

## Return Value

in-process, unmanaged C++: Pointer to an array of doubles of the intersection points (see Remarks ) VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

The array of doubles returned contains the x, y, z location of the tessellation points and a code for each point that indicates the intersection class:
[
x1, y1, z1, k1, x2, y2, z2, k2....
]
Return codes are defined in
swIntersectionType_e
.
Before calling this method, call
ICurve::IIntersectCurveSize
to determine the size of the array needed for the return values from this method.

## See Also

- `ICurve.IntersectCurve`