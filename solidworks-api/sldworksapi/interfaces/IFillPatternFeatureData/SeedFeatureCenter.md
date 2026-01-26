---
type: property
interface: IFillPatternFeatureData
member: SeedFeatureCenter
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IFillPatternFeatureData.SeedFeatureCenterType
keywords:
  - seedfeaturecenter
  - ifillpatternfeaturedata
  - fill
  - pattern
  - feature
  - data
  - seed
  - center
  - object
readonly: null
---

# IFillPatternFeatureData.SeedFeatureCenter

Gets or sets the vertex or sketch point where to place the center of the seed cut feature of this fill pattern feature.

## Signature

```csharp
System.Object SeedFeatureCenter {get; set;}
```
## Parameters

None.

## Return Value

Vertex or sketch point where to place the center of the seed cut feature

## Remarks

This property is valid only if
IFillPatternFeatureData::FeaturesToPatternType
=
swFeaturesToPatternType_e
.swFeaturesToPatternCreateSeedCut.

## See Also

- `IFillPatternFeatureData.SeedFeatureCenterType`