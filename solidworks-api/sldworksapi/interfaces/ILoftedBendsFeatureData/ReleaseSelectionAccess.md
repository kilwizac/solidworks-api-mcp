---
type: method
interface: ILoftedBendsFeatureData
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
  - iloftedbendsfeaturedata
  - lofted
  - bends
  - feature
  - data
  - release
  - selection
  - access
  - void
---

# ILoftedBendsFeatureData.ReleaseSelectionAccess

Releases access to the selections for this lofted bends feature.

## Signature

```csharp
void ReleaseSelectionAccess()
```
## Parameters

None.

## Return Value

Unknown.

## Remarks

ILoftedBendsFeatureData::AccessSelections
and
ILoftedBendsFeatureData::IAccessSelections
put the model into a rollback state to allow access to the selections that define this feature.
Use this method to restore the rollback state if you did not modify the feature or use
IFeature::ModifyDefinition
or
IFeature::IModifyDefintion2
if you did.