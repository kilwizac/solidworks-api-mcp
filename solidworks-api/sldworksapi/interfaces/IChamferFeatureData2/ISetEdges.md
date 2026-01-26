---
type: method
interface: IChamferFeatureData2
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
  - IChamferFeatureData2.Edges
  - IChamferFeatureData2.IGetEdges
keywords:
  - isetedges
  - ichamferfeaturedata2
  - chamfer
  - feature
  - data2
  - edges
  - count
  - int32
  - edge
  - list
  - void
---

# IChamferFeatureData2.ISetEdges

Sets the edges to which a chamfer is applied.

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
for additional details on using this method.

## See Also

- `IChamferFeatureData2.Edges`
- `IChamferFeatureData2.IGetEdges`