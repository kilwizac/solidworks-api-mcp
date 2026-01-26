---
type: method
interface: IMoveCopyBodyFeatureData
member: ReleaseSelectionAccess
returns: void
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - geometry
  - selections
related: []
keywords:
  - releaseselectionaccess
  - imovecopybodyfeaturedata
  - move
  - copy
  - body
  - feature
  - data
  - release
  - selection
  - access
  - void
  - rotate
  - using
  - edge
  - vba
  - setting
  - transforms
  - bodies
---

# IMoveCopyBodyFeatureData.ReleaseSelectionAccess

Releases access to the selections that define this move/copy body feature.

## Signature

```csharp
void ReleaseSelectionAccess()
```
## Parameters

None.

## Return Value

Unknown.

## Remarks

IMoveCopyBodyFeatureData::AccessSelections
puts the model into a rollback state to allow access to the selections that define this feature.
Use this method to restore the rollback state if you did not modify the feature or use
IFeature::ModifyDefinition
or
IFeature::IModifyDefintion2
if you did.

## Examples

- Copy and Rotate Body Using Edge (VBA) (Copy_and_Rotate_Body_using_Edge_Example_VB.htm)
- Move and Copy Body By Setting Transforms (VBA) (Move_and_Copy_Body_by_Setting_Transforms_Example_VB.htm)
- Set Bodies for Move/Copy (VBA) (Set_Bodies_for_Move_Copy_Example_VB.htm)
- Set Bodies for Move/Copy (C#) (Set_Bodies_for_Move_Copy_Example_VBNET.htm)
- Set Bodies for Move/Copy (VBA) (Set_Bodies_for_Move_Copy_Example_VB.htm)