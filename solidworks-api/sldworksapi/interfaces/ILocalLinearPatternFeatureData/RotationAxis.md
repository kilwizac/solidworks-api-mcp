---
type: property
interface: ILocalLinearPatternFeatureData
member: RotationAxis
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - rotationaxis
  - ilocallinearpatternfeaturedata
  - local
  - linear
  - pattern
  - feature
  - data
  - rotation
  - axis
  - object
readonly: null
---

# ILocalLinearPatternFeatureData.RotationAxis

Gets or sets the axis of rotation of components in this linear component pattern feature.

## Signature

```csharp
System.Object RotationAxis {get; set;}
```
## Parameters

None.

## Return Value

Axis , line , or edge around which the pattern components rotate

## Remarks

This property is valid only if
ILocalLinearPatternFeatureData::RotateInstances
is true.
The rotation axis must be parallel to
ILocalLinearPatternFeatureData::D1Axis
.
Use:
ILocalLinearPatternFeatureData::FixedAxisOfRotation
to specify whether all instances of components rotate about this rotation axis.
ILocalLinearPatternFeatureData::ReverseAxisOfRotation
to reverse the direction of this rotation axis.
You cannot edit this property to null or Nothing after the feature is first created with a rotation axis. If you try,
IFeature::ModifyDefinition
returns false and the feature does not roll back. To roll back the feature, call
IModelDoc2::ForceRebuild3
or move the rollback bar in the user interface to before and after the feature.
See
Accessing Selections that Define Features
for additional details on using this property.
For more information, see the
Linear Component Pattern PropertyManager
topic in the SOLIDWORKS Design user-interface help.