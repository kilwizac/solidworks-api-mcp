---
type: property
interface: IFillPatternFeatureData
member: FeaturesToPatternType
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - featurestopatterntype
  - ifillpatternfeaturedata
  - fill
  - pattern
  - feature
  - data
  - features
  - type
  - int32
readonly: null
---

# IFillPatternFeatureData.FeaturesToPatternType

Gets or sets the type of object to pattern in this fill pattern feature.

## Signature

```csharp
System.Int32 FeaturesToPatternType {get; set;}
```
## Parameters

None.

## Return Value

Type of object to pattern as defined in swFeaturesToPatternType_e

## Remarks

If this property is set to...
Then call...
swFeaturesToPatternType_e.swFeaturesToPatternCreateSeedCut
IFillPatternFeatureData::CreateSeedCutType
to get or set the type of seed cut to pattern
swFeaturesToPatternType_e.swFeaturesToPatternSelectedFeatures
IFillPatternFeatureData::PatternFeatureArray
to get or set the array of features to pattern
IFillPatternFeatureData::PatternFaceArray
to get or set the array of faces to pattern
IFillPatternFeatureData::PatternBodyArray
to get or set the array of bodies to pattern

## Examples

- IFillPatternFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IFillPatternFeatureData)