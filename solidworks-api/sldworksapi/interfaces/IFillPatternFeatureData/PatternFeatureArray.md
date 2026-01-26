---
type: property
interface: IFillPatternFeatureData
member: PatternFeatureArray
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - patternfeaturearray
  - ifillpatternfeaturedata
  - fill
  - pattern
  - feature
  - data
  - array
  - object
readonly: null
---

# IFillPatternFeatureData.PatternFeatureArray

Gets or sets the array of features to pattern in this fill pattern feature.

## Signature

```csharp
System.Object PatternFeatureArray {get; set;}
```
## Parameters

None.

## Return Value

Array of IFeature s to pattern

## Remarks

This property is valid only if
IFillPatternFeatureData::PatternElement
is
swPatternElementSelection_e
.swFeatureFaces.