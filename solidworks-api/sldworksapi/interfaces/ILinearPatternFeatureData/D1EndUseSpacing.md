---
type: property
interface: ILinearPatternFeatureData
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
  - ilinearpatternfeaturedata
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

# ILinearPatternFeatureData.D1EndUseSpacing

Gets or sets whether to use spacing or a number of pattern instances when offsetting up-to reference geometry in Direction 1 for this linear pattern feature.

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
ILinearPatternFeatureData::D1EndCondition
is set to
swPatternEndCondition_e
.swPatternEndCondition_UpToReference.