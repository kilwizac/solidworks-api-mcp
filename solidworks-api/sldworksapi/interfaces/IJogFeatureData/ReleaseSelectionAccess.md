---
type: method
interface: IJogFeatureData
member: ReleaseSelectionAccess
returns: void
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - selections
related: []
keywords:
  - releaseselectionaccess
  - ijogfeaturedata
  - jog
  - feature
  - data
  - release
  - selection
  - access
  - void
---

# IJogFeatureData.ReleaseSelectionAccess

Releases access to the selections for this jog feature.

## Signature

```csharp
void ReleaseSelectionAccess()
```
## Parameters

None.

## Return Value

Unknown.

## Remarks

IJogFeatureData::AccessSelections
and
IJogFeatureData::IAccessSelections
put the model into a rollback state to allow access to the selections that define this feature.
Use this method to restore the rollback state if you did not modify the feature or use
IFeature::ModifyDefinition
or
IFeature::IModifyDefintion2
if you did.