---
type: method
interface: ILinearPatternFeatureData
member: GetD2AxisType
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ILinearPatternFeatureData.D2PatternSeedOnly
  - ILinearPatternFeatureData.D2ReverseDirection
  - ILinearPatternFeatureData.D2Spacing
  - ILinearPatternFeatureData.D2TotalInstances
  - ILinearPatternFeatureData.GetD1AxisType
keywords:
  - getd2axistype
  - ilinearpatternfeaturedata
  - linear
  - pattern
  - feature
  - data
  - d2
  - axis
  - type
  - int32
---

# ILinearPatternFeatureData.GetD2AxisType

Gets the type of geometry used to determine Direction 2 of this linear pattern feature.

## Signature

```csharp
System.Int32 GetD2AxisType()
```
## Parameters

None.

## Return Value

Geometry type used to create the linear pattern in Direction 2: 0 = axis or ref axis 1 = edge 2 = dimension 3 = sketch segment

## See Also

- `ILinearPatternFeatureData.D2PatternSeedOnly`
- `ILinearPatternFeatureData.D2ReverseDirection`
- `ILinearPatternFeatureData.D2Spacing`
- `ILinearPatternFeatureData.D2TotalInstances`
- `ILinearPatternFeatureData.GetD1AxisType`