---
type: method
interface: IWizardHoleFeatureData2
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
  - iwizardholefeaturedata2
  - wizard
  - hole
  - feature
  - data2
  - release
  - selection
  - access
  - void
---

# IWizardHoleFeatureData2.ReleaseSelectionAccess

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

IWizardHoleFeatureData2::AccessSelections
and
IWizardHoleFeatureData2::IAccessSelections
put the model into a rollback state to allow access to the selections that define this feature.
Use this method to restore the rollback state if you did not modify the feature or use
IFeature::ModifyDefinition
or
IFeature::IModifyDefinition2
if you did.