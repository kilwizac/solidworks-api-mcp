---
type: method
interface: ISurface
member: IntersectCurve2
returns: System.Boolean
parameters:
  -
    name: OtherCurve
    type: System.Object
    description: Curve
  -
    name: CurveBound
    type: System.Object
    description: Array of 6 doubles representing the start and end points of the curve
  -
    name: PointArray
    type: System.Object
    description: Array of points
  -
    name: TArray
    type: System.Object
    description: Array of parameters on curve
  -
    name: UvArray
    type: System.Object
    description: Array of parameters on surface
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - ISurface.IIntersectCurve2
keywords:
  - intersection
  - curves
  - intersectcurve2
  - isurface
  - surface
  - intersect
  - curve2
  - other
  - curve
  - object
  - bound
  - point
  - array
  - uv
  - boolean
---

# ISurface.IntersectCurve2

Gets a surface-curve intersection.

## Signature

```csharp
System.Boolean IntersectCurve2( 
   System.Object
OtherCurve
,
   System.Object
CurveBound
,
   out System.Object
PointArray
,
   out System.Object
TArray
,
   out System.Object
UvArray
)
```
## Parameters

- `OtherCurve` (System.Object): Curve
- `CurveBound` (System.Object): Array of 6 doubles representing the start and end points of the curve
- `PointArray` (System.Object): Array of points
- `TArray` (System.Object): Array of parameters on curve
- `UvArray` (System.Object): Array of parameters on surface

## Return Value

True if getting the intersection succeeded, false if not

## Remarks

The curves must be bounded.
Visual Basic and C++ Dispatch applications should use this method instead of using
ISurface::GetIntersectCurveCount2
.

## See Also

- `ISurface.IIntersectCurve2`