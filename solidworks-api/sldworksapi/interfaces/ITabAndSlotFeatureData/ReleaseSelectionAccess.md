---
type: method
interface: ITabAndSlotFeatureData
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
  - itabandslotfeaturedata
  - tab
  - slot
  - feature
  - data
  - release
  - selection
  - access
  - void
---

# ITabAndSlotFeatureData.ReleaseSelectionAccess

Releases access to the selections for this Tab and Slot feature.

## Signature

```csharp
void ReleaseSelectionAccess()
```
## Parameters

None.

## Return Value

Unknown.

## Remarks

ITabAndSlotFeatureData::AccessSelections
puts the model in a rollback state to allow access to the selections that define the feature.
Use this method to restore the rollback state if you did not modify the feature, or use
IFeature::ModifyDefinition
or
IFeature::IModifyDefinition2
if you did modify the feature.