---
type: property
interface: ILocalLinearPatternFeatureData
member: D1Axis
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ILocalLinearPatternFeatureData.D1ReverseDirection
  - ILocalLinearPatternFeatureData.D1Spacing
  - ILocalLinearPatternFeatureData.D1TotalInstances
  - ILocalLinearPatternFeatureData.GetD1AxisType
keywords:
  - d1axis
  - ilocallinearpatternfeaturedata
  - local
  - linear
  - pattern
  - feature
  - data
  - d1
  - axis
  - object
readonly: null
---

# ILocalLinearPatternFeatureData.D1Axis

Gets or sets Direction 1 for this linear component pattern feature.

## Signature

```csharp
System.Object D1Axis {get; set;}
```
## Parameters

None.

## Return Value

Direction 1 entity: linear edge , line , axis , dimension , planar face , planar surface , conical face, conical surface, circular edge, or reference plane

## Remarks

Use
ILocalLinearPatternFeatureData::GetD1AxisType
to determine the type of object to pass to this property.
See
Accessing Selections that Define Features
for additional details on using this property.

## See Also

- `ILocalLinearPatternFeatureData.D1ReverseDirection`
- `ILocalLinearPatternFeatureData.D1Spacing`
- `ILocalLinearPatternFeatureData.D1TotalInstances`
- `ILocalLinearPatternFeatureData.GetD1AxisType`