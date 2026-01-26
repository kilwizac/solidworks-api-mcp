---
type: property
interface: ICosmeticWeldBeadFeatureData
member: Pitch
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - pitch
  - icosmeticweldbeadfeaturedata
  - cosmetic
  - weld
  - bead
  - feature
  - data
  - double
readonly: null
---

# ICosmeticWeldBeadFeatureData.Pitch

Gets or sets the pitch of intermittent weld beads.

## Signature

```csharp
System.Double Pitch {get; set;}
```
## Parameters

None.

## Return Value

Pitch of intermittent weld beads (see Remarks )

## Remarks

This property is valid only if
ICosmeticWeldBeadFeatureData::GapOrPitch
is false and
ICosmeticWeldBeadFeatureData::IntermittentWeld
is true.
Pitch is the length from the center of one weld bead to the center of the next weld bead.

## Examples

- ICosmeticWeldBeadFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ICosmeticWeldBeadFeatureData)