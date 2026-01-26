---
type: method
interface: IChamferFeatureData2
member: GetVertexChamferDistance
returns: System.Double
parameters:
  -
    name: Side
    type: System.Int32
    description: Feature direction (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - geometry
related:
  - IChamferFeatureData2.SetVertexChamferDistance
keywords:
  - chamfers
  - see
  - also
  - ichamferfeaturedata2
  - vertex
  - getvertexchamferdistance
  - chamfer
  - feature
  - data2
  - distance
  - side
  - int32
  - double
  - edge
  - distances
  - vb
  - net
  - vba
---

# IChamferFeatureData2.GetVertexChamferDistance

Gets the vertex chamfer distance.

## Signature

```csharp
System.Double GetVertexChamferDistance( 
   System.Int32
Side
)
```
## Parameters

- `Side` (System.Int32): Feature direction (see Remarks )

## Return Value

Vertex chamfer distance

## Remarks

There are three edges of a vertex. Set the Side parameter to 0, 1, or 2. The Side parameter is relevant only for vertex-type of chamfers.

## Examples

- Get Edge Chamfer Distances (C#) (Get_Edge_Chamfer_Distances_Example_CSharp.htm)
- Get Edge Chamfer Distances (VB.NET) (Get_Edge_Chamfer_Distances_Example_VBNET.htm)
- Get Edge Chamfer Distances (VBA) (Get_Edge_Chamfer_Distances_Example_VB.htm)

## See Also

- `IChamferFeatureData2.SetVertexChamferDistance`