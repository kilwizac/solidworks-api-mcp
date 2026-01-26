---
type: method
interface: ILoop2
member: IGetCoEdges
returns: CoEdge
parameters:
  -
    name: NumCoEdges
    type: System.Int32
    description: Number of coedges in this loop
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related:
  - ICoEdge.GetNext
  - ICoEdge.IGetNext
  - ILoop2.GetCoEdges
  - ILoop2.GetFirstCoEdge
  - ILoop2.IGetFirstCoEdge
keywords:
  - igetcoedges
  - iloop2
  - loop2
  - co
  - edges
  - num
  - int32
  - edge
---

# ILoop2.IGetCoEdges

Gets the coedges in this loop.

## Signature

```csharp
CoEdge IGetCoEdges( 
   System.Int32
NumCoEdges
)
```
## Parameters

- `NumCoEdges` (System.Int32): Number of coedges in this loop

## Return Value

in-process, unmanaged C++: Pointer to an array of coedges VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

Before calling this method, call
ILoop2::GetCoEdgeCount
to get NumCoEdges.

## See Also

- `ICoEdge.GetNext`
- `ICoEdge.IGetNext`
- `ILoop2.GetCoEdges`
- `ILoop2.GetFirstCoEdge`
- `ILoop2.IGetFirstCoEdge`