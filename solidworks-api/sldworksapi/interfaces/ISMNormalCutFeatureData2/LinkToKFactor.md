---
type: property
interface: ISMNormalCutFeatureData2
member: LinkToKFactor
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - linktokfactor
  - ismnormalcutfeaturedata2
  - ism
  - normal
  - cut
  - feature
  - data2
  - link
  - factor
  - boolean
readonly: null
---

# ISMNormalCutFeatureData2.LinkToKFactor

Gets or sets whether to link to a K-Factor when adjusting the offset plane of this Normal Cut.

## Signature

```csharp
System.Boolean LinkToKFactor {get; set;}
```
## Parameters

None.

## Return Value

True to link to a K-Factor, false to not

## Remarks

This property is valid only if:
ISMNormalCutFeatureData2::NormalCutParameters
is set to
swNormalCutParameters_e
.swNormalCutOffsetPlane
- and -
ISMNormalCutFeatureData2::OffsetPlaneReference
is set.
If this property is set to true, then
ISMNormalCutFeatureData2::LayerAdjustmentValue
is automatically set to 0.5.