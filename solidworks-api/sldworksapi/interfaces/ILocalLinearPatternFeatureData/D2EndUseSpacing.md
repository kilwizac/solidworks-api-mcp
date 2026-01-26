---
type: property
interface: ILocalLinearPatternFeatureData
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
  - ilocallinearpatternfeaturedata
  - local
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

# ILocalLinearPatternFeatureData.D2EndUseSpacing

Gets or sets whether to use spacing or a number of pattern instances when offsetting up-to reference geometry in Direction 2 for this bidirectional linear component pattern feature.

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