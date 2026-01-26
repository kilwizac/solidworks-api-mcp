---
type: property
interface: ILinearPatternFeatureData
member: D1Spacing
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ILinearPatternFeatureData.D1Axis
  - ILinearPatternFeatureData.D1ReverseDirection
  - ILinearPatternFeatureData.D1TotalInstances
  - ILinearPatternFeatureData.GetD1AxisType
keywords:
  - d1spacing
  - ilinearpatternfeaturedata
  - linear
  - pattern
  - feature
  - data
  - d1
  - spacing
  - double
readonly: null
---

# ILinearPatternFeatureData.D1Spacing

Gets or sets the spacing between pattern instances in Direction 1 of this linear pattern feature.

## Signature

```csharp
System.Double D1Spacing {get; set;}
```
## Parameters

None.

## Return Value

Distance in meters between pattern instances in Direction 1

## Remarks

You can set this property when
ILinearPatternFeatureData::D1EndCondition
is set to:
swPatternEndCondition_e
.swPatternEndCondition_SpacingAndInstances
- or -
swPatternEndCondition_e.swPatternEndCondition_UpToReference and
ILinearPatternFeatureData::D1EndUseSpacing
is set to true.
For more information, see the
Linear Patterns and the Linear Pattern PropertyManager
topic in the SOLIDWORKS Design user-interface help.

## Examples

- ILinearPatternFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ILinearPatternFeatureData)

## See Also

- `ILinearPatternFeatureData.D1Axis`
- `ILinearPatternFeatureData.D1ReverseDirection`
- `ILinearPatternFeatureData.D1TotalInstances`
- `ILinearPatternFeatureData.GetD1AxisType`