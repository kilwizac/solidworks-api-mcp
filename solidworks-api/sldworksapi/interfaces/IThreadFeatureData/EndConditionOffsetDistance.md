---
type: property
interface: IThreadFeatureData
member: EndConditionOffsetDistance
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - endconditionoffsetdistance
  - ithreadfeaturedata
  - thread
  - feature
  - data
  - end
  - condition
  - offset
  - distance
  - double
readonly: null
---

# IThreadFeatureData.EndConditionOffsetDistance

Gets or sets the end condition offset distance of this thread feature.

## Signature

```csharp
System.Double EndConditionOffsetDistance {get; set;}
```
## Parameters

None.

## Return Value

0.0 (default) < End condition offset distance

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