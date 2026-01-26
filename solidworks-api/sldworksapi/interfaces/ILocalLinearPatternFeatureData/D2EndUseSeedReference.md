---
type: property
interface: ILocalLinearPatternFeatureData
member: D2EndUseSeedReference
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - d2enduseseedreference
  - ilocallinearpatternfeaturedata
  - local
  - linear
  - pattern
  - feature
  - data
  - d2
  - end
  - use
  - seed
  - reference
  - boolean
readonly: null
---

# ILocalLinearPatternFeatureData.D2EndUseSeedReference

Gets or sets whether to offset a pattern seed reference or a centroid from the up-to reference geometry in Direction 2 of this bidirectional linear component pattern feature.

## Signature

```csharp
System.Boolean D2EndUseSeedReference {get; set;}
```
## Parameters

None.

## Return Value

True to offset a pattern seed reference, false to offset a centroid

## Remarks

This property is valid only if
ILocalLinearPatternFeatureData::D2EndCondition
is set to
swPatternEndCondition_e
.swPatternEndCondition_UpToReference.
If this property is set to true, use
ILocalLinearPatternFeatureData::D2EndSeedReference
to specify the seed geometry to offset from
ILocalLinearPatternFeatureData::D2EndReference
.
See
Accessing Selections that Define Features
for additional details on using this property.
For more information, see the
Linear Component Pattern PropertyManager
topic in the SOLIDWORKS Design user-interface help.