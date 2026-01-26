---
type: method
interface: IMirrorPartFeatureData
member: ReleaseSelectionAccess
returns: void
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - parts
  - selections
related: []
keywords:
  - releaseselectionaccess
  - imirrorpartfeaturedata
  - mirror
  - part
  - feature
  - data
  - release
  - selection
  - access
  - void
---

# IMirrorPartFeatureData.ReleaseSelectionAccess

Releases access to the selections used to define the mirror part feature.

## Signature

```csharp
void ReleaseSelectionAccess()
```
## Parameters

None.

## Return Value

Unknown.

## Remarks

IMirrorPartFeatureData::AccessSelections
puts the model in a rollback state to allow access to the selections that define this feature.
Use this method to restore the rollback state if you did not modify the feature, or use
IFeature::ModifyDefinition
or
IFeature::IModifyDefinition2
if you did.

## Examples

- IMirrorPartFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IMirrorPartFeatureData)