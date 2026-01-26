---
type: property
interface: ILinearPatternFeatureData
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
  - ilinearpatternfeaturedata
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

# ILinearPatternFeatureData.D2EndRefOffset

Gets or sets the distance of the last pattern instance from up-to reference geometry in Direction 2 of this bidirectional linear pattern feature.

## Signature

```csharp
System.Double D2EndRefOffset {get; set;}
```
## Parameters

None.

## Return Value

Offset of the last pattern instance from ILinearPatternFeatureData::D2EndReference

## Remarks

This property is valid only if
ILinearPatternFeatureData::D2EndCondition
is set to
swPatternEndCondition_e
.swPatternEndCondition_UpToReference.
Whether to offset instance geometry or a centroid is governed by
ILinearPatternFeatureData::D2EndUseSeedReference
.