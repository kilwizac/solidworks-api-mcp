---
type: method
interface: IModeler
member: ProjectCurveOnSurface
returns: Curve
parameters:
  -
    name: CurveIn
    type: Curve
    description: Curve to project
  -
    name: SurfaceIn
    type: Surface
    description: Surface on which to project curve
  -
    name: ProjDir
    type: MathVector
    description: Direction which to project curve
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - ISurface.IMakeIsoCurves
  - ISurface.MakeIsoCurve
keywords:
  - curve
  - see
  - also
  - icurve
  - projected
  - projectcurveonsurface
  - imodeler
  - modeler
  - project
  - surface
  - proj
  - dir
  - math
  - vector
---

# IModeler.ProjectCurveOnSurface

Projects a curve on a surface.

## Signature

```csharp
Curve ProjectCurveOnSurface( 
   Curve
CurveIn
,
   Surface
SurfaceIn
,
   MathVector
ProjDir
)
```
## Parameters

- `CurveIn` (Curve): Curve to project
- `SurfaceIn` (Surface): Surface on which to project curve
- `ProjDir` (MathVector): Direction which to project curve

## Return Value

Projected curve

## Remarks

This method does not support non-spline curves. You must convert any non-spline input curves to splines before using this method.

## See Also

- `ISurface.IMakeIsoCurves`
- `ISurface.MakeIsoCurve`