---
type: method
interface: IHemFeatureData
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
  - IHemFeatureData.Edges
  - IHemFeatureData.ISetEdges
keywords:
  - igetedges
  - ihemfeaturedata
  - hem
  - feature
  - data
  - edges
  - edge
  - count
  - int32
  - object
---

# IHemFeatureData.IGetEdges

Gets the edges for this hem.

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
IHemFeatureData::GetEdgesCount
before calling this method.
See
Accessing Selections that Define Features
for additional details on using this method.

## See Also

- `IHemFeatureData.Edges`
- `IHemFeatureData.ISetEdges`