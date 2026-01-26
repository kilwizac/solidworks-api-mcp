---
type: property
interface: IFillPatternFeatureData
member: SeedCutFlipShapeDirection
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IFillPatternFeatureData.CreateSeedCutType
keywords:
  - seedcutflipshapedirection
  - ifillpatternfeaturedata
  - fill
  - pattern
  - feature
  - data
  - seed
  - cut
  - flip
  - shape
  - direction
  - boolean
readonly: null
---

# IFillPatternFeatureData.SeedCutFlipShapeDirection

Gets or sets whether to reverse the direction of the seed instance cut of this fill pattern feature.

## Signature

```csharp
System.Boolean SeedCutFlipShapeDirection {get; set;}
```
## Parameters

None.

## Return Value

True to reverse the direction of the seed instance cut, false to not

## Remarks

This property is valid only if
IFillPatternFeatureData::FeaturesToPatternType
=
swFeaturesToPatternType_e
.swFeaturesToPatternCreateSeedCut.

## Examples

- IFillPatternFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IFillPatternFeatureData)

## See Also

- `IFillPatternFeatureData.CreateSeedCutType`