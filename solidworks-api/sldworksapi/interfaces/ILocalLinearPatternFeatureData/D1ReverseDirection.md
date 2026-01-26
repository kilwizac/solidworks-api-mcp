---
type: property
interface: ILocalLinearPatternFeatureData
member: D1ReverseDirection
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
  - ILocalLinearPatternFeatureData.D1TotalInstances
  - ILocalLinearPatternFeatureData.GetD1AxisType
keywords:
  - d1reversedirection
  - ilocallinearpatternfeaturedata
  - local
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

# ILocalLinearPatternFeatureData.D1ReverseDirection

Gets or sets whether to reverse Direction 1 in this linear component pattern feature.

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
ILocalLinearPatternFeatureData::D1EndCondition
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
- `ILocalLinearPatternFeatureData.D1TotalInstances`
- `ILocalLinearPatternFeatureData.GetD1AxisType`