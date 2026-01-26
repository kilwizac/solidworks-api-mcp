---
type: property
interface: ILocalCurvePatternFeatureData
member: D2InstanceCount
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ILocalCurvePatternFeatureData.D1InstanceCount
  - ILocalCurvePatternFeatureData.D2Direction
  - ILocalCurvePatternFeatureData.D2IsEqualSpaced
  - ILocalCurvePatternFeatureData.D2PatternSeedOnly
  - ILocalCurvePatternFeatureData.D2ReverseDirection
  - ILocalCurvePatternFeatureData.D2Spacing
keywords:
  - d2instancecount
  - ilocalcurvepatternfeaturedata
  - local
  - curve
  - pattern
  - feature
  - data
  - d2
  - instance
  - count
  - int32
readonly: null
---

# ILocalCurvePatternFeatureData.D2InstanceCount

Gets or sets the number of instances of the seed component in Direction 2 in this bidirectional curve-driven component pattern feature.

## Signature

```csharp
System.Int32 D2InstanceCount {get; set;}
```
## Parameters

None.

## Return Value

Number of instances of the seed component in Direction 2

## Remarks

ILocalCurvePatternFeatureData::Dir2Specified
must be set to true for this property have an effect.
See
Accessing Selections that Define Features
for additional details on using this property.

## See Also

- `ILocalCurvePatternFeatureData.D1InstanceCount`
- `ILocalCurvePatternFeatureData.D2Direction`
- `ILocalCurvePatternFeatureData.D2IsEqualSpaced`
- `ILocalCurvePatternFeatureData.D2PatternSeedOnly`
- `ILocalCurvePatternFeatureData.D2ReverseDirection`
- `ILocalCurvePatternFeatureData.D2Spacing`