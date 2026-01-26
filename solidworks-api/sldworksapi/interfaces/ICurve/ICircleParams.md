---
type: property
interface: ICurve
member: ICircleParams
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - ICurve.CircleParams
  - ICurve.Identity
  - ICurve.IsCircle
keywords:
  - icircleparams
  - icurve
  - curve
  - circle
  - params
  - double
readonly: true
---

# ICurve.ICircleParams

Gets the parameters of a curve that is a circle.

## Signature

```csharp
System.Double ICircleParams {get;}
```
## Parameters

None.

## Return Value

Pointer to an array of doubles (see Remarks )

## Remarks

To determine if a circular edge is a complete circle or an arc, use
IEdge::IGetCurveParams2
.
The return value is the following array of 7 double values:
[
center.x, center.y, center.z, axis.x, axis.y, axis.z, radius
]
Center and radius values are in meters.

## See Also

- `ICurve.CircleParams`
- `ICurve.Identity`
- `ICurve.IsCircle`