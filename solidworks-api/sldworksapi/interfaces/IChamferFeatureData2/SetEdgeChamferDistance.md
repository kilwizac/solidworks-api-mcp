---
type: method
interface: IChamferFeatureData2
member: SetEdgeChamferDistance
returns: void
parameters:
  -
    name: Side
    type: System.Int32
    description: Feature direction (see Remarks )
  -
    name: Distance
    type: System.Double
    description: Edge chamfer distance
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - geometry
related:
  - IChamferFeatureData2.GetEdgeChamferDistance
keywords:
  - setedgechamferdistance
  - ichamferfeaturedata2
  - chamfer
  - feature
  - data2
  - edge
  - distance
  - side
  - int32
  - double
  - void
---

# IChamferFeatureData2.SetEdgeChamferDistance

Sets the edge chamfer distance on either side of the edge.

## Signature

```csharp
void SetEdgeChamferDistance( 
   System.Int32
Side
,
   System.Double
Distance
)
```
## Parameters

- `Side` (System.Int32): Feature direction (see Remarks )
- `Distance` (System.Double): Edge chamfer distance

## Return Value

Unknown.

## Remarks

Set the Side parameter to 0 or 1. For angle-distance chamfers, set side to 0.

## See Also

- `IChamferFeatureData2.GetEdgeChamferDistance`