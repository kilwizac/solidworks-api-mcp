---
type: method
interface: IConnectionPointFeatureData
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
  - iconnectionpointfeaturedata
  - connection
  - point
  - feature
  - data
  - release
  - selection
  - access
  - void
---

# IConnectionPointFeatureData.ReleaseSelectionAccess

Releases access to selections that describe this connection point feature.

## Signature

```csharp
void ReleaseSelectionAccess()
```
## Parameters

None.

## Return Value

Unknown.

## Remarks

IConnectionPointFeatureData::AccessSelections
and
IConnectionPointFeatureData::IAccessSelections
put the model into a rollback state to allow access to the selections that define the connection point feature.
Use this method to restore the rollback state if you did not modify the feature or use
IFeature::ModifyDefinition
or
IFeature::IModifyDefinition2
if you did.