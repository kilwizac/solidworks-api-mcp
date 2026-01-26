---
type: method
interface: ICoEdge
member: IEvaluate
returns: System.Double
parameters:
  -
    name: Param
    type: System.Double
    description: Curve parameter desired (U value desired for evaluation)
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - documents
  - geometry
related:
  - ICoEdge.Evaluate
  - ICoEdge.GetCurveParams
  - ICoEdge.IGetCurveParams
keywords:
  - ievaluate
  - icoedge
  - co
  - edge
  - evaluate
  - param
  - double
---

# ICoEdge.IEvaluate

Obsolete. Superseded by ICoEdge::IEvaluate2.

## Signature

```csharp
System.Double IEvaluate( 
   System.Double
Param
)
```
## Parameters

- `Param` (System.Double): Curve parameter desired (U value desired for evaluation)

## Return Value

Pointer to an array of doubles (see Remarks )

## Remarks

The tangency vector is defined to be in the direction of the coedge.
The format of the return value is an array of 6 doubles:
retval[0] x location on the curve
retval[1] y location on the curve
retval[2] z location on the curve
retval[3] x vector describing the tangency at the parameter location on the coedge
retval[4] y vector describing the tangency at the parameter location on the coedge
retval[5] z vector describing the tangency at the parameter location on the coedge

## See Also

- `ICoEdge.Evaluate`
- `ICoEdge.GetCurveParams`
- `ICoEdge.IGetCurveParams`