---
type: property
interface: ISMGussetFeatureData
member: ShowProfile
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ISMGussetFeatureData.ShowCenter
keywords:
  - showprofile
  - ismgussetfeaturedata
  - ism
  - gusset
  - feature
  - data
  - show
  - profile
  - boolean
readonly: null
---

# ISMGussetFeatureData.ShowProfile

Gets or sets whether to display the profile of the gusset in its flattened state.

## Signature

```csharp
System.Boolean ShowProfile {get; set;}
```
## Parameters

None.

## Return Value

True to display the profile of the flattened gusset, false to not

## Remarks

This property is valid only if
ISMGussetFeatureData::OverrideDocSettings
is true.

## Examples

- ISMGussetFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ISMGussetFeatureData)

## See Also

- `ISMGussetFeatureData.ShowCenter`