---
type: method
interface: ISimpleFilletFeatureData2
member: ISetEdges
returns: void
parameters:
  -
    name: Count
    type: System.Int32
    description: Number of edges
  -
    name: EdgeList
    type: Edge
    description: in-process, unmanaged C++: Pointer to an array of edges of size Count VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - geometry
related:
  - ISimpleFilletFeatureData2.Edges
  - ISimpleFilletFeatureData2.GetEdgeCount
  - ISimpleFilletFeatureData2.IGetEdges
keywords:
  - isetedges
  - isimplefilletfeaturedata2
  - simple
  - fillet
  - feature
  - data2
  - edges
  - count
  - int32
  - edge
  - list
  - void
---

# ISimpleFilletFeatureData2.ISetEdges

Sets the edges on which to create a simple radius fillet.

## Signature

```csharp
void ISetEdges( 
   System.Int32
Count
,
   ref Edge
EdgeList
)
```
## Parameters

- `Count` (System.Int32): Number of edges
- `EdgeList` (Edge): in-process, unmanaged C++: Pointer to an array of edges of size Count VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Return Value

Unknown.

## Remarks

See
Accessing Selections that Define Features
for additional details.

## See Also

- `ISimpleFilletFeatureData2.Edges`
- `ISimpleFilletFeatureData2.GetEdgeCount`
- `ISimpleFilletFeatureData2.IGetEdges`