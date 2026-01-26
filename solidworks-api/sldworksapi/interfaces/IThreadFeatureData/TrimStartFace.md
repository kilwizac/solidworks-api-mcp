---
type: property
interface: IThreadFeatureData
member: TrimStartFace
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - geometry
related:
  - IThreadFeatureData.MultipleStart
  - IThreadFeatureData.RightHanded
  - IThreadFeatureData.TrimEndFace
keywords:
  - trimstartface
  - ithreadfeaturedata
  - thread
  - feature
  - data
  - trim
  - start
  - face
  - boolean
readonly: null
---

# IThreadFeatureData.TrimStartFace

Gets or sets whether to align the thread to the start face of this thread feaure.

## Signature

```csharp
System.Boolean TrimStartFace {get; set;}
```
## Parameters

None.

## Return Value

True to align the thread to the start face, false to not (default)

## Remarks

This property is valid only if the thread profile extends beyond the trimming face.

## Examples

- IThreadFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IThreadFeatureData)

## See Also

- `IThreadFeatureData.MultipleStart`
- `IThreadFeatureData.RightHanded`
- `IThreadFeatureData.TrimEndFace`