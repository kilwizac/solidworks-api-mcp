---
type: method
interface: IEdgeFlangeFeatureData
member: ISetEdges
returns: void
parameters:
  -
    name: EdgeCount
    type: System.Int32
    description: Number of edges for this edge flange
  -
    name: EdgeArray
    type: System.Object
    description: in-process, unmanaged C++: Pointer to an array of edges for this edge flange VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - geometry
related:
  - IEdgeFlangeFeatureData.Edges
  - IEdgeFlangeFeatureData.GetEdgeCount
  - IEdgeFlangeFeatureData.IGetEdges
keywords:
  - isetedges
  - iedgeflangefeaturedata
  - edge
  - flange
  - feature
  - data
  - edges
  - count
  - int32
  - array
  - object
  - void
---

# IEdgeFlangeFeatureData.ISetEdges

Sets the edges for this edge flange.

## Signature

```csharp
void ISetEdges( 
   System.Int32
EdgeCount
,
   ref System.Object
EdgeArray
)
```
## Parameters

- `EdgeCount` (System.Int32): Number of edges for this edge flange
- `EdgeArray` (System.Object): in-process, unmanaged C++: Pointer to an array of edges for this edge flange VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Return Value

Unknown.

## Remarks

See
Accessing Selections that Define Features
for additional details on using this method.

## See Also

- `IEdgeFlangeFeatureData.Edges`
- `IEdgeFlangeFeatureData.GetEdgeCount`
- `IEdgeFlangeFeatureData.IGetEdges`