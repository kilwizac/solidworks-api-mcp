---
type: property
interface: ILocalCircularPatternFeatureData
member: TotalInstances2
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ILocalCircularPatternFeatureData.EqualSpacing2
  - ILocalCircularPatternFeatureData.Spacing2
  - ILocalCircularPatternFeatureData.TotalInstances
keywords:
  - totalinstances2
  - ilocalcircularpatternfeaturedata
  - local
  - circular
  - pattern
  - feature
  - data
  - total
  - instances2
  - int32
readonly: null
---

# ILocalCircularPatternFeatureData.TotalInstances2

Gets or sets the total number of pattern instances in Direction 2 of this bidirectional circular component pattern feature.

## Signature

```csharp
System.Int32 TotalInstances2 {get; set;}
```
## Parameters

None.

## Return Value

Total number of pattern instances in Direction 2

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

- `ILocalCircularPatternFeatureData.EqualSpacing2`
- `ILocalCircularPatternFeatureData.Spacing2`
- `ILocalCircularPatternFeatureData.TotalInstances`