---
type: method
interface: ISMNormalCutFeatureData2
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
  - ismnormalcutfeaturedata2
  - ism
  - normal
  - cut
  - feature
  - data2
  - release
  - selection
  - access
  - void
---

# ISMNormalCutFeatureData2.ReleaseSelectionAccess

Releases access to the selections that define this sheet metal Normal Cut feature.

## Signature

```csharp
void ReleaseSelectionAccess()
```
## Parameters

None.

## Return Value

Unknown.

## Remarks

ISMNormalCutFeatureData2::AccessSelections
puts the model in a rollback state to allow access to the selections that define this feature.
Use this method to restore the rollback state if you did not modify the feature, or use
IFeature::ModifyDefinition
if you did modify the feature.