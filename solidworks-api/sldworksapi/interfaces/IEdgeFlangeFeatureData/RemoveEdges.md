---
type: method
interface: IEdgeFlangeFeatureData
member: RemoveEdges
returns: System.Int32
parameters:
  -
    name: EdgeArray
    type: System.Object
    description: Array of edge s to remove
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - geometry
related:
  - IEdgeFlangeFeatureData.AddEdges
  - IEdgeFlangeFeatureData.Edges
  - IEdgeFlangeFeatureData.IGetEdges
  - IEdgeFlangeFeatureData.ISetEdges
keywords:
  - removeedges
  - iedgeflangefeaturedata
  - edge
  - flange
  - feature
  - data
  - remove
  - edges
  - array
  - object
  - int32
  - vb
  - net
  - vba
---

# IEdgeFlangeFeatureData.RemoveEdges

Removes edges from this edge flange.

## Signature

```csharp
System.Int32 RemoveEdges( 
   System.Object
EdgeArray
)
```
## Parameters

- `EdgeArray` (System.Object): Array of edge s to remove

## Return Value

Error code as defined by swEdgeFlangeError_e

## Examples

- Remove Edge from Edge Flange Feature (C#) (Remove_Edge_from_Edge_Flange_Feature_Example_CSharp.htm)
- Remove Edge from Edge Flange Feature (VB.NET) (Remove_Edge_from_Edge_Flange_Feature_Example_VBNET.htm)
- Remove Edge from Edge Flange Feature (VBA) (Remove_Edge_from_Edge_Flange_Feature_Example_VB.htm)

## See Also

- `IEdgeFlangeFeatureData.AddEdges`
- `IEdgeFlangeFeatureData.Edges`
- `IEdgeFlangeFeatureData.IGetEdges`
- `IEdgeFlangeFeatureData.ISetEdges`