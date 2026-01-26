---
type: property
interface: IThreadFeatureData
member: MaintainThreadLength
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - maintainthreadlength
  - ithreadfeaturedata
  - thread
  - feature
  - data
  - maintain
  - length
  - boolean
readonly: null
---

# IThreadFeatureData.MaintainThreadLength

Gets or sets whether to keep the thread a constant length from the starting surface in this thread feature.

## Signature

```csharp
System.Boolean MaintainThreadLength {get; set;}
```
## Parameters

None.

## Return Value

True to maintain a constant thread length, false to not (default)

## Remarks

This property is valid only if:
IThreadFeatureData::Offset
is set to true.
IThreadFeatureData::EndCondition
is set to
swThreadEndCondition_e
:
swThreadEndCondition_Blind
- or -
swThreadEndCondition_Revolutions

## Examples

- IThreadFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IThreadFeatureData)