---
type: property
interface: ILinearPatternFeatureData
member: D2Spacing
returns: System.Double
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
  - ILinearPatternFeatureData.D2TotalInstances
  - ILinearPatternFeatureData.GetD2AxisType
  - ILinearPatternFeatureData.IsDirection2Specified
keywords:
  - d2spacing
  - ilinearpatternfeaturedata
  - linear
  - pattern
  - feature
  - data
  - d2
  - spacing
  - double
readonly: null
---

# ILinearPatternFeatureData.D2Spacing

Gets or sets the distance between pattern instances in Direction 2 in this bidirectional linear pattern feature.

## Signature

```csharp
System.Double D2Spacing {get; set;}
```
## Parameters

None.

## Return Value

Distance in meters between pattern instances in Direction 2

## Remarks

You can set this property when
ILinearPatternFeatureData::D2EndCondition
is set to:
swPatternEndCondition_e
.swPatternEndCondition_SpacingAndInstances
- or -
swPatternEndCondition_e.swPatternEndCondition_UpToReference and
ILinearPatternFeatureData::D2EndUseSpacing
is set to true.
For more information, see the
Linear Patterns and the Linear Pattern PropertyManager
topic in the SOLIDWORKS Design user-interface help.

## Examples

- ILinearPatternFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ILinearPatternFeatureData)

## See Also

- `ILinearPatternFeatureData.D2Axis`
- `ILinearPatternFeatureData.D2PatternSeedOnly`
- `ILinearPatternFeatureData.D2ReverseDirection`
- `ILinearPatternFeatureData.D2TotalInstances`
- `ILinearPatternFeatureData.GetD2AxisType`
- `ILinearPatternFeatureData.IsDirection2Specified`