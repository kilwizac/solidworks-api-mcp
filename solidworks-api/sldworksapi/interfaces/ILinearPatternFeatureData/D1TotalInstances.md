---
type: property
interface: ILinearPatternFeatureData
member: D1TotalInstances
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ILinearPatternFeatureData.D1Axis
  - ILinearPatternFeatureData.D1ReverseDirection
  - ILinearPatternFeatureData.D1Spacing
  - ILinearPatternFeatureData.GetD1AxisType
keywords:
  - d1totalinstances
  - ilinearpatternfeaturedata
  - linear
  - pattern
  - feature
  - data
  - d1
  - total
  - instances
  - int32
readonly: null
---

# ILinearPatternFeatureData.D1TotalInstances

Gets or sets the total number of pattern instances in Direction 1 for this linear pattern feature.

## Signature

```csharp
System.Int32 D1TotalInstances {get; set;}
```
## Parameters

None.

## Return Value

Total number of pattern instances in Direction 1

## Remarks

You can set this property when
ILinearPatternFeatureData::D1EndCondition
is set to:
swPatternEndCondition_e
.swPatternEndCondition_SpacingAndInstances
- or -
swPatternEndCondition_e.swPatternEndCondition_UpToReference and
ILinearPatternFeatureData::D1EndUseSpacing
is set to false.
For more information, see the
Linear Patterns and the Linear Pattern PropertyManager
topic in the SOLIDWORKS Design user-interface help.

## Examples

- ILinearPatternFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ILinearPatternFeatureData)

## See Also

- `ILinearPatternFeatureData.D1Axis`
- `ILinearPatternFeatureData.D1ReverseDirection`
- `ILinearPatternFeatureData.D1Spacing`
- `ILinearPatternFeatureData.GetD1AxisType`