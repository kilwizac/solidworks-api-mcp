---
type: method
interface: IHemFeatureData
member: ISetEdges
returns: void
parameters:
  -
    name: EdgeCount
    type: System.Int32
    description: Number of edges
  -
    name: EdgeArr
    type: System.Object
    description: in-process, unmanaged C++: Pointer to an array of edges of size EdgeCount VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - geometry
related:
  - IHemFeatureData.Edges
  - IHemFeatureData.IGetEdges
keywords:
  - isetedges
  - ihemfeaturedata
  - hem
  - feature
  - data
  - edges
  - edge
  - count
  - int32
  - arr
  - object
  - void
---

# IHemFeatureData.ISetEdges

Sets the edges for this hem feature.

## Signature

```csharp
void ISetEdges( 
   System.Int32
EdgeCount
,
   ref System.Object
EdgeArr
)
```
## Parameters

- `EdgeCount` (System.Int32): Number of edges
- `EdgeArr` (System.Object): in-process, unmanaged C++: Pointer to an array of edges of size EdgeCount VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Return Value

Unknown.

## Remarks

See
Accessing Selections that Define Features
for additional details on using this method.

## See Also

- `IHemFeatureData.Edges`
- `IHemFeatureData.IGetEdges`