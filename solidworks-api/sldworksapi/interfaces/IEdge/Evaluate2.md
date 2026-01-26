---
type: method
interface: IEdge
member: Evaluate2
returns: System.Object
parameters:
  -
    name: Parameter
    type: System.Double
    description: Curve parameter U value (see Remarks )
  -
    name: NumberOfDerivatives
    type: System.Int32
    description: Number of derivatives (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related: []
keywords:
  - evaluate2
  - iedge
  - edge
  - parameter
  - double
  - number
  - derivatives
  - int32
  - object
---

# IEdge.Evaluate2

Evaluates the edge for the specified U parameter.

## Signature

```csharp
System.Object Evaluate2( 
   System.Double
Parameter
,
   System.Int32
NumberOfDerivatives
)
```
## Parameters

- `Parameter` (System.Double): Curve parameter U value (see Remarks )
- `NumberOfDerivatives` (System.Int32): Number of derivatives (see Remarks )

## Return Value

Array of doubles (see Remarks )

## Remarks

Use
IEdge::GetCurveParams3
to determine the valid range of U parameter values for Parameter.
The returned array contains ((NumberOfDerivatives + 1) * 3) + 1 doubles:
[
evaluated_point
]
,
[
evaluated_derivative_1
]
,...
[
evaluated_derivative_NumberOfDerivatives
,
[
status_code
]
where
status_code
is a packed double. After unpacking
status_code
into two longs, the lower long value is 1 for success or 0 for error. See the Example.
If curve type
ICurve::Identity
is...
Then the maximum number of derivatives is...
Line/circle/ellipse
2
Intersection curve
2
Constant parameter line
Determined by underlying surface
SP-curve
2
B-curve
Any number
For a curve of type swCurveTypes_e::TRIMMED_TYPE, the number of derivatives is determined by the base curve as obtained from
ICurve::GetBaseCurve
.