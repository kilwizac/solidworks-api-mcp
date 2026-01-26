---
type: method
interface: ISurfExtrudeFeatureData
member: IGetVertex
returns: Vertex
parameters:
  -
    name: Forward
    type: System.Boolean
    description: True gets the vertex in the forward direction, false gets it in the reverse direction
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - geometry
related:
  - ISurfExtrudeFeatureData.GetVertex
  - ISurfExtrudeFeatureData.ISetVertex
  - ISurfExtrudeFeatureData.SetVertex
keywords:
  - igetvertex
  - isurfextrudefeaturedata
  - surf
  - extrude
  - feature
  - data
  - vertex
  - forward
  - boolean
---

# ISurfExtrudeFeatureData.IGetVertex

Gets the end condition vertex in the forward or reverse direction for this extruded surface.

## Signature

```csharp
Vertex IGetVertex( 
   System.Boolean
Forward
)
```
## Parameters

- `Forward` (System.Boolean): True gets the vertex in the forward direction, false gets it in the reverse direction

## Return Value

End condition vertex

## Remarks

See
Accessing Selections that Define Features
for additional details.

## See Also

- `ISurfExtrudeFeatureData.GetVertex`
- `ISurfExtrudeFeatureData.ISetVertex`
- `ISurfExtrudeFeatureData.SetVertex`