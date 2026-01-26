---
type: method
interface: ILocalSketchPatternFeatureData
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
  - ilocalsketchpatternfeaturedata
  - local
  - sketch
  - pattern
  - feature
  - data
  - release
  - selection
  - access
  - void
---

# ILocalSketchPatternFeatureData.ReleaseSelectionAccess

Releases access to the selections for this sketch-driven component pattern feature.

## Signature

```csharp
void ReleaseSelectionAccess()
```
## Parameters

None.

## Return Value

Unknown.

## Remarks

ILocalSketchPatternFeatureData::AccessSelections
puts the model into a rollback state to allow access to the selections that define this feature.
Use this method to restore the rollback state if you did not modify the feature, or use
IFeature::ModifyDefinition
if you did.