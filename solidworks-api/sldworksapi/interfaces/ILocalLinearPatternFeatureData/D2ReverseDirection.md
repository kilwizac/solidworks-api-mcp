---
type: property
interface: ILocalLinearPatternFeatureData
member: D2ReverseDirection
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ILocalLinearPatternFeatureData.D1Axis
  - ILocalLinearPatternFeatureData.D1Spacing
  - ILocalLinearPatternFeatureData.D2TotalInstances
  - ILocalLinearPatternFeatureData.GetD2AxisType
keywords:
  - d2reversedirection
  - ilocallinearpatternfeaturedata
  - local
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

# ILocalLinearPatternFeatureData.D2ReverseDirection

Gets or sets whether to reverse Direction 2 in this bidirectional linear component pattern feature.

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
ILocalLinearPatternFeatureData::D2EndCondition
is set to
swPatternEndCondition_e
.swPatternEndCondition_SpacingAndInstances.
See
Accessing Selections that Define Features
for additional details on using this property.

## Examples

- ILocalLinearPatternFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ILocalLinearPatternFeatureData)

## See Also

- `ILocalLinearPatternFeatureData.D1Axis`
- `ILocalLinearPatternFeatureData.D1Spacing`
- `ILocalLinearPatternFeatureData.D2TotalInstances`
- `ILocalLinearPatternFeatureData.GetD2AxisType`