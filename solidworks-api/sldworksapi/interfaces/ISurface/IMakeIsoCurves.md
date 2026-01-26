---
type: method
interface: ISurface
member: IMakeIsoCurves
returns: System.Boolean
parameters:
  -
    name: UvRange
    type: System.Double
    description: Array of 4 doubles indicating the range of the surface to use (see Remarks )
  -
    name: Dir
    type: System.Double
    description: Array of 3 doubles indicating the direction of projection on the surface (see Remarks)
  -
    name: Angle
    type: System.Double
    description: Angle relative to dir where to create the curves
  -
    name: Tol
    type: System.Double
    description: Tolerance of the curves
  -
    name: CurveCount
    type: System.Int32
    description: Number of curves to create (see Remarks )
  -
    name: Curves
    type: Curve
    description: Array of curves of size CurveCount
  -
    name: CurveBounds
    type: System.Double
    description: Array of doubles of size 2*Curves indicating the parametric bounds of the curve
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - ISurface.IMakeIsoCurve
  - ISurface.MakeIsoCurve
  - ISurface.MakeIsoCurves
keywords:
  - imakeisocurves
  - isurface
  - surface
  - make
  - iso
  - curves
  - uv
  - range
  - double
  - dir
  - angle
  - tol
  - curve
  - count
  - int32
  - bounds
  - boolean
---

# ISurface.IMakeIsoCurves

Creates curves on a surface.

## Signature

```csharp
System.Boolean IMakeIsoCurves( 
   ref System.Double
UvRange
,
   ref System.Double
Dir
,
   System.Double
Angle
,
   System.Double
Tol
,
   System.Int32
CurveCount
,
   out Curve
Curves
,
   out System.Double
CurveBounds
)
```
## Parameters

- `UvRange` (System.Double): Array of 4 doubles indicating the range of the surface to use (see Remarks )
- `Dir` (System.Double): Array of 3 doubles indicating the direction of projection on the surface (see Remarks)
- `Angle` (System.Double): Angle relative to dir where to create the curves
- `Tol` (System.Double): Tolerance of the curves
- `CurveCount` (System.Int32): Number of curves to create (see Remarks )
- `Curves` (Curve): Array of curves of size CurveCount
- `CurveBounds` (System.Double): Array of doubles of size 2*Curves indicating the parametric bounds of the curve

## Return Value

True if curves are created on the surface, false if not

## Remarks

The UvRange argument is an array of 4 doubles indicating the minimum and maximum U and V values:
[
u_min, u_max, v_min, v_max
]
The dir argument is an array of 3 doubles representing the unit vector:
[
x, y, z
]
Before calling this method, call
ISurface::IGetMakeIsoCurvesCount
.

## See Also

- `ISurface.IMakeIsoCurve`
- `ISurface.MakeIsoCurve`
- `ISurface.MakeIsoCurves`