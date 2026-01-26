---
type: property
interface: ISketchSpline
member: CurveDegree
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - sketches
related:
  - ISketchSpline.IsStyleSpline
keywords:
  - splines
  - style
  - bezier
  - degrees
  - curve
  - see
  - also
  - icurve
  - spline
  - curvedegree
  - isketchspline
  - sketch
  - degree
  - int32
readonly: null
---

# ISketchSpline.CurveDegree

Gets or sets the degree of curve for this Bezier curve style spline.

## Signature

```csharp
System.Int32 CurveDegree {get; set;}
```
## Parameters

None.

## Return Value

Degree of curve or -1 if not a Bezier curve style spline

## Remarks

This property is only valid for a style spline whose
curve type
is
swStyleSplineCurveType_e
.BezierCurve.

## See Also

- `ISketchSpline.IsStyleSpline`