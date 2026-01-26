---
type: method
interface: ISurfacePlanarFeatureData
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
  - isurfaceplanarfeaturedata
  - surface
  - planar
  - feature
  - data
  - release
  - selection
  - access
  - void
---

# ISurfacePlanarFeatureData.ReleaseSelectionAccess

Releases access to the selections for this planar surface feature.

## Signature

```csharp
void ReleaseSelectionAccess()
```
## Parameters

None.

## Return Value

Unknown.

## Remarks

ISurfacePlanarFeatureData::AccessSelections
and
ISurfacePlanarFeatureData::IAccessSelections
put the model in a rollback state to allow access to the selections that define the feature.
Use this method to restore the rollback state if you did not modify the feature, or use
IFeature::ModifyDefinition
or
IFeature::IModifyDefinition2
if you did modify the feature.

## Examples

- ISurfacePlanarFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ISurfacePlanarFeatureData)