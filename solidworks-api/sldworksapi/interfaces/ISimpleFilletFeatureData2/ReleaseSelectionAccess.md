---
type: method
interface: ISimpleFilletFeatureData2
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
  - isimplefilletfeaturedata2
  - simple
  - fillet
  - feature
  - data2
  - release
  - selection
  - access
  - void
---

# ISimpleFilletFeatureData2.ReleaseSelectionAccess

Releases access to the selections used to define the simple fillet feature.

## Signature

```csharp
void ReleaseSelectionAccess()
```
## Parameters

None.

## Return Value

Unknown.

## Remarks

ISimpleFilletFeatureData2::AccessSelections
and
ISimpleFilletFeatureData2::IAccessSelections
put the model in a rollback state to allow access to the selections that define the feature.
Use this method to restore the rollback state if you did not modify the feature, or use
IFeature::ModifyDefinition
or
IFeature::IModifyDefinition2
if you did modify the feature.