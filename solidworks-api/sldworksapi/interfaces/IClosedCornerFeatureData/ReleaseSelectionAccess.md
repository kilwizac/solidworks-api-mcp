---
type: method
interface: IClosedCornerFeatureData
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
  - iclosedcornerfeaturedata
  - closed
  - corner
  - feature
  - data
  - release
  - selection
  - access
  - void
---

# IClosedCornerFeatureData.ReleaseSelectionAccess

Releases access to selections that describe this closed corner feature.

## Signature

```csharp
void ReleaseSelectionAccess()
```
## Parameters

None.

## Return Value

Unknown.

## Remarks

IClosedCornerFeatureData::AccessSelections
and
IClosedCornerFeatureData::IAccessSelections2
puts the model into a rollback state to allow access to the selections that define this feature.
Use this method to restore the rollback state if you did not modify the feature or use
IFeature::ModifyDefinition
or
IFeature::IModifyDefinition2
if you did.