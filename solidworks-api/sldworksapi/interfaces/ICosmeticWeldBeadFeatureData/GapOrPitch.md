---
type: property
interface: ICosmeticWeldBeadFeatureData
member: GapOrPitch
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ICosmeticWeldBeadFeatureData.IntermittentWeldLength
  - ICosmeticWeldBeadFeatureData.Staggered
keywords:
  - gaporpitch
  - icosmeticweldbeadfeaturedata
  - cosmetic
  - weld
  - bead
  - feature
  - data
  - gap
  - pitch
  - boolean
readonly: null
---

# ICosmeticWeldBeadFeatureData.GapOrPitch

Gets or sets whether to use gap or pitch spacing for intermittent weld beads.

## Signature

```csharp
System.Boolean GapOrPitch {get; set;}
```
## Parameters

None.

## Return Value

True to use gap spacing, false to use pitch spacing (see Remarks )

## Remarks

This property is valid only if
ICosmeticWeldBeadFeatureData::IntermittentWeld
is true.
If this property is...
Then to get and set the gap between the weld beads, call...
True
ICosmeticWeldBeadFeatureData::Gap
False
ICosmeticWeldBeadFeatureData::Pitch

## Examples

- ICosmeticWeldBeadFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ICosmeticWeldBeadFeatureData)

## See Also

- `ICosmeticWeldBeadFeatureData.IntermittentWeldLength`
- `ICosmeticWeldBeadFeatureData.Staggered`