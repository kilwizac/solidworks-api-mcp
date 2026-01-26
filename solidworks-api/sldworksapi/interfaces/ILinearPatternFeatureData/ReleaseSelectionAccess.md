---
type: method
interface: ILinearPatternFeatureData
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
  - ilinearpatternfeaturedata
  - linear
  - pattern
  - feature
  - data
  - release
  - selection
  - access
  - void
---

# ILinearPatternFeatureData.ReleaseSelectionAccess

Releases access to the selections that created this linear pattern.

## Signature

```csharp
void ReleaseSelectionAccess()
```
## Parameters

None.

## Return Value

Unknown.

## Remarks

ILinearPatternFeatureData::AccessSelections
and
ILinearPatternFeatureData::IAccessSelections2
put the model into a rollback state to allow access to the selections that define this feature.
Use this method to restore the rollback state if you did not modify the feature or use
IFeature::ModifyDefinition
or
IFeature::IModifyDefinition2
if you did.