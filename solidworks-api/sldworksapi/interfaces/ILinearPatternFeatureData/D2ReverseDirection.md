---
type: property
interface: ILinearPatternFeatureData
member: D2ReverseDirection
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ILinearPatternFeatureData.D2Axis
  - ILinearPatternFeatureData.D2Spacing
  - ILinearPatternFeatureData.D2TotalInstances
  - ILinearPatternFeatureData.GetD2AxisType
  - ILinearPatternFeatureData.IsDirection2Specified
keywords:
  - d2reversedirection
  - ilinearpatternfeaturedata
  - linear
  - pattern
  - feature
  - data
  - d2
  - reverse
  - direction
  - boolean
readonly: null
---

# ILinearPatternFeatureData.D2ReverseDirection

Gets whether to reverse Direction 2 in this bidirectional linear pattern feature.

## Signature

```csharp
System.Boolean D2ReverseDirection {get; set;}
```
## Parameters

None.

## Return Value

True to reverse Direction 2, false to not

## Remarks

This property is valid only if
ILinearPatternFeatureData::D2EndCondition
is set to
swPatternEndCondition_e
.swPatternEndCondition_SpacingAndInstances.

## Examples

- ILinearPatternFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ILinearPatternFeatureData)

## See Also

- `ILinearPatternFeatureData.D2Axis`
- `ILinearPatternFeatureData.D2Spacing`
- `ILinearPatternFeatureData.D2TotalInstances`
- `ILinearPatternFeatureData.GetD2AxisType`
- `ILinearPatternFeatureData.IsDirection2Specified`