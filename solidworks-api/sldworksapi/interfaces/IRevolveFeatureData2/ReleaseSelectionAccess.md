---
type: method
interface: IRevolveFeatureData2
member: ReleaseSelectionAccess
returns: void
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - selections
related:
  - IRevolveFeatureData2.AccessSelections
keywords:
  - releaseselectionaccess
  - irevolvefeaturedata2
  - revolve
  - feature
  - data2
  - release
  - selection
  - access
  - void
---

# IRevolveFeatureData2.ReleaseSelectionAccess

Releases access to the selections that define this revolve feature.

## Signature

```csharp
void ReleaseSelectionAccess()
```
## Parameters

None.

## Return Value

Unknown.

## Remarks

IRevolveFeatureData2::AccessSelections
and
IRevolveFeatureData2::IAccessSelections
put the model in a rollback state to allow access to the selections that define the feature.
Use this method to restore the rollback state if you did not modify the feature, or use
IFeature::ModifyDefinition
or
IFeature::IModifyDefinition2
if you did modify the feature.

## See Also

- `IRevolveFeatureData2.AccessSelections`