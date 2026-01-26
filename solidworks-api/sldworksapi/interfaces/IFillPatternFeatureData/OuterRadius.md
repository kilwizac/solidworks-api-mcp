---
type: property
interface: IFillPatternFeatureData
member: OuterRadius
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - outerradius
  - ifillpatternfeaturedata
  - fill
  - pattern
  - feature
  - data
  - outer
  - radius
  - double
readonly: null
---

# IFillPatternFeatureData.OuterRadius

Gets or sets the radius of the circle that circumscribes the polygon-cut seed instance of this fill pattern feature.

## Signature

```csharp
System.Double OuterRadius {get; set;}
```
## Parameters

None.

## Return Value

Radius of circle circumscribing the polygon-cut seed instance

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