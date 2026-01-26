---
type: method
interface: ISilhouetteEdge
member: GetCurve
returns: Curve
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
  - geometry
related:
  - ISilhouetteEdge.GetEndPoint
  - ISilhouetteEdge.GetStartPoint
keywords:
  - getcurve
  - isilhouetteedge
  - silhouette
  - edge
  - curve
---

# ISilhouetteEdge.GetCurve

Gets the curve for this silhouette edge.

## Signature

```csharp
Curve GetCurve()
```
## Parameters

None.

## Return Value

Curve

## Remarks

After getting the curve, then you can create annotations on that curve.

## See Also

- `ISilhouetteEdge.GetEndPoint`
- `ISilhouetteEdge.GetStartPoint`