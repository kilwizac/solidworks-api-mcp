---
type: method
interface: IFoldsFeatureData
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
  - ifoldsfeaturedata
  - folds
  - feature
  - data
  - release
  - selection
  - access
  - void
  - insert
  - fold
  - vb
  - net
  - vba
---

# IFoldsFeatureData.ReleaseSelectionAccess

Releases access to selections that describe this fold feature.

## Signature

```csharp
void ReleaseSelectionAccess()
```
## Parameters

None.

## Return Value

Unknown.

## Remarks

IFoldsFeatureData::AccessSelections
and
IFoldsFeatureData::IAccessSelections2
put the model into a rollback state to allow access to the selections that define the fold feature.
Use this method to restore the rollback state if you did not modify the fold feature, or use
IFeature::ModifyDefinition
or
IFeature::IModifyDefinition2
if you did modify the fold feature.

## Examples

- Insert and Access Fold Feature (C#) (Insert_and_Access_Fold_Feature_Example_CSharp.htm)
- Insert and Access Fold Feature (VB.NET) (Insert_and_Access_Fold_Feature_Example_VBNET.htm)
- Insert and Access Fold Feature (VBA) (Insert_and_Access_Fold_Feature_Example_VB.htm)