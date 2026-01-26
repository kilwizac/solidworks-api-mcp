---
type: method
interface: IEdgeFlangeFeatureData
member: IGetEdges
returns: System.Object
parameters:
  -
    name: EdgeCount
    type: System.Int32
    description: Number of edges for this edge flange
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - geometry
related:
  - IEdgeFlangeFeatureData.Edges
  - IEdgeFlangeFeatureData.ISetEdges
keywords:
  - igetedges
  - iedgeflangefeaturedata
  - edge
  - flange
  - feature
  - data
  - edges
  - count
  - int32
  - object
---

# IEdgeFlangeFeatureData.IGetEdges

Gets the edges for this edge flange.

## Signature

```csharp
System.Object IGetEdges( 
   System.Int32
EdgeCount
)
```
## Parameters

- `EdgeCount` (System.Int32): Number of edges for this edge flange

## Return Value

in-process, unmanaged C++: Pointer to an array of edges for this edge flange VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

Call
IEdgeFlangeFeatureData::GetEdgeCount
before calling this method to determine the size of the array.
See
Accessing Selections that Define Features
for additional details on using this method.

## See Also

- `IEdgeFlangeFeatureData.Edges`
- `IEdgeFlangeFeatureData.ISetEdges`