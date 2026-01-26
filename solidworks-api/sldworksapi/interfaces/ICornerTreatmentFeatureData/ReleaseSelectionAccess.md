---
type: method
interface: ICornerTreatmentFeatureData
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
  - icornertreatmentfeaturedata
  - corner
  - treatment
  - feature
  - data
  - release
  - selection
  - access
  - void
  - icornermanagementfolder
---

# ICornerTreatmentFeatureData.ReleaseSelectionAccess

Releases access to the selections that define this corner treatment feature.

## Signature

```csharp
void ReleaseSelectionAccess()
```
## Parameters

None.

## Return Value

Unknown.

## Remarks

ICornerTreatmentFeatureData::AccessSelections
puts the model into a rollback state to allow access to the selections that define this feature.
Use this method to restore the rollback state if you did not modify the feature or use
IFeature::ModifyDefinition
if you did.

## Examples

- ICornerManagementFolder (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ICornerManagementFolder)