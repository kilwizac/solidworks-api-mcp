---
type: method
interface: IMirrorPatternFeatureData
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
  - imirrorpatternfeaturedata
  - mirror
  - pattern
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

# IMirrorPatternFeatureData.ReleaseSelectionAccess

Releases access to the selections used to define the mirror pattern feature.

## Signature

```csharp
void ReleaseSelectionAccess()
```
## Parameters

None.

## Return Value

Unknown.

## Remarks

IMirrorPatternFeatureData::AccessSelections
and
IMirrorPatternFeatureData::IAccessSelections2
put the model into a rollback state to allow access to the selections that define this feature.
Use this method to restore the rollback state if you did not modify the feature or use
IFeature::ModifyDefinition
or
IFeature::IModifyDefinition2
if you did.

## Examples

- Get Mirror Pattern Feature Data (C#) (Get_Mirror_Pattern_Feature_Data_Example_CSharp.htm)
- Get Mirror Pattern Feature Data (VB.NET) (Get_Mirror_Pattern_Feature_Data_Example_VBNET.htm)
- Get Mirror Pattern Feature Data (VBA) (Get_Mirror_Feature_Data_Example_VB.htm)