---
type: method
interface: IWrapSketchFeatureData
member: ReleaseSelectionAccess
returns: void
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - selections
  - sketches
related: []
keywords:
  - releaseselectionaccess
  - iwrapsketchfeaturedata
  - wrap
  - sketch
  - feature
  - data
  - release
  - selection
  - access
  - void
---

# IWrapSketchFeatureData.ReleaseSelectionAccess

Releases access to the selections that define this wrap feature.

## Signature

```csharp
void ReleaseSelectionAccess()
```
## Parameters

None.

## Return Value

Unknown.

## Remarks

IWrapeatureData::AccessSelections
puts the model in a rollback state to allow access to the selections that define the feature.
Use this method to restore the rollback state if you did not modify the feature, or use
IFeature::ModifyDefinition
or
IFeature::IModifyDefinition2
if you did modify the feature.