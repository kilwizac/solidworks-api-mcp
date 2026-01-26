---
type: method
interface: ISurface
member: IGetMakeIsoCurvesCount
returns: System.Int32
parameters:
  -
    name: UvRange
    type: System.Double
    description: Array of 4 doubles indicating the range of surface to use (see Remarks )
  -
    name: Dir
    type: System.Double
    description: Array of 3 doubles indicating the direction of the projection on the surface (see Remarks)
  -
    name: Angle
    type: System.Double
    description: Angle relative to Dir where to create the curves
  -
    name: Tol
    type: System.Double
    description: Tolerance of the curves to create
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
  - igetmakeisocurvescount
  - isurface
  - surface
  - make
  - iso
  - curves
  - count
  - uv
  - range
  - double
  - dir
  - angle
  - tol
  - int32
---

# ISurface.IGetMakeIsoCurvesCount

Gets the number of curves that represent the ISO line of a given direction.

## Signature

```csharp
System.Int32 IGetMakeIsoCurvesCount( 
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
)
```
## Parameters

- `UvRange` (System.Double): Array of 4 doubles indicating the range of surface to use (see Remarks )
- `Dir` (System.Double): Array of 3 doubles indicating the direction of the projection on the surface (see Remarks)
- `Angle` (System.Double): Angle relative to Dir where to create the curves
- `Tol` (System.Double): Tolerance of the curves to create

## Return Value

Number of curves to create

## Remarks

The uvRange argument is an array of 4 doubles indicating the minimum and maximum U and V values:
[
u_min, u_max, v_min, v_max
]
The dir argument is an array of 3 doubles representing the unit vector:
[
x, y, z
]
Call this method before calling
ISurface::IMakeIsoCurves
.

## See Also

- `ISurface.IMakeIsoCurve`
- `ISurface.MakeIsoCurve`
- `ISurface.MakeIsoCurves`