---
type: property
interface: ILocalLinearPatternFeatureData
member: RotateInstances
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - rotateinstances
  - ilocallinearpatternfeaturedata
  - local
  - linear
  - pattern
  - feature
  - data
  - rotate
  - instances
  - boolean
readonly: null
---

# ILocalLinearPatternFeatureData.RotateInstances

Gets or sets whether to rotate components in Direction 1 of this linear component pattern.

## Signature

```csharp
System.Boolean RotateInstances {get; set;}
```
## Parameters

None.

## Return Value

True to rotate pattern instances, false to not

## Remarks

This property is valid only if
ILocalLinearPatternFeatureData::D1EndCondition
is set to
swPatternEndCondition_e
.swPatternEndCondition_SpacingAndInstances.
If you set this property to true, you can also set:
ILocalLinearPatternFeatureData::RotationAngle
ILocalLinearPatternFeatureData::RotationAxis
ILocalLinearPatternFeatureData::ReverseAxisOfRotation
ILocalLinearPatternFeatureData::FixedAxisOfRotation
See
Accessing Selections that Define Features
for additional details on using this property.
For more information, see the
Linear Component Pattern PropertyManager
topic in the SOLIDWORKS Design user-interface help.