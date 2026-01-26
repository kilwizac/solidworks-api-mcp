---
type: method
interface: ILoop2
member: EnumCoEdges
returns: EnumCoEdges
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related:
  - ILoop2.GetFirstCoEdge
  - ILoop2.IGetFirstCoEdge
keywords:
  - enumcoedges
  - iloop2
  - loop2
  - co
  - edges
---

# ILoop2.EnumCoEdges

Enumerates the coedges in a loop.

## Signature

```csharp
EnumCoEdges EnumCoEdges()
```
## Parameters

None.

## Return Value

Coedges enumeration

## Remarks

The
ICoEdge
objects are returned in a CW or CCW manner based on the direction of the
ILoop2
.
The loop direction is determined as follows: if a loop is viewed along its direction, with the face normal pointing upwards, then the face that owns the loop is to the left. This means that inner loops are CW and outer loops are CCW. To determine if a loop is an outer loop, see
ILoop2::IsOuter
.
The coedge direction always aligns with the direction of the ILoop2.

## See Also

- `ILoop2.GetFirstCoEdge`
- `ILoop2.IGetFirstCoEdge`