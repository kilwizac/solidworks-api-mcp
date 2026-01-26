---
type: property
interface: IEdgeFlangeFeatureData
member: Edges
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - geometry
related:
  - IEdgeFlangeFeatureData.GetEdgeCount
  - IEdgeFlangeFeatureData.IGetEdges
  - IEdgeFlangeFeatureData.ISetEdges
keywords:
  - edges
  - iedgeflangefeaturedata
  - edge
  - flange
  - feature
  - data
  - object
readonly: null
---

# IEdgeFlangeFeatureData.Edges

Gets the edges for this edge flange.

## Signature

```csharp
System.Object Edges {get; set;}
```
## Parameters

None.

## Return Value

Array of edges for this edge flange (see Remarks )

## Remarks

Use
IEdgeFlangeFeatureData::AddEdges
and
IEdgeFlangeFeatureData::RemoveEdges
to add or remove edges from an edge flange.
See
Accessing Selections that Define Features
for additional details on using this property.

## See Also

- `IEdgeFlangeFeatureData.GetEdgeCount`
- `IEdgeFlangeFeatureData.IGetEdges`
- `IEdgeFlangeFeatureData.ISetEdges`