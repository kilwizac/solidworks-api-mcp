---
type: property
interface: ISketchSpline
member: ShowCurvatureCombs
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - sketches
related:
  - ISketchManager.CurvatureDensity
  - ISketchSpline.AddCurvatureControl
  - ISplineHandle.CurvatureControlled
  - ISplineHandle.RadiusOfCurvature
keywords:
  - showcurvaturecombs
  - isketchspline
  - sketch
  - spline
  - show
  - curvature
  - combs
  - boolean
readonly: null
---

# ISketchSpline.ShowCurvatureCombs

Gets or sets whether to show curvature combs.

## Signature

```csharp
System.Boolean ShowCurvatureCombs {get; set;}
```
## Parameters

None.

## Return Value

True to show curvature combs, false to not

## Remarks

Use
ISketchManager::CurvatureScale
to adjust the size of all of the curvature combs of this spline.

## See Also

- `ISketchManager.CurvatureDensity`
- `ISketchSpline.AddCurvatureControl`
- `ISplineHandle.CurvatureControlled`
- `ISplineHandle.RadiusOfCurvature`