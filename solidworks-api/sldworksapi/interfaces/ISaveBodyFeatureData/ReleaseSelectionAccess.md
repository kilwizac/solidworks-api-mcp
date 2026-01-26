---
type: method
interface: ISaveBodyFeatureData
member: ReleaseSelectionAccess
returns: void
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - file-io
  - geometry
  - selections
related: []
keywords:
  - releaseselectionaccess
  - isavebodyfeaturedata
  - save
  - body
  - feature
  - data
  - release
  - selection
  - access
  - void
  - number
  - bodies
  - vba
---

# ISaveBodyFeatureData.ReleaseSelectionAccess

Releases access to the selections that define this Save Bodies feature.

## Signature

```csharp
void ReleaseSelectionAccess()
```
## Parameters

None.

## Return Value

Unknown.

## Remarks

ISaveBodiesFeatureData::AccessSelections
puts the model in a rollback state to allow access to the selections that define the feature.
Use this method to restore the rollback state if you did not modify the feature, or use
IFeature::ModifyDefinition
or
IFeature::IModifyDefinition2
if you did modify the feature.

## Examples

- Get Number of Bodies in Save Bodies Feature (VBA) (Get_Number_of_Bodies_in_Save_Bodies_Feature_Example_VB.htm)