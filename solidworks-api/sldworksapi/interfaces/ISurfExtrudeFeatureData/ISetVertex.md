---
type: method
interface: ISurfExtrudeFeatureData
member: ISetVertex
returns: void
parameters:
  -
    name: Forward
    type: System.Boolean
    description: True sets the vertex in the forward direction, false sets it in the reverse direction
  -
    name: Vtx
    type: Vertex
    description: End condition vertex
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - geometry
related:
  - ISurfExtrudeFeatureData.GetVertex
  - ISurfExtrudeFeatureData.IGetVertex
  - ISurfExtrudeFeatureData.SetVertex
keywords:
  - isetvertex
  - isurfextrudefeaturedata
  - surf
  - extrude
  - feature
  - data
  - vertex
  - forward
  - boolean
  - vtx
  - void
---

# ISurfExtrudeFeatureData.ISetVertex

Sets the end condition vertex in the forward or reverse direction for this extruded surface.

## Signature

```csharp
void ISetVertex( 
   System.Boolean
Forward
,
   Vertex
Vtx
)
```
## Parameters

- `Forward` (System.Boolean): True sets the vertex in the forward direction, false sets it in the reverse direction
- `Vtx` (Vertex): End condition vertex

## Return Value

Unknown.

## Remarks

See
Accessing Selections that Define Features
for additional details.

## See Also

- `ISurfExtrudeFeatureData.GetVertex`
- `ISurfExtrudeFeatureData.IGetVertex`
- `ISurfExtrudeFeatureData.SetVertex`