---
type: property
interface: IThreadFeatureData
member: MirrorProfile
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - mirrorprofile
  - ithreadfeaturedata
  - thread
  - feature
  - data
  - mirror
  - profile
  - boolean
readonly: null
---

# IThreadFeatureData.MirrorProfile

Gets or sets whether to flip the profile of the thread helix about its horizontal or vertical axis in this thread feature.

## Signature

```csharp
System.Boolean MirrorProfile {get; set;}
```
## Parameters

None.

## Return Value

True to flip the profile of the thread helix about its horizontal or vertical axis, false to not (default)

## Remarks

If this property is set to true, use
IThreadFeatureData::MirrorType
to specify the axis about which to flip the thread helix profile.

## Examples

- IThreadFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IThreadFeatureData)