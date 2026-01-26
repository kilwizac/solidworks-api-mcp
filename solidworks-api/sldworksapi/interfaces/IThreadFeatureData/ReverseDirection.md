---
type: property
interface: IThreadFeatureData
member: ReverseDirection
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - reversedirection
  - ithreadfeaturedata
  - thread
  - feature
  - data
  - reverse
  - direction
  - boolean
readonly: null
---

# IThreadFeatureData.ReverseDirection

Gets or sets whether to reverse the direction of the Blind or Revolutions end condition of this thread feature.

## Signature

```csharp
System.Boolean ReverseDirection {get; set;}
```
## Parameters

None.

## Return Value

True to reverse the direction of the Blind or Revolutions end condition, false to not (default)

## Remarks

This property is valid only if
IThreadFeatureData::EndCondition
is set to
swThreadEndCondition_e
:
swThreadEndCondition_Blind
- or -
swThreadEndCondition_Revolutions.