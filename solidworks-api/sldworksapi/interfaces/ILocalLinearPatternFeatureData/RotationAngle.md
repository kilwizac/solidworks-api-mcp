---
type: property
interface: ILocalLinearPatternFeatureData
member: RotationAngle
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - rotationangle
  - ilocallinearpatternfeaturedata
  - local
  - linear
  - pattern
  - feature
  - data
  - rotation
  - angle
  - double
readonly: null
---

# ILocalLinearPatternFeatureData.RotationAngle

Gets or sets the angle of rotation of instances in this linear component pattern.

## Signature

```csharp
System.Double RotationAngle {get; set;}
```
## Parameters

None.

## Return Value

Angle of rotation in radians of pattern instances

## Remarks

This property is valid only if
ILocalLinearPatternFeatureData::RotateInstances
is true.
See
Accessing Selections that Define Features
for additional details on using this property.
For more information, see the
Linear Component Pattern PropertyManager
topic in the SOLIDWORKS Design user-interface help.