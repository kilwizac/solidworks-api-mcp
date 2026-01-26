---
type: method
interface: IPartingLineFeatureData
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
  - ipartinglinefeaturedata
  - parting
  - line
  - feature
  - data
  - release
  - selection
  - access
  - void
---

# IPartingLineFeatureData.ReleaseSelectionAccess

Releases access to the selections that define this parting line feature.

## Signature

```csharp
void ReleaseSelectionAccess()
```
## Parameters

None.

## Return Value

Unknown.

## Remarks

IPartingLineFeatureData::AccessSelections
puts the model in a rollback state to allow access to the selections that define the parting line feature.
Use this method to restore the rollback state if you did not modify the feature, or use
IFeature::ModifyDefinition
or
IFeature::IModifyDefinition2
if you did modify the feature.