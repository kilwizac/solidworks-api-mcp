---
type: method
interface: ILoop2
member: IGetFirstCoEdge
returns: CoEdge
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related:
  - ILoop2.EnumCoEdges
  - ILoop2.GetCoEdgeCount
  - ILoop2.GetCoEdges
  - ILoop2.GetFirstCoEdge
keywords:
  - igetfirstcoedge
  - iloop2
  - loop2
  - first
  - co
  - edge
---

# ILoop2.IGetFirstCoEdge

Gets the first coedge in the loop.

## Signature

```csharp
CoEdge IGetFirstCoEdge()
```
## Parameters

None.

## Return Value

First coedge in loop

## Remarks

The
ICoEdge
objects are returned in a CW or CCW manner based on the direction of the
ILoop2
.
The loop direction is determined as follows: if a loop is viewed along its direction, with the face normal pointing upwards, then the face that owns the loop is to the left. This means that inner loops are CW and outer loops are CCW. To determine if a loop is an outer loop, see
ILoop2::IsOuter
.
The coedge direction always aligns with the direction of the loop.

## See Also

- `ILoop2.EnumCoEdges`
- `ILoop2.GetCoEdgeCount`
- `ILoop2.GetCoEdges`
- `ILoop2.GetFirstCoEdge`