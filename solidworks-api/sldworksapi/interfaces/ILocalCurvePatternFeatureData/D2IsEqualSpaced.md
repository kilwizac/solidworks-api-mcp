---
type: property
interface: ILocalCurvePatternFeatureData
member: D2IsEqualSpaced
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ILocalCurvePatternFeatureData.D1IsEqualSpaced
  - ILocalCurvePatternFeatureData.D2Direction
  - ILocalCurvePatternFeatureData.D2InstanceCount
  - ILocalCurvePatternFeatureData.D2PatternSeedOnly
  - ILocalCurvePatternFeatureData.D2ReverseDirection
keywords:
  - d2isequalspaced
  - ilocalcurvepatternfeaturedata
  - local
  - curve
  - pattern
  - feature
  - data
  - d2
  - equal
  - spaced
  - boolean
readonly: null
---

# ILocalCurvePatternFeatureData.D2IsEqualSpaced

Gets or sets whether to use equal spacing between instances of the pattern in Direction 2 for this bidirectional curve-driven component pattern feature.

## Signature

```csharp
System.Boolean D2IsEqualSpaced {get; set;}
```
## Parameters

None.

## Return Value

True to use equal spacing in Direction 2, false to use the value set by ILocalCurvePatternFeatureData::D2Spacing

## Remarks

ILocalCurvePatternFeatureData::Dir2Specified
must be set to true for this property have an effect.
See
Accessing Selections that Define Features
for additional details on using this property.

## See Also

- `ILocalCurvePatternFeatureData.D1IsEqualSpaced`
- `ILocalCurvePatternFeatureData.D2Direction`
- `ILocalCurvePatternFeatureData.D2InstanceCount`
- `ILocalCurvePatternFeatureData.D2PatternSeedOnly`
- `ILocalCurvePatternFeatureData.D2ReverseDirection`