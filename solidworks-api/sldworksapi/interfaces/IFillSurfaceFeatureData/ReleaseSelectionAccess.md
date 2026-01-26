---
type: method
interface: IFillSurfaceFeatureData
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
  - ifillsurfacefeaturedata
  - fill
  - surface
  - feature
  - data
  - release
  - selection
  - access
  - void
---

# IFillSurfaceFeatureData.ReleaseSelectionAccess

Releases access to selections that define this fill-surface feature.

## Signature

```csharp
void ReleaseSelectionAccess()
```
## Parameters

None.

## Return Value

Unknown.

## Remarks

IFillSurfaceFeatureData::AccessSelections
and
IFillSurfaceFeatureData::IAccessSelections
put the model into a rollback state to allow access to the selections that define the fill-surface feature.
Use this method to restore the rollback state if you did not modify the fill-surface feature, or use
IFeature::ModifyDefinition
or
IFeature::IModifyDefinition2
if you did modify the fill-surface feature.