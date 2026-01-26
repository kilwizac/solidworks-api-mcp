---
type: property
interface: ILocalLinearPatternFeatureData
member: SeedAlignmentReferencePoint
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - seedalignmentreferencepoint
  - ilocallinearpatternfeaturedata
  - local
  - linear
  - pattern
  - feature
  - data
  - seed
  - alignment
  - reference
  - point
  - int32
readonly: null
---

# ILocalLinearPatternFeatureData.SeedAlignmentReferencePoint

Gets or sets the type of reference point with which to align each pattern instance to the seed feature.

## Signature

```csharp
System.Int32 SeedAlignmentReferencePoint {get; set;}
```
## Parameters

None.

## Return Value

Seed alignment reference point as defined in swSeedAlignmentReferencePoint_e

## Remarks

This property is valid only if
ILocalLinearPatternFeatureData::AlignToSeed
is true.