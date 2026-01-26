---
type: property
interface: ILinearPatternFeatureData
member: D2EndReference
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - d2endreference
  - ilinearpatternfeaturedata
  - linear
  - pattern
  - feature
  - data
  - d2
  - end
  - reference
  - object
readonly: null
---

# ILinearPatternFeatureData.D2EndReference

Gets or sets the up-to reference geometry in Direction 2 for this bidirectional linear pattern feature.

## Signature

```csharp
System.Object D2EndReference {get; set;}
```
## Parameters

None.

## Return Value

Pattern's up-to reference ( vertex , edge , face , or plane ) in Direction 2

## Remarks

This property is valid only if
ILinearPatternFeatureData::D2EndCondition
is set to
swPatternEndCondition_e
.swPatternEndCondition_UpToReference.
For more information, see the
Linear Patterns and the Linear Pattern PropertyManager
topic in the SOLIDWORKS Design user-interface help.