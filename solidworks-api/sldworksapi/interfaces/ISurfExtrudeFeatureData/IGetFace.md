---
type: method
interface: ISurfExtrudeFeatureData
member: IGetFace
returns: Face2
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
  - ISurfExtrudeFeatureData.GetFace
  - ISurfExtrudeFeatureData.ISetFace
  - ISurfExtrudeFeatureData.SetFace
keywords:
  - igetface
  - isurfextrudefeaturedata
  - surf
  - extrude
  - feature
  - data
  - face
  - forward
  - boolean
  - face2
---

# ISurfExtrudeFeatureData.IGetFace

Gets the end condition face for this extruded surface in the forward or reverse direction.

## Signature

```csharp
Face2 IGetFace( 
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

- `ISurfExtrudeFeatureData.GetFace`
- `ISurfExtrudeFeatureData.ISetFace`
- `ISurfExtrudeFeatureData.SetFace`