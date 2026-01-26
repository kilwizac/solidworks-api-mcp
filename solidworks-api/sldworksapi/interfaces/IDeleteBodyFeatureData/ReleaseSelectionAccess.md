---
type: method
interface: IDeleteBodyFeatureData
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
  - ideletebodyfeaturedata
  - delete
  - body
  - feature
  - data
  - release
  - selection
  - access
  - void
---

# IDeleteBodyFeatureData.ReleaseSelectionAccess

Releases access to selections that describe this Body-Delete/Keep feature.

## Signature

```csharp
void ReleaseSelectionAccess()
```
## Parameters

None.

## Return Value

Unknown.

## Remarks

IDeleteBodyFeatureData::AccessSelections
put the model into a rollback state to allow access to the selections that define this feature.
Use this method to restore the rollback state if you did not modify the feature or use
IFeature::ModifyDefinition
or
IFeature::IModifyDefinition2
if you did.