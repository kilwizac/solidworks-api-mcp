---
type: method
interface: ILoop2
member: GetCoEdgeCount
returns: System.Int32
parameters: []
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
  - getcoedgecount
  - iloop2
  - loop2
  - co
  - edge
  - count
  - int32
  - sense
  - each
  - coedge
  - loop
  - vba
---

# ILoop2.GetCoEdgeCount

Gets the number of coedges in this loop.

## Signature

```csharp
System.Int32 GetCoEdgeCount()
```
## Parameters

None.

## Return Value

Number of coedges in this loop

## Remarks

Call this method before calling
ILoop2::IGetCoEdges
to determine the size of the array for that method.

## Examples

- Get Sense for Each Coedge in a Loop (VBA) (Get_Sense_for_Each_Coedge_in_a_Loop_Example_VB.htm)

## See Also

- `ICoEdge.GetNext`
- `ICoEdge.IGetNext`
- `ILoop2.GetCoEdges`
- `ILoop2.GetFirstCoEdge`
- `ILoop2.IGetFirstCoEdge`