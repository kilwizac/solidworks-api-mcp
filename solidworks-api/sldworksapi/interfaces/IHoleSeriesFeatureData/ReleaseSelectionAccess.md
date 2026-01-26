---
type: method
interface: IHoleSeriesFeatureData
member: ReleaseSelectionAccess
returns: void
parameters: []
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - features
  - selections
related: []
keywords:
  - releaseselectionaccess
  - iholeseriesfeaturedata
  - hole
  - series
  - feature
  - data
  - release
  - selection
  - access
  - void
---

# IHoleSeriesFeatureData.ReleaseSelectionAccess

Obsolete. Superseded by IHoleSeriesFeatureData2::ReleaseSelectionAccess.

## Signature

```csharp
void ReleaseSelectionAccess()
```
## Parameters

None.

## Return Value

Unknown.

## Remarks

IHoleSeriesFeatureData::AccessSelections
and
IHoleSeriesFeatureData::IAccessSelections
put the model into a rollback state to allow access to the selections that define this feature.
Use this method to restore the rollback state if you did not modify the feature or use
IFeature::ModifyDefinition
or
IFeature::IModifyDefintion2
if you did.