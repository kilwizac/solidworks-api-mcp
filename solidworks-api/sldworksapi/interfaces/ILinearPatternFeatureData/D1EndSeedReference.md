---
type: property
interface: ILinearPatternFeatureData
member: D1EndSeedReference
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - d1endseedreference
  - ilinearpatternfeaturedata
  - linear
  - pattern
  - feature
  - data
  - d1
  - end
  - seed
  - reference
  - object
readonly: null
---

# ILinearPatternFeatureData.D1EndSeedReference

Gets or sets the pattern seed geometry to offset from the up-to-reference geometry in Direction 1 of this linear pattern feature.

## Signature

```csharp
System.Object D1EndSeedReference {get; set;}
```
## Parameters

None.

## Return Value

Seed geometry ( vertex , edge , face , or plane ) to offset from ILinearPatternFeatureData::D1EndReference

## Remarks

This property is valid only if:
ILinearPatternFeatureData::D1EndUseSeedReference
is set to true
- and -
ILinearPatternFeatureData::D1EndCondition
is set to
swPatternEndCondition_e
.swPatternEndCondition_UpToReference.