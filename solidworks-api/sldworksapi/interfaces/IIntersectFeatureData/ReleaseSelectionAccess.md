---
type: method
interface: IIntersectFeatureData
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
  - iintersectfeaturedata
  - intersect
  - feature
  - data
  - release
  - selection
  - access
  - void
---

# IIntersectFeatureData.ReleaseSelectionAccess

Releases access to the selections for this intersect feature.

## Signature

```csharp
void ReleaseSelectionAccess()
```
## Parameters

None.

## Return Value

Unknown.

## Remarks

IIntersectFeatureData::AccessSelections
puts the model into a rollback state to allow access to the selections that define this feature.
Use this method to restore the rollback state if you did not modify the feature or use
IFeature::ModifyDefinition
if you did.