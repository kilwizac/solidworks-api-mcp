---
type: method
interface: IConvertSolidFeatureData
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
  - iconvertsolidfeaturedata
  - convert
  - solid
  - feature
  - data
  - release
  - selection
  - access
  - void
---

# IConvertSolidFeatureData.ReleaseSelectionAccess

Releases access to selections that describe this convert solid feature.

## Signature

```csharp
void ReleaseSelectionAccess()
```
## Parameters

None.

## Return Value

Unknown.

## Remarks

IConvertSolidFeatureData::AccessSelections
puts the model into a rollback state to allow access to the selections that define the convert solid feature.
Use this method to restore the rollback state if you did not modify the feature or use
IFeature::ModifyDefinition
if you did.