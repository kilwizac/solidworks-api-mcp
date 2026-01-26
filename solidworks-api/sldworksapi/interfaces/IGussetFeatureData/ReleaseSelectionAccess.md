---
type: method
interface: IGussetFeatureData
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
  - igussetfeaturedata
  - gusset
  - feature
  - data
  - release
  - selection
  - access
  - void
  - vb
  - net
  - vba
---

# IGussetFeatureData.ReleaseSelectionAccess

Releases access to the selections that define this gusset feature.

## Signature

```csharp
void ReleaseSelectionAccess()
```
## Parameters

None.

## Return Value

Unknown.

## Remarks

IGussetFeatureData::AccessSelections
puts the model into a rollback state to allow access to the selections that define this gusset feature.
Use this method to restore the rollback state if you did not modify the gusset feature, or use
IFeature::ModifyDefinition
if you did modify the gusset feature.

## Examples

- Get Gusset Feature Data (C#) (Get_Gusset_Feature_Data_Example_CSharp.htm)
- Get Gusset Feature Data (VB.NET) (Get_Gusset_Feature_Data_Example_VBNET.htm)
- Get Gusset Feature Data (VBA) (Get_Gusset_Feature_Data_Example_VB.htm)