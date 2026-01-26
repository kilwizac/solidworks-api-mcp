---
type: method
interface: ISimpleFilletFeatureData2
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
  - ISimpleFilletFeatureData2.Edges
  - ISimpleFilletFeatureData2.ISetEdges
keywords:
  - igetedges
  - isimplefilletfeaturedata2
  - simple
  - fillet
  - feature
  - data2
  - edges
  - count
  - int32
  - edge
---

# ISimpleFilletFeatureData2.IGetEdges

Gets the edges on which to put a simple radius fillet.

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
ISimpleFilletFeatureData2::GetEdgeCount
before calling this method to get the value for Count.
See
Accessing Selections that Define Features
for additional details.

## See Also

- `ISimpleFilletFeatureData2.Edges`
- `ISimpleFilletFeatureData2.ISetEdges`