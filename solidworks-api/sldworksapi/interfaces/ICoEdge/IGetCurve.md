---
type: method
interface: ICoEdge
member: IGetCurve
returns: Curve
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related:
  - ICoEdge.GetCurve
keywords:
  - igetcurve
  - icoedge
  - co
  - edge
  - curve
---

# ICoEdge.IGetCurve

Gets the underlying curve of this coedge if the coedge is a result of imprecisely sewing two surfaces together.

## Signature

```csharp
Curve IGetCurve()
```
## Parameters

None.

## Return Value

Pointer to the curve that is attached to this coedge (see Remarks )

## Remarks

This method may return NULL if no geometry is attached to the coedge. The edge may still be accurate, and you can obtain the geometry from the edge using:
ICoEdge::IGetEdge
IEdge::IGetCurve

## See Also

- `ICoEdge.GetCurve`