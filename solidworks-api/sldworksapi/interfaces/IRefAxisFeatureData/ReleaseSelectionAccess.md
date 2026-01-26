---
type: method
interface: IRefAxisFeatureData
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
  - irefaxisfeaturedata
  - ref
  - axis
  - feature
  - data
  - release
  - selection
  - access
  - void
  - selections
  - reference
  - vb
  - net
  - vba
---

# IRefAxisFeatureData.ReleaseSelectionAccess

Releases access to the selections that define this reference axis feature.

## Signature

```csharp
void ReleaseSelectionAccess()
```
## Parameters

None.

## Return Value

Unknown.

## Remarks

IRefAxisFeatureData::AccessSelections
and
IRefAxisFeatureData::IAccessSelections
put the model in a rollback state to allow access to the selections that define the feature.
Use this method to restore the rollback state if you did not modify the feature, or use
IFeature::ModifyDefinition
or
IFeature::IModifyDefinition2
if you did modify the feature.

## Examples

- Get Selections for Reference Axis Feature (C#) (Get_Selections_for_Reference_Axis_Feature_Example_CSharp.htm)
- Get Selections for Reference Axis Feature (VB.NET) (Get_Selections_for_Reference_Axis_Feature_Example_VBNET.htm)
- Get Selections for Reference Axis Feature (VBA) (Get_Selections_for_Reference_Axis_Feature_Example_VB.htm)