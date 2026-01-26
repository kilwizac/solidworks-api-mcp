---
type: method
interface: ISketchSpline
member: GetControlVertexWeights
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - geometry
  - sketches
related:
  - ISketchSpline.SetControlVertexWeights
keywords:
  - getcontrolvertexweights
  - isketchspline
  - sketch
  - spline
  - control
  - vertex
  - weights
  - object
  - edit
  - vba
---

# ISketchSpline.GetControlVertexWeights

Gets the weights of the control vetexes of this rational spline.

## Signature

```csharp
System.Object GetControlVertexWeights()
```
## Parameters

None.

## Return Value

Array of control vertex weights

## Remarks

This method:
is valid only if
ISketchSpline::IsRationalCurve
is true.
returns an empty array if the spline is non-rational.

## Examples

- Edit Spline (VBA) (Edit_Spline_Example_VB.htm)

## See Also

- `ISketchSpline.SetControlVertexWeights`