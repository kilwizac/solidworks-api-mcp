---
type: property
interface: ILocalLinearPatternFeatureData
member: D1EndSeedReference
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ILocalLinearPatternFeatureData.D1EndSeedReferenceType
keywords:
  - d1endseedreference
  - ilocallinearpatternfeaturedata
  - local
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

# ILocalLinearPatternFeatureData.D1EndSeedReference

Gets or sets the seed feature geometry to offset from the up-to reference geometry in Direction 1 of this linear componnet pattern feature.

## Signature

```csharp
System.Object D1EndSeedReference {get; set;}
```
## Parameters

None.

## Return Value

Seed geometry ( vertex , edge , face , or plane ) to offset from ILocalLinearPatternFeatureData::D1EndReference

## Remarks

This property is valid only if:
ILocalLinearPatternFeatureData::D1EndCondition
is set to
swPatternEndCondition_e
.swPatternEndCondition_UpToReference
- and -
ILocalLinearPatternFeatureData::D1EndUseSeedReference
is true.
See
Accessing Selections that Define Features
for additional details on using this property.
For more information, see the
Linear Component Pattern PropertyManager
topic in the SOLIDWORKS Design user-interface help.

## See Also

- `ILocalLinearPatternFeatureData.D1EndSeedReferenceType`