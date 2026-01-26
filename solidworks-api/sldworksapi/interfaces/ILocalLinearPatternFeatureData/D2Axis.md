---
type: property
interface: ILocalLinearPatternFeatureData
member: D2Axis
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ILocalLinearPatternFeatureData.D2ReverseDirection
  - ILocalLinearPatternFeatureData.D2Spacing
  - ILocalLinearPatternFeatureData.D2TotalInstances
  - ILocalLinearPatternFeatureData.GetD2AxisType
keywords:
  - d2axis
  - ilocallinearpatternfeaturedata
  - local
  - linear
  - pattern
  - feature
  - data
  - d2
  - axis
  - object
readonly: null
---

# ILocalLinearPatternFeatureData.D2Axis

Gets or sets Direction 2 for this bidirectional linear component pattern feature.

## Signature

```csharp
System.Object D2Axis {get; set;}
```
## Parameters

None.

## Return Value

Direction 2 entity: linear edge , line , axis , dimension , planar face , planar surface , conical face, conical surface, circular edge, or reference plane

## Remarks

Use
ILocalLinearPatternFeatureData::GetD2AxisType
to determine the type of object to pass to this property.
See
Accessing Selections that Define Features
for additional details on using this property.

## See Also

- `ILocalLinearPatternFeatureData.D2ReverseDirection`
- `ILocalLinearPatternFeatureData.D2Spacing`
- `ILocalLinearPatternFeatureData.D2TotalInstances`
- `ILocalLinearPatternFeatureData.GetD2AxisType`