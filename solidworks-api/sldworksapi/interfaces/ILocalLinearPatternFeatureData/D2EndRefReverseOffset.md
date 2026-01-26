---
type: property
interface: ILocalLinearPatternFeatureData
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
  - ilocallinearpatternfeaturedata
  - local
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

# ILocalLinearPatternFeatureData.D2EndRefReverseOffset

Gets or sets whether to reverse the offset from the up-to-reference geometry in Direction 2 of this bidirectional linear component pattern feature.

## Signature

```csharp
System.Boolean D2EndRefReverseOffset {get; set;}
```
## Parameters

None.

## Return Value

True to reverse ILocalLinearPatternFeatureData::D2EndRefOffset from ILocalLinearPatternFeatureData::D2EndReference , false to not

## Remarks

This property is valid only if
ILocalLinearPatternFeatureData::D2EndCondition
is set to
swPatternEndCondition_e
.swPatternEndCondition_UpToReference.
See
Accessing Selections that Define Features
for additional details on using this property.
For more information, see the
Linear Component Pattern PropertyManager
topic in the SOLIDWORKS Design user-interface help.