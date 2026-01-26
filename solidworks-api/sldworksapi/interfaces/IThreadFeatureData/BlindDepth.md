---
type: property
interface: IThreadFeatureData
member: BlindDepth
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - blinddepth
  - ithreadfeaturedata
  - thread
  - feature
  - data
  - blind
  - depth
  - double
readonly: null
---

# IThreadFeatureData.BlindDepth

Gets or sets the distance from the blind end condition reference of this thread feature, taking into account any offset.

## Signature

```csharp
System.Double BlindDepth {get; set;}
```
## Parameters

None.

## Return Value

0.0 < Distance from the blind end condition reference; default is 0.01 m

## Remarks

This property is valid only if
IThreadFeatureData::EndCondition
is set to
swThreadEndCondition_e
.swThreadEndCondition_Blind.
Specify either a value or an equation that starts with an equal sign (=).