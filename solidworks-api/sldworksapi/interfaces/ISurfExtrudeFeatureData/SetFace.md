---
type: method
interface: ISurfExtrudeFeatureData
member: SetFace
returns: void
parameters:
  -
    name: Forward
    type: System.Boolean
    description: True sets the end condition face in the forward direction, false sets it in the reverse direction
  -
    name: Face
    type: System.Object
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
  - ISurfExtrudeFeatureData.ISetFace
keywords:
  - setface
  - isurfextrudefeaturedata
  - surf
  - extrude
  - feature
  - data
  - face
  - forward
  - boolean
  - object
  - void
---

# ISurfExtrudeFeatureData.SetFace

Sets the end condition face for this extruded surface in the forward or reverse direction.

## Signature

```csharp
void SetFace( 
   System.Boolean
Forward
,
   System.Object
Face
)
```
## Parameters

- `Forward` (System.Boolean): True sets the end condition face in the forward direction, false sets it in the reverse direction
- `Face` (System.Object): End condition face

## Return Value

Unknown.

## Remarks

See
Accessing Selections that Define Features
for additional details.

## See Also

- `ISurfExtrudeFeatureData.GetFace`
- `ISurfExtrudeFeatureData.IGetFace`
- `ISurfExtrudeFeatureData.ISetFace`