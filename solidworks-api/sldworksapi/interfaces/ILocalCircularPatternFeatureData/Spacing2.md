---
type: property
interface: ILocalCircularPatternFeatureData
member: Spacing2
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ILocalCircularPatternFeatureData.EqualSpacing2
  - ILocalCircularPatternFeatureData.Spacing
  - ILocalCircularPatternFeatureData.TotalInstances2
keywords:
  - spacing2
  - ilocalcircularpatternfeaturedata
  - local
  - circular
  - pattern
  - feature
  - data
  - double
readonly: null
---

# ILocalCircularPatternFeatureData.Spacing2

Gets or sets the spacing between pattern instances in Direction 2 of this bidirectional circular component pattern feature.

## Signature

```csharp
System.Double Spacing2 {get; set;}
```
## Parameters

None.

## Return Value

Distance in radians between pattern instances in Direction 2

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
- `ILocalCircularPatternFeatureData.Spacing`
- `ILocalCircularPatternFeatureData.TotalInstances2`