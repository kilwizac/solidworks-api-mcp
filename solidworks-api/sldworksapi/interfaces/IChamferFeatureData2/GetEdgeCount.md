---
type: method
interface: IChamferFeatureData2
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
  - IChamferFeatureData2.Edges
keywords:
  - getedgecount
  - ichamferfeaturedata2
  - chamfer
  - feature
  - data2
  - edge
  - count
  - int32
  - distances
  - vb
  - net
  - vba
---

# IChamferFeatureData2.GetEdgeCount

Gets the number of edges that are chamfered.

## Signature

```csharp
System.Int32 GetEdgeCount()
```
## Parameters

None.

## Return Value

Number of edges

## Remarks

Call this method before calling
IChamferFeatureData2::IGetEdges
.

## Examples

- Get Edge Chamfer Distances (C#) (Get_Edge_Chamfer_Distances_Example_CSharp.htm)
- Get Edge Chamfer Distances (VB.NET) (Get_Edge_Chamfer_Distances_Example_VBNET.htm)
- Get Edge Chamfer Distances (VBA) (Get_Edge_Chamfer_Distances_Example_VB.htm)

## See Also

- `IChamferFeatureData2.Edges`