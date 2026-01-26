---
type: method
interface: ISimpleHoleFeatureData2
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
  - isimpleholefeaturedata2
  - simple
  - hole
  - feature
  - data2
  - release
  - selection
  - access
  - void
---

# ISimpleHoleFeatureData2.ReleaseSelectionAccess

Releases access to the selections that define the simple hole feature.

## Signature

```csharp
void ReleaseSelectionAccess()
```
## Parameters

None.

## Return Value

Unknown.

## Remarks

ISimpleHoleFeatureData2::AccessSelections
and
ISimpleHoleFeatureData2::IAccessSelections
put the model in a rollback state to allow access to the selections that define the feature.
Use this method to restore the rollback state if you did not modify the feature, or use
IFeature::ModifyDefinition
or
IFeature::IModifyDefinition2
if you did modify the feature.

## Examples

- ISimpleHoleFeatureData2 (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ISimpleHoleFeatureData2)