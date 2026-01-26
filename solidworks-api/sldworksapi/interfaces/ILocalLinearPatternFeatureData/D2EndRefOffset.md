---
type: property
interface: ILocalLinearPatternFeatureData
member: D2EndRefOffset
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - d2endrefoffset
  - ilocallinearpatternfeaturedata
  - local
  - linear
  - pattern
  - feature
  - data
  - d2
  - end
  - ref
  - offset
  - double
readonly: null
---

# ILocalLinearPatternFeatureData.D2EndRefOffset

Gets or sets the distance of the last pattern instance from up-to reference geometry in Direction 2 of this bidirectional linear component pattern feature.

## Signature

```csharp
System.Double D2EndRefOffset {get; set;}
```
## Parameters

None.

## Return Value

Offset of the last pattern instance from ILocalLinearPatternFeatureData::D2EndReference

## Remarks

This property is valid only if
ILocalLinearPatternFeatureData::D2EndCondition
is set to
swPatternEndCondition_e
.swPatternEndCondition_UpToReference.
See
Accessing Selections that Define Features
for additional details on using this property.
For more information, see the
Linear Component Pattern PropertyManager
topic in the SOLIDWORKS Design user-interface help.