---
type: method
interface: ISketchSegment
member: IGetCurve
returns: Curve
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - sketches
related:
  - ISketchSegment.GetCurve
keywords:
  - igetcurve
  - isketchsegment
  - sketch
  - segment
  - curve
  - spline
  - points
---

# ISketchSegment.IGetCurve

Gets the underlying curve for this sketch segment.

## Signature

```csharp
Curve IGetCurve()
```
## Parameters

None.

## Return Value

Underlying curve

## Remarks

This operation only supports for
ellipse
,
line
,
arc
,
spline
, and
parabola
sketch items. All other sketch segment types will return NULL, and S_false for COM applications.
NOTE:
Support for ellipse, line, and arc segments was introduced in SOLIDWORKS 2004.

## Examples

- Get Curve Spline Points (C++) (Get_Curve_Spline_Points_Example_CPlusPlus_COM.htm)

## See Also

- `ISketchSegment.GetCurve`