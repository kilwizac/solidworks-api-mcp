---
type: property
interface: IThreadFeatureData
member: Revolutions
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - revolutions
  - ithreadfeaturedata
  - thread
  - feature
  - data
  - double
readonly: null
---

# IThreadFeatureData.Revolutions

Gets or sets the number of revolutions in the helix of this thread feature, taking into account any offset.

## Signature

```csharp
System.Double Revolutions {get; set;}
```
## Parameters

None.

## Return Value

0.0 < Number of revolutions in the thread helix; default is 10.0 (see Remarks )

## Remarks

This property is valid only if
IThreadFeatureData::EndCondition
is set to
swThreadEndCondition_e
.swThreadEndCondition_Revolutions.
Specify either a value or an equation that starts with an equal sign (=).