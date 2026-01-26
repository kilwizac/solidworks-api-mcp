---
type: property
interface: ICosmeticThreadFeatureData
member: ApplyThread
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ICosmeticThreadFeatureData.BlindDepth
keywords:
  - applythread
  - icosmeticthreadfeaturedata
  - cosmetic
  - thread
  - feature
  - data
  - apply
  - int32
readonly: null
---

# ICosmeticThreadFeatureData.ApplyThread

Gets or sets how to apply the cosmetic thread.

## Signature

```csharp
System.Int32 ApplyThread {get; set;}
```
## Parameters

None.

## Return Value

How to apply the thread as defined in swCosmeticThreadType_e (see Remarks )

## Remarks

If the value is swApplyCosmeticThread_Blind, then call
ICosmeticThreadFeatureData::BlindDepth
to get or set the depth of the thread.

## Examples

- ICosmeticThreadFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ICosmeticThreadFeatureData)

## See Also

- `ICosmeticThreadFeatureData.BlindDepth`