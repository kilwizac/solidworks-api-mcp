---
type: method
interface: IDeleteFaceFeatureData
member: ReleaseSelectionAccess
returns: void
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - geometry
  - selections
related: []
keywords:
  - releaseselectionaccess
  - ideletefacefeaturedata
  - delete
  - face
  - feature
  - data
  - release
  - selection
  - access
  - void
---

# IDeleteFaceFeatureData.ReleaseSelectionAccess

Releases access to selections that describe the DeleteFace feature.

## Signature

```csharp
void ReleaseSelectionAccess()
```
## Parameters

None.

## Return Value

Unknown.

## Remarks

IDeleteFaceFeatureData::AccessSelections
and
IDeleteFaceFeatureData::IAccessSelections
put the model into a rollback state to allow access to the selections that define the DeleteFace feature.
Use this method to restore the rollback state if you did not modify the feature or use
IFeature::ModifyDefinition
or
IFeature::IModifyDefinition2
if you did.