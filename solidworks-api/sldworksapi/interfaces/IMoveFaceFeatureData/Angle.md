---
type: property
interface: IMoveFaceFeatureData
member: Angle
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - geometry
related: []
keywords:
  - angle
  - imovefacefeaturedata
  - move
  - face
  - feature
  - data
  - double
  - rotate
  - vb
  - net
  - vba
readonly: null
---

# IMoveFaceFeatureData.Angle

Gets or sets the angle for the Move Face feature.

## Signature

```csharp
System.Double Angle {get; set;}
```
## Parameters

None.

## Return Value

Angle in radians at which to draft the faces

## Remarks

The property is valid only if
IMoveFaceFeatureData::MoveType
is
swMoveFaceType_e
.swMoveFaceTypeRotate.

## Examples

- Rotate Move Face Feature (VB.NET) (Rotate_Move_Face_Feature_Example_VBNET.htm)
- Rotate Move Face Feature (VBA) (Rotate_MoveFace_Feature_Example_VB.htm)
- Rotate Move Face Feature (C#) (Rotate_Move_Face_Feature_Example_CSharp.htm)