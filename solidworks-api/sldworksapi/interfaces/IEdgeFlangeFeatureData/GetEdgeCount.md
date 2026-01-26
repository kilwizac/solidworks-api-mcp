---
type: method
interface: IEdgeFlangeFeatureData
member: GetEdgeCount
returns: System.Int32
parameters: []
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
  - getedgecount
  - iedgeflangefeaturedata
  - edge
  - flange
  - feature
  - data
  - count
  - int32
---

# IEdgeFlangeFeatureData.GetEdgeCount

Gets the number of edges for this edge flange.

## Signature

```csharp
System.Int32 GetEdgeCount()
```
## Parameters

None.

## Return Value

Number of edges for this edge flange

## Remarks

Call this method before calling
IEdgeFlangeFeatureData::IGetEdges
to determine the size of the array.

## See Also

- `IEdgeFlangeFeatureData.Edges`
- `IEdgeFlangeFeatureData.ISetEdges`