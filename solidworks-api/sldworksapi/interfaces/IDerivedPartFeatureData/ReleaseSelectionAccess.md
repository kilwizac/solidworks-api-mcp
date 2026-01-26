---
type: method
interface: IDerivedPartFeatureData
member: ReleaseSelectionAccess
returns: void
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - parts
  - selections
related: []
keywords:
  - releaseselectionaccess
  - iderivedpartfeaturedata
  - derived
  - part
  - feature
  - data
  - release
  - selection
  - access
  - void
---

# IDerivedPartFeatureData.ReleaseSelectionAccess

Releases access to selections that describe this derived part feature.

## Signature

```csharp
void ReleaseSelectionAccess()
```
## Parameters

None.

## Return Value

Unknown.

## Remarks

IDerivedPartFeatureData::AccessSelections
or
IDerivedPartFeatureData::IAccessSelections
puts the model into a rollback state to allow access to the selections that define the feature.
Use this method to restore the rollback state if you did not modify the feature or use
IFeature::ModifyDefinition
or
IFeature::IModifyDefinition2
if you did.