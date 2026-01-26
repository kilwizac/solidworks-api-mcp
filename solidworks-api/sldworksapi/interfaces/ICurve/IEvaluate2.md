---
type: method
interface: ICurve
member: IEvaluate2
returns: System.Double
parameters:
  -
    name: Parameter
    type: System.Double
    description: Curve parameter
  -
    name: NumberOfDerivatives
    type: System.Int32
    description: Number of derivatives
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - ICurve.Evaluate2
keywords:
  - ievaluate2
  - icurve
  - curve
  - evaluate2
  - parameter
  - double
  - number
  - derivatives
  - int32
---

# ICurve.IEvaluate2

Evaluates the curve at the specified parameter of the curve.

## Signature

```csharp
System.Double IEvaluate2( 
   System.Double
Parameter
,
   System.Int32
NumberOfDerivatives
)
```
## Parameters

- `Parameter` (System.Double): Curve parameter
- `NumberOfDerivatives` (System.Int32): Number of derivatives

## Return Value

Array of doubles (see Remarks )

## Remarks

To determine a valid parameter range, use
ICurve::GetEndParams
or
IEdge::GetCurveParams2
.
The format of the return value is an array of (NumberOfDerivatives + 1) * 3 doubles:
[
evaluated point
]
,
[
evaluated derivative 1
]
,...
[
evaluated derivative NumberOfDerivatives
]
In pseudo mathematical notation, this could be written as:
P(t)
P(t)/dt
P(t)/dtdt ..........
In terms of the number of derivatives that can be returned for a curve type, you could write:
Curve type
Maximum number of derivatives
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
where the curve type is from
ICurve::Identity
.
For a curve of type swCurveTypes_e::TRIMMED_TYPE, the number of derivatives is determined by the base curve as obtained from
ICurve::GetBaseCurve
.

## See Also

- `ICurve.Evaluate2`