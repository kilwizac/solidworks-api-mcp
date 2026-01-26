---
type: method
interface: ILocalCircularPatternFeatureData
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
  - ilocalcircularpatternfeaturedata
  - local
  - circular
  - pattern
  - feature
  - data
  - release
  - selection
  - access
  - void
---

# ILocalCircularPatternFeatureData.ReleaseSelectionAccess

Releases access to the selections for this circular component pattern feature.

## Signature

```csharp
void ReleaseSelectionAccess()
```
## Parameters

None.

## Return Value

Unknown.

## Remarks

ILocalCircularPatternFeatureData::AccessSelections
puts the model into a rollback state to allow access to the selections that define this feature.
Use this method to restore the rollback state if you did not modify the feature or use
IFeature::ModifyDefinition
if you did.