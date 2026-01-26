---
type: property
interface: ISketchManager
member: CurvatureScale
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - sketches
related:
  - ISketchManager.CurvatureDensity
  - ISketchSpline.ShowCurvatureCombs
keywords:
  - sketch
  - see
  - also
  - isketch
  - splines
  - curvature
  - combs
  - curvaturescale
  - isketchmanager
  - manager
  - scale
  - double
readonly: null
---

# ISketchManager.CurvatureScale

Gets or sets the scaling factor by which to adjust the size of the curvature combs for this spline.

## Signature

```csharp
System.Double CurvatureScale {get; set;}
```
## Parameters

None.

## Return Value

Curvature density of the curvature combs for this spline; valid values from 0 - 100

## See Also

- `ISketchManager.CurvatureDensity`
- `ISketchSpline.ShowCurvatureCombs`