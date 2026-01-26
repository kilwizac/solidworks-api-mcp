---
type: method
interface: IBrokenOutSectionFeatureData
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
  - ibrokenoutsectionfeaturedata
  - broken
  - out
  - section
  - feature
  - data
  - release
  - selection
  - access
  - void
  - vba
  - vb
  - net
---

# IBrokenOutSectionFeatureData.ReleaseSelectionAccess

Releases access to the selections in this broken-out section feature.

## Signature

```csharp
void ReleaseSelectionAccess()
```
## Parameters

None.

## Return Value

Unknown.

## Remarks

IBrokenOutSectionFeatureData::AccessSelections
or
IBrokenOutSectionFeatureData::IAccessSelections
puts the model into a rollback state to allow access to the selections that define this feature.
Use this method to restore the rollback state if you did not modify the feature or use
IFeature::ModifyDefinition
or
IFeature::IModifyDefinition2
if you did.

## Examples

- Get Broken-Out Section Feature Data (VBA) (Get_Broken_Out_Section_Feature_Data_Example_VB.htm)
- Get Broken-Out Section Feature Data (VB.NET) (Get_Broken_Out_Section_Feature_Data_Example_VBNET.htm)
- Get Broken-Out Section Feature Data (C#) (Get_Broken_Out_Section_Feature_Data_Example_CSharp.htm)