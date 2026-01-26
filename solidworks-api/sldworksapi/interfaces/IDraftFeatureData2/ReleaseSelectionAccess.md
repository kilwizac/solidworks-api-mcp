---
type: method
interface: IDraftFeatureData2
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
  - idraftfeaturedata2
  - draft
  - feature
  - data2
  - release
  - selection
  - access
  - void
---

# IDraftFeatureData2.ReleaseSelectionAccess

Releases access to the selections for this draft feature.

## Signature

```csharp
void ReleaseSelectionAccess()
```
## Parameters

None.

## Return Value

Unknown.

## Remarks

IDraftFeatureData::AccessSelections
and
IDraftFeatureData2::IAccessSelections
put the model into a rollback state to allow access to the selections that define this feature.
Use this method to restore the rollback state if you did not modify the feature or use
IFeature::ModifyDefinition
or
IFeature::IModifyDefinition2
if you did.