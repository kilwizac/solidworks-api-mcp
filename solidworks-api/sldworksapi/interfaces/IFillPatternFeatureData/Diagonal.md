---
type: property
interface: IFillPatternFeatureData
member: Diagonal
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - diagonal
  - ifillpatternfeaturedata
  - fill
  - pattern
  - feature
  - data
  - double
readonly: null
---

# IFillPatternFeatureData.Diagonal

Gets or sets the length of the diagonal of a diamond-cut seed instance of this fill pattern feature.

## Signature

```csharp
System.Double Diagonal {get; set;}
```
## Parameters

None.

## Return Value

Length of the diagonal of a diamond-cut seed instance

## Remarks

This property is valid only if both are true:
IFillPatternFeatureData::FeaturesToPatternType
=
swFeaturesToPatternType_e
.swFeaturesToPatternCreateSeedCut
IFillPatternFeatureData::CreateSeedCutType
=
swCreateSeedCutType_e
.swCreateSeedCutDiamond

## Examples

- IFillPatternFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IFillPatternFeatureData)