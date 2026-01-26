---
type: method
interface: ICurve
member: IIntersectCurveSize
returns: System.Int32
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
  - iintersectcurvesize
  - icurve
  - curve
  - intersect
  - size
  - other
  - start
  - point
  - double
  - end
  - int32
---

# ICurve.IIntersectCurveSize

Gets the size of the array required by ICurve::IIntersectCurve.

## Signature

```csharp
System.Int32 IIntersectCurveSize( 
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

Size of the array needed to contain the return values of ICurve::IIntersectCurve

## Remarks

To get the actual intersection points, call
ICurve::IIntersectCurve
.

## See Also

- `ICurve.IntersectCurve`