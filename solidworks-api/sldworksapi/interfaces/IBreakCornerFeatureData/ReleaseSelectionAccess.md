---
type: method
interface: IBreakCornerFeatureData
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
  - ibreakcornerfeaturedata
  - break
  - corner
  - feature
  - data
  - release
  - selection
  - access
  - void
---

# IBreakCornerFeatureData.ReleaseSelectionAccess

Releases access to selections for this break corner feature.

## Signature

```csharp
void ReleaseSelectionAccess()
```
## Parameters

None.

## Return Value

Unknown.

## Remarks

IBreakCornerFeatureData::AccessSelections
or
IBreakCornerFeatureData::IAccessSelections
puts the model into a rollback state to allow access to the selections that define this feature.
Use this method to restore the rollback state if you did not modify the feature or use
IFeature::ModifyDefinition
or
IFeature::IModifyDefinition2
if you did.