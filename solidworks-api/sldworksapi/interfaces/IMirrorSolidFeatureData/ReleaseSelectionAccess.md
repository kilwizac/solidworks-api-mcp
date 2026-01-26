---
type: method
interface: IMirrorSolidFeatureData
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
  - imirrorsolidfeaturedata
  - mirror
  - solid
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

# IMirrorSolidFeatureData.ReleaseSelectionAccess

Releases access to the selections used to define the mirror solid feature.

## Signature

```csharp
void ReleaseSelectionAccess()
```
## Parameters

None.

## Return Value

Unknown.

## Remarks

IMirrorSolidFeatureData::AccessSelections
and
IMirrorSolidFeatureData::IAccessSelections2
put the model into a rollback state to allow access to the selections that define this feature.
Use this method to restore the rollback state if you did not modify the feature or use
IFeature::ModifyDefinition
or
IFeature::IModifyDefintion2
if you did.

## Examples

- Get Mirror Solid Feature Data (C#) (Get_Mirror_Solid_Feature_Data_Example_CSharp.htm)
- Get Mirror Solid Feature Data (VB.NET) (Get_Mirror_Solid_Feature_Data_Example_VBNET.htm)
- Get Mirror Solid Feature Data (VBA) (Get_Mirror_Solid_Data_Example_VB.htm)