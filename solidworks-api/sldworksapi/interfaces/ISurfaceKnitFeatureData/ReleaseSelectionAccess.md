---
type: method
interface: ISurfaceKnitFeatureData
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
  - isurfaceknitfeaturedata
  - surface
  - knit
  - feature
  - data
  - release
  - selection
  - access
  - void
---

# ISurfaceKnitFeatureData.ReleaseSelectionAccess

Releases access to the selections for this Surface-Knit feature.

## Signature

```csharp
void ReleaseSelectionAccess()
```
## Parameters

None.

## Return Value

Unknown.

## Remarks

ISurfaceKnitFeatureData::AccessSelections
and
ISurfaceKnitFeatureData::IAccessSelections
put the model in a rollback state to allow access to the selections that define the feature.
Use this method to restore the rollback state if you did not modify the feature, or use
IFeature::ModifyDefinition
or
IFeature::IModifyDefinition2
if you did modify the feature.
See
Accessing Selections that Define Features
for additional details.