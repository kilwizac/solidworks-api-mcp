---
type: property
interface: IFillPatternFeatureData
member: Diameter
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - diameter
  - ifillpatternfeaturedata
  - fill
  - pattern
  - feature
  - data
  - double
readonly: null
---

# IFillPatternFeatureData.Diameter

Gets or sets the diameter of a circle-cut seed instance of this fill pattern feature.

## Signature

```csharp
System.Double Diameter {get; set;}
```
## Parameters

None.

## Return Value

Diameter of a circle-cut seed instance

## Remarks

This property is valid only if both are true:
IFillPatternFeatureData::FeaturesToPatternType
=
swFeaturesToPatternType_e
.swFeaturesToPatternCreateSeedCut
IFillPatternFeatureData::CreateSeedCutType
=
swCreateSeedCutType_e
.swCreateSeedCutCircle

## Examples

- IFillPatternFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IFillPatternFeatureData)