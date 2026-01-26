---
type: property
interface: ILinearPatternFeatureData
member: D1ReverseDirection
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ILinearPatternFeatureData.D1Axis
  - ILinearPatternFeatureData.D1Spacing
  - ILinearPatternFeatureData.D1TotalInstances
  - ILinearPatternFeatureData.GetD1AxisType
keywords:
  - d1reversedirection
  - ilinearpatternfeaturedata
  - linear
  - pattern
  - feature
  - data
  - d1
  - reverse
  - direction
  - boolean
readonly: null
---

# ILinearPatternFeatureData.D1ReverseDirection

Gets whether to reverse Direction 1 in this linear pattern feature.

## Signature

```csharp
System.Boolean D1ReverseDirection {get; set;}
```
## Parameters

None.

## Return Value

True to reverse Direction 1, false to not

## Remarks

This property is valid only if
ILinearPatternFeatureData::D1EndCondition
is set to
swPatternEndCondition_e
.swPatternEndCondition_SpacingAndInstances.

## Examples

- ILinearPatternFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ILinearPatternFeatureData)

## See Also

- `ILinearPatternFeatureData.D1Axis`
- `ILinearPatternFeatureData.D1Spacing`
- `ILinearPatternFeatureData.D1TotalInstances`
- `ILinearPatternFeatureData.GetD1AxisType`