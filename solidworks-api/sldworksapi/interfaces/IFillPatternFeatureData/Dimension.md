---
type: property
interface: IFillPatternFeatureData
member: Dimension
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
  - features
related: []
keywords:
  - dimension
  - ifillpatternfeaturedata
  - fill
  - pattern
  - feature
  - data
  - double
readonly: null
---

# IFillPatternFeatureData.Dimension

Gets or sets the length of a side of a diamond-cut or square-cut seed instance of this fill pattern feature.

## Signature

```csharp
System.Double Dimension {get; set;}
```
## Parameters

None.

## Return Value

Length of side of diamond-cut or square-cut seed instance

## Remarks

This property is valid only if both are true:
IFillPatternFeatureData::FeaturesToPatternType
=
swFeaturesToPatternType_e
.swFeaturesToPatternCreateSeedCut
IFillPatternFeatureData::CreateSeedCutType
is set to one of the following:
swCreateSeedCutType_e
.swCreateSeedCutDiamond
swCreateSeedCutType_e.swCreateSeedCutSquare

## Examples

- IFillPatternFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IFillPatternFeatureData)