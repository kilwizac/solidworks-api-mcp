---
type: property
interface: IFillPatternFeatureData
member: InnerRadius
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - innerradius
  - ifillpatternfeaturedata
  - fill
  - pattern
  - feature
  - data
  - inner
  - radius
  - double
readonly: null
---

# IFillPatternFeatureData.InnerRadius

Gets or sets the radius of the circle that inscribes the polygon-cut seed instance of this fill pattern feature.

## Signature

```csharp
System.Double InnerRadius {get; set;}
```
## Parameters

None.

## Return Value

Radius of circle inscribing the polygon-cut seed instance

## Remarks

This property is valid only if both are true:
IFillPatternFeatureData::FeaturesToPatternType
=
swFeaturesToPatternType_e
.swFeaturesToPatternCreateSeedCut
IFillPatternFeatureData::CreateSeedCutType
=
swCreateSeedCutType_e
.swCreateSeedCutPolygon

## Examples

- IFillPatternFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IFillPatternFeatureData)