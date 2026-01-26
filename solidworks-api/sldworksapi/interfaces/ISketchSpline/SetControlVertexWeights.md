---
type: method
interface: ISketchSpline
member: SetControlVertexWeights
returns: System.Boolean
parameters:
  -
    name: ControlWeightValues
    type: System.Object
    description: Array of control vertex weights
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - geometry
  - sketches
related:
  - ISketchSpline.GetControlVertexWeights
keywords:
  - setcontrolvertexweights
  - isketchspline
  - sketch
  - spline
  - control
  - vertex
  - weights
  - weight
  - values
  - object
  - boolean
---

# ISketchSpline.SetControlVertexWeights

Sets the weights of the control vetexes of this rational spline.

## Signature

```csharp
System.Boolean SetControlVertexWeights( 
   System.Object
ControlWeightValues
)
```
## Parameters

- `ControlWeightValues` (System.Object): Array of control vertex weights

## Return Value

True if weights successfully set, false if not

## Remarks

This method:
is valid only if
ISketchSpline::IsRationalCurve
is true.
returns false if the number of weights in ControlWeightValues is not equal to the number of control vertexes of the spline.

## See Also

- `ISketchSpline.GetControlVertexWeights`