---
type: property
interface: ILocalLinearPatternFeatureData
member: ReverseAxisOfRotation
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - reverseaxisofrotation
  - ilocallinearpatternfeaturedata
  - local
  - linear
  - pattern
  - feature
  - data
  - reverse
  - axis
  - rotation
  - boolean
readonly: null
---

# ILocalLinearPatternFeatureData.ReverseAxisOfRotation

Gets or sets whether to reverse the direction of rotation.

## Signature

```csharp
System.Boolean ReverseAxisOfRotation {get; set;}
```
## Parameters

None.

## Return Value

True to reverse the direction of rotation, false to not

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