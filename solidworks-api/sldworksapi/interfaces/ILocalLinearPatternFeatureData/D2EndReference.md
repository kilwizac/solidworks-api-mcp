---
type: property
interface: ILocalLinearPatternFeatureData
member: D2EndReference
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ILocalLinearPatternFeatureData.D2EndReferenceType
keywords:
  - d2endreference
  - ilocallinearpatternfeaturedata
  - local
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

# ILocalLinearPatternFeatureData.D2EndReference

Gets or sets the up-to reference geometry in Direction 2 for this bidirectional linear component pattern feature.

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
ILocalLinearPatternFeatureData::D2EndCondition
is set to
swPatternEndCondition_e
.swPatternEndCondition_UpToReference.
To pre-select, use selection Mark = 1024.
See
Accessing Selections that Define Features
for additional details on using this property.
For more information, see the
Linear Component Pattern PropertyManager
topic in the SOLIDWORKS Design user-interface help.

## See Also

- `ILocalLinearPatternFeatureData.D2EndReferenceType`