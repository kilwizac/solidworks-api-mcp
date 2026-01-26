---
type: method
interface: IScaleFeatureData
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
  - iscalefeaturedata
  - scale
  - feature
  - data
  - release
  - selection
  - access
  - void
  - faces
  - affected
  - vba
---

# IScaleFeatureData.ReleaseSelectionAccess

Releases access to the selections used to define the scale feature.

## Signature

```csharp
void ReleaseSelectionAccess()
```
## Parameters

None.

## Return Value

Unknown.

## Remarks

IScaleFeatureData::AccessSelections
and
IScaleFeatureData::IAccessSelections
put the model in a rollback state to allow access to the selections that define the feature.
Use this method to restore the rollback state if you did not modify the feature, or use
IFeature::ModifyDefinition
or
IFeature::IModifyDefinition2
if you did modify the feature.

## Examples

- Get Faces Affected By Scale Feature (VBA) (Get_Faces_Affected_by_Scale_Feature_Example_VB.htm)