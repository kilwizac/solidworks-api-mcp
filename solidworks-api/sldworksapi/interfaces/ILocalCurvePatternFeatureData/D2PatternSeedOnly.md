---
type: property
interface: ILocalCurvePatternFeatureData
member: D2PatternSeedOnly
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ILocalCurvePatternFeatureData.D2Direction
  - ILocalCurvePatternFeatureData.D2InstanceCount
  - ILocalCurvePatternFeatureData.D2IsEqualSpaced
  - ILocalCurvePatternFeatureData.D2ReverseDirection
  - ILocalCurvePatternFeatureData.D2Spacing
keywords:
  - d2patternseedonly
  - ilocalcurvepatternfeaturedata
  - local
  - curve
  - pattern
  - feature
  - data
  - d2
  - seed
  - only
  - boolean
readonly: null
---

# ILocalCurvePatternFeatureData.D2PatternSeedOnly

Gets or sets whether to only pattern the seed component in Direction 2 in this bidirectional curve-driven component pattern feature.

## Signature

```csharp
System.Boolean D2PatternSeedOnly {get; set;}
```
## Parameters

None.

## Return Value

True to pattern only the seed component in Direction 2, false to pattern the seed component and all of the pattern instances generated in Direction 1 in Direction 2

## Remarks

ILocalCurvePatternFeatureData::Dir2Specified
must be set to true for this property have an effect.
See
Accessing Selections that Define Features
for additional details on using this property.

## See Also

- `ILocalCurvePatternFeatureData.D2Direction`
- `ILocalCurvePatternFeatureData.D2InstanceCount`
- `ILocalCurvePatternFeatureData.D2IsEqualSpaced`
- `ILocalCurvePatternFeatureData.D2ReverseDirection`
- `ILocalCurvePatternFeatureData.D2Spacing`