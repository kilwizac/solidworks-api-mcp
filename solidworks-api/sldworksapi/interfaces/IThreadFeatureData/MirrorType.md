---
type: property
interface: IThreadFeatureData
member: MirrorType
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - mirrortype
  - ithreadfeaturedata
  - thread
  - feature
  - data
  - mirror
  - type
  - int32
readonly: null
---

# IThreadFeatureData.MirrorType

Gets or sets how to flip the profile of the thread helix of this thread feature.

## Signature

```csharp
System.Int32 MirrorType {get; set;}
```
## Parameters

None.

## Return Value

Mirror profile type as defined in swThreadMirrorType_e ; default is swThreadMirrorType_e.swThreadMirrorType_Horizontally

## Remarks

This property is valid only if
IThreadFeatureData::MirrorProfile
is set to true.

## Examples

- IThreadFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IThreadFeatureData)