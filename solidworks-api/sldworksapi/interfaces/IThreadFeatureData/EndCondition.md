---
type: property
interface: IThreadFeatureData
member: EndCondition
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IThreadFeatureData.BlindDepth
  - IThreadFeatureData.EndConditionOffset
  - IThreadFeatureData.EndConditionOffsetDistance
  - IThreadFeatureData.EndConditionOffsetReverse
  - IThreadFeatureData.GetEndConditionReference
  - IThreadFeatureData.MaintainThreadLength
  - IThreadFeatureData.ReverseDirection
  - IThreadFeatureData.Revolutions
  - IThreadFeatureData.SetEndConditionReference
keywords:
  - endcondition
  - ithreadfeaturedata
  - thread
  - feature
  - data
  - end
  - condition
  - int32
readonly: null
---

# IThreadFeatureData.EndCondition

Gets or sets the end condition for this thread feature.

## Signature

```csharp
System.Int32 EndCondition {get; set;}
```
## Parameters

None.

## Return Value

Thread end condition as defined in swThreadEndCondition_e ; default is swThreadEndCondition_e.swThreadEndCondition_Blind

## Examples

- IThreadFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IThreadFeatureData)

## See Also

- `IThreadFeatureData.BlindDepth`
- `IThreadFeatureData.EndConditionOffset`
- `IThreadFeatureData.EndConditionOffsetDistance`
- `IThreadFeatureData.EndConditionOffsetReverse`
- `IThreadFeatureData.GetEndConditionReference`
- `IThreadFeatureData.MaintainThreadLength`
- `IThreadFeatureData.ReverseDirection`
- `IThreadFeatureData.Revolutions`
- `IThreadFeatureData.SetEndConditionReference`