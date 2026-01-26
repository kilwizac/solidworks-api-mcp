---
type: method
interface: ICircularPatternFeatureData
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
  - icircularpatternfeaturedata
  - circular
  - pattern
  - feature
  - data
  - release
  - selection
  - access
  - void
---

# ICircularPatternFeatureData.ReleaseSelectionAccess

Releases access to the selections that define this circular pattern.

## Signature

```csharp
void ReleaseSelectionAccess()
```
## Parameters

None.

## Return Value

Unknown.

## Remarks

ICircularPatternFeatureData::AccessSelections
or
ICircularPatternFeatureData::IAccessSelections2
puts the model into a rollback state to allow access to the selections that define this feature.
Use this method to restore the rollback state if you did not modify the feature or use
IFeature::ModifyDefinition
or
IFeature::IModifyDefinition2
if you did.