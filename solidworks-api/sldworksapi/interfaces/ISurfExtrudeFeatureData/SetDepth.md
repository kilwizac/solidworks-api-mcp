---
type: method
interface: ISurfExtrudeFeatureData
member: SetDepth
returns: void
parameters:
  -
    name: Forward
    type: System.Boolean
    description: True sets the depth in the forward direction, false sets it in the reverse direction
  -
    name: Depth
    type: System.Double
    description: Extrusion depth
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ISurfExtrudeFeatureData.GetDepth
keywords:
  - setdepth
  - isurfextrudefeaturedata
  - surf
  - extrude
  - feature
  - data
  - depth
  - forward
  - boolean
  - double
  - void
---

# ISurfExtrudeFeatureData.SetDepth

Sets the depth of this extruded surface in the forward or reverse direction.

## Signature

```csharp
void SetDepth( 
   System.Boolean
Forward
,
   System.Double
Depth
)
```
## Parameters

- `Forward` (System.Boolean): True sets the depth in the forward direction, false sets it in the reverse direction
- `Depth` (System.Double): Extrusion depth

## Return Value

Unknown.

## Remarks

See
Accessing Selections that Define Features
for additional details.

## See Also

- `ISurfExtrudeFeatureData.GetDepth`