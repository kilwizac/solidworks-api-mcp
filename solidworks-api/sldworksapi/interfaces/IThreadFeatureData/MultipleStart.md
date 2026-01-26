---
type: property
interface: IThreadFeatureData
member: MultipleStart
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IThreadFeatureData.RightHanded
  - IThreadFeatureData.TrimEndFace
  - IThreadFeatureData.TrimStartFace
keywords:
  - multiplestart
  - ithreadfeaturedata
  - thread
  - feature
  - data
  - multiple
  - start
  - boolean
readonly: null
---

# IThreadFeatureData.MultipleStart

Gets or sets whether the thread has multiple starts in this thread feature.

## Signature

```csharp
System.Boolean MultipleStart {get; set;}
```
## Parameters

None.

## Return Value

True if the thread has multiple starts, false if not (default)

## Remarks

If this property is set to true, use
IThreadFeatureData::NumberOfStarts
to set the number of times the thread is created in an evenly-spaced circular pattern around the hole or shaft.
IThreadFeatureData::Pitch
must permit multiple starts without causing crossing or self-intersecting threads. For example, the pitch of one thread must be wide enough to allow the nesting of other threads of different pitch.

## Examples

- IThreadFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IThreadFeatureData)

## See Also

- `IThreadFeatureData.RightHanded`
- `IThreadFeatureData.TrimEndFace`
- `IThreadFeatureData.TrimStartFace`