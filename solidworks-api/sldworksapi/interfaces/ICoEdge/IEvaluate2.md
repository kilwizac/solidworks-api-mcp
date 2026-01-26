---
type: method
interface: ICoEdge
member: IEvaluate2
returns: System.Double
parameters:
  -
    name: Param
    type: System.Double
    description: Curve parameter desired (U value desired for evaluation)
  -
    name: NumberOfDerivatives
    type: System.Int32
    description: Number of derivatives
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related:
  - ICoEdge.Evaluate2
  - ICoEdge.GetCurveParams
  - ICoEdge.IGetCurveParams
keywords:
  - ievaluate2
  - icoedge
  - co
  - edge
  - evaluate2
  - param
  - double
  - number
  - derivatives
  - int32
---

# ICoEdge.IEvaluate2

Gets the (x,y, z) location and the tangency vector on the coedge at the specified position.

## Signature

```csharp
System.Double IEvaluate2( 
   System.Double
Param
,
   System.Int32
NumberOfDerivatives
)
```
## Parameters

- `Param` (System.Double): Curve parameter desired (U value desired for evaluation)
- `NumberOfDerivatives` (System.Int32): Number of derivatives

## Return Value

Array of doubles (see Remarks )

## Remarks

The tangency vector is defined to be in the direction of the coedge.
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
In pseudo mathematical notation, this can be written as:
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

- `ICoEdge.Evaluate2`
- `ICoEdge.GetCurveParams`
- `ICoEdge.IGetCurveParams`