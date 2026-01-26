---
type: property
interface: ILocalLinearPatternFeatureData
member: FixedAxisOfRotation
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - fixedaxisofrotation
  - ilocallinearpatternfeaturedata
  - local
  - linear
  - pattern
  - feature
  - data
  - fixed
  - axis
  - rotation
  - boolean
readonly: null
---

# ILocalLinearPatternFeatureData.FixedAxisOfRotation

Gets or sets whether patterned instances rotate around a common axis.

## Signature

```csharp
System.Boolean FixedAxisOfRotation {get; set;}
```
## Parameters

None.

## Return Value

True if patterned instances rotate around ILocalLinearPatternFeatureData::RotationAxis , false if each instance rotates about its own axis

## Remarks

This property is valid only if
ILocalLinearPatternFeatureData::RotateInstances
is true.
If this property is set to:
True, then you can also specify
ILocalLinearPatternFeatureData::AlignToSeed
.
False, then the rotation axis of each instance of a component is translated along Direction 1 and then rotated following the axis of rotation for that component.
See
Accessing Selections that Define Features
for additional details on using this property.
For more information, see the
Linear Component Pattern PropertyManager
topic in the SOLIDWORKS Design user-interface help.