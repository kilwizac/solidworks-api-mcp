---
type: method
interface: IMirrorComponentFeatureData
member: ReleaseSelectionAccess
returns: void
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
  - features
  - selections
related: []
keywords:
  - releaseselectionaccess
  - imirrorcomponentfeaturedata
  - mirror
  - component
  - feature
  - data
  - release
  - selection
  - access
  - void
---

# IMirrorComponentFeatureData.ReleaseSelectionAccess

Releases access to the selections used to define this mirror component feature.

## Signature

```csharp
void ReleaseSelectionAccess()
```
## Parameters

None.

## Return Value

Unknown.

## Remarks

IMirrorComponentFeatureData::AccessSelections
puts the model in a rollback state to allow access to the selections that define this feature.
Use this method to restore the rollback state if you did not modify the feature, or use
IFeature::ModifyDefinition
or
IFeature::IModifyDefinition2
if you did.