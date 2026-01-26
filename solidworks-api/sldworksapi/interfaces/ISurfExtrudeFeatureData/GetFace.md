---
type: method
interface: ISurfExtrudeFeatureData
member: GetFace
returns: System.Object
parameters:
  -
    name: Forward
    type: System.Boolean
    description: True gets the end condition face in the forward direction, false gets it in the reverse direction
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - geometry
related:
  - ISurfExtrudeFeatureData.IGetFace
  - ISurfExtrudeFeatureData.ISetFace
  - ISurfExtrudeFeatureData.SetFace
keywords:
  - getface
  - isurfextrudefeaturedata
  - surf
  - extrude
  - feature
  - data
  - face
  - forward
  - boolean
  - object
---

# ISurfExtrudeFeatureData.GetFace

Gets the end condition face for this extruded surface in the forward or reverse direction.

## Signature

```csharp
System.Object GetFace( 
   System.Boolean
Forward
)
```
## Parameters

- `Forward` (System.Boolean): True gets the end condition face in the forward direction, false gets it in the reverse direction

## Return Value

End condition face

## Remarks

See
Accessing Selections that Define Features
for additional details.

## See Also

- `ISurfExtrudeFeatureData.IGetFace`
- `ISurfExtrudeFeatureData.ISetFace`
- `ISurfExtrudeFeatureData.SetFace`