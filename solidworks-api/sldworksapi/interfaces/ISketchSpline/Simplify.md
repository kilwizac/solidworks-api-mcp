---
type: method
interface: ISketchSpline
member: Simplify
returns: void
parameters:
  -
    name: ToleranceIn
    type: System.Double
    description: Smoothing factor, in meters, to use to simplify sketch
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - sketches
related: []
keywords:
  - simplify
  - isketchspline
  - sketch
  - spline
  - tolerance
  - double
  - void
  - create
  - equation
  - driven
  - curve
  - vba
  - vb
  - net
---

# ISketchSpline.Simplify

Reduces the number of points in a spline to increase system performance in models with complex spline curves.

## Signature

```csharp
void Simplify( 
   System.Double
ToleranceIn
)
```
## Parameters

- `ToleranceIn` (System.Double): Smoothing factor, in meters, to use to simplify sketch

## Return Value

Unknown.

## Remarks

The sketch must be in edit mode and a spline must be preselected.

## Examples

- Create Equation-driven Curve (VBA) (Create_Equation-driven_Curve_Example_VB.htm)
- Create Equation-driven Curve (VB.NET) (Create_Equation-driven_Curve_Example_VBNET.htm)
- Create Equation-driven Curve (C#) (Create_Equation-driven_Curve_Example_CSharp.htm)