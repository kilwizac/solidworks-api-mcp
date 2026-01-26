---
type: property
interface: ILocalLinearPatternFeatureData
member: D2EndSeedReference
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ILocalLinearPatternFeatureData.D2EndSeedReferenceType
keywords:
  - d2endseedreference
  - ilocallinearpatternfeaturedata
  - local
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

# ILocalLinearPatternFeatureData.D2EndSeedReference

Gets or sets the seed feature geometry to offset from the up-to reference geometry in Direction 2 of this bidirectional linear component pattern feature.

## Signature

```csharp
System.Object D2EndSeedReference {get; set;}
```
## Parameters

None.

## Return Value

Seed geometry ( vertex , edge , face , or plane ) to offset from ILocalLinearPatternFeatureData::D2EndReference

## Remarks

This property is valid only if:
ILocalLinearPatternFeatureData::D2EndCondition
is set to
swPatternEndCondition_e
.swPatternEndCondition_UpToReference,
- and -
ILocalLinearPatternFeatureData::D2EndUseSeedReference
is true.
To pre-select, use selection Mark = 2048.
See
Accessing Selections that Define Features
for additional details on using this property.
For more information, see the
Linear Component Pattern PropertyManager
topic in the SOLIDWORKS Design user-interface help.

## See Also

- `ILocalLinearPatternFeatureData.D2EndSeedReferenceType`