---
type: method
interface: IBody2
member: IGetEdges
returns: Edge
parameters:
  -
    name: Count
    type: System.Int32
    description: Number of edges
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related:
  - IBody2.GetEdges
  - IModelDocExtension.SelectAll
keywords:
  - igetedges
  - ibody2
  - body2
  - edges
  - count
  - int32
  - edge
---

# IBody2.IGetEdges

Gets the edges for this body.

## Signature

```csharp
Edge IGetEdges( 
   System.Int32
Count
)
```
## Parameters

- `Count` (System.Int32): Number of edges

## Return Value

in-process, unmanaged C++: Pointer to an array of edges of size Count VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

Before calling this method, call
IBody2::GetEdgeCount
to determine the size of the array.

## See Also

- `IBody2.GetEdges`
- `IModelDocExtension.SelectAll`