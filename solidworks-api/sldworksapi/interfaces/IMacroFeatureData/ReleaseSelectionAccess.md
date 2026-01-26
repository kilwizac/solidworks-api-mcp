---
type: method
interface: IMacroFeatureData
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
  - imacrofeaturedata
  - macro
  - feature
  - data
  - release
  - selection
  - access
  - void
  - cut
  - body
  - half
  - using
  - vba
---

# IMacroFeatureData.ReleaseSelectionAccess

Releases access to the selections associated with this macro feature.

## Signature

```csharp
void ReleaseSelectionAccess()
```
## Parameters

None.

## Return Value

Unknown.

## Remarks

IMacroFeatureData::AccessSelections
and
IMacroFeatureData::IAccessSelections
put the model into a rollback state to allow access to the selections that define this feature.
Use this method to restore the rollback state if you did not modify the feature or use
IFeature::ModifyDefinition
or
IFeature::IModifyDefintion2
if you did.

## Examples

- Cut Body in Half Using Macro Feature (VBA) (Cut_Body_in_Half_using_Macro_Feature_Example_VB.htm)