---
type: property
interface: IThreadFeatureData
member: PitchOverride
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - pitchoverride
  - ithreadfeaturedata
  - thread
  - feature
  - data
  - pitch
  - override
  - boolean
readonly: null
---

# IThreadFeatureData.PitchOverride

Gets or sets whether to override the pitch of the thread helix of this thread feature.

## Signature

```csharp
System.Boolean PitchOverride {get; set;}
```
## Parameters

None.

## Return Value

True to override the pitch, false to not (default)

## Remarks

If this property is set to true, use
IThreadFeatureData::Pitch
to set the pitch of the thread helix.

## Examples

- IThreadFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IThreadFeatureData)