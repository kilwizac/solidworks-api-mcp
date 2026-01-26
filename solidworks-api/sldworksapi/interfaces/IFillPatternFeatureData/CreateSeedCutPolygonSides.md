---
type: property
interface: IFillPatternFeatureData
member: CreateSeedCutPolygonSides
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - createseedcutpolygonsides
  - ifillpatternfeaturedata
  - fill
  - pattern
  - feature
  - data
  - create
  - seed
  - cut
  - polygon
  - sides
  - int32
readonly: null
---

# IFillPatternFeatureData.CreateSeedCutPolygonSides

Gets or sets the number of sides in a polygon-cut seed instance of this fill pattern feature.

## Signature

```csharp
System.Int32 CreateSeedCutPolygonSides {get; set;}
```
## Parameters

None.

## Return Value

Number of sides in a polygon-cut seed instance

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