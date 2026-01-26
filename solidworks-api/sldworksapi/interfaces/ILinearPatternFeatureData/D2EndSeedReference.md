---
type: property
interface: ILinearPatternFeatureData
member: D2EndSeedReference
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - d2endseedreference
  - ilinearpatternfeaturedata
  - linear
  - pattern
  - feature
  - data
  - d2
  - end
  - seed
  - reference
  - object
readonly: null
---

# ILinearPatternFeatureData.D2EndSeedReference

Gets or sets the seed feature geometry to offset from the up-to reference geometry in Direction 2 of this bidirectional linear pattern feature.

## Signature

```csharp
System.Object D2EndSeedReference {get; set;}
```
## Parameters

None.

## Return Value

Seed geometry ( vertex , edge , face , or plane ) to offset from ILinearPatternFeatureData::D2EndReference

## Remarks

This property is valid only if
ILinearPatternFeatureData::D2EndCondition
is set to
swPatternEndCondition_e
.swPatternEndCondition_UpToReference.