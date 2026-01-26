---
type: property
interface: ILinearPatternFeatureData
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
  - ilinearpatternfeaturedata
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

# ILinearPatternFeatureData.D1EndUseSeedReference

Gets or sets whether to offset a pattern seed reference or a centroid from the up-to reference geometry in Direction 1 of this linear pattern feature.

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
ILinearPatternFeatureData::D1EndCondition
is set to
swPatternEndCondition_e
.swPatternEndCondition_UpToReference.
If this property is set to true, use
ILinearPatternFeatureData::D1EndSeedReference
to specify the seed geometry to offset from
ILinearPatternFeatureData::D1EndReference
.
For more information, see the
Linear Patterns and the Linear Pattern PropertyManager
topic in the SOLIDWORKS Design user-interface help.