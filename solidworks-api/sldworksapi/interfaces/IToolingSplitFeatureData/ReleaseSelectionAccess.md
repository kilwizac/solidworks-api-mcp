---
type: method
interface: IToolingSplitFeatureData
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
  - itoolingsplitfeaturedata
  - tooling
  - split
  - feature
  - data
  - release
  - selection
  - access
  - void
---

# IToolingSplitFeatureData.ReleaseSelectionAccess

Releases access to the selections that define this tooling split feature.

## Signature

```csharp
void ReleaseSelectionAccess()
```
## Parameters

None.

## Return Value

Unknown.

## Remarks

IToolingSplitFeatureData::AccessSelections
puts the model in a rollback state to allow access to the selections that define the feature.
Use this method to restore the rollback state if you did not modify the feature, or use
IFeature::ModifyDefinition
or
IFeature::IModifyDefinition2
if you did modify the feature.

## Examples

- IToolingSplitFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IToolingSplitFeatureData)