---
type: method
interface: ICosmeticThreadFeatureData
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
  - icosmeticthreadfeaturedata
  - cosmetic
  - thread
  - feature
  - data
  - release
  - selection
  - access
  - void
  - threads
  - features
  - part
  - vba
---

# ICosmeticThreadFeatureData.ReleaseSelectionAccess

Releases access to the selections that define this cosmetic thread feature.

## Signature

```csharp
void ReleaseSelectionAccess()
```
## Parameters

None.

## Return Value

Unknown.

## Remarks

ICosmeticThreadFeatureData::AccessSelections
and
ICosmeticThreadFeatureData::IAccessSelections
put the model into a rollback state to allow access to the selections that define this feature.
Use this method to restore the rollback state if you did not modify the feature or use
IFeature::ModifyDefinition
or
IFeature::IModifyDefinition2
if you did.

## Examples

- Get Cosmetic Threads Features in a Part (VBA) (Get_Cosmetic_Threads_in_a_Part_Document_Example_VB.htm)