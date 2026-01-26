---
type: property
interface: ICurveDrivenPatternFeatureData
member: PatternFeatureArray
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ICurveDrivenPatternFeatureData.GetPatternFeatureCount
  - ICurveDrivenPatternFeatureData.IGetPatternFeatureArray
  - ICurveDrivenPatternFeatureData.ISetPatternFeatureArray
keywords:
  - patternfeaturearray
  - icurvedrivenpatternfeaturedata
  - curve
  - driven
  - pattern
  - feature
  - data
  - array
  - object
readonly: null
---

# ICurveDrivenPatternFeatureData.PatternFeatureArray

Gets or sets the list of features to include in this curve-driven feature pattern.

## Signature

```csharp
System.Object PatternFeatureArray {get; set;}
```
## Parameters

None.

## Return Value

Array of features

## Remarks

This property is valid only if
ICurveDrivenPatternFeatureData::BodyPattern
is false.
See
Accessing Selections that Define Features
for additional details on using this property.

## See Also

- `ICurveDrivenPatternFeatureData.GetPatternFeatureCount`
- `ICurveDrivenPatternFeatureData.IGetPatternFeatureArray`
- `ICurveDrivenPatternFeatureData.ISetPatternFeatureArray`