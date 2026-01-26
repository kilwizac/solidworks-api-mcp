---
type: property
interface: ILocalLinearPatternFeatureData
member: D1EndUseSeedReference
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - d1enduseseedreference
  - ilocallinearpatternfeaturedata
  - local
  - linear
  - pattern
  - feature
  - data
  - d1
  - end
  - use
  - seed
  - reference
  - boolean
readonly: null
---

# ILocalLinearPatternFeatureData.D1EndUseSeedReference

Gets or sets whether to offset a pattern seed reference or a centroid from the up-to reference geometry in Direction 1 of this linear component pattern feature.

## Signature

```csharp
System.Boolean D1EndUseSeedReference {get; set;}
```
## Parameters

None.

## Return Value

True to offset a pattern seed reference, false to offset a centroid

## Remarks

This property is valid only if
ILocalLinearPatternFeatureData::D1EndCondition
is set to
swPatternEndCondition_e
.swPatternEndCondition_UpToReference.
To pre-select, use selection Mark = 512.
If this property is set to true, use
ILocalLinearPatternFeatureData::D1EndSeedReference
to specify the seed geometry to offset from
ILocalLinearPatternFeatureData::D1EndReference
.
See
Accessing Selections that Define Features
for additional details on using this property.
For more information, see the
Linear Component Pattern PropertyManager
topic in the SOLIDWORKS Design user-interface help.