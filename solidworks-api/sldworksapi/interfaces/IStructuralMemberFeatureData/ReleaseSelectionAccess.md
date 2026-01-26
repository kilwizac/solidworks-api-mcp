---
type: method
interface: IStructuralMemberFeatureData
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
  - istructuralmemberfeaturedata
  - structural
  - member
  - feature
  - data
  - release
  - selection
  - access
  - void
  - insert
  - weldment
  - vb
  - net
  - vba
---

# IStructuralMemberFeatureData.ReleaseSelectionAccess

Releases access to the selections that define this structural member.

## Signature

```csharp
void ReleaseSelectionAccess()
```
## Parameters

None.

## Return Value

Unknown.

## Remarks

IStructuralMemberFeatureData::AccessSelections
puts the model in a rollback state to allow access to the selections that define the feature.
Use this method to restore the rollback state if you did not modify the feature, or use
IFeature::ModifyDefinition
or
IFeature::IModifyDefinition2
if you did modify the feature.

## Examples

- Insert Structural Weldment (C#) (Insert_Structural_Weldment_Example_CSharp.htm)
- Insert Structural Weldment (VB.NET) (Insert_Structural_Weldment_Example_VBNET.htm)
- Insert Structural Weldment (VBA) (Insert_Structural_Weldment_Example_VB.htm)