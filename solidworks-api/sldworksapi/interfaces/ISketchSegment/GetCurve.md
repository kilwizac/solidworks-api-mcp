---
type: method
interface: ISketchSegment
member: GetCurve
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - sketches
related:
  - ISketchSegment.IGetCurve
keywords:
  - getcurve
  - isketchsegment
  - sketch
  - segment
  - curve
  - object
  - spline
  - points
  - vba
  - evaluate
  - curves
  - defined
  - space
  - data
  - start
  - end
  - whether
  - trimmed
---

# ISketchSegment.GetCurve

Gets the underlying curve for this sketch segment.

## Signature

```csharp
System.Object GetCurve()
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

- Get Curve Spline Points (VBA) (Get_Curve_Spline_Points_Example_VB.htm)
- Evaluate Curves Defined in Sketch Space (VBA) (Evaluate_Curves_Defined_in_Sketch_Space_Example_VB.htm)
- Get Sketch Segment and Curve Data (VBA) (Get_Sketch_Segment_and_Curve_Data_Example_VB.htm)
- Get Start and End Points of Spline (VBA) (Get_Start_and_End_Points_of_Spline_Example_VB.htm)
- Get Whether Sketch Segment Is Trimmed (VBA) (Get_Whether_Sketch_Segment_is_Trimmed_or_Not_Example_VB.htm)

## See Also

- `ISketchSegment.IGetCurve`