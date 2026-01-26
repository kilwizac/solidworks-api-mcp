---
type: method
interface: ISurfaceCutFeatureData
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
  - isurfacecutfeaturedata
  - surface
  - cut
  - feature
  - data
  - release
  - selection
  - access
  - void
---

# ISurfaceCutFeatureData.ReleaseSelectionAccess

Releases access to the selections that created this surface-cut feature.

## Signature

```csharp
void ReleaseSelectionAccess()
```
## Parameters

None.

## Return Value

Unknown.

## Remarks

To access this interface, you must declare it as SurfCutFeatureData or ISurfCutFeatureData.
ISurfaceCutFeatureData::AccessSelections
and
ISurfaceCutFeatureData::IAccessSelections
put the model in a rollback state to allow access to the selections that define the feature.
Use this method to restore the rollback state if you did not modify the feature, or use
IFeature::ModifyDefinition
or
IFeature::IModifyDefinition2
if you did modify the feature.