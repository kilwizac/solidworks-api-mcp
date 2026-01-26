---
type: method
interface: ISMGussetFeatureData
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
  - ismgussetfeaturedata
  - ism
  - gusset
  - feature
  - data
  - release
  - selection
  - access
  - void
---

# ISMGussetFeatureData.ReleaseSelectionAccess

Releases access to the selections that define this sheet metal gusset feature.

## Signature

```csharp
void ReleaseSelectionAccess()
```
## Parameters

None.

## Return Value

Unknown.

## Remarks

ISMGussetFeatureData::AccessSelections
puts the model in a rollback state to allow access to the selections that define the feature.
Use this method to restore the rollback state if you did not modify the feature, or use
IFeature::ModifyDefinition
if you did modify the feature.

## Examples

- ISMGussetFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ISMGussetFeatureData)