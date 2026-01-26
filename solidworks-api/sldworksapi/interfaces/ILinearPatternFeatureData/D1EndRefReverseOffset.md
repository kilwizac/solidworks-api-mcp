---
type: property
interface: ILinearPatternFeatureData
member: D1EndRefReverseOffset
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - d1endrefreverseoffset
  - ilinearpatternfeaturedata
  - linear
  - pattern
  - feature
  - data
  - d1
  - end
  - ref
  - reverse
  - offset
  - boolean
readonly: null
---

# ILinearPatternFeatureData.D1EndRefReverseOffset

Gets or sets whether to reverse the offset from the up-to-reference geometry in Direction 1 of this linear pattern feature.

## Signature

```csharp
System.Boolean D1EndRefReverseOffset {get; set;}
```
## Parameters

None.

## Return Value

True to reverse ILinearPatternFeatureData::D1EndRefOffset from ILinearPatternFeatureData::D1EndReference , false to not

## Remarks

This property is valid only if
ILinearPatternFeatureData::D1EndCondition
is set to
swPatternEndCondition_e
.swPatternEndCondition_UpToReference.