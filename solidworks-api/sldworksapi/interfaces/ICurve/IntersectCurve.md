---
type: method
interface: ICurve
member: IntersectCurve
returns: System.Object
parameters:
  -
    name: OtherCurve
    type: System.Object
    description: Curve to intersect with this curve
  -
    name: ThisStartPoint
    type: System.Object
    description: Array containing the start point of this curve
  -
    name: ThisEndPoint
    type: System.Object
    description: Array containing the end point of this curve
  -
    name: OtherStartPoint
    type: System.Object
    description: Array containing the start point of otherCurve
  -
    name: OtherEndPoint
    type: System.Object
    description: Array containing the end point of otherCurve
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - ICurve.IIntersectCurve
  - ICurve.IIntersectCurveSize
keywords:
  - intersectcurve
  - icurve
  - curve
  - intersect
  - other
  - object
  - start
  - point
  - end
---

# ICurve.IntersectCurve

Gets a set of points that represent the intersection of two trimmed curves.

## Signature

```csharp
System.Object IntersectCurve( 
   System.Object
OtherCurve
,
   System.Object
ThisStartPoint
,
   System.Object
ThisEndPoint
,
   System.Object
OtherStartPoint
,
   System.Object
OtherEndPoint
)
```
## Parameters

- `OtherCurve` (System.Object): Curve to intersect with this curve
- `ThisStartPoint` (System.Object): Array containing the start point of this curve
- `ThisEndPoint` (System.Object): Array containing the end point of this curve
- `OtherStartPoint` (System.Object): Array containing the start point of otherCurve
- `OtherEndPoint` (System.Object): Array containing the end point of otherCurve

## Return Value

Array containing the intersection points (see Remarks )

## Remarks

The array of doubles returned contains the x, y, z location of the tessellation points and a code for each point that indicates the intersection class:
[
x1, y1, z1, k1, x2, y2, z2, k2....
]
Return codes are defined in
swIntersectionType_e
.

## See Also

- `ICurve.IIntersectCurve`
- `ICurve.IIntersectCurveSize`