---
type: method
interface: IRipFeatureData
member: IGetEdges
returns: System.Object
parameters:
  -
    name: EdgeCount
    type: System.Int32
    description: Number of edges
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - geometry
related:
  - IRipFeatureData.Edges
  - IRipFeatureData.ISetEdges
keywords:
  - igetedges
  - iripfeaturedata
  - rip
  - feature
  - data
  - edges
  - edge
  - count
  - int32
  - object
---

# IRipFeatureData.IGetEdges

Gets the edges for this rip feature.

## Signature

```csharp
System.Object IGetEdges( 
   System.Int32
EdgeCount
)
```
## Parameters

- `EdgeCount` (System.Int32): Number of edges

## Return Value

in-process, unmanaged C++: Pointer to an array of edges of size EdgeCount VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

Call
IRipFeatureData::GetEdgesCount
before calling this method to get the value for EdgeCount.
See
Accessing Selections that Define Features
for additional details on using this method.

## See Also

- `IRipFeatureData.Edges`
- `IRipFeatureData.ISetEdges`