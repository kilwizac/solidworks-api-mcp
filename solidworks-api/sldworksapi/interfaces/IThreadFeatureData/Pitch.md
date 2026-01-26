---
type: property
interface: IThreadFeatureData
member: Pitch
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IThreadFeatureData.MultipleStart
keywords:
  - pitch
  - ithreadfeaturedata
  - thread
  - feature
  - data
  - double
readonly: null
---

# IThreadFeatureData.Pitch

Gets or sets the pitch of the thread helix of this thread feature.

## Signature

```csharp
System.Double Pitch {get; set;}
```
## Parameters

None.

## Return Value

0.0 < Pitch of the helix; default is determined by interrogating the selected configuration's profile sketch

## Remarks

Specify either a value or an equation that starts with an equal sign (=).
This property is valid only if
IThreadFeatureData::PitchOverride
is set to true.

## Examples

- IThreadFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IThreadFeatureData)

## See Also

- `IThreadFeatureData.MultipleStart`