---
type: property
interface: ILinearPatternFeatureData
member: D1EndReference
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - d1endreference
  - ilinearpatternfeaturedata
  - linear
  - pattern
  - feature
  - data
  - d1
  - end
  - reference
  - object
readonly: null
---

# ILinearPatternFeatureData.D1EndReference

Gets or sets the up-to reference geometry in Direction 1 for this linear pattern feature.

## Signature

```csharp
System.Object D1EndReference {get; set;}
```
## Parameters

None.

## Return Value

Pattern's up-to reference geometry ( vertex , edge , face , or plane ) in Direction 1

## Remarks

This property is valid only if
ILinearPatternFeatureData::D1EndCondition
is set to
swPatternEndCondition_e
.swPatternEndCondition_UpToReference.
To control the pattern in Direction 1, also set:
ILinearPatternFeatureData::D1Axis
ILinearPatternFeatureData::D1EndRefOffset
ILinearPatternFeatureData::D1EndRefReverseOffset
ILinearPatternFeatureData::D1EndUseSeedReference
ILinearPatternFeatureData::D1EndSeedReference (if D1EndUseSeedReference is true)
ILinearPatternFeatureData::D1EndUseSpacing
ILinearPatternFeatureData::D1Spacing (if D1EndUseSpacing is true)
ILinearPatternFeatureData::D1TotalInstances (if D1EndUseSpacing is false)
For more information, see the
Linear Patterns and the Linear Pattern PropertyManager
topic in the SOLIDWORKS Design user-interface help.