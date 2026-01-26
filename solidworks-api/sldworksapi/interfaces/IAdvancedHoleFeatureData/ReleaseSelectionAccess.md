---
type: method
interface: IAdvancedHoleFeatureData
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
  - iadvancedholefeaturedata
  - advanced
  - hole
  - feature
  - data
  - release
  - selection
  - access
  - void
---

# IAdvancedHoleFeatureData.ReleaseSelectionAccess

Releases access to the selections used to define the Hole Wizard feature.

## Signature

```csharp
void ReleaseSelectionAccess()
```
## Parameters

None.

## Return Value

Unknown.

## Remarks

IAdvancedHoleFeatureData::AccessSelections
puts the model into a rollback state to allow access to the selections that define this feature.
You must use either of the following methods to restore the original state of the model:
IFeature::ModifyDefinition
or
IFeature::IModifyDefinition2
, if you modified the feature
this method, if you did not modify the feature