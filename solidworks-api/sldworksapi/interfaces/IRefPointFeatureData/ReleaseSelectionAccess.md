---
type: method
interface: IRefPointFeatureData
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
  - irefpointfeaturedata
  - ref
  - point
  - feature
  - data
  - release
  - selection
  - access
  - void
---

# IRefPointFeatureData.ReleaseSelectionAccess

Releases access to the selections that created this reference point feature.

## Signature

```csharp
void ReleaseSelectionAccess()
```
## Parameters

None.

## Return Value

Unknown.

## Remarks

IRefPointFeatureData::AccessSelections
and
IRefPointFeatureData::IAccessSelections
put the model in a rollback state to allow access to the selections that define the feature.
Use this method to restore the rollback state if you did not modify the feature, or use
IFeature::ModifyDefinition
or
IFeature::IModifyDefinition2
if you did modify the feature.

## Examples

- IRefPointFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IRefPointFeatureData)