---
type: method
interface: ICosmeticWeldBeadFeatureData
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
  - icosmeticweldbeadfeaturedata
  - cosmetic
  - weld
  - bead
  - feature
  - data
  - release
  - selection
  - access
  - void
---

# ICosmeticWeldBeadFeatureData.ReleaseSelectionAccess

Releases access to the selections that define this cosmetic weld bead feature.

## Signature

```csharp
void ReleaseSelectionAccess()
```
## Parameters

None.

## Return Value

Unknown.

## Remarks

ICosmeticWeldBeadFeatureData::AccessSelections
puts the model into a rollback state to allow access to the selections that define this feature.
Use this method to restore the rollback state if you did not modify the feature. Use
IFeature::ModifyDefinition
or
IFeature::IModifyDefinition2
if you did.