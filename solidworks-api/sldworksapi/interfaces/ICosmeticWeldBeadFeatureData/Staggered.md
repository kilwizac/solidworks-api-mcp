---
type: property
interface: ICosmeticWeldBeadFeatureData
member: Staggered
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - staggered
  - icosmeticweldbeadfeaturedata
  - cosmetic
  - weld
  - bead
  - feature
  - data
  - boolean
readonly: null
---

# ICosmeticWeldBeadFeatureData.Staggered

Gets or sets whether to alternate the positioning of the weld beads on both sides of the weld body.

## Signature

```csharp
System.Boolean Staggered {get; set;}
```
## Parameters

None.

## Return Value

True to alternate positioning of the weld beads, false to not (see Remarks )

## Remarks

This property is valid only if
ICosmeticWeldBeadFeatureData::Side
=
swCosmeticWeldBeadSide_e
.swCosmeticWeldBeadSide_BothSides and
ICosmeticWeldBeadFeatureData::IntermittentWeld
is true.

## Examples

- ICosmeticWeldBeadFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ICosmeticWeldBeadFeatureData)