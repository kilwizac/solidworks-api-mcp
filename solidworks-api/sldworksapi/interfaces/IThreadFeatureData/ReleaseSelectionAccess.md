---
type: method
interface: IThreadFeatureData
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
  - ithreadfeaturedata
  - thread
  - feature
  - data
  - release
  - selection
  - access
  - void
---

# IThreadFeatureData.ReleaseSelectionAccess

Releases the selections that created this thread feature.

## Signature

```csharp
void ReleaseSelectionAccess()
```
## Parameters

None.

## Return Value

Unknown.

## Remarks

IThreadFeatureData::AccessSelections
puts the model in a rollback state to allow access to the selections that define the feature.
Use this method to restore the rollback state if you did not modify the feature, or use
IFeature::ModifyDefinition
if you did modify the feature.