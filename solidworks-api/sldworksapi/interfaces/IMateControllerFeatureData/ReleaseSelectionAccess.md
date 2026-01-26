---
type: method
interface: IMateControllerFeatureData
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
  - imatecontrollerfeaturedata
  - mate
  - controller
  - feature
  - data
  - release
  - selection
  - access
  - void
---

# IMateControllerFeatureData.ReleaseSelectionAccess

Releases access to the selections for this loft feature.

## Signature

```csharp
void ReleaseSelectionAccess()
```
## Parameters

None.

## Return Value

Unknown.

## Remarks

IMateControllerFeatureData::AccessSelections
puts the model into a rollback state to allow access to the selections that define this feature.
Use this method to restore the rollback state if you did not modify the feature or use
IFeature::ModifyDefinition
if you did.