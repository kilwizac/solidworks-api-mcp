---
type: method
interface: IEdgeFlangeFeatureData
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
  - iedgeflangefeaturedata
  - edge
  - flange
  - feature
  - data
  - release
  - selection
  - access
  - void
---

# IEdgeFlangeFeatureData.ReleaseSelectionAccess

Releases access to selections that describe this edge flange feature.

## Signature

```csharp
void ReleaseSelectionAccess()
```
## Parameters

None.

## Return Value

Unknown.

## Remarks

IEdgeFlangeFeatureData::AccessSelections
and
IEdgeFlangeFeatureData::IAccessSelections2
put the model into a rollback state to allow access to the selections that define this feature.
Use this method to restore the rollback state if you did not modify the feature or use
IFeature::ModifyDefinition
or
IFeature::IModifyDefinition2
if you did.