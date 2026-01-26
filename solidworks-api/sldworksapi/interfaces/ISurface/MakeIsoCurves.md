---
type: method
interface: ISurface
member: MakeIsoCurves
returns: System.Boolean
parameters:
  -
    name: UvRange
    type: System.Object
    description: Array of 4 doubles indicating the range of the surface to use (see Remarks )
  -
    name: Dir
    type: System.Object
    description: Array of 3 doubles indicating the direction of projection on the surface (see Remarks )
  -
    name: Angle
    type: System.Double
    description: Angle relative to Dir where to create the curves
  -
    name: Tol
    type: System.Double
    description: Tolerance of the curves
  -
    name: Curves
    type: System.Object
    description: Array of curves
  -
    name: CurveBounds
    type: System.Object
    description: Array of doubles of size 2*Curves indicating the parametric bounds of the curve
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - ISurface.IGetMakeIsoCurvesCount
  - ISurface.IMakeIsoCurve
  - ISurface.IMakeIsoCurves
  - ISurface.MakeIsoCurve
keywords:
  - makeisocurves
  - isurface
  - surface
  - make
  - iso
  - curves
  - uv
  - range
  - object
  - dir
  - angle
  - double
  - tol
  - curve
  - bounds
  - boolean
---

# ISurface.MakeIsoCurves

Creates curves on a surface.

## Signature

```csharp
System.Boolean MakeIsoCurves( 
   System.Object
UvRange
,
   System.Object
Dir
,
   System.Double
Angle
,
   System.Double
Tol
,
   out System.Object
Curves
,
   out System.Object
CurveBounds
)
```
## Parameters

- `UvRange` (System.Object): Array of 4 doubles indicating the range of the surface to use (see Remarks )
- `Dir` (System.Object): Array of 3 doubles indicating the direction of projection on the surface (see Remarks )
- `Angle` (System.Double): Angle relative to Dir where to create the curves
- `Tol` (System.Double): Tolerance of the curves
- `Curves` (System.Object): Array of curves
- `CurveBounds` (System.Object): Array of doubles of size 2*Curves indicating the parametric bounds of the curve

## Return Value

True if the curves are created on the surface, false if not

## Remarks

The uvRange argument is an array of 4 doubles indicating the minimum and maximum U and V values:
[
u_min, u_max, v_min, v_max
]
The dir argument is an array of 3 doubles representing the unit vector:
[
x, y, z
]

## See Also

- `ISurface.IGetMakeIsoCurvesCount`
- `ISurface.IMakeIsoCurve`
- `ISurface.IMakeIsoCurves`
- `ISurface.MakeIsoCurve`