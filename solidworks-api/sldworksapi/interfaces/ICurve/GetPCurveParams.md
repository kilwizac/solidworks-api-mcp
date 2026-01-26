---
type: method
interface: ICurve
member: GetPCurveParams
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - documents
related:
  - ICurve.IGetPCurveParams
  - ICurve.IGetPCurveParamsSize
  - ICurve.Identity
keywords:
  - getpcurveparams
  - icurve
  - curve
  - params
  - object
---

# ICurve.GetPCurveParams

Obsolete. Superseded by ICurve::GetPCurveParams2.

## Signature

```csharp
System.Object GetPCurveParams()
```
## Parameters

None.

## Return Value

Array of doubles describing the parameters of the curve (see Remarks )

## Remarks

This method returns the curve as a series of segments, each of which has this form:
(w0*a0 + w1*a1*t + w2*a2*t**2 + w3*a3*t**3)
p(t) = --------------------------------------------
(w0 + w1*t + w2*t**2 + w3*t**3)
Where w is the weight coefficient and a is the polynomial coefficient.
The coefficients returned are vectors of dimensions "dim". For example, if the curve is rational, then
dimension
= 4, and the coefficients returned for each segment are as follows:
(a0x,a0y,a0z,w0),(a1x,a1y,a1z,w1)...
However, if the curve is returned as non-rational, then
dimension
= 3, and its coefficients are:
(a0x,a0y,a0z),(a1x,a1y,a1z),...
The size of the return value array is (3 +
NumberKnots
+
NumberSegments
x
Order
x
Dimension
).
The array is as follows:
[
packedDouble1
,
packedDouble2
,
packedDouble3, knot1
,
knot2
,...,
CoefficientsSegment1
[
Dimension
],
CoefficientsSegment2
[
Dimension
],...
]
where:
packedDouble1
: Integer pair containing
Reserved
and
Order
packedDouble2
: Integer pair containing
NumberSegments
and
Periodicity
packedDouble3
: Integer pair containing
NumberKnots
and
Dimension
knot1
knot2
...
CoefficientsSegment1
[
Dimension
]
CoefficientsSegment2
[
Dimension
]
...
The coefficients for each segment start with the constant term and end with the term of highest degree (for example, ConstantX, ConstantY, ConstantZ, AX, AY, AZ, BX, BY, BZ). The total number of coefficients is:
(
NumberSegments
) x (
Order
) x (
Dimension
).

## See Also

- `ICurve.IGetPCurveParams`
- `ICurve.IGetPCurveParamsSize`
- `ICurve.Identity`