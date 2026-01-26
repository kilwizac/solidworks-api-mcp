---
type: property
interface: IMoveFaceFeatureData
member: OffsetDistance
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
  - offsetdistance
  - imovefacefeaturedata
  - move
  - face
  - feature
  - data
  - offset
  - distance
  - double
  - translate
  - vb
  - net
  - vba
readonly: null
---

# IMoveFaceFeatureData.OffsetDistance

Gets or sets the offset distance of this translated Move Face feature that has an end condition of Offset From Surface.

## Signature

```csharp
System.Double OffsetDistance {get; set;}
```
## Parameters

None.

## Return Value

Offset distance of this translated Move Face feature that has an end condition of Offset From Surface (see Remarks )

## Remarks

For all other end conditions, use
IMoveFaceFeatureData::Distance
to get or set the offset distance of a translated Move Face feature.
To find out the type of:
Move Face feature, use
IMoveFaceFeatureData::MoveType
.
end condition, use
IMoveFaceFeatureData::EndCondition
.

## Examples

- Translate Move Face Feature (C#) (Translate_Move_Face_Feature_Example_CSharp.htm)
- Translate Move Face Feature (VB.NET) (Translate_Move_Face_Feature_Example_VBNET.htm)
- Translate Move Face Feature (VBA) (Translate_Move_Face_Feature_Example_VB.htm)