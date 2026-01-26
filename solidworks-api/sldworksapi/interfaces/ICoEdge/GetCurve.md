---
type: method
interface: ICoEdge
member: GetCurve
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related:
  - ICoEdge.IGetCurve
keywords:
  - getcurve
  - icoedge
  - co
  - edge
  - curve
  - object
---

# ICoEdge.GetCurve

Gets the underlying curve of this coedge if the coedge is a result of imprecisely sewing two surfaces together.

## Signature

```csharp
System.Object GetCurve()
```
## Parameters

None.

## Return Value

Curve that is attached to this coedge (see Remarks )

## Remarks

This method may return Nothing if no geometry is attached to the coedge. The edge may still be accurate, and you can obtain the geometry from the edge using:
ICoEdge::GetEdge
IEdge::GetCurve

## See Also

- `ICoEdge.IGetCurve`