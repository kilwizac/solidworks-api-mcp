---
type: property
interface: ICosmeticWeldBeadFeatureData
member: IntermittentWeldLength
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - intermittentweldlength
  - icosmeticweldbeadfeaturedata
  - cosmetic
  - weld
  - bead
  - feature
  - data
  - intermittent
  - length
  - double
readonly: null
---

# ICosmeticWeldBeadFeatureData.IntermittentWeldLength

Gets or sets the length of the weld for intermittent weld beads.

## Signature

```csharp
System.Double IntermittentWeldLength {get; set;}
```
## Parameters

None.

## Return Value

Length of weld for intermittent weld beads (see Remarks )

## Remarks

This property is valid only if
ICosmeticWeldBeadFeatureData::IntermittentWeld
is true.

## Examples

- ICosmeticWeldBeadFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ICosmeticWeldBeadFeatureData)