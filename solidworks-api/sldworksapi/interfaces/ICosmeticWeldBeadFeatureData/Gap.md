---
type: property
interface: ICosmeticWeldBeadFeatureData
member: Gap
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - gap
  - icosmeticweldbeadfeaturedata
  - cosmetic
  - weld
  - bead
  - feature
  - data
  - double
readonly: null
---

# ICosmeticWeldBeadFeatureData.Gap

Gets or sets the gap between intermittent weld beads.

## Signature

```csharp
System.Double Gap {get; set;}
```
## Parameters

None.

## Return Value

Gap between intermittent weld beads (see Remarks )

## Remarks

This property is valid only if
ICosmeticWeldBeadFeatureData::GapOrPitch
is true and
ICosmeticWeldBeadFeatureData::IntermittentWeld
is true.

## Examples

- ICosmeticWeldBeadFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ICosmeticWeldBeadFeatureData)