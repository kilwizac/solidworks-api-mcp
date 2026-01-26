---
type: method
interface: IChamferFeatureData2
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
  - features
  - geometry
related:
  - IChamferFeatureData2.Edges
  - IChamferFeatureData2.ISetEdges
keywords:
  - igetedges
  - ichamferfeaturedata2
  - chamfer
  - feature
  - data2
  - edges
  - count
  - int32
  - edge
---

# IChamferFeatureData2.IGetEdges

Gets the edges to which a chamfer is applied.

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

Call
IChamferFeatureData2::GetEdgeCount
before calling this method.
See
Accessing Selections that Define Features
for additional details on using this method.

## See Also

- `IChamferFeatureData2.Edges`
- `IChamferFeatureData2.ISetEdges`