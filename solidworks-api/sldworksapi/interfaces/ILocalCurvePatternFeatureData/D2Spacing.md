---
type: property
interface: ILocalCurvePatternFeatureData
member: D2Spacing
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ILocalCurvePatternFeatureData.D1Spacing
  - ILocalCurvePatternFeatureData.D2Direction
  - ILocalCurvePatternFeatureData.D2InstanceCount
  - ILocalCurvePatternFeatureData.D2PatternSeedOnly
  - ILocalCurvePatternFeatureData.D2ReverseDirection
keywords:
  - d2spacing
  - ilocalcurvepatternfeaturedata
  - local
  - curve
  - pattern
  - feature
  - data
  - d2
  - spacing
  - double
readonly: null
---

# ILocalCurvePatternFeatureData.D2Spacing

Gets or sets the distance between pattern instances in Direction 2 in this bidirectional curve-driven component pattern feature.

## Signature

```csharp
System.Double D2Spacing {get; set;}
```
## Parameters

None.

## Return Value

Distance between pattern instances in Direction 2 (see Remarks )

## Remarks

ILocalCurvePatternFeatureData::Dir2Specified
must be set to true for this property have an effect. To set the spacing between pattern instances, set
ILocalCurvePatternFeatureData::D2IsEqualSpaced
to false.
See
Accessing Selections that Define Features
for additional details on using this property.

## See Also

- `ILocalCurvePatternFeatureData.D1Spacing`
- `ILocalCurvePatternFeatureData.D2Direction`
- `ILocalCurvePatternFeatureData.D2InstanceCount`
- `ILocalCurvePatternFeatureData.D2PatternSeedOnly`
- `ILocalCurvePatternFeatureData.D2ReverseDirection`