---
type: property
interface: ILinearPatternFeatureData
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
  - ilinearpatternfeaturedata
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

# ILinearPatternFeatureData.D2EndUseSeedReference

Gets or sets whether to offset a pattern seed reference or a centroid from the up-to reference geometry in Direction 2 of this bidirectional linear pattern feature.

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
ILinearPatternFeatureData::D2EndCondition
is set to
swPatternEndCondition_e
.swPatternEndCondition_UpToReference.
If this property is set to true, use
ILinearPatternFeatureData::D2EndSeedReference
to specify the seed geometry to offset from
ILinearPatternFeatureData::D2EndReference
.
For more information, see the
Linear Patterns and the Linear Pattern PropertyManager
topic in the SOLIDWORKS Design user-interface help.