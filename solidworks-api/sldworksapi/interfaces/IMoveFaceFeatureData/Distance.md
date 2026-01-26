---
type: property
interface: IMoveFaceFeatureData
member: Distance
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
  - distance
  - imovefacefeaturedata
  - move
  - face
  - feature
  - data
  - double
  - translate
  - vb
  - net
  - vba
readonly: null
---

# IMoveFaceFeatureData.Distance

Gets or sets the offset distance of this offset or translated Move Face feature.

## Signature

```csharp
System.Double Distance {get; set;}
```
## Parameters

None.

## Return Value

Offset distance of this offset or translated Move Face feature (see Remarks )

## Remarks

To find out whether the Move Face feature was offset or translated, use
IMoveFaceFeatureData::MoveType
.
If setting the offset distance of a translated Move Face feature that has an
end condition
of
Offset From Surface
, then use
IMoveFaceFeatureData::OffsetDistance
. For all other end conditions, use IMoveFaceFeatureData::Distance to set the offset distance.

## Examples

- Translate Move Face Feature (C#) (Translate_Move_Face_Feature_Example_CSharp.htm)
- Translate Move Face Feature (VB.NET) (Translate_Move_Face_Feature_Example_VBNET.htm)
- Translate Move Face Feature (VBA) (Translate_Move_Face_Feature_Example_VB.htm)