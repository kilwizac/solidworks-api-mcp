---
type: property
interface: ILinearPatternFeatureData
member: D2EndRefReverseOffset
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - d2endrefreverseoffset
  - ilinearpatternfeaturedata
  - linear
  - pattern
  - feature
  - data
  - d2
  - end
  - ref
  - reverse
  - offset
  - boolean
readonly: null
---

# ILinearPatternFeatureData.D2EndRefReverseOffset

Gets or sets whether to reverse the offset from the up-to-reference geometry in Direction 2 of this bidirectional linear pattern feature.

## Signature

```csharp
System.Boolean D2EndRefReverseOffset {get; set;}
```
## Parameters

None.

## Return Value

True to reverse ILinearPatternFeatureData::D2EndRefOffset from ILinearPatternFeatureData::D2EndReference , false to not

## Remarks

This property is valid only if
ILinearPatternFeatureData::D2EndCondition
is set to
swPatternEndCondition_e
.swPatternEndCondition_UpToReference.