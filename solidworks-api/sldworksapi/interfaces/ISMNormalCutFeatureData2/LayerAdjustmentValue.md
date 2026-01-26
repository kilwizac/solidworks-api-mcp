---
type: property
interface: ISMNormalCutFeatureData2
member: LayerAdjustmentValue
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - layeradjustmentvalue
  - ismnormalcutfeaturedata2
  - ism
  - normal
  - cut
  - feature
  - data2
  - layer
  - adjustment
  - value
  - double
readonly: null
---

# ISMNormalCutFeatureData2.LayerAdjustmentValue

Gets or sets the offset plane adjustment value.

## Signature

```csharp
System.Double LayerAdjustmentValue {get; set;}
```
## Parameters

None.

## Return Value

0.0 <= offset <= 1.0

## Remarks

This property is valid only if
ISMNormalCutFeatureData2::NormalCutParameters
is set to
swNormalCutParameters_e
.swNormalCutOffsetPlane.
If
ISMNormalCutFeatureData2::LinkToKFactor
is set to true, this property is automatically set to 0.5.