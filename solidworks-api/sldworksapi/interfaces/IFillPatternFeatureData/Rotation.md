---
type: property
interface: IFillPatternFeatureData
member: Rotation
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - rotation
  - ifillpatternfeaturedata
  - fill
  - pattern
  - feature
  - data
  - double
readonly: null
---

# IFillPatternFeatureData.Rotation

Gets or sets the counterclockwise rotation of the seed instance of this fill pattern feature.

## Signature

```csharp
System.Double Rotation {get; set;}
```
## Parameters

None.

## Return Value

Counterclockwise rotation of the seed instance

## Remarks

This property is valid only if both are true:
IFillPatternFeatureData::FeaturesToPatternType
=
swFeaturesToPatternType_e
.swFeaturesToPatternCreateSeedCut
And:
IFillPatternFeatureData::CreateSeedCutType
is set to one of the following:
swCreateSeedCutType_e
.swCreateSeedCutDiamond
swCreateSeedCutType_e.swCreateSeedCutPolygon
swCreateSeedCutType_e.swCreateSeedCutSquare

## Examples

- IFillPatternFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IFillPatternFeatureData)