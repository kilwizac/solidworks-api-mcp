---
type: method
interface: ILibraryFormToolFeatureData
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
  - ilibraryformtoolfeaturedata
  - library
  - form
  - tool
  - feature
  - data
  - release
  - selection
  - access
  - void
---

# ILibraryFormToolFeatureData.ReleaseSelectionAccess

Releases access to the selections that created this library forming tool feature.

## Signature

```csharp
void ReleaseSelectionAccess()
```
## Parameters

None.

## Return Value

Unknown.

## Remarks

ILibraryFormToolFeatureData::AccessSelections
puts the model into a rollback state to allow access to the selections that define this feature.
Use this method to restore the rollback state if you did not modify the feature or use
IFeature::ModifyDefinition
if you did.