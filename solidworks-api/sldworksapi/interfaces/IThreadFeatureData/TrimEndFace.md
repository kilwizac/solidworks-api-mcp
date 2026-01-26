---
type: property
interface: IThreadFeatureData
member: TrimEndFace
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
  - IThreadFeatureData.TrimStartFace
keywords:
  - trimendface
  - ithreadfeaturedata
  - thread
  - feature
  - data
  - trim
  - end
  - face
  - boolean
readonly: null
---

# IThreadFeatureData.TrimEndFace

Gets or sets whether to align the thread to the end face of this thread feaure.

## Signature

```csharp
System.Boolean TrimEndFace {get; set;}
```
## Parameters

None.

## Return Value

True to align the thread to the end face, false to not (default)

## Remarks

This property is valid only if the thread profile extends beyond the trimming face.

## Examples

- IThreadFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IThreadFeatureData)

## See Also

- `IThreadFeatureData.MultipleStart`
- `IThreadFeatureData.RightHanded`
- `IThreadFeatureData.TrimStartFace`