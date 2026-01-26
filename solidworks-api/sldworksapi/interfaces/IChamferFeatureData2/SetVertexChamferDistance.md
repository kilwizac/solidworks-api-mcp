---
type: method
interface: IChamferFeatureData2
member: SetVertexChamferDistance
returns: void
parameters:
  -
    name: Side
    type: System.Int32
    description: Feature direction (see Remarks )
  -
    name: Distance
    type: System.Double
    description: Vertex chamfer distance
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - geometry
related:
  - IChamferFeatureData2.GetVertexChamferDistance
keywords:
  - chamfers
  - see
  - also
  - ichamferfeaturedata2
  - vertex
  - setvertexchamferdistance
  - chamfer
  - feature
  - data2
  - distance
  - side
  - int32
  - double
  - void
---

# IChamferFeatureData2.SetVertexChamferDistance

Sets the vertex chamfer distance.

## Signature

```csharp
void SetVertexChamferDistance( 
   System.Int32
Side
,
   System.Double
Distance
)
```
## Parameters

- `Side` (System.Int32): Feature direction (see Remarks )
- `Distance` (System.Double): Vertex chamfer distance

## Return Value

Unknown.

## Remarks

There are three edges of a vertex. Set the Side parameter to 0, 1, or 2 to specify the edge. The Side parameter is relevant only for vertex-type chamfers.

## See Also

- `IChamferFeatureData2.GetVertexChamferDistance`