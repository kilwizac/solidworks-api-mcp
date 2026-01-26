---
type: method
interface: IChainPatternFeatureData
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
  - ichainpatternfeaturedata
  - chain
  - pattern
  - feature
  - data
  - release
  - selection
  - access
  - void
---

# IChainPatternFeatureData.ReleaseSelectionAccess

Releases access to the selections that define this chain pattern feature.

## Signature

```csharp
void ReleaseSelectionAccess()
```
## Parameters

None.

## Return Value

Unknown.

## Remarks

IChainPatterneatureData::AccessSelections
puts the model into a rollback state to allow access to the selections that define this feature. Use this method to restore the rollback state if you did not modify the feature or use
IFeature::ModifyDefinition
if you did.