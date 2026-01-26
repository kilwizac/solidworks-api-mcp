---
type: property
interface: ISketchManager
member: CurvatureDensity
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - sketches
related:
  - ISketchManager.CurvatureScale
  - ISketchSpline.ShowCurvatureCombs
keywords:
  - curvature
  - combs
  - splines
  - sketch
  - see
  - also
  - isketch
  - curvaturedensity
  - isketchmanager
  - manager
  - density
  - int32
readonly: null
---

# ISketchManager.CurvatureDensity

Gets or sets the scaling factor by which to adjust the density of the curvature combs for this spline.

## Signature

```csharp
System.Int32 CurvatureDensity {get; set;}
```
## Parameters

None.

## Return Value

Curvature density of the curvature combs for this spline; valid values from 0 - 100

## See Also

- `ISketchManager.CurvatureScale`
- `ISketchSpline.ShowCurvatureCombs`