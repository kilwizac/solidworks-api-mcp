---
type: method
interface: IChamferFeatureData2
member: GetEdgeChamferDistance
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
  - IChamferFeatureData2.SetEdgeChamferDistance
keywords:
  - getedgechamferdistance
  - ichamferfeaturedata2
  - chamfer
  - feature
  - data2
  - edge
  - distance
  - side
  - int32
  - double
  - distances
  - vb
  - net
  - vba
---

# IChamferFeatureData2.GetEdgeChamferDistance

Gets the edge chamfer distance on either side of the edge.

## Signature

```csharp
System.Double GetEdgeChamferDistance( 
   System.Int32
Side
)
```
## Parameters

- `Side` (System.Int32): Feature direction (see Remarks )

## Return Value

Edge chamfer distance

## Remarks

Set the Side parameter to 0 or 1. For angle-distance chamfers, set side to 0.

## Examples

- Get Edge Chamfer Distances (C#) (Get_Edge_Chamfer_Distances_Example_CSharp.htm)
- Get Edge Chamfer Distances (VB.NET) (Get_Edge_Chamfer_Distances_Example_VBNET.htm)
- Get Edge Chamfer Distances (VBA) (Get_Edge_Chamfer_Distances_Example_VB.htm)

## See Also

- `IChamferFeatureData2.SetEdgeChamferDistance`