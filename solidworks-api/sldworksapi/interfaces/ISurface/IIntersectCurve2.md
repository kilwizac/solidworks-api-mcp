---
type: method
interface: ISurface
member: IIntersectCurve2
returns: System.Boolean
parameters:
  -
    name: OtherCurve
    type: Curve
    description: Curve
  -
    name: CurveBound
    type: System.Double
    description: Array of 6 doubles representing the start and end points of the curve
  -
    name: PointCount
    type: System.Int32
    description: Number of points
  -
    name: PointArray
    type: System.Double
    description: Array of points of size PointCount*3
  -
    name: TArray
    type: System.Double
    description: Array of parameters on curve of size PointCount
  -
    name: UvArray
    type: System.Double
    description: Array of parameters on surface of size PointCount*2
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - ISurface.IntersectCurve2
keywords:
  - intersection
  - curves
  - iintersectcurve2
  - isurface
  - surface
  - intersect
  - curve2
  - other
  - curve
  - bound
  - double
  - point
  - count
  - int32
  - array
  - uv
  - boolean
---

# ISurface.IIntersectCurve2

Gets a surface-curve intersection.

## Signature

```csharp
System.Boolean IIntersectCurve2( 
   Curve
OtherCurve
,
   ref System.Double
CurveBound
,
   System.Int32
PointCount
,
   out System.Double
PointArray
,
   out System.Double
TArray
,
   out System.Double
UvArray
)
```
## Parameters

- `OtherCurve` (Curve): Curve
- `CurveBound` (System.Double): Array of 6 doubles representing the start and end points of the curve
- `PointCount` (System.Int32): Number of points
- `PointArray` (System.Double): Array of points of size PointCount*3
- `TArray` (System.Double): Array of parameters on curve of size PointCount
- `UvArray` (System.Double): Array of parameters on surface of size PointCount*2

## Return Value

True if getting the intersection succeeded, false if not

## Remarks

The curves must be bounded.
Before calling this method, call
ISurface::GetIntersectCurveCount2
to get the number of points for this surface-curve intersection.

## See Also

- `ISurface.IntersectCurve2`