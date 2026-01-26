---
type: property
interface: ILocalCircularPatternFeatureData
member: Spacing
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ILocalCircularPatternFeatureData.Spacing2
  - ILocalCircularPatternFeatureData.TotalInstances
keywords:
  - spacing
  - ilocalcircularpatternfeaturedata
  - local
  - circular
  - pattern
  - feature
  - data
  - double
readonly: null
---

# ILocalCircularPatternFeatureData.Spacing

Gets or sets the distance between pattern instances in Direction 1 for this circular component pattern feature.

## Signature

```csharp
System.Double Spacing {get; set;}
```
## Parameters

None.

## Return Value

Distance in radians between pattern instances in Direction 1

## Remarks

This property is automatically set to 360 if
ILocalCircularPatternFeatureData::EqualSpacing
is set to true.

## See Also

- `ILocalCircularPatternFeatureData.Spacing2`
- `ILocalCircularPatternFeatureData.TotalInstances`