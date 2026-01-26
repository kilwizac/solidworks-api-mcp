---
type: method
interface: IMiterFlangeFeatureData
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
  - imiterflangefeaturedata
  - miter
  - flange
  - feature
  - data
  - release
  - selection
  - access
  - void
---

# IMiterFlangeFeatureData.ReleaseSelectionAccess

Releases access to the selections used to define the miter flange feature.

## Signature

```csharp
void ReleaseSelectionAccess()
```
## Parameters

None.

## Return Value

Unknown.

## Remarks

IMiterFlangeFeatureData::AccessSelections
and
IMiterFlangeFeatureData::IAccessSelections2
put the model into a rollback state to allow access to the selections that define this feature.
Use this method to restore the rollback state if you did not modify the feature or use
IFeature::ModifyDefinition
or
IFeature::IModifyDefintion2
if you did.