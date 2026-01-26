---
type: method
interface: IMoveFaceFeatureData
member: ReleaseSelectionAccess
returns: void
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - geometry
  - selections
related: []
keywords:
  - releaseselectionaccess
  - imovefacefeaturedata
  - move
  - face
  - feature
  - data
  - release
  - selection
  - access
  - void
---

# IMoveFaceFeatureData.ReleaseSelectionAccess

Releases access to the selections that define this Move Face feature.

## Signature

```csharp
void ReleaseSelectionAccess()
```
## Parameters

None.

## Return Value

Unknown.

## Remarks

IMoveFaceFeatureData::AccessSelections
puts the model in a rollback state to allow access to the selections that define the Move Face feature.
Use this method to restore the rollback state if you did not modify the feature, or use
IFeature::ModifyDefinition
or
IFeature::IModifyDefinition2
if you did modify the feature.