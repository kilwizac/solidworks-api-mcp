---
type: property
interface: ILinearPatternFeatureData
member: D2EndUseSpacing
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - d2endusespacing
  - ilinearpatternfeaturedata
  - linear
  - pattern
  - feature
  - data
  - d2
  - end
  - use
  - spacing
  - boolean
readonly: null
---

# ILinearPatternFeatureData.D2EndUseSpacing

Gets or sets whether to use spacing or a number of pattern instances when offsetting up-to reference geometry in Direction 2 for this bidirectional linear pattern feature.

## Signature

```csharp
System.Boolean D2EndUseSpacing {get; set;}
```
## Parameters

None.

## Return Value

True to use spacing, false to use number of pattern instances in Direction 2

## Remarks

This property is valid only if
ILinearPatternFeatureData::D2EndCondition
is set to
swPatternEndCondition_e
.swPatternEndCondition_UpToReference.