---
type: method
interface: IMiterFlangeFeatureData
member: ISetEdges
returns: void
parameters:
  -
    name: EdgeCount
    type: System.Int32
    description: Number of edges
  -
    name: EdgeArray
    type: System.Object
    description: in-process, unmanaged C++: Pointer to an array of edges used to define the miter flange feature VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - geometry
related:
  - IMiterFlangeFeatureData.Edges
  - IMiterFlangeFeatureData.IGetEdges
  - IMiterFlangeFeatureData.IGetEdgesCount
keywords:
  - isetedges
  - imiterflangefeaturedata
  - miter
  - flange
  - feature
  - data
  - edges
  - edge
  - count
  - int32
  - array
  - object
  - void
---

# IMiterFlangeFeatureData.ISetEdges

Sets the edges for this miter flange feature.

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

- `EdgeCount` (System.Int32): Number of edges
- `EdgeArray` (System.Object): in-process, unmanaged C++: Pointer to an array of edges used to define the miter flange feature VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Return Value

Unknown.

## Remarks

See
Accessing Selections that Define Features
for additional details on using this method.

## See Also

- `IMiterFlangeFeatureData.Edges`
- `IMiterFlangeFeatureData.IGetEdges`
- `IMiterFlangeFeatureData.IGetEdgesCount`