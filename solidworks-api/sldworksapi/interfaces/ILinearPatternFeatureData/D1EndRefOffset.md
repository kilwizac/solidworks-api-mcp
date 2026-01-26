---
type: property
interface: ILinearPatternFeatureData
member: D1EndRefOffset
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - d1endrefoffset
  - ilinearpatternfeaturedata
  - linear
  - pattern
  - feature
  - data
  - d1
  - end
  - ref
  - offset
  - double
readonly: null
---

# ILinearPatternFeatureData.D1EndRefOffset

Gets or sets the distance of the last pattern instance from the up-to reference geometry in Direction 1 of this linear pattern feature.

## Signature

```csharp
System.Double D1EndRefOffset {get; set;}
```
## Parameters

None.

## Return Value

Offset of last pattern instance from ILinearPatternFeatureData::D1EndReference

## Remarks

This property is valid only if
ILinearPatternFeatureData::D1EndCondition
is set to
swPatternEndCondition_e
.swPatternEndCondition_UpToReference.
Whether to offset instance geometry or a centroid is governed by
ILinearPatternFeatureData::D1EndUseSeedReference
.