---
type: method
interface: ISMNormalCutFeatureData
member: ReleaseSelectionAccess
returns: void
parameters: []
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - features
  - selections
related: []
keywords:
  - releaseselectionaccess
  - ismnormalcutfeaturedata
  - ism
  - normal
  - cut
  - feature
  - data
  - release
  - selection
  - access
  - void
---

# ISMNormalCutFeatureData.ReleaseSelectionAccess

Obsolete. See ISMNormalCutFeatureData2.

## Signature

```csharp
void ReleaseSelectionAccess()
```
## Parameters

None.

## Return Value

Unknown.

## Remarks

ISMNormalCutFeatureData::AccessSelections
puts the model in a rollback state to allow access to the selections that define this feature.
Use this method to restore the rollback state if you did not modify the feature, or use
IFeature::ModifyDefinition
if you did modify the feature.