---
type: property
interface: IThreadFeatureData
member: RightHanded
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IThreadFeatureData.MultipleStart
  - IThreadFeatureData.TrimEndFace
  - IThreadFeatureData.TrimStartFace
keywords:
  - righthanded
  - ithreadfeaturedata
  - thread
  - feature
  - data
  - right
  - handed
  - boolean
readonly: null
---

# IThreadFeatureData.RightHanded

Gets or sets how the thread is wound in this thread feature.

## Signature

```csharp
System.Boolean RightHanded {get; set;}
```
## Parameters

None.

## Return Value

True if the thread is wound clockwise (default), false if counter clockwise

## Examples

- IThreadFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IThreadFeatureData)

## See Also

- `IThreadFeatureData.MultipleStart`
- `IThreadFeatureData.TrimEndFace`
- `IThreadFeatureData.TrimStartFace`