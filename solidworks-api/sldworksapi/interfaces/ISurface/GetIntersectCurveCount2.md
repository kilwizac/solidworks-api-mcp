---
type: method
interface: ISurface
member: GetIntersectCurveCount2
returns: System.Int32
parameters:
  -
    name: OtherCurve
    type: Curve
    description: Curve
  -
    name: CurveBound
    type: System.Double
    description: Array of 6 doubles representing the start and end points of the curve
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - ISurface.IIntersectCurve2
keywords:
  - getintersectcurvecount2
  - isurface
  - surface
  - intersect
  - curve
  - count2
  - other
  - bound
  - double
  - int32
---

# ISurface.GetIntersectCurveCount2

Gets the number of points for a surface-curve intersection.

## Signature

```csharp
System.Int32 GetIntersectCurveCount2( 
   Curve
OtherCurve
,
   ref System.Double
CurveBound
)
```
## Parameters

- `OtherCurve` (Curve): Curve
- `CurveBound` (System.Double): Array of 6 doubles representing the start and end points of the curve

## Return Value

Number of points

## Remarks

Visual Basic and C++ Dispatch applications should use
ISurface::IntersectCurve2
instead of this method.

## See Also

- `ISurface.IIntersectCurve2`