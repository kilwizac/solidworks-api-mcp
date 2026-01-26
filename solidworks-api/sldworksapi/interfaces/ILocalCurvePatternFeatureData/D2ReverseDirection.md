---
type: property
interface: ILocalCurvePatternFeatureData
member: D2ReverseDirection
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ILocalCurvePatternFeatureData.D1ReverseDirection
  - ILocalCurvePatternFeatureData.D2Direction
  - ILocalCurvePatternFeatureData.D2InstanceCount
  - ILocalCurvePatternFeatureData.D2IsEqualSpaced
  - ILocalCurvePatternFeatureData.D2PatternSeedOnly
  - ILocalCurvePatternFeatureData.D2Spacing
keywords:
  - d2reversedirection
  - ilocalcurvepatternfeaturedata
  - local
  - curve
  - pattern
  - feature
  - data
  - d2
  - reverse
  - direction
  - boolean
readonly: null
---

# ILocalCurvePatternFeatureData.D2ReverseDirection

Gets or sets whether to reverse the direction of Direction 2 in this bidirectional curve-driven component pattern feature.

## Signature

```csharp
System.Boolean D2ReverseDirection {get; set;}
```
## Parameters

None.

## Return Value

True to reverse the direction of Direction 2, false to not

## Remarks

ILocalCurvePatternFeatureData::Dir2Specified
must be set to true for this property have an effect.
See
Accessing Selections that Define Features
for additional details on using this property.

## See Also

- `ILocalCurvePatternFeatureData.D1ReverseDirection`
- `ILocalCurvePatternFeatureData.D2Direction`
- `ILocalCurvePatternFeatureData.D2InstanceCount`
- `ILocalCurvePatternFeatureData.D2IsEqualSpaced`
- `ILocalCurvePatternFeatureData.D2PatternSeedOnly`
- `ILocalCurvePatternFeatureData.D2Spacing`