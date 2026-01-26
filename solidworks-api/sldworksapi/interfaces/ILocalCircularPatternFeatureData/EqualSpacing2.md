---
type: property
interface: ILocalCircularPatternFeatureData
member: EqualSpacing2
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ILocalCircularPatternFeatureData.EqualSpacing
  - ILocalCircularPatternFeatureData.Spacing2
  - ILocalCircularPatternFeatureData.TotalInstances2
keywords:
  - equalspacing2
  - ilocalcircularpatternfeaturedata
  - local
  - circular
  - pattern
  - feature
  - data
  - equal
  - spacing2
  - boolean
readonly: null
---

# ILocalCircularPatternFeatureData.EqualSpacing2

Gets or sets whether the pattern instances in Direction 2 are equally spaced in this bidirectional circular component pattern feature.

## Signature

```csharp
System.Boolean EqualSpacing2 {get; set;}
```
## Parameters

None.

## Return Value

True to use equal spacing in Direction 2, false to not

## Remarks

This property is only available when:
ILocalCircularPatternFeatureData::Direction2
is true, and
ILocalCircularPatternFeatureData::Symmetric
is false.
See
Accessing Selections that Define Features
for additional details on using this property.

## See Also

- `ILocalCircularPatternFeatureData.EqualSpacing`
- `ILocalCircularPatternFeatureData.Spacing2`
- `ILocalCircularPatternFeatureData.TotalInstances2`