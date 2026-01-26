---
type: property
interface: ILocalLinearPatternFeatureData
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
  - ilocallinearpatternfeaturedata
  - local
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

# ILocalLinearPatternFeatureData.D1EndRefReverseOffset

Gets or sets whether to reverse the offset from the up-to-reference geometry in Direction 1 of this linear component pattern feature.

## Signature

```csharp
System.Boolean D1EndRefReverseOffset {get; set;}
```
## Parameters

None.

## Return Value

True to reverse ILocalLinearPatternFeatureData::D1EndRefOffset from ILocalLinearPatternFeatureData::D1EndReference , false to not

## Remarks

This property is valid only if
ILocalLinearPatternFeatureData::D1EndCondition
is set to
swPatternEndCondition_e
.swPatternEndCondition_UpToReference.
See
Accessing Selections that Define Features
for additional details on using this property.
For more information, see the
Linear Component Pattern PropertyManager
topic in the SOLIDWORKS Design user-interface help.