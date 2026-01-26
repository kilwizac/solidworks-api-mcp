---
type: method
interface: ILoftFeatureData
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
  - iloftfeaturedata
  - loft
  - feature
  - data
  - release
  - selection
  - access
  - void
  - guide
  - curves
  - vb
  - net
  - vba
---

# ILoftFeatureData.ReleaseSelectionAccess

Releases access to the selections for this loft feature.

## Signature

```csharp
void ReleaseSelectionAccess()
```
## Parameters

None.

## Return Value

Unknown.

## Remarks

ILoftFeatureData::AccessSelections
and
ILoftFeatureData::IAccessSelections
put the model into a rollback state to allow access to the selections that define this feature.
Use this method to restore the rollback state if you did not modify the feature or use
IFeature::ModifyDefinition
or
IFeature::IModifyDefintion2
if you did.

## Examples

- Get Guide Curves in Loft Feature (C#) (Get_Guide_Curves_in_Loft_Feature_Example_CSharp.htm)
- Get Guide Curves in Loft Feature (VB.NET) (Get_Guide_Curves_in_Loft_Feature_Example_VBNET.htm)
- Get Guide Curves in Loft Feature (VBA) (Get_Guide_Curves_in_Loft_Feature_Example_VB.htm)