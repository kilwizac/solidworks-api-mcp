---
type: method
interface: IBeltChainFeatureData
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
  - ibeltchainfeaturedata
  - belt
  - chain
  - feature
  - data
  - release
  - selection
  - access
  - void
---

# IBeltChainFeatureData.ReleaseSelectionAccess

Releases access to the selections used to define this belt/chain assembly feature.

## Signature

```csharp
void ReleaseSelectionAccess()
```
## Parameters

None.

## Return Value

Unknown.

## Remarks

IBeltChainFeatureData::AccessSelections
puts the model into a rollback state to allow access to the selections that define this feature.
Use this method to restore the rollback state if you did not modify the feature or use
IFeature::ModifyDefinition
or
IFeature::IModifyDefinition2
if you did.

## Examples

- IBeltChainFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IBeltChainFeatureData)