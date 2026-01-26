---
type: property
interface: ILocalLinearPatternFeatureData
member: D1EndUseSpacing
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - d1endusespacing
  - ilocallinearpatternfeaturedata
  - local
  - linear
  - pattern
  - feature
  - data
  - d1
  - end
  - use
  - spacing
  - boolean
readonly: null
---

# ILocalLinearPatternFeatureData.D1EndUseSpacing

Gets or sets whether to use spacing or a number of pattern instances when offsetting up-to reference geometry in Direction 1 for this linear component pattern feature.

## Signature

```csharp
System.Boolean D1EndUseSpacing {get; set;}
```
## Parameters

None.

## Return Value

True to use spacing, false to use number of pattern instances in Direction 1

## Remarks

This property is valid only if
ILocalLinearPatternFeatureData::D1EndCondition
is set to
swPatternEndCondition_e
.swPatternEndCondition_UpToReference.
See
Accessing Selections that Define Features
for additional details on using this property.
For more information, see the
Linear Component Pattern PropertyManager
topic in the SOLIDWORKS Design user-interface help.