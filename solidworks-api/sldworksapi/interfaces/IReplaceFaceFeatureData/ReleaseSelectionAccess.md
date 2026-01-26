---
type: method
interface: IReplaceFaceFeatureData
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
  - ireplacefacefeaturedata
  - replace
  - face
  - feature
  - data
  - release
  - selection
  - access
  - void
---

# IReplaceFaceFeatureData.ReleaseSelectionAccess

Releases access to the selections in this feature.

## Signature

```csharp
void ReleaseSelectionAccess()
```
## Parameters

None.

## Return Value

Unknown.

## Remarks

IReplaceFaceFeatureData::AccessSelections
and
IRepalceFaceFeatureData::IAccessSelections
put the model in a rollback state to allow access to the selections that define the feature.
Use this method to restore the rollback state if you did not modify the feature, or use
IFeature::ModifyDefinition
or
IFeature::IModifyDefinition2
if you did modify the feature.

## Examples

- IReplaceFaceFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IReplaceFaceFeatureData)