---
type: method
interface: ISurfExtrudeFeatureData
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
  - isurfextrudefeaturedata
  - surf
  - extrude
  - feature
  - data
  - release
  - selection
  - access
  - void
---

# ISurfExtrudeFeatureData.ReleaseSelectionAccess

Releases access to the selections for this extruded surface.

## Signature

```csharp
void ReleaseSelectionAccess()
```
## Parameters

None.

## Return Value

Unknown.

## Remarks

ISurfExtrudeFeatureData::AccessSelections
and
ISurfExtrudeFeatureData::IAccessSelections
put the model in a rollback state to allow access to the selections that define the feature.
Use this method to restore the rollback state if you did not modify the feature, or use
IFeature::ModifyDefinition
or
IFeature::IModifyDefinition2
if you did modify the feature.

## Examples

- ISurfExtrudeFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ISurfExtrudeFeatureData)