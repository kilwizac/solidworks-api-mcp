---
type: method
interface: ICoEdge
member: IGetNext
returns: CoEdge
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related:
  - ILoop2.GetCoEdgeCount
  - ILoop2.GetCoEdges
  - ILoop2.GetFirstCoEdge
  - ILoop2.IGetCoEdges
  - ILoop2.IGetFirstCoEdge
keywords:
  - igetnext
  - icoedge
  - co
  - edge
  - next
---

# ICoEdge.IGetNext

Gets the next coedge from the current coedge.

## Signature

```csharp
CoEdge IGetNext()
```
## Parameters

None.

## Return Value

Pointer to the coedge from the current coedge

## Remarks

This method is cyclical; it loops back on itself and does not return NULL.

## See Also

- `ILoop2.GetCoEdgeCount`
- `ILoop2.GetCoEdges`
- `ILoop2.GetFirstCoEdge`
- `ILoop2.IGetCoEdges`
- `ILoop2.IGetFirstCoEdge`