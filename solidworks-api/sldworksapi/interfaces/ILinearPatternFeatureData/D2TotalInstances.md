---
type: property
interface: ILinearPatternFeatureData
member: D2TotalInstances
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ILinearPatternFeatureData.D2Axis
  - ILinearPatternFeatureData.D2PatternSeedOnly
  - ILinearPatternFeatureData.D2ReverseDirection
  - ILinearPatternFeatureData.D2Spacing
  - ILinearPatternFeatureData.GetD2AxisType
  - ILinearPatternFeatureData.IsDirection2Specified
keywords:
  - d2totalinstances
  - ilinearpatternfeaturedata
  - linear
  - pattern
  - feature
  - data
  - d2
  - total
  - instances
  - int32
readonly: null
---

# ILinearPatternFeatureData.D2TotalInstances

Gets or sets the total number of pattern instances in Direction 2 in this bidirectional linear pattern feature.

## Signature

```csharp
System.Int32 D2TotalInstances {get; set;}
```
## Parameters

None.

## Return Value

Total number of pattern instances in Direction 2

## Remarks

You can set this property when
ILinearPatternFeatureData::D2EndCondition
is set to:
swPatternEndCondition_e
.swPatternEndCondition_SpacingAndInstances
- or -
swPatternEndCondition_e.swPatternEndCondition_UpToReference and
ILinearPatternFeatureData::D2EndUseSpacing
is set to false.
For more information, see the
Linear Patterns and the Linear Pattern PropertyManager
topic in the SOLIDWORKS Design user-interface help.

## Examples

- ILinearPatternFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ILinearPatternFeatureData)

## See Also

- `ILinearPatternFeatureData.D2Axis`
- `ILinearPatternFeatureData.D2PatternSeedOnly`
- `ILinearPatternFeatureData.D2ReverseDirection`
- `ILinearPatternFeatureData.D2Spacing`
- `ILinearPatternFeatureData.GetD2AxisType`
- `ILinearPatternFeatureData.IsDirection2Specified`