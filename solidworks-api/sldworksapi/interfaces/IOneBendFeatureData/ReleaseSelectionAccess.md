---
type: method
interface: IOneBendFeatureData
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
  - ionebendfeaturedata
  - one
  - bend
  - feature
  - data
  - release
  - selection
  - access
  - void
---

# IOneBendFeatureData.ReleaseSelectionAccess

Accesses the selections that describe this bend feature.

## Signature

```csharp
void ReleaseSelectionAccess()
```
## Parameters

None.

## Return Value

Unknown.

## Remarks

IOneBendFeatureData::AccessSelections
and
IOneBendFeatureDAta::IAccessSelections2
put the model in a rollback state to allow access to the selections that define the bend feature.
Use this method to restore the rollback state if you did not modify the feature, or use
IFeature::ModifyDefinition
or
IFeature::IModifyDefinition2
if you did modify the feature.