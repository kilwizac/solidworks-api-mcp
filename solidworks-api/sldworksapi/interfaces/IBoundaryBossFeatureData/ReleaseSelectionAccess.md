---
type: method
interface: IBoundaryBossFeatureData
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
  - iboundarybossfeaturedata
  - boundary
  - boss
  - feature
  - data
  - release
  - selection
  - access
  - void
---

# IBoundaryBossFeatureData.ReleaseSelectionAccess

Releases access to the selections for this boundary feature.

## Signature

```csharp
void ReleaseSelectionAccess()
```
## Parameters

None.

## Return Value

Unknown.

## Remarks

IBoundaryBossFeatureData::AccessSelections
puts the model into a rollback state to allow access to the selections that define this feature.
Use this method to restore the rollback state if you did not modify the feature or use
IFeature::ModifyDefinition
if you did.