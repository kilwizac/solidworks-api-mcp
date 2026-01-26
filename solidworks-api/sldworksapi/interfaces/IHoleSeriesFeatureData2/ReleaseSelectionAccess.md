---
type: method
interface: IHoleSeriesFeatureData2
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
  - iholeseriesfeaturedata2
  - hole
  - series
  - feature
  - data2
  - release
  - selection
  - access
  - void
---

# IHoleSeriesFeatureData2.ReleaseSelectionAccess

Releases access to the selections that define this hole series feature.

## Signature

```csharp
void ReleaseSelectionAccess()
```
## Parameters

None.

## Return Value

Unknown.

## Remarks

IHoleSeriesFeatureData2::AccessSelections
and
IHoleSeriesFeatureData2::IAccessSelections
put the model into a rollback state to allow access to the selections that define this feature.
Use this method to restore the rollback state if you did not modify the feature. Use
IFeature::ModifyDefinition
or
IFeature::IModifyDefinition2
if you did.

## Examples

- IHoleSeriesFeatureData2 (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IHoleSeriesFeatureData2)