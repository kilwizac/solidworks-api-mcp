---
type: method
interface: ICrossBreakFeatureData
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
  - icrossbreakfeaturedata
  - cross
  - break
  - feature
  - data
  - release
  - selection
  - access
  - void
  - sheet
  - metal
  - part
  - vb
  - net
  - vba
---

# ICrossBreakFeatureData.ReleaseSelectionAccess

Releases access to the selections that define this cross break feature.

## Signature

```csharp
void ReleaseSelectionAccess()
```
## Parameters

None.

## Return Value

Unknown.

## Remarks

ICrossBreakFeatureData::AccessSelections
puts the model into a rollback state to allow access to the selections that define this feature.
Use this method to restore the rollback state if you did not modify the feature. Use
IFeature::ModifyDefinition
or
IFeature::IModifyDefinition2
if you did.

## Examples

- Get Cross Break Feature Data in Sheet Metal Part (C#) (Get_Cross_Break_Feature_Data_in_Sheet_Metal_Part_Example_CSharp.htm)
- Get Cross Break Feature Data in Sheet Metal Part (VB.NET) (Get_Cross_Break_Feature_Data_in_Sheet_Metal_Part_Example_VBNET.htm)
- Get Cross Break Feature Data in Sheet Metal Part (VBA) (Get_Cross_Break_Feature_Data_in_Sheet_Metal_Part_Example_VB.htm)