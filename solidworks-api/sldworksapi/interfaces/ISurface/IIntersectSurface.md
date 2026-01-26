---
type: method
interface: ISurface
member: IIntersectSurface
returns: System.Boolean
parameters:
  -
    name: OtherSurf
    type: Surface
    description: Intersecting surface
  -
    name: CurveCount
    type: System.Int32
    description: Number of curves
  -
    name: CurveArray
    type: Curve
    description: Array of curves of size CurveCount
  -
    name: BoundsArray
    type: System.Double
    description: Array of curve bounds of size CurveCount*2
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - ISurface.IntersectSurface
keywords:
  - iintersectsurface
  - isurface
  - surface
  - intersect
  - other
  - surf
  - curve
  - count
  - int32
  - array
  - bounds
  - double
  - boolean
---

# ISurface.IIntersectSurface

Gets a surface-surface intersection.

## Signature

```csharp
System.Boolean IIntersectSurface( 
   Surface
OtherSurf
,
   System.Int32
CurveCount
,
   out Curve
CurveArray
,
   out System.Double
BoundsArray
)
```
## Parameters

- `OtherSurf` (Surface): Intersecting surface
- `CurveCount` (System.Int32): Number of curves
- `CurveArray` (Curve): Array of curves of size CurveCount
- `BoundsArray` (System.Double): Array of curve bounds of size CurveCount*2

## Return Value

True if successful, false if not

## Remarks

Before calling this method, call
ISurface::GetIntersectSurfaceCount
to get the curve count for this surface-surface intersection.

## See Also

- `ISurface.IntersectSurface`