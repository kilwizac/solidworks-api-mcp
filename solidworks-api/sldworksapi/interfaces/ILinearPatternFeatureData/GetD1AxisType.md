---
type: method
interface: ILinearPatternFeatureData
member: GetD1AxisType
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ILinearPatternFeatureData.D1ReverseDirection
  - ILinearPatternFeatureData.D1Spacing
  - ILinearPatternFeatureData.D1TotalInstances
  - ILinearPatternFeatureData.GetD2AxisType
keywords:
  - getd1axistype
  - ilinearpatternfeaturedata
  - linear
  - pattern
  - feature
  - data
  - d1
  - axis
  - type
  - int32
---

# ILinearPatternFeatureData.GetD1AxisType

Gets the type of geometry used to determine Direction 1 of this linear pattern feature.

## Signature

```csharp
System.Int32 GetD1AxisType()
```
## Parameters

None.

## Return Value

Geometry type used to create the linear pattern in Direction 1: 0 = axis or ref axis 1 = edge 2 = dimension 3 = sketch segment

## See Also

- `ILinearPatternFeatureData.D1ReverseDirection`
- `ILinearPatternFeatureData.D1Spacing`
- `ILinearPatternFeatureData.D1TotalInstances`
- `ILinearPatternFeatureData.GetD2AxisType`