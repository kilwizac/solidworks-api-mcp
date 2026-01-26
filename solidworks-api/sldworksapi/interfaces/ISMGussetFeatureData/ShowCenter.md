---
type: property
interface: ISMGussetFeatureData
member: ShowCenter
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ISMGussetFeatureData.ShowProfile
keywords:
  - showcenter
  - ismgussetfeaturedata
  - ism
  - gusset
  - feature
  - data
  - show
  - center
  - boolean
readonly: null
---

# ISMGussetFeatureData.ShowCenter

Gets or sets whether to display the center marks of the gusset in its flattened state.

## Signature

```csharp
System.Boolean ShowCenter {get; set;}
```
## Parameters

None.

## Return Value

True to display the center marks of the flattened gusset, false to not

## Remarks

This property is valid only if
ISMGussetFeatureData::OverrideDocSettings
is true.

## Examples

- ISMGussetFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ISMGussetFeatureData)

## See Also

- `ISMGussetFeatureData.ShowProfile`