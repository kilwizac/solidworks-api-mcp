---
type: method
interface: IGroundPlaneFeatureData
member: ReleaseSelectionAccess
returns: void
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
  - features
  - selections
related: []
keywords:
  - releaseselectionaccess
  - igroundplanefeaturedata
  - ground
  - plane
  - feature
  - data
  - release
  - selection
  - access
  - void
---

# IGroundPlaneFeatureData.ReleaseSelectionAccess

Releases access to the selections that define this ground plane feature.

## Signature

```csharp
void ReleaseSelectionAccess()
```
## Parameters

None.

## Return Value

Unknown.

## Remarks

IGroundPlaneFeatureData::AccessSelections
puts the model into a rollback state to allow access to the selections that define this ground plane feature.
Use this method to restore the rollback state if you did not modify the ground plane feature, or use
IFeature::ModifyDefinition
if you did modify the ground plane feature.