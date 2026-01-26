---
type: method
interface: IEndCapFeatureData
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
  - iendcapfeaturedata
  - end
  - cap
  - feature
  - data
  - release
  - selection
  - access
  - void
  - list
  - properties
  - vba
---

# IEndCapFeatureData.ReleaseSelectionAccess

Releases access to the selections that define this end-cap feature.

## Signature

```csharp
void ReleaseSelectionAccess()
```
## Parameters

None.

## Return Value

Unknown.

## Remarks

IEndCapFeatureData::AccessSelections
puts the model into a rollback state to allow access to the selections that define this feature.
Use this method to restore the rollback state if you did not modify the feature or use
IFeature::ModifyDefinition
if you did.

## Examples

- List End-cap Feature Properties (VBA) (List_End-Cap_Feature_Properties_Example_VB.htm)