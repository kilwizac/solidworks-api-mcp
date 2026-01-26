---
type: method
interface: ICurve
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
related: []
keywords:
  - evaluate2
  - icurve
  - curve
  - parameter
  - double
  - number
  - derivatives
  - int32
  - object
---

# ICurve.Evaluate2

Evaluates the curve at the specified parameter of the curve.

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

To determine the valid range of U parameter values for Parameter, use
ICurve::GetEndParams
or
IEdge::GetCurveParams3
.
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
In terms of the number of derivatives that can be returned for a curve type:
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