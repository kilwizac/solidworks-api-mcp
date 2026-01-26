---
type: property
interface: IThreadFeatureData
member: EndConditionOffsetReverse
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - endconditionoffsetreverse
  - ithreadfeaturedata
  - thread
  - feature
  - data
  - end
  - condition
  - offset
  - reverse
  - boolean
readonly: null
---

# IThreadFeatureData.EndConditionOffsetReverse

Gets or sets whether to flip the offset of the end condition to the opposite side of the end condition reference in this thread feature.

## Signature

```csharp
System.Boolean EndConditionOffsetReverse {get; set;}
```
## Parameters

None.

## Return Value

True to flip the offset, false to not (default)

## Remarks

This property is valid only if:
IThreadFeatureData::EndCondition
is set to
swThreadEndCondition_e
.swThreadEndCondition_UpToSelection.
- and -
IThreadFeatureData::EndConditionOffset
is set to true.

## Examples

- IThreadFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IThreadFeatureData)