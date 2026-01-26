---
type: method
interface: IBendsFeatureData
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
  - ibendsfeaturedata
  - bends
  - feature
  - data
  - release
  - selection
  - access
  - void
---

# IBendsFeatureData.ReleaseSelectionAccess

Releases access to the selections that describe this Flatten-Bends/Process-Bends feature.

## Signature

```csharp
void ReleaseSelectionAccess()
```
## Parameters

None.

## Return Value

Unknown.

## Remarks

IBendsFeatureData::AccessSelections
and
IBendsFeatureData::IAccessSelections2
puts the model into a rollback state to allow access to the selections that define the Bends feature.
Use this method to restore the rollback state if you did not modify the feature or use
IFeature::ModifyDefinition
or
IFeature::IModifyDefinition2
if you did.