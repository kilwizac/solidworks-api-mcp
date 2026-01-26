---
type: property
interface: ILocalCurvePatternFeatureData
member: D2Direction
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ILocalCurvePatternFeatureData.D1Direction
  - ILocalCurvePatternFeatureData.D2InstanceCount
  - ILocalCurvePatternFeatureData.D2IsEqualSpaced
  - ILocalCurvePatternFeatureData.D2PatternSeedOnly
  - ILocalCurvePatternFeatureData.D2ReverseDirection
  - ILocalCurvePatternFeatureData.D2Spacing
keywords:
  - d2direction
  - ilocalcurvepatternfeaturedata
  - local
  - curve
  - pattern
  - feature
  - data
  - d2
  - direction
  - object
readonly: null
---

# ILocalCurvePatternFeatureData.D2Direction

Gets or sets Direction 2 using the selected curve, edge, sketch, or sketch entity for this bidirectional curve-driven component pattern feature.

## Signature

```csharp
System.Object D2Direction {get; set;}
```
## Parameters

None.

## Return Value

Curve , edge , sketch , or sketch entity for Direction 2

## Remarks

You must pre-select the direction entity using selection Mark = 1 before creating the feature definition. Use this property only when editing the pattern feature.
ILocalCurvePatternFeatureData::Dir2Specified
must be set to true for this property have an effect.
See
Accessing Selections that Define Features
for additional details on using this property.

## See Also

- `ILocalCurvePatternFeatureData.D1Direction`
- `ILocalCurvePatternFeatureData.D2InstanceCount`
- `ILocalCurvePatternFeatureData.D2IsEqualSpaced`
- `ILocalCurvePatternFeatureData.D2PatternSeedOnly`
- `ILocalCurvePatternFeatureData.D2ReverseDirection`
- `ILocalCurvePatternFeatureData.D2Spacing`