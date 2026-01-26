---
type: property
interface: IThreadFeatureData
member: EndConditionOffset
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IThreadFeatureData.EndConditionOffsetDistance
  - IThreadFeatureData.EndConditionOffsetReverse
keywords:
  - endconditionoffset
  - ithreadfeaturedata
  - thread
  - feature
  - data
  - end
  - condition
  - offset
  - boolean
readonly: null
---

# IThreadFeatureData.EndConditionOffset

Gets or sets whether to offset the end condition of this thread feature.

## Signature

```csharp
System.Boolean EndConditionOffset {get; set;}
```
## Parameters

None.

## Return Value

True to offset the end condition, false to not (default)

## Remarks

This property is valid only if
IThreadFeatureData::EndCondition
is set to
swThreadEndCondition_e
.swThreadEndCondition_UpToSelection.

## Examples

- IThreadFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IThreadFeatureData)

## See Also

- `IThreadFeatureData.EndConditionOffsetDistance`
- `IThreadFeatureData.EndConditionOffsetReverse`