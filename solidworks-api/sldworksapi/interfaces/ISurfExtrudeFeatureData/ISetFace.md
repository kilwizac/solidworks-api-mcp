---
type: method
interface: ISurfExtrudeFeatureData
member: ISetFace
returns: void
parameters:
  -
    name: Forward
    type: System.Boolean
    description: True sets the end condition face in the forward direction, false sets it in the reverse direction
  -
    name: Face
    type: Face2
    description: End condition face
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - geometry
related:
  - ISurfExtrudeFeatureData.GetFace
  - ISurfExtrudeFeatureData.IGetFace
  - ISurfExtrudeFeatureData.SetFace
keywords:
  - isetface
  - isurfextrudefeaturedata
  - surf
  - extrude
  - feature
  - data
  - face
  - forward
  - boolean
  - face2
  - void
---

# ISurfExtrudeFeatureData.ISetFace

Sets the end condition face for this extruded surface in the forward or reverse direction.

## Signature

```csharp
void ISetFace( 
   System.Boolean
Forward
,
   Face2
Face
)
```
## Parameters

- `Forward` (System.Boolean): True sets the end condition face in the forward direction, false sets it in the reverse direction
- `Face` (Face2): End condition face

## Return Value

Unknown.

## Remarks

See
Accessing Selections that Define Features
for additional details.

## See Also

- `ISurfExtrudeFeatureData.GetFace`
- `ISurfExtrudeFeatureData.IGetFace`
- `ISurfExtrudeFeatureData.SetFace`