---
type: property
interface: ILocalLinearPatternFeatureData
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
  - ilocallinearpatternfeaturedata
  - local
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

# ILocalLinearPatternFeatureData.D1EndRefOffset

Gets or sets the offset from a reference entity in Direction 1 of this linear component pattern feature.

## Signature

```csharp
System.Double D1EndRefOffset {get; set;}
```
## Parameters

None.

## Return Value

Offset of a pattern instance or centroid from ILocalLinearPatternFeatureData::D1EndReference

## Remarks

This property is valid only if
ILocalLinearPatternFeatureData::D1EndCondition
is set to
swPatternEndCondition_e
.swPatternEndCondition_UpToReference.
The pattern instance or centroid to offset is:
Specified by
ILocalLinearPatternFeatureData::D1EndSeedReference
.
Governed by
ILocalLinearPatternFeatureData::D1EndUseSeedReference
.
See
Accessing Selections that Define Features
for additional details on using this property.
For more information, see the
Linear Component Pattern PropertyManager
topic in the SOLIDWORKS Design user-interface help.