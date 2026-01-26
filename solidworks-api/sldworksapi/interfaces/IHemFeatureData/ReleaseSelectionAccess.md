---
type: method
interface: IHemFeatureData
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
  - ihemfeaturedata
  - hem
  - feature
  - data
  - release
  - selection
  - access
  - void
---

# IHemFeatureData.ReleaseSelectionAccess

Releases access to the selections for this hem feature.

## Signature

```csharp
void ReleaseSelectionAccess()
```
## Parameters

None.

## Return Value

Unknown.

## Remarks

IHemFeatureData::AccessSelections
and
IHemFeatureData::IAccessSelections
put the model into a rollback state to allow access to the selections that define this feature.
Use this method to restore the rollback state if you did not modify the feature or use
IFeature::ModifyDefinition
or
IFeature::IModifyDefintion2
if you did.