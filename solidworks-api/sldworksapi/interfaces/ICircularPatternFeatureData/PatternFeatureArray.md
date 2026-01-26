---
type: property
interface: ICircularPatternFeatureData
member: PatternFeatureArray
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ICircularPatternFeatureData.GetPatternFeatureCount
  - ICircularPatternFeatureData.IGetPatternFeatureArray
  - ICircularPatternFeatureData.ISetPatternFeatureArray
  - ICircularPatternFeatureData.InstancesToVary
keywords:
  - patternfeaturearray
  - icircularpatternfeaturedata
  - circular
  - pattern
  - feature
  - data
  - array
  - object
readonly: null
---

# ICircularPatternFeatureData.PatternFeatureArray

Gets or sets the seed features for the circular pattern feature.

## Signature

```csharp
System.Object PatternFeatureArray {get; set;}
```
## Parameters

None.

## Return Value

Array of features used to create this circular pattern feature

## Remarks

This property is valid only if
ICircularPatternFeatureData::BodyPattern
is false.
See
Accessing Selections that Define Features
for additional details on using this property.

## See Also

- `ICircularPatternFeatureData.GetPatternFeatureCount`
- `ICircularPatternFeatureData.IGetPatternFeatureArray`
- `ICircularPatternFeatureData.ISetPatternFeatureArray`
- `ICircularPatternFeatureData.InstancesToVary`