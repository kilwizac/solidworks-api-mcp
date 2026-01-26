---
type: property
interface: ILocalLinearPatternFeatureData
member: AlignToSeed
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - aligntoseed
  - ilocallinearpatternfeaturedata
  - local
  - linear
  - pattern
  - feature
  - data
  - align
  - seed
  - boolean
readonly: null
---

# ILocalLinearPatternFeatureData.AlignToSeed

Gets or sets whether to align each instance to match the original alignment of the seed component in this linear component pattern feature.

## Signature

```csharp
System.Boolean AlignToSeed {get; set;}
```
## Parameters

None.

## Return Value

True to align each instance to the seed component, false to not

## Remarks

This property is valid only if:
ILocalLinearPatternFeatureData::RotateInstances
is true,
- and -
ILocalLinearPatternFeatureData::FixedAxisOfRotation
is true.
If this property is set to true, you can specify how to align pattern instances to the seed component using
ILocalLinearPatternFeatureData::SeedAlignmentReferencePoint
.
See
Accessing Selections that Define Features
for additional details on using this property.
For more information, see the
Linear Component Pattern PropertyManager
topic in the SOLIDWORKS Design user-interface help.