---
type: method
interface: IThickenFeatureData
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
  - ithickenfeaturedata
  - thicken
  - feature
  - data
  - release
  - selection
  - access
  - void
  - create
  - vba
---

# IThickenFeatureData.ReleaseSelectionAccess

Releases the selections that created this thicken feature.

## Signature

```csharp
void ReleaseSelectionAccess()
```
## Parameters

None.

## Return Value

Unknown.

## Remarks

IThickenFeatureData::AccessSelections
and
IThickenFeatureData::IAccessSelections
put the model in a rollback state to allow access to the selections that define the feature.
Use this method to restore the rollback state if you did not modify the feature, or use
IFeature::ModifyDefinition
or
IFeature::IModifyDefinition2
if you did modify the feature.

## Examples

- Create Thicken Feature (VBA) (Create_Thicken_Feature_Example_VB.htm)