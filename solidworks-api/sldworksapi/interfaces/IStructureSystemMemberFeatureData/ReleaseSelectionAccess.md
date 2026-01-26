---
type: method
interface: IStructureSystemMemberFeatureData
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
  - istructuresystemmemberfeaturedata
  - structure
  - member
  - feature
  - data
  - release
  - selection
  - access
  - void
---

# IStructureSystemMemberFeatureData.ReleaseSelectionAccess

Releases access to the selections used to define this structure system member feature.

## Signature

```csharp
void ReleaseSelectionAccess()
```
## Parameters

None.

## Return Value

Unknown.

## Remarks

IStructureSystemMemberFeatureData::AccessSelections
puts the model into a rollback state to allow access to the selections that define this feature.
Use this method to restore the rollback state if you did not modify the feature or use
IFeature::ModifyDefinition
or
IFeature::IModifyDefinition2
if you did.