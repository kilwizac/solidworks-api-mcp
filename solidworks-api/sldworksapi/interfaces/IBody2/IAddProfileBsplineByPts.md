---
type: method
interface: IBody2
member: IAddProfileBsplineByPts
returns: Curve
parameters:
  -
    name: NumPoints
    type: System.Int32
    description: Number of B-spline points
  -
    name: PointArray
    type: System.Double
    description: 0-based array of 3 * NumPoints doubles
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related:
  - IBody2.AddProfileBsplineByPts
keywords:
  - iaddprofilebsplinebypts
  - ibody2
  - body2
  - add
  - profile
  - bspline
  - pts
  - num
  - points
  - int32
  - point
  - array
  - double
  - curve
---

# IBody2.IAddProfileBsplineByPts

Adds a profile B-spline.

## Signature

```csharp
Curve IAddProfileBsplineByPts( 
   System.Int32
NumPoints
,
   ref System.Double
PointArray
)
```
## Parameters

- `NumPoints` (System.Int32): Number of B-spline points
- `PointArray` (System.Double): 0-based array of 3 * NumPoints doubles

## Return Value

Pointer to the profile B-spline, ICurve

## See Also

- `IBody2.AddProfileBsplineByPts`