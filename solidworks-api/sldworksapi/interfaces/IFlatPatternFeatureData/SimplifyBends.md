---
type: property
interface: IFlatPatternFeatureData
member: SimplifyBends
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - simplifybends
  - iflatpatternfeaturedata
  - flat
  - pattern
  - feature
  - data
  - simplify
  - bends
  - boolean
readonly: null
---

# IFlatPatternFeatureData.SimplifyBends

Gets or sets whether to simplify bends in this Flat-Pattern feature.

## Signature

```csharp
System.Boolean SimplifyBends {get; set;}
```
## Parameters

None.

## Return Value

True to simplify edges to lines, false to leave edges complex

## Remarks

This property corresponds to the
Simplify bends
check box on the
Parameters
group box on the
Flat Pattern
PropertyManager, which is displayed when you edit the definition of a flat-pattern feature with complex bends in SOLIDWORKS.